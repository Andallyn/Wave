const defaults = {
  tasks: [
    {id:1,title:'Review “Road to Mainnet” campaign brief',meta:'Content Strategist · Due today',type:'Review',icon:'✦',owner:'MC'},
    {id:2,title:'Approve response to sentiment shift',meta:'Community Guardian · Detected 8 min ago',type:'Urgent',icon:'◌',owner:'AM'},
    {id:3,title:'Confirm ETHGlobal side event partnership',meta:'Partnership Scout · Due in 2 hours',type:'Review',icon:'◇',owner:'AM'},
    {id:4,title:'Review July community rewards shortlist',meta:'Community Guardian · Due tomorrow',type:'Review',icon:'♙',owner:'JL'},
    {id:5,title:'Approve Q2 ecosystem recap thread',meta:'Content Strategist · Due tomorrow',type:'Standard',icon:'✦',owner:'MC'},
    {id:6,title:'Respond to new integration opportunity',meta:'Partnership Scout · Added 1 hour ago',type:'Urgent',icon:'◇',owner:'AM'}
  ],
  agents:[
    {name:'Content Strategist',status:'Drafting campaign',icon:'✦',color:'purple',active:true},
    {name:'Community Guardian',status:'Monitoring 3 channels',icon:'◌',color:'amber',active:true},
    {name:'Partnership Scout',status:'Scored 8 new leads',icon:'◇',color:'blue',active:true},
    {name:'Market Listener',status:'Watching 14 narratives',icon:'↗',color:'mint',active:true}
  ],
  activities:[
    {icon:'✦',text:'Content Strategist created 3 draft posts',time:'12m'},
    {icon:'◇',text:'Partnership Scout qualified LayerZero Labs',time:'38m'},
    {icon:'◌',text:'Community Guardian resolved 14 questions',time:'1h'}
  ], completed:18
};

let state = JSON.parse(localStorage.getItem('wave-state') || 'null') || structuredClone(defaults);
let currentFilter = 'All';
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const persist = () => localStorage.setItem('wave-state', JSON.stringify(state));

function renderTasks(){
  const tasks = currentFilter === 'All' ? state.tasks : state.tasks.filter(t=>t.type===currentFilter);
  $('#taskList').innerHTML = tasks.length ? tasks.map(t=>`<div class="task-item" data-id="${t.id}"><button class="task-check" aria-label="Complete ${t.title}">✓</button><span class="task-icon">${t.icon}</span><span class="task-copy"><b>${escapeHtml(t.title)}</b><small>${escapeHtml(t.meta)}</small></span><span class="task-tag ${t.type==='Urgent'?'urgent':''}">${t.type}</span><span class="task-avatar">${t.owner}</span></div>`).join('') : '<div class="task-item"><span class="task-copy"><b>You’re all clear</b><small>No items match this filter.</small></span></div>';
  $('#attentionCount').textContent = state.tasks.length;
  $('#taskBadge').textContent = state.tasks.length;
  $('#metricTasks').textContent = state.completed;
  $$('.task-check').forEach(btn=>btn.addEventListener('click',()=>completeTask(Number(btn.closest('.task-item').dataset.id))));
}
function renderAgents(){
  $('#agentList').innerHTML = state.agents.map((a,i)=>`<div class="agent-row"><span class="agent-orb ${a.color}">${a.icon}</span><span class="agent-copy"><b>${a.name}</b><small>${a.status}</small></span><button class="agent-state ${a.active?'':'paused'}" data-agent="${i}"><i></i>${a.active?'Active':'Paused'}</button></div>`).join('');
  $$('.agent-state').forEach(b=>b.addEventListener('click',()=>toggleAgent(Number(b.dataset.agent))));
}
function renderActivity(){
  $('#activityList').innerHTML = state.activities.slice(0,3).map(a=>`<div class="activity"><span>${a.icon}</span><p>${escapeHtml(a.text)}<small>Automated workflow</small></p><time>${a.time}</time></div>`).join('');
}
function completeTask(id){const task=state.tasks.find(t=>t.id===id);state.tasks=state.tasks.filter(t=>t.id!==id);state.completed++;state.activities.unshift({icon:'✓',text:`Completed: ${task.title}`,time:'now'});persist();renderTasks();renderActivity();toast('Task completed and added to the activity log.');}
function toggleAgent(index){state.agents[index].active=!state.agents[index].active;state.agents[index].status=state.agents[index].active?'Monitoring resumed':'Waiting for your signal';persist();renderAgents();toast(`${state.agents[index].name} ${state.agents[index].active?'resumed':'paused'}.`);}
function escapeHtml(value){const div=document.createElement('div');div.textContent=value;return div.innerHTML;}
function toast(message){$('#toast p').textContent=message;$('#toast').classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}

$('#taskFilters').addEventListener('click',e=>{if(!e.target.dataset.filter)return;currentFilter=e.target.dataset.filter;$$('#taskFilters button').forEach(b=>b.classList.toggle('active',b===e.target));renderTasks();});
$$('[data-open-task]').forEach(b=>b.addEventListener('click',()=>{const tomorrow=new Date(Date.now()+86400000).toISOString().slice(0,10);$('#taskDate').value=tomorrow;$('#taskDialog').showModal();setTimeout(()=>$('#taskTitle').focus(),50);}));
$('#createTaskButton').addEventListener('click',e=>{if(!$('#taskForm').reportValidity()){e.preventDefault();return;}const owner=$('#taskOwner').value;state.tasks.unshift({id:Date.now(),title:$('#taskTitle').value.trim(),meta:`${owner} · Due ${$('#taskDate').value}`,type:$('#taskPriority').value,icon:'✓',owner:owner.split(' ').map(x=>x[0]).join('').slice(0,2)});state.activities.unshift({icon:'＋',text:`Created: ${$('#taskTitle').value.trim()}`,time:'now'});persist();renderTasks();renderActivity();$('#taskForm').reset();toast('Task created and routed successfully.');});

const pages=['Command Center','Tasks','Content Studio','Community','Partnerships','Events','Customers','Finance','Analytics','Settings'];
$$('.nav-item[data-page]').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.page)));
$$('[data-page-link]').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.pageLink)));
function navigate(page){
  if(page==='Command Center'){location.reload();return;}
  $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));$('#pageTitle').textContent=page;$('#breadcrumb').textContent=`WORKSPACE / ${page.toUpperCase()}`;
  const descriptions={Tasks:'Plan, assign, and approve work across people and agents.', 'Content Studio':'Turn strategy into on-brand content with human approval.',Community:'Monitor conversations, questions, sentiment, and emerging risk.',Partnerships:'Discover, qualify, and nurture high-fit ecosystem relationships.',Events:'Match the team with events, deadlines, and speaking opportunities.',Customers:'Understand product satisfaction and act on account health signals.',Finance:'Track partner deliverables, invoices, approvals, and payment status.',Analytics:'Connect activity to reach, relationships, and business outcomes.',Settings:'Manage your workspace, agent boundaries, integrations, and data.'};
  const icons={Tasks:'✓','Content Studio':'✦',Community:'◌',Partnerships:'◇',Events:'□',Customers:'♙',Finance:'◎',Analytics:'↗',Settings:'⚙'};
  $('#pageContent').innerHTML=`<section class="placeholder-page"><div><span>${icons[page]}</span><h2>${page}</h2><p>${descriptions[page]} This module is represented in the product roadmap and ready for the next implementation sprint.</p>${page==='Tasks'?'<button class="primary-btn" id="pageNewTask">＋ Create a task</button>':''}${page==='Settings'?'<button class="reset-btn" id="resetDemo">Reset demo data</button>':''}</div></section>`;
  $('#sidebar').classList.remove('open');
  $('#pageNewTask')?.addEventListener('click',()=>$('#taskDialog').showModal());$('#resetDemo')?.addEventListener('click',()=>{localStorage.removeItem('wave-state');toast('Demo data reset. Reloading…');setTimeout(()=>location.reload(),700);});
}

const commandDialog=$('#commandDialog');
function openCommands(){commandDialog.showModal();$('#commandInput').value='';renderCommands('');setTimeout(()=>$('#commandInput').focus(),20);}
function renderCommands(query){const matches=pages.filter(p=>p.toLowerCase().includes(query.toLowerCase()));$('#commandResults').innerHTML=`<div class="command-group"><div class="command-label">Navigate</div>${matches.map(p=>`<button class="command-item" data-command="${p}"><span>→</span><div><b>${p}</b><small>Open workspace module</small></div></button>`).join('')||'<div class="command-label">No matching commands</div>'}</div>`;$$('[data-command]').forEach(b=>b.addEventListener('click',()=>{commandDialog.close();navigate(b.dataset.command);}));}
$('#searchTrigger').addEventListener('click',openCommands);$('#commandInput').addEventListener('input',e=>renderCommands(e.target.value));document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommands();}});
$('#notificationButton').addEventListener('click',()=>$('#notificationPanel').classList.toggle('show'));$('#closeNotifications').addEventListener('click',()=>$('#notificationPanel').classList.remove('show'));$('#mobileMenu').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#draftPost').addEventListener('click',()=>{navigate('Content Studio');toast('Content Studio opened with your brand profile.');});$('#scanCommunity').addEventListener('click',()=>{toast('Community scan started across 3 connected channels.');setTimeout(()=>toast('Scan complete: 2 signals need review.'),1600);});$('#findLeads').addEventListener('click',()=>{navigate('Partnerships');toast('Partnership Scout is checking ecosystem fit.');});$('#manageAgents').addEventListener('click',()=>toast('Agent controls are available directly in the roster.'));

renderTasks();renderAgents();renderActivity();
