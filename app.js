const defaults = {
  tasks: [
codex/create-proposal-for-client-management-tools-9rnlng
codex/create-proposal-for-client-management-tools-vzdnel
codex/create-proposal-for-client-management-tools-rdmhq8
main
main
    { id: 1, title: 'Review “Road to Mainnet” campaign brief', meta: 'Content Strategist · Due today', type: 'Review', icon: '✦', owner: 'MC' },
    { id: 2, title: 'Approve response to sentiment shift', meta: 'Community Guardian · Detected 8 min ago', type: 'Urgent', icon: '◌', owner: 'AM' },
    { id: 3, title: 'Confirm ETHGlobal side event partnership', meta: 'Partnership Scout · Due in 2 hours', type: 'Review', icon: '◇', owner: 'AM' },
    { id: 4, title: 'Review July community rewards shortlist', meta: 'Community Guardian · Due tomorrow', type: 'Review', icon: '♙', owner: 'JL' },
    { id: 5, title: 'Approve Q2 ecosystem recap thread', meta: 'Content Strategist · Due tomorrow', type: 'Standard', icon: '✦', owner: 'MC' },
    { id: 6, title: 'Respond to new integration opportunity', meta: 'Partnership Scout · Added 1 hour ago', type: 'Urgent', icon: '◇', owner: 'AM' }
  ],
  agents: [
    { name: 'Content Strategist', status: 'Drafting campaign', icon: '✦', color: 'purple', active: true },
    { name: 'Community Guardian', status: 'Monitoring 3 channels', icon: '◌', color: 'amber', active: true },
    { name: 'Partnership Scout', status: 'Scored 8 new leads', icon: '◇', color: 'blue', active: true },
    { name: 'Market Listener', status: 'Watching 14 narratives', icon: '↗', color: 'mint', active: true }
  ],
  activities: [
    { icon: '✦', text: 'Content Strategist created 3 draft posts', time: '12m' },
    { icon: '◇', text: 'Partnership Scout qualified LayerZero Labs', time: '38m' },
    { icon: '◌', text: 'Community Guardian resolved 14 questions', time: '1h' }
  ],
  content: [
    { id: 101, title: 'Road to Mainnet: the final testnet milestone', channel: 'X thread', campaign: 'Mainnet launch', status: 'Review', date: 'Today, 14:00', copy: 'The final testnet milestone is here. Over the last 90 days, builders have stress-tested the network and helped us shape a more resilient path to mainnet.' },
    { id: 102, title: 'What community-owned infrastructure means', channel: 'LinkedIn', campaign: 'Education', status: 'Draft', date: 'Tomorrow, 10:30', copy: 'Infrastructure works better when the people building on it have a meaningful voice in how it evolves.' },
    { id: 103, title: 'July ecosystem roundup', channel: 'X thread', campaign: 'Ecosystem', status: 'Scheduled', date: 'Jul 19, 16:00', copy: 'A month of integrations, community experiments, and new builder resources—here is what moved the ecosystem forward.' }
  ],
  signals: [
    { id: 201, level: 'Urgent', title: 'Wallet connection reports increased 34%', source: 'Discord · 28 messages', sentiment: 'Negative', detail: 'Most reports mention the mobile connection flow after the latest release.', resolved: false },
    { id: 202, level: 'Watch', title: 'Repeated questions about staking eligibility', source: 'Telegram · 43 messages', sentiment: 'Neutral', detail: 'Members are asking for a single authoritative eligibility guide.', resolved: false },
    { id: 203, level: 'Positive', title: 'Developer documentation praised', source: 'Discord · 19 messages', sentiment: 'Positive', detail: 'The quick-start guide is being shared by community advocates.', resolved: false }
  ],
  leads: [
    { id: 301, company: 'LayerZero Labs', fit: 94, stage: 'Qualified', value: '$18K', reason: 'Shared interoperability audience and 3 mutual ecosystem partners.' },
    { id: 302, company: 'Orbit Foundry', fit: 87, stage: 'Contacted', value: '$12K', reason: 'Active accelerator cohort aligns with Nova developer acquisition.' },
    { id: 303, company: 'NodeHouse', fit: 82, stage: 'Discovered', value: '$9K', reason: 'Infrastructure provider expanding into Nova’s target region.' },
    { id: 304, company: 'Commons Guild', fit: 78, stage: 'Meeting', value: '$9K', reason: 'Community-led education program with an engaged builder network.' }
  ],
  events: [
    { id: 401, name: 'ETHGlobal New York', date: 'Aug 15–17', location: 'New York', match: 96, deadline: 'Apply by Jul 22', saved: true },
    { id: 402, name: 'Web3 Growth Summit', date: 'Sep 4', location: 'London', match: 88, deadline: 'Speakers close Jul 28', saved: false },
    { id: 403, name: 'Modular Builders Space', date: 'Jul 25', location: 'Online', match: 84, deadline: 'Rolling applications', saved: false }
  ],
  customers: [
    { id: 501, name: 'Atlas Wallet', health: 'At risk', score: 61, trend: -14, reason: 'Usage fell 18% and two support issues remain unresolved.', action: 'Schedule success review' },
    { id: 502, name: 'Prism Exchange', health: 'Healthy', score: 91, trend: 6, reason: 'Weekly active usage and positive community mentions increased.', action: 'Request case study' },
    { id: 503, name: 'Foundry SDK', health: 'Watch', score: 74, trend: -3, reason: 'Primary contact has not engaged for 16 days.', action: 'Send check-in' }
  ],
  invoices: [
    { id: 601, vendor: 'Northstar Design', amount: 3200, due: 'Jul 19', status: 'Needs approval', deliverable: 'Mainnet launch creative' },
    { id: 602, vendor: 'Commons Guild', amount: 1800, due: 'Jul 24', status: 'Scheduled', deliverable: 'Community workshop series' },
    { id: 603, vendor: 'Maya Chen', amount: 2400, due: 'Jul 28', status: 'Draft', deliverable: 'July content production' }
  ],
  completed: 18
};

codex/create-proposal-for-client-management-tools-9rnlng
const STATE_KEY = 'wave-state-v3';
codex/create-proposal-for-client-management-tools-vzdnel
main
const clone = (value) => typeof structuredClone === 'function'
  ? structuredClone(value)
  : JSON.parse(JSON.stringify(value));

function readStoredState() {
  try {
codex/create-proposal-for-client-management-tools-9rnlng
    const saved = JSON.parse(window.localStorage.getItem(STATE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return null;
    const arrays = ['tasks', 'agents', 'activities', 'content', 'signals', 'leads', 'events', 'customers', 'invoices'];
    return arrays.every((key) => saved[key] === undefined || Array.isArray(saved[key])) ? saved : null;
    return JSON.parse(window.localStorage.getItem('wave-state') || 'null');
 main
  } catch (error) {
    console.warn('Wave could not read saved workspace data. Starting with demo data.', error);
    return null;
  }
}

const stored = readStoredState();
let state = { ...clone(defaults), ...(stored || {}) };
Object.keys(defaults).forEach((key) => {
  if (state[key] === undefined) state[key] = clone(defaults[key]);
codex/create-proposal-for-client-management-tools-9rnlng
const stored = JSON.parse(localStorage.getItem('wave-state') || 'null');
let state = { ...structuredClone(defaults), ...(stored || {}) };
Object.keys(defaults).forEach((key) => {
  if (state[key] === undefined) state[key] = structuredClone(defaults[key]);
main
main
});
let currentFilter = 'All';
let currentPage = 'Command Center';
const homeMarkup = document.querySelector('#pageContent').innerHTML;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
codex/create-proposal-for-client-management-tools-9rnlng
const persist = () => {
  try {
    window.localStorage.setItem(STATE_KEY, JSON.stringify(state));
codex/create-proposal-for-client-management-tools-vzdnel
const persist = () => {
  try {
    window.localStorage.setItem('wave-state', JSON.stringify(state));
main
  } catch (error) {
    console.warn('Wave could not save workspace data in this browser.', error);
  }
};
codex/create-proposal-for-client-management-tools-9rnlng
const persist = () => localStorage.setItem('wave-state', JSON.stringify(state));
main
main
const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value;
  return div.innerHTML;
}

function toast(message) {
  $('#toast p').textContent = message;
  $('#toast').classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 3000);
}

codex/create-proposal-for-client-management-tools-9rnlng
codex/create-proposal-for-client-management-tools-vzdnel
main
function acknowledge(button, message) {
  button.classList.remove('button-pulse');
  void button.offsetWidth;
  button.classList.add('button-pulse');
  toast(message);
}
codex/create-proposal-for-client-management-tools-9rnlng
main
main
function recordActivity(icon, text) {
  state.activities.unshift({ icon, text, time: 'now' });
  persist();
}

function renderTasks(target = '#taskList') {
  const container = $(target);
  if (!container) return;
  const tasks = currentFilter === 'All' ? state.tasks : state.tasks.filter((task) => task.type === currentFilter);
  container.innerHTML = tasks.length ? tasks.map((task) => `
    <div class="task-item" data-id="${task.id}">
      <button class="task-check" aria-label="Complete ${escapeHtml(task.title)}">✓</button>
      <span class="task-icon">${task.icon}</span>
      <span class="task-copy"><b>${escapeHtml(task.title)}</b><small>${escapeHtml(task.meta)}</small></span>
      <span class="task-tag ${task.type === 'Urgent' ? 'urgent' : ''}">${task.type}</span>
      <span class="task-avatar">${task.owner}</span>
    </div>`).join('') : emptyState('✓', 'You’re all clear', 'No items match this filter.');
  $('#attentionCount') && ($('#attentionCount').textContent = state.tasks.length);
  $('#taskBadge').textContent = state.tasks.length;
  $('#metricTasks') && ($('#metricTasks').textContent = state.completed);
  container.querySelectorAll('.task-check').forEach((button) => button.addEventListener('click', () => completeTask(Number(button.closest('.task-item').dataset.id))));
}

function renderAgents() {
  const container = $('#agentList');
  if (!container) return;
  container.innerHTML = state.agents.map((agent, index) => `
    <div class="agent-row"><span class="agent-orb ${agent.color}">${agent.icon}</span>
      <span class="agent-copy"><b>${agent.name}</b><small>${agent.status}</small></span>
      <button class="agent-state ${agent.active ? '' : 'paused'}" data-agent="${index}"><i></i>${agent.active ? 'Active' : 'Paused'}</button>
    </div>`).join('');
  container.querySelectorAll('.agent-state').forEach((button) => button.addEventListener('click', () => toggleAgent(Number(button.dataset.agent))));
}

function renderActivity() {
  const container = $('#activityList');
  if (!container) return;
  container.innerHTML = state.activities.slice(0, 3).map((activity) => `
    <div class="activity"><span>${activity.icon}</span><p>${escapeHtml(activity.text)}<small>Workspace activity</small></p><time>${activity.time}</time></div>`).join('');
}

function completeTask(id) {
  const task = state.tasks.find((item) => item.id === id);
  if (!task) return;
  state.tasks = state.tasks.filter((item) => item.id !== id);
  state.completed += 1;
  recordActivity('✓', `Completed: ${task.title}`);
  renderTasks(currentPage === 'Tasks' ? '#allTaskList' : '#taskList');
  renderActivity();
  toast('Task completed and added to the activity log.');
}

function toggleAgent(index) {
  state.agents[index].active = !state.agents[index].active;
  state.agents[index].status = state.agents[index].active ? 'Monitoring resumed' : 'Waiting for your signal';
  recordActivity(state.agents[index].icon, `${state.agents[index].name} ${state.agents[index].active ? 'resumed' : 'paused'}`);
  renderAgents();
  toast(`${state.agents[index].name} ${state.agents[index].active ? 'resumed' : 'paused'}.`);
}

function emptyState(icon, title, copy) {
  return `<div class="empty-state"><span>${icon}</span><b>${title}</b><p>${copy}</p></div>`;
}

function pageHeader(title, copy, action = '') {
  return `<section class="module-header"><div><p class="eyebrow">LIVE WORKSPACE</p><h2>${title}</h2><p>${copy}</p></div>${action}</section>`;
}

function summaryCards(cards) {
  return `<section class="summary-grid">${cards.map((card) => `<article><span class="module-symbol ${card.color || 'mint'}">${card.icon}</span><div><strong>${card.value}</strong><p>${card.label}</p></div>${card.note ? `<small>${card.note}</small>` : ''}</article>`).join('')}</section>`;
}

const views = {
  Tasks() {
    return `${pageHeader('Work queue', 'Plan, assign, and approve work across your human and agent team.', '<button class="primary-btn" data-open-task>＋ New task</button>')}
      ${summaryCards([{ icon: '!', value: state.tasks.filter((t) => t.type === 'Urgent').length, label: 'Urgent', color: 'amber' }, { icon: '✓', value: state.completed, label: 'Completed this week' }, { icon: '◷', value: state.tasks.length, label: 'Open work', color: 'blue' }])}
      <section class="module-card"><div class="module-toolbar"><div class="segmented" id="moduleTaskFilters"><button class="active" data-filter="All">All</button><button data-filter="Review">Review</button><button data-filter="Urgent">Urgent</button><button data-filter="Standard">Standard</button></div><input class="module-search" id="taskSearch" placeholder="Search tasks…"></div><div id="allTaskList"></div></section>`;
  },
  'Content Studio'() {
    const review = state.content.filter((item) => item.status === 'Review').length;
    return `${pageHeader('Content Studio', 'Move on-brand ideas from brief to approval and schedule.', '<button class="primary-btn" id="generateContent">✦ Generate draft</button>')}
      ${summaryCards([{ icon: '✦', value: review, label: 'Waiting for review', color: 'purple' }, { icon: '□', value: state.content.length, label: 'In calendar', color: 'blue' }, { icon: '↗', value: '8.4%', label: 'Reach growth' }])}
      <section class="module-layout"><article class="module-card"><div class="module-card-head"><div><h3>Editorial pipeline</h3><p>Drafts and scheduled content across connected channels.</p></div><div class="segmented"><button class="active">Pipeline</button><button>Calendar</button></div></div><div class="content-list">${state.content.map((item) => `<article class="content-row"><span class="channel-icon">${item.channel.startsWith('X') ? '𝕏' : 'in'}</span><div class="content-main"><span><b>${escapeHtml(item.title)}</b><em class="status-pill ${item.status.toLowerCase()}">${item.status}</em></span><p>${escapeHtml(item.copy)}</p><small>${item.channel} · ${item.campaign} · ${item.date}</small></div>${item.status === 'Review' ? `<button class="approve-btn" data-approve-content="${item.id}">Approve</button>` : '<button class="row-menu">•••</button>'}</article>`).join('')}</div></article>
      <aside class="module-card brief-card"><span class="module-symbol purple">✦</span><h3>Agent brief</h3><p>Content Strategist is using your brand voice, launch narrative, and recent performance data.</p><dl><div><dt>Primary goal</dt><dd>Mainnet awareness</dd></div><div><dt>Audience</dt><dd>Protocol builders</dd></div><div><dt>Voice match</dt><dd>94%</dd></div></dl><button class="secondary-btn full">Edit brand profile</button></aside></section>`;
  },
  Community() {
    return `${pageHeader('Community Desk', 'Understand conversations, emerging risks, and unanswered questions.', '<button class="primary-btn" id="runScan">◌ Run live scan</button>')}
      ${summaryCards([{ icon: '◌', value: '87%', label: 'Positive sentiment', color: 'amber', note: '−0.2% today' }, { icon: '?', value: '14', label: 'Questions resolved' }, { icon: '!', value: state.signals.filter((s) => !s.resolved).length, label: 'Open signals', color: 'purple' }])}
      <section class="module-layout"><article class="module-card"><div class="module-card-head"><div><h3>Signal inbox</h3><p>Evidence-linked patterns detected across 3 channels.</p></div><span class="live-chip"><i></i> Live</span></div><div class="signal-list">${state.signals.filter((s) => !s.resolved).map((signal) => `<article class="signal-row"><span class="severity ${signal.level.toLowerCase()}">${signal.level}</span><div><h4>${escapeHtml(signal.title)}</h4><p>${escapeHtml(signal.detail)}</p><small>${signal.source} · ${signal.sentiment} sentiment</small></div><button class="secondary-btn" data-resolve-signal="${signal.id}">Resolve</button></article>`).join('') || emptyState('✓', 'Inbox cleared', 'All detected signals have been resolved.')}</div></article>
      <aside class="module-card"><div class="module-card-head"><div><h3>Top questions</h3><p>Last 24 hours</p></div></div><ol class="question-list"><li><span>1</span><p><b>When does staking open?</b><small>43 mentions · Telegram</small></p></li><li><span>2</span><p><b>Is the airdrop checker official?</b><small>31 mentions · Discord</small></p></li><li><span>3</span><p><b>Does the SDK support Python?</b><small>18 mentions · Discord</small></p></li></ol></aside></section>`;
  },
  Partnerships() {
    return `${pageHeader('Partnership Pipeline', 'Discover and move high-fit ecosystem relationships forward.', '<button class="primary-btn" id="discoverLead">◇ Discover leads</button>')}
      ${summaryCards([{ icon: '◇', value: state.leads.length, label: 'Active opportunities', color: 'blue' }, { icon: '$', value: '$48K', label: 'Pipeline value' }, { icon: '↗', value: '3', label: 'New this week', color: 'purple' }])}
      <section class="pipeline-board">${['Discovered', 'Qualified', 'Contacted', 'Meeting'].map((stage) => `<article class="pipeline-column"><header><h3>${stage}</h3><span>${state.leads.filter((lead) => lead.stage === stage).length}</span></header>${state.leads.filter((lead) => lead.stage === stage).map((lead) => `<div class="lead-card"><div><span class="company-avatar">${lead.company[0]}</span><button class="row-menu">•••</button></div><h4>${lead.company}</h4><p>${lead.reason}</p><footer><b>${lead.fit}% fit</b><span>${lead.value}</span></footer>${stage !== 'Meeting' ? `<button class="advance-btn" data-advance-lead="${lead.id}">Move forward →</button>` : ''}</div>`).join('') || '<div class="column-empty">No opportunities</div>'}</article>`).join('')}</section>`;
  },
  Events() {
    return `${pageHeader('Event Matcher', 'Prioritize conferences, spaces, and speaking opportunities by likely value.', '<button class="primary-btn" id="refreshEvents">↻ Refresh matches</button>')}
      ${summaryCards([{ icon: '□', value: state.events.length, label: 'High-fit matches', color: 'blue' }, { icon: '✓', value: state.events.filter((event) => event.saved).length, label: 'Saved events' }, { icon: '◷', value: '2', label: 'Deadlines this month', color: 'amber' }])}
      <section class="event-grid">${state.events.map((event) => `<article class="module-card event-card"><div class="event-score"><span>${event.match}%</span><small>match</small></div><span class="event-date">${event.date}</span><h3>${event.name}</h3><p>⌖ ${event.location}</p><div class="match-reasons"><span>Builder audience</span><span>Partnership potential</span></div><footer><small>${event.deadline}</small><button class="${event.saved ? 'saved-btn' : 'secondary-btn'}" data-save-event="${event.id}">${event.saved ? '✓ Saved' : '＋ Save'}</button></footer></article>`).join('')}</section>`;
  },
  Customers() {
    return `${pageHeader('Customer Health', 'Turn product, support, and community signals into explainable interventions.', '<button class="primary-btn" id="syncCustomers">↻ Sync health data</button>')}
      ${summaryCards([{ icon: '♥', value: '82', label: 'Average health' }, { icon: '!', value: state.customers.filter((c) => c.health === 'At risk').length, label: 'At-risk accounts', color: 'amber' }, { icon: '↗', value: '+4', label: 'Health change', color: 'blue' }])}
      <section class="module-card customer-table"><div class="module-card-head"><div><h3>Account overview</h3><p>Scores always include the evidence behind the change.</p></div></div><div class="table-head"><span>Customer</span><span>Health</span><span>Trend</span><span>Why</span><span>Next best action</span></div>${state.customers.map((customer) => `<div class="table-row"><span><i class="company-avatar">${customer.name[0]}</i><b>${customer.name}</b></span><span><em class="health ${customer.health.toLowerCase().replace(' ', '-')}">${customer.score} · ${customer.health}</em></span><span class="${customer.trend > 0 ? 'positive-text' : 'negative-text'}">${customer.trend > 0 ? '↗ +' : '↘ '}${customer.trend}</span><span>${customer.reason}</span><span><button class="secondary-btn" data-customer-task="${customer.id}">${customer.action}</button></span></div>`).join('')}</section>`;
  },
  Finance() {
    const outstanding = state.invoices.filter((invoice) => invoice.status !== 'Paid').reduce((sum, invoice) => sum + invoice.amount, 0);
    return `${pageHeader('Finance Operations', 'Track obligations, deliverables, approvals, and payment status—without custodying funds.', '<button class="primary-btn" id="uploadInvoice">＋ Add invoice</button>')}
      ${summaryCards([{ icon: '$', value: money(outstanding), label: 'Outstanding' }, { icon: '!', value: state.invoices.filter((i) => i.status === 'Needs approval').length, label: 'Needs approval', color: 'amber' }, { icon: '✓', value: '100%', label: 'Deliverables matched', color: 'blue' }])}
      <section class="module-card invoice-card"><div class="module-card-head"><div><h3>Invoice queue</h3><p>Approval sends instructions to your payment provider; Wave never holds funds.</p></div><span class="safe-chip">⌾ Dual approval enabled</span></div><div class="table-head invoice-head"><span>Vendor</span><span>Deliverable</span><span>Due</span><span>Amount</span><span>Status</span></div>${state.invoices.map((invoice) => `<div class="table-row invoice-row"><span><i class="company-avatar">${invoice.vendor[0]}</i><b>${invoice.vendor}</b></span><span>${invoice.deliverable}</span><span>${invoice.due}</span><span><b>${money(invoice.amount)}</b></span><span>${invoice.status === 'Needs approval' ? `<button class="approve-btn" data-approve-invoice="${invoice.id}">Approve</button>` : `<em class="status-pill ${invoice.status.toLowerCase()}">${invoice.status}</em>`}</span></div>`).join('')}</section>`;
  },
  Analytics() {
    return `${pageHeader('Outcome Analytics', 'Connect agent activity to marketing and business outcomes.', '<button class="secondary-btn" id="exportReport">↓ Export report</button>')}
      ${summaryCards([{ icon: '✓', value: state.completed, label: 'Approved outcomes' }, { icon: '◷', value: '41h', label: 'Estimated time saved', color: 'blue' }, { icon: '$', value: '$7.80', label: 'Cost per outcome', color: 'purple' }, { icon: '↗', value: '92%', label: 'Approval rate' }])}
      <section class="analytics-layout"><article class="module-card chart-card"><div class="module-card-head"><div><h3>Approved outcomes shipped</h3><p>Weekly progress across your workspace</p></div><b>+18.4%</b></div><div class="bar-chart">${[35, 48, 42, 65, 58, 82, 76, 94].map((height, i) => `<div><i style="height:${height}%"></i><small>W${i + 1}</small></div>`).join('')}</div></article><article class="module-card"><div class="module-card-head"><div><h3>Agent contribution</h3><p>Approved work by specialist</p></div></div><div class="contribution-list">${state.agents.map((agent, i) => `<div><span class="agent-orb ${agent.color}">${agent.icon}</span><p><b>${agent.name}</b><small>${[42, 27, 18, 13][i]}% of outcomes</small></p><div><i style="width:${[84, 54, 36, 26][i]}%"></i></div></div>`).join('')}</div></article></section>`;
  },
  Settings() {
    return `${pageHeader('Workspace Settings', 'Control brand context, agent boundaries, integrations, and demo data.')}
      <section class="settings-layout"><nav class="settings-nav"><button class="active">Agent controls</button><button>Brand profile</button><button>Members & roles</button><button>Integrations</button><button>Notifications</button><button>Audit log</button></nav><article class="module-card settings-main"><div class="module-card-head"><div><h3>Agent controls</h3><p>Pause specialists and review their current operating boundary.</p></div></div><div id="agentList"></div><div class="settings-section"><h3>Approval policy</h3><div class="policy-row"><span><b>External publishing</b><small>Content always requires a human reviewer.</small></span><strong>Required</strong></div><div class="policy-row"><span><b>First partner outreach</b><small>New contacts cannot be messaged autonomously.</small></span><strong>Required</strong></div><div class="policy-row"><span><b>Payment instructions</b><small>Requires two authorized reviewers.</small></span><strong>Dual approval</strong></div></div><button class="reset-btn" id="resetDemo">Reset demo workspace</button></article></section>`;
  }
};

function attachModuleEvents(page) {
  $$('[data-open-task]').forEach((button) => button.addEventListener('click', openTaskDialog));
  if (page === 'Tasks') {
    renderTasks('#allTaskList');
    $('#moduleTaskFilters').addEventListener('click', (event) => {
      if (!event.target.dataset.filter) return;
      currentFilter = event.target.dataset.filter;
      $$('#moduleTaskFilters button').forEach((button) => button.classList.toggle('active', button === event.target));
      renderTasks('#allTaskList');
    });
    $('#taskSearch').addEventListener('input', (event) => {
      const query = event.target.value.toLowerCase();
      $$('#allTaskList .task-item').forEach((row) => row.hidden = !row.textContent.toLowerCase().includes(query));
    });
  }
  $$('[data-approve-content]').forEach((button) => button.addEventListener('click', () => {
    const item = state.content.find((content) => content.id === Number(button.dataset.approveContent));
    item.status = 'Scheduled'; recordActivity('✦', `Approved content: ${item.title}`); navigate('Content Studio'); toast('Content approved and added to the publishing schedule.');
  }));
  $('#generateContent')?.addEventListener('click', () => {
    state.content.unshift({ id: Date.now(), title: 'Builder spotlight: shipping on Nova', channel: 'LinkedIn', campaign: 'Ecosystem', status: 'Draft', date: 'Unscheduled', copy: 'Meet the builders turning open infrastructure into useful products for real communities.' });
    recordActivity('✦', 'Content Strategist generated a new builder spotlight draft'); navigate('Content Studio'); toast('New on-brand draft generated.');
  });
  $$('[data-resolve-signal]').forEach((button) => button.addEventListener('click', () => {
    const signal = state.signals.find((item) => item.id === Number(button.dataset.resolveSignal)); signal.resolved = true; recordActivity('◌', `Resolved signal: ${signal.title}`); navigate('Community'); toast('Signal resolved and logged.');
  }));
  $('#runScan')?.addEventListener('click', () => { toast('Scanning Discord, Telegram, and social mentions…'); setTimeout(() => toast('Scan complete. No new urgent signals.'), 1500); });
  $$('[data-advance-lead]').forEach((button) => button.addEventListener('click', () => {
    const stages = ['Discovered', 'Qualified', 'Contacted', 'Meeting']; const lead = state.leads.find((item) => item.id === Number(button.dataset.advanceLead)); lead.stage = stages[stages.indexOf(lead.stage) + 1]; recordActivity('◇', `${lead.company} moved to ${lead.stage}`); navigate('Partnerships'); toast('Opportunity moved forward.');
  }));
  $('#discoverLead')?.addEventListener('click', () => { toast('Partnership Scout is scoring ecosystem signals…'); setTimeout(() => toast('Discovery complete: 3 leads added to review.'), 1500); });
  $$('[data-save-event]').forEach((button) => button.addEventListener('click', () => { const event = state.events.find((item) => item.id === Number(button.dataset.saveEvent)); event.saved = !event.saved; recordActivity('□', `${event.saved ? 'Saved' : 'Removed'} event: ${event.name}`); navigate('Events'); toast(event.saved ? 'Event saved with deadline reminders.' : 'Event removed from your plan.'); }));
  $('#refreshEvents')?.addEventListener('click', () => toast('Event matches refreshed from your goals and budget.'));
  $$('[data-customer-task]').forEach((button) => button.addEventListener('click', () => { const customer = state.customers.find((item) => item.id === Number(button.dataset.customerTask)); state.tasks.unshift({ id: Date.now(), title: `${customer.action}: ${customer.name}`, meta: 'Customer Advocate · Due in 2 days', type: customer.health === 'At risk' ? 'Urgent' : 'Review', icon: '♙', owner: 'AM' }); recordActivity('♙', `Created customer action for ${customer.name}`); persist(); $('#taskBadge').textContent = state.tasks.length; toast('Customer intervention added to the work queue.'); }));
  $('#syncCustomers')?.addEventListener('click', () => toast('Customer health sources synced successfully.'));
  $$('[data-approve-invoice]').forEach((button) => button.addEventListener('click', () => { const invoice = state.invoices.find((item) => item.id === Number(button.dataset.approveInvoice)); invoice.status = 'Awaiting second approval'; recordActivity('$', `Invoice approved: ${invoice.vendor} ${money(invoice.amount)}`); navigate('Finance'); toast('First approval recorded. A second reviewer was notified.'); }));
  $('#uploadInvoice')?.addEventListener('click', () => toast('Invoice intake will extract fields and match the related contract.'));
  $('#exportReport')?.addEventListener('click', () => { const report = `Wave outcome report\nApproved outcomes: ${state.completed}\nEstimated time saved: 41h\nApproval rate: 92%`; const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([report], { type: 'text/plain' })); link.download = 'wave-outcome-report.txt'; link.click(); URL.revokeObjectURL(link.href); toast('Outcome report exported.'); });
codex/create-proposal-for-client-management-tools-9rnlng
  $('#resetDemo')?.addEventListener('click', () => { try { window.localStorage.removeItem(STATE_KEY); } catch (error) { console.warn(error); } toast('Demo data reset. Reloading…'); setTimeout(() => location.reload(), 700); });
  
  codex/create-proposal-for-client-management-tools-vzdnel
  $('#resetDemo')?.addEventListener('click', () => { try { window.localStorage.removeItem('wave-state'); } catch (error) { console.warn(error); } toast('Demo data reset. Reloading…'); setTimeout(() => location.reload(), 700); });
  
  $('#resetDemo')?.addEventListener('click', () => { localStorage.removeItem('wave-state'); toast('Demo data reset. Reloading…'); setTimeout(() => location.reload(), 700); });
 main
 main
  if (page === 'Settings') renderAgents();
}

function navigate(page) {
  currentPage = page;
  currentFilter = 'All';
  $$('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.page === page));
  $('#pageTitle').textContent = page;
  $('#breadcrumb').textContent = `WORKSPACE / ${page.toUpperCase()}`;
  $('#pageContent').innerHTML = page === 'Command Center' ? homeMarkup : views[page]();
  $('#sidebar').classList.remove('open');
  if (page === 'Command Center') attachHomeEvents(); else attachModuleEvents(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTaskDialog() {
  $('#taskDate').value = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
codex/create-proposal-for-client-management-tools-9rnlng
  if (typeof $('#taskDialog').showModal === 'function') $('#taskDialog').showModal();
  else $('#taskDialog').setAttribute('open', '');
  $('#taskDialog').showModal();
main
  setTimeout(() => $('#taskTitle').focus(), 50);
}

function attachHomeEvents() {
  renderTasks(); renderAgents(); renderActivity();
  $('#taskFilters')?.addEventListener('click', (event) => { if (!event.target.dataset.filter) return; currentFilter = event.target.dataset.filter; $$('#taskFilters button').forEach((button) => button.classList.toggle('active', button === event.target)); renderTasks(); });
  $$('[data-open-task]').forEach((button) => button.addEventListener('click', openTaskDialog));
  $$('[data-page-link]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.pageLink)));
  $('#draftPost')?.addEventListener('click', () => navigate('Content Studio'));
  $('#scanCommunity')?.addEventListener('click', () => navigate('Community'));
  $('#findLeads')?.addEventListener('click', () => navigate('Partnerships'));
  $('#manageAgents')?.addEventListener('click', () => navigate('Settings'));
}

$$('.nav-item[data-page]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.page)));
$('#createTaskButton').addEventListener('click', (event) => {
  if (!$('#taskForm').reportValidity()) { event.preventDefault(); return; }
  const owner = $('#taskOwner').value;
  const title = $('#taskTitle').value.trim();
  state.tasks.unshift({ id: Date.now(), title, meta: `${owner} · Due ${$('#taskDate').value}`, type: $('#taskPriority').value, icon: '✓', owner: owner.split(' ').map((word) => word[0]).join('').slice(0, 2) });
  recordActivity('＋', `Created: ${title}`);
  $('#taskForm').reset();
  if (currentPage === 'Tasks') navigate('Tasks'); else if (currentPage === 'Command Center') { renderTasks(); renderActivity(); }
  toast('Task created and routed successfully.');
});

const commandDialog = $('#commandDialog');
const pages = ['Command Center', ...Object.keys(views)];
function renderCommands(query) {
  const matches = pages.filter((page) => page.toLowerCase().includes(query.toLowerCase()));
  $('#commandResults').innerHTML = `<div class="command-group"><div class="command-label">Navigate</div>${matches.map((page) => `<button class="command-item" data-command="${page}"><span>→</span><div><b>${page}</b><small>Open workspace module</small></div></button>`).join('') || '<div class="command-label">No matching commands</div>'}</div>`;
codex/create-proposal-for-client-management-tools-9rnlng
  $$('[data-command]').forEach((button) => button.addEventListener('click', () => { if (typeof commandDialog.close === 'function') commandDialog.close(); else commandDialog.removeAttribute('open'); navigate(button.dataset.command); }));
}
function openCommands() { if (typeof commandDialog.showModal === 'function') commandDialog.showModal(); else commandDialog.setAttribute('open', ''); $('#commandInput').value = ''; renderCommands(''); setTimeout(() => $('#commandInput').focus(), 20); }
    
  $$('[data-command]').forEach((button) => button.addEventListener('click', () => { commandDialog.close(); navigate(button.dataset.command); }));
}
function openCommands() { commandDialog.showModal(); $('#commandInput').value = ''; renderCommands(''); setTimeout(() => $('#commandInput').focus(), 20); }
main
$('#searchTrigger').addEventListener('click', openCommands);
$('#commandInput').addEventListener('input', (event) => renderCommands(event.target.value));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openCommands(); } });
$('#notificationButton').addEventListener('click', () => $('#notificationPanel').classList.toggle('show'));
$('#closeNotifications').addEventListener('click', () => $('#notificationPanel').classList.remove('show'));
$('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));

codex/create-proposal-for-client-management-tools-9rnlng
codex/create-proposal-for-client-management-tools-vzdnel
main
// Every visible control should acknowledge a click. Feature-specific handlers above
// stop here via data attributes/IDs; these handlers cover secondary prototype controls.
$('#workspaceButton').addEventListener('click', (event) => acknowledge(event.currentTarget, 'Nova Protocol is the active demo workspace.'));
document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  const messages = {
    'more-btn': 'Agent activity options opened for this demo workspace.',
    'row-menu': 'Item actions are ready for the next workflow step.',
    'text-btn': 'The latest workspace activity is already shown below.',
    'secondary-btn full': 'Brand profile editor is queued for the connected account sprint.'
  };
  const key = Object.keys(messages).find((className) => className.split(' ').every((name) => button.classList.contains(name)));
  if (key && !button.dataset.feedbackShown) {
    button.dataset.feedbackShown = 'true';
    acknowledge(button, messages[key]);
    setTimeout(() => delete button.dataset.feedbackShown, 300);
  }
  if (button.closest('.settings-nav')) {
    $$('.settings-nav button').forEach((item) => item.classList.toggle('active', item === button));
    acknowledge(button, `${button.textContent.trim()} selected. This panel will connect to your production workspace.`);
  }
  if (button.closest('.segmented') && !button.dataset.filter) {
    button.parentElement.querySelectorAll('button').forEach((item) => item.classList.toggle('active', item === button));
    acknowledge(button, `${button.textContent.trim()} view selected.`);
  }
});

attachHomeEvents();
codex/create-proposal-for-client-management-tools-9rnlng
window.WAVE_READY = true;
document.documentElement.classList.add('wave-ready');
attachHomeEvents();
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
main
main
main
