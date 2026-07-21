const defaults = {
  tasks: [
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
  campaigns: [
    { id: 801, name: 'Mainnet launch', goal: 'Grow qualified builder awareness before launch', owner: 'Alex Morgan', status: 'Active', deadline: 'Aug 30', budget: 24000, spent: 14600, taskIds: [1, 3], contentCampaigns: ['Mainnet launch'], leadIds: [301], eventIds: [401] },
    { id: 802, name: 'Developer education', goal: 'Increase SDK activation through practical education', owner: 'Maya Chen', status: 'Active', deadline: 'Sep 15', budget: 16000, spent: 7200, taskIds: [4, 5], contentCampaigns: ['Education', 'Ecosystem'], leadIds: [304], eventIds: [403] }
  ],
  approvals: [
    { id: 701, type: 'Content', title: 'Road to Mainnet campaign thread', owner: 'Content Strategist', risk: 'Brand review', evidence: 'Mainnet brief · 94% voice match', due: 'Today', status: 'Pending', targetId: 101 },
    { id: 702, type: 'Community', title: 'Response to wallet connection reports', owner: 'Community Guardian', risk: 'Public incident response', evidence: '28 Discord messages · negative sentiment', due: 'Today', status: 'Pending', targetId: 201 },
    { id: 703, type: 'Outreach', title: 'First contact with LayerZero Labs', owner: 'Partnership Scout', risk: 'First external outreach', evidence: '94% fit · 3 mutual partners', due: 'Today', status: 'Pending', targetId: 301 },
    { id: 704, type: 'Finance', title: 'Northstar Design invoice · $3,200', owner: 'Finance Operations', risk: 'Dual approval', evidence: 'Matched to Mainnet launch creative', due: 'Jul 19', status: 'Pending', targetId: 601 }
  ],
  audit: [
    { id: 901, action: 'Created campaign drafts', actor: 'Content Strategist', module: 'Content Studio', category: 'Content', evidence: '3 assets linked to Mainnet launch', time: '12m ago' },
    { id: 902, action: 'Escalated wallet connection reports', actor: 'Community Guardian', module: 'Community', category: 'Operations', evidence: '28 Discord messages · negative sentiment', time: '28m ago' },
    { id: 903, action: 'Approved Mainnet campaign thread', actor: 'Alex Morgan', module: 'Approvals', category: 'Decision', evidence: '94% voice match · Brand review', time: '46m ago' },
    { id: 904, action: 'Matched invoice to deliverable', actor: 'Finance Operations', module: 'Finance', category: 'Operations', evidence: 'Northstar Design · Mainnet launch creative', time: '1h ago' }
  ],
  completed: 18
};

const STATE_KEY = 'wave-state-v3';

const clone = (value) => typeof structuredClone === 'function'
  ? structuredClone(value)
  : JSON.parse(JSON.stringify(value));

function readStoredState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STATE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return null;
    const arrays = ['tasks', 'agents', 'activities', 'content', 'signals', 'leads', 'events', 'customers', 'invoices', 'approvals', 'campaigns', 'audit'];
    return arrays.every((key) => saved[key] === undefined || Array.isArray(saved[key])) ? saved : null;
  } catch (error) {
    console.warn('Wave could not read saved workspace data. Starting with demo data.', error);
    return null;
  }
}

const stored = readStoredState();
let state = { ...clone(defaults), ...(stored || {}) };
Object.keys(defaults).forEach((key) => {
  if (state[key] === undefined) state[key] = clone(defaults[key]);
});
let currentFilter = 'All';
let currentPage = 'Command Center';
let currentContentView = 'Pipeline';
let editingContentId = null;
let currentApprovalFilter = 'Pending';
let currentCampaignId = null;
let currentAuditFilter = 'All';
let currentAuditQuery = '';
const homeMarkup = document.querySelector('#pageContent').innerHTML;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const persist = () => {
  try {
    window.localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Wave could not save workspace data in this browser.', error);
  }
};
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

function acknowledge(button, message) {
  button.classList.remove('button-pulse');
  void button.offsetWidth;
  button.classList.add('button-pulse');
  toast(message);
}

function recordActivity(icon, text, details = {}) {
  state.activities.unshift({ icon, text, time: 'now' });
  const agent = state.agents.find((item) => text.startsWith(item.name));
  state.audit.unshift({
    id: Date.now(),
    action: text,
    actor: details.actor || agent?.name || 'Alex Morgan',
    module: details.module || currentPage,
    category: details.category || (currentPage === 'Approvals' ? 'Decision' : currentPage === 'Content Studio' ? 'Content' : 'Operations'),
    evidence: details.evidence || 'Workspace state changed',
    time: new Date().toLocaleString()
  });
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
  Campaigns() {
    if (!currentCampaignId && state.campaigns.length) currentCampaignId = state.campaigns[0].id;
    const campaign = state.campaigns.find((item) => item.id === currentCampaignId) || state.campaigns[0];
    const metrics = campaign ? campaignMetrics(campaign) : null;
    return `${pageHeader('Campaign Workspaces', 'Connect goals, execution, approvals, budget, and outcomes in one operating view.', '<button class="primary-btn" data-campaign-task>＋ Campaign task</button>')}
      <section class="campaign-tabs">${state.campaigns.map((item) => { const itemMetrics = campaignMetrics(item); return `<button class="${item.id === campaign.id ? 'active' : ''}" data-select-campaign="${item.id}"><span><b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.goal)}</small></span><strong>${itemMetrics.progress}%</strong></button>`; }).join('')}</section>
      ${metrics ? `${summaryCards([{ icon: '↗', value: metrics.progress + '%', label: 'Campaign progress' }, { icon: '✓', value: metrics.outcomes, label: 'Approved outcomes', color: 'blue' }, { icon: '◷', value: metrics.openTasks.length, label: 'Open tasks', color: 'amber' }, { icon: '$', value: money(campaign.spent), label: 'Spend to date', color: 'purple', note: metrics.budgetPercent + '% of budget' }])}
      <section class="campaign-hero module-card"><div><p class="eyebrow">${escapeHtml(campaign.status)} · DUE ${escapeHtml(campaign.deadline)}</p><h2>${escapeHtml(campaign.name)}</h2><p>${escapeHtml(campaign.goal)}</p><small>Owner: ${escapeHtml(campaign.owner)}</small></div><div class="campaign-progress"><strong>${metrics.progress}%</strong><span>toward goal</span><div><i style="width:${metrics.progress}%"></i></div></div></section>
      <section class="campaign-grid">
        <article class="module-card campaign-stream"><div class="module-card-head"><div><h3>Execution</h3><p>Work and content connected to this campaign.</p></div><button class="text-btn" data-campaign-page="Tasks">Open tasks →</button></div><div class="campaign-section"><h4>Tasks</h4>${metrics.openTasks.map((task) => `<div class="campaign-item"><span class="task-icon">${escapeHtml(task.icon)}</span><p><b>${escapeHtml(task.title)}</b><small>${escapeHtml(task.meta)}</small></p><em class="status-pill ${task.type.toLowerCase()}">${escapeHtml(task.type)}</em></div>`).join('') || emptyState('✓', 'Tasks cleared', 'All linked campaign work is complete.')}</div><div class="campaign-section"><h4>Content</h4>${metrics.content.map((item) => `<div class="campaign-item"><span class="channel-icon">${item.channel.startsWith('X') ? '𝕏' : 'in'}</span><p><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.channel)} · ${escapeHtml(item.date)}</small></p><em class="status-pill ${item.status.toLowerCase()}">${escapeHtml(item.status)}</em></div>`).join('') || emptyState('✦', 'No content linked', 'Create a campaign asset in Content Studio.')}</div></article>
        <aside class="campaign-side"><article class="module-card"><div class="module-card-head"><div><h3>Budget</h3><p>Approved campaign allocation.</p></div></div><div class="campaign-budget"><span><b>${money(campaign.spent)}</b><small>of ${money(campaign.budget)}</small></span><strong>${metrics.budgetPercent}%</strong><div><i style="width:${Math.min(metrics.budgetPercent, 100)}%"></i></div></div></article><article class="module-card"><div class="module-card-head"><div><h3>Opportunities & events</h3><p>External campaign leverage.</p></div></div><div class="campaign-section">${metrics.leads.map((lead) => `<div class="campaign-item"><span class="company-avatar">${escapeHtml(lead.company[0])}</span><p><b>${escapeHtml(lead.company)}</b><small>${lead.fit}% fit · ${escapeHtml(lead.stage)}</small></p></div>`).join('')}${metrics.events.map((event) => `<div class="campaign-item"><span class="module-symbol blue">□</span><p><b>${escapeHtml(event.name)}</b><small>${escapeHtml(event.date)} · ${event.saved ? 'Saved' : 'Not saved'}</small></p></div>`).join('')}</div></article><button class="secondary-btn full" data-campaign-page="Approvals">Review campaign approvals →</button></aside>
      </section>` : emptyState('◎', 'No campaigns yet', 'Create a campaign workspace to connect your operating data.')}`;
  },
  Approvals() {
    const visible = currentApprovalFilter === 'All' ? state.approvals : state.approvals.filter((item) => item.status === currentApprovalFilter);
    const pending = state.approvals.filter((item) => item.status === 'Pending').length;
    return `${pageHeader('Approval Inbox', 'Review high-impact agent actions with evidence, risk context, and an auditable decision.')}
      ${summaryCards([{ icon: '⌾', value: pending, label: 'Waiting for decision', color: 'amber' }, { icon: '✓', value: state.approvals.filter((item) => item.status === 'Approved').length, label: 'Approved' }, { icon: '!', value: state.approvals.filter((item) => item.risk === 'Dual approval' && item.status === 'Pending').length, label: 'Dual approval', color: 'blue' }])}
      <section class="module-card"><div class="module-toolbar"><div class="segmented" id="approvalFilters"><button class="${currentApprovalFilter === 'Pending' ? 'active' : ''}" data-approval-filter="Pending">Pending</button><button class="${currentApprovalFilter === 'Approved' ? 'active' : ''}" data-approval-filter="Approved">Approved</button><button class="${currentApprovalFilter === 'Rejected' ? 'active' : ''}" data-approval-filter="Rejected">Rejected</button><button class="${currentApprovalFilter === 'All' ? 'active' : ''}" data-approval-filter="All">All</button></div><span class="safe-chip">Human decision required</span></div><div class="approval-list">${visible.map((item) => `<article class="approval-row"><span class="module-symbol ${item.type === 'Finance' ? 'blue' : item.type === 'Community' ? 'amber' : item.type === 'Content' ? 'purple' : 'mint'}">${item.type[0]}</span><div class="approval-main"><div><h3>${escapeHtml(item.title)}</h3><em class="status-pill ${item.status.toLowerCase()}">${item.status}</em></div><p>${escapeHtml(item.evidence)}</p><small>${escapeHtml(item.owner)} · ${escapeHtml(item.type)} · Due ${escapeHtml(item.due)}</small><span class="risk-note">Risk: ${escapeHtml(item.risk)}</span>${item.decision ? `<span class="decision-note">${escapeHtml(item.decision)}</span>` : ''}</div>${item.status === 'Pending' ? `<div class="approval-actions"><button class="secondary-btn" data-reject-approval="${item.id}">Reject</button><button class="approve-btn" data-approve-action="${item.id}">Approve</button></div>` : `<time>${escapeHtml(item.decidedAt || 'Recorded')}</time>`}</article>`).join('') || emptyState('✓', 'Nothing here', 'No approval decisions match this filter.')}</div></section>`;
  },
  Tasks() {
    return `${pageHeader('Work queue', 'Plan, assign, and approve work across your human and agent team.', '<button class="primary-btn" data-open-task>＋ New task</button>')}
      ${summaryCards([{ icon: '!', value: state.tasks.filter((t) => t.type === 'Urgent').length, label: 'Urgent', color: 'amber' }, { icon: '✓', value: state.completed, label: 'Completed this week' }, { icon: '◷', value: state.tasks.length, label: 'Open work', color: 'blue' }])}
      <section class="module-card"><div class="module-toolbar"><div class="segmented" id="moduleTaskFilters"><button class="active" data-filter="All">All</button><button data-filter="Review">Review</button><button data-filter="Urgent">Urgent</button><button data-filter="Standard">Standard</button></div><input class="module-search" id="taskSearch" placeholder="Search tasks…"></div><div id="allTaskList"></div></section>`;
  },
  'Content Studio'() {
    const review = state.content.filter((item) => item.status === 'Review').length;
    const contentItems = currentContentView === 'Calendar'
      ? [...state.content].sort((a, b) => (a.date === 'Unscheduled') - (b.date === 'Unscheduled') || a.date.localeCompare(b.date))
      : state.content;
    return `${pageHeader('Content Studio', 'Move on-brand ideas from brief to approval and schedule.', '<button class="primary-btn" id="generateContent">✦ Generate draft</button>')}
      ${summaryCards([{ icon: '✦', value: review, label: 'Waiting for review', color: 'purple' }, { icon: '□', value: state.content.filter((item) => item.status === 'Scheduled').length, label: 'Scheduled', color: 'blue' }, { icon: '↗', value: state.content.length, label: 'Total assets' }])}
      <section class="module-layout"><article class="module-card"><div class="module-card-head"><div><h3>${currentContentView === 'Calendar' ? 'Publishing calendar' : 'Editorial pipeline'}</h3><p>${currentContentView === 'Calendar' ? 'Scheduled and unscheduled assets ordered by publishing date.' : 'Drafts and scheduled content across connected channels.'}</p></div><div class="segmented"><button class="${currentContentView === 'Pipeline' ? 'active' : ''}" data-content-view="Pipeline">Pipeline</button><button class="${currentContentView === 'Calendar' ? 'active' : ''}" data-content-view="Calendar">Calendar</button></div></div><div class="content-list">${contentItems.map((item) => `<article class="content-row"><span class="channel-icon">${item.channel.startsWith('X') ? '𝕏' : item.channel === 'LinkedIn' ? 'in' : '✦'}</span><div class="content-main"><span><b>${escapeHtml(item.title)}</b><em class="status-pill ${item.status.toLowerCase()}">${item.status}</em></span><p>${escapeHtml(item.copy)}</p><small>${escapeHtml(item.channel)} · ${escapeHtml(item.campaign)} · ${escapeHtml(item.date)}</small></div><div class="row-actions"><button class="secondary-btn compact" data-preview-content="${item.id}">Preview</button><button class="secondary-btn compact" data-edit-content="${item.id}">Edit</button>${item.status === 'Review' ? `<button class="approve-btn" data-approve-content="${item.id}">Approve</button>` : ''}<button class="row-menu delete-content" data-delete-content="${item.id}" aria-label="Delete ${escapeHtml(item.title)}">×</button></div></article>`).join('') || emptyState('✦', 'No content yet', 'Generate a draft to start the editorial pipeline.')}</div></article>
      <aside class="module-card brief-card"><span class="module-symbol purple">✦</span><h3>Agent brief</h3><p>Content Strategist is using your brand voice, launch narrative, and recent performance data.</p><dl><div><dt>Primary goal</dt><dd>Mainnet awareness</dd></div><div><dt>Audience</dt><dd>Protocol builders</dd></div><div><dt>Voice match</dt><dd>94%</dd></div></dl><button class="secondary-btn full" data-page-link="Settings">Edit brand profile</button></aside></section>`;
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
  'Audit Trail'() {
    const query = currentAuditQuery.toLowerCase();
    const entries = state.audit.filter((entry) => (currentAuditFilter === 'All' || entry.category === currentAuditFilter) && (!query || [entry.action, entry.actor, entry.module, entry.evidence].some((value) => value.toLowerCase().includes(query))));
    return `${pageHeader('Audit Trail', 'Understand who or what changed the workspace, why it happened, and what evidence supported it.', '<button class="secondary-btn" id="exportAudit">↓ Export CSV</button>')}
      ${summaryCards([{ icon: '≡', value: state.audit.length, label: 'Recorded actions' }, { icon: '✓', value: state.audit.filter((entry) => entry.category === 'Decision').length, label: 'Human decisions', color: 'blue' }, { icon: '✦', value: new Set(state.audit.map((entry) => entry.actor)).size, label: 'Active actors', color: 'purple' }, { icon: '⌾', value: state.audit.filter((entry) => entry.evidence !== 'Workspace state changed').length, label: 'Evidence linked', color: 'amber' }])}
      <section class="module-card"><div class="module-toolbar audit-toolbar"><div class="segmented"><button class="${currentAuditFilter === 'All' ? 'active' : ''}" data-audit-filter="All">All</button><button class="${currentAuditFilter === 'Decision' ? 'active' : ''}" data-audit-filter="Decision">Decisions</button><button class="${currentAuditFilter === 'Content' ? 'active' : ''}" data-audit-filter="Content">Content</button><button class="${currentAuditFilter === 'Operations' ? 'active' : ''}" data-audit-filter="Operations">Operations</button></div><input class="module-search" id="auditSearch" value="${escapeHtml(currentAuditQuery)}" placeholder="Search actions, actors, evidence…"></div><div class="audit-list">${entries.map((entry) => `<article class="audit-row"><span class="audit-mark ${entry.category.toLowerCase()}"></span><div class="audit-action"><span><b>${escapeHtml(entry.action)}</b><em class="status-pill">${escapeHtml(entry.category)}</em></span><p>${escapeHtml(entry.evidence)}</p><small>${escapeHtml(entry.actor)} · ${escapeHtml(entry.module)}</small></div><time>${escapeHtml(entry.time)}</time></article>`).join('') || emptyState('⌕', 'No matching actions', 'Change the filters or search term to inspect more workspace history.')}</div></section>`;
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



function campaignMetrics(campaign) {
  const openTasks = state.tasks.filter((task) => campaign.taskIds.includes(task.id));
  const completedTasks = Math.max(0, campaign.taskIds.length - openTasks.length);
  const content = state.content.filter((item) => campaign.contentCampaigns.includes(item.campaign));
  const scheduledContent = content.filter((item) => item.status === 'Scheduled');
  const leads = state.leads.filter((lead) => campaign.leadIds.includes(lead.id));
  const progressedLeads = leads.filter((lead) => ['Contacted', 'Meeting'].includes(lead.stage));
  const events = state.events.filter((event) => campaign.eventIds.includes(event.id));
  const savedEvents = events.filter((event) => event.saved);
  const taskScore = campaign.taskIds.length ? (completedTasks / campaign.taskIds.length) * 30 : 30;
  const contentScore = content.length ? (scheduledContent.length / content.length) * 30 : 30;
  const leadScore = leads.length ? (progressedLeads.length / leads.length) * 20 : 20;
  const eventScore = events.length ? (savedEvents.length / events.length) * 20 : 20;
  return { openTasks, completedTasks, content, scheduledContent, leads, events, progress: Math.round(taskScore + contentScore + leadScore + eventScore), outcomes: completedTasks + scheduledContent.length + progressedLeads.length + savedEvents.length, budgetPercent: Math.round((campaign.spent / campaign.budget) * 100) };
}

function updateApprovalBadge() {
  const badge = $('#approvalBadge');
  if (badge) badge.textContent = state.approvals.filter((item) => item.status === 'Pending').length;
}

function applyApprovalDecision(id, status) {
  const approval = state.approvals.find((item) => item.id === id);
  if (!approval || approval.status !== 'Pending') return;
  let decision = status === 'Approved' ? 'Approved and released to the responsible workflow.' : window.prompt('Why are you rejecting this action?', 'Needs revision before release.');
  if (status === 'Rejected' && decision === null) return;
  approval.status = status; approval.decision = decision || 'Rejected for revision.'; approval.decidedAt = new Date().toLocaleString();
  if (status === 'Approved') {
    if (approval.type === 'Content') { const item = state.content.find((content) => content.id === approval.targetId); if (item) item.status = 'Scheduled'; }
    if (approval.type === 'Community') { const signal = state.signals.find((item) => item.id === approval.targetId); if (signal) signal.resolved = true; }
    if (approval.type === 'Outreach') { const lead = state.leads.find((item) => item.id === approval.targetId); if (lead) lead.stage = 'Contacted'; }
    if (approval.type === 'Finance') { const invoice = state.invoices.find((item) => item.id === approval.targetId); if (invoice) invoice.status = 'Awaiting second approval'; }
    state.completed += 1;
  }
  recordActivity(status === 'Approved' ? '✓' : '!', `${status}: ${approval.title}`, { actor: 'Alex Morgan', module: 'Approvals', category: 'Decision', evidence: `${approval.risk} · ${approval.evidence}` });
  updateApprovalBadge(); navigate('Approvals'); toast(`Decision recorded: ${status.toLowerCase()}.`);
}

function attachModuleEvents(page) {
  $$('[data-audit-filter]').forEach((button) => button.addEventListener('click', () => { currentAuditFilter = button.dataset.auditFilter; navigate('Audit Trail'); }));
  $('#auditSearch')?.addEventListener('input', (event) => { currentAuditQuery = event.target.value; navigate('Audit Trail'); setTimeout(() => { const input = $('#auditSearch'); if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); } }, 0); });
  $('#exportAudit')?.addEventListener('click', () => {
    const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const rows = [['Time', 'Actor', 'Module', 'Category', 'Action', 'Evidence'], ...state.audit.map((entry) => [entry.time, entry.actor, entry.module, entry.category, entry.action, entry.evidence])];
    const csv = rows.map((row) => row.map(quote).join(',')).join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'wave-audit-trail.csv'; link.click(); URL.revokeObjectURL(link.href); toast('Audit trail exported.');
  });
  $$('[data-select-campaign]').forEach((button) => button.addEventListener('click', () => { currentCampaignId = Number(button.dataset.selectCampaign); navigate('Campaigns'); }));
  $$('[data-campaign-page]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.campaignPage)));
  $$('[data-campaign-task]').forEach((button) => button.addEventListener('click', () => {
    const campaign = state.campaigns.find((item) => item.id === currentCampaignId); if (!campaign) return;
    const id = Date.now(); campaign.taskIds.push(id); state.tasks.unshift({ id, title: `Campaign follow-up: ${campaign.name}`, meta: `${campaign.owner} · Due ${campaign.deadline}`, type: 'Review', icon: '◎', owner: campaign.owner.split(' ').map((word) => word[0]).join('').slice(0, 2) });
    recordActivity('◎', `Created campaign task for ${campaign.name}`); navigate('Campaigns'); toast('Campaign task added to the work queue.');
  }));
  $$('[data-approval-filter]').forEach((button) => button.addEventListener('click', () => { currentApprovalFilter = button.dataset.approvalFilter; navigate('Approvals'); }));
  $$('[data-approve-action]').forEach((button) => button.addEventListener('click', () => applyApprovalDecision(Number(button.dataset.approveAction), 'Approved')));
  $$('[data-reject-approval]').forEach((button) => button.addEventListener('click', () => applyApprovalDecision(Number(button.dataset.rejectApproval), 'Rejected')));
  $$('[data-content-view]').forEach((button) => button.addEventListener('click', () => { currentContentView = button.dataset.contentView; navigate('Content Studio'); }));
  $$('[data-preview-content]').forEach((button) => button.addEventListener('click', () => {
    const item = state.content.find((content) => content.id === Number(button.dataset.previewContent));
    if (!item) return;
    $('#previewTitle').textContent = item.title;
    $('#previewMeta').textContent = `${item.channel} · ${item.status} · ${item.date}`;
    $('#previewCopy').textContent = item.copy;
    const dialog = $('#contentPreviewDialog'); if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  }));
  $$('[data-edit-content]').forEach((button) => button.addEventListener('click', () => {
    const item = state.content.find((content) => content.id === Number(button.dataset.editContent));
    if (!item) return;
    editingContentId = item.id; $('#contentTitle').value = item.title; $('#contentCopy').value = item.copy; $('#contentChannel').value = item.channel; $('#contentStatus').value = item.status; $('#contentDate').value = item.date === 'Unscheduled' ? '' : item.date;
    const dialog = $('#contentDialog'); if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
  }));
  $$('[data-delete-content]').forEach((button) => button.addEventListener('click', () => {
    const item = state.content.find((content) => content.id === Number(button.dataset.deleteContent));
    if (!item || !window.confirm(`Delete “${item.title}”?`)) return;
    state.content = state.content.filter((content) => content.id !== item.id); recordActivity('✦', `Deleted content: ${item.title}`); navigate('Content Studio'); toast('Content removed from the workspace.');
  }));
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
    const ideas = [
      { title: 'Builder spotlight: shipping on Nova', channel: 'LinkedIn', campaign: 'Ecosystem', copy: 'Meet the builders turning open infrastructure into useful products for real communities.' },
      { title: 'Three lessons from the latest testnet milestone', channel: 'X thread', campaign: 'Mainnet launch', copy: 'What the latest testnet taught us about resilience, developer experience, and the path to mainnet.' },
      { title: 'Community questions, answered', channel: 'LinkedIn', campaign: 'Education', copy: 'A concise guide to the questions builders and community members asked most often this week.' }
    ];
    const usedTitles = new Set(state.content.map((item) => item.title));
    const draft = ideas.find((idea) => !usedTitles.has(idea.title)) || ideas[state.content.length % ideas.length];
    state.content.unshift({ id: Date.now(), ...draft, status: 'Draft', date: 'Unscheduled' });
    recordActivity('✦', `Content Strategist generated: ${draft.title}`); navigate('Content Studio'); toast('New on-brand draft generated.');
  });
  $$('[data-resolve-signal]').forEach((button) => button.addEventListener('click', () => {
    const signal = state.signals.find((item) => item.id === Number(button.dataset.resolveSignal)); signal.resolved = true; recordActivity('◌', `Resolved signal: ${signal.title}`); navigate('Community'); toast('Signal resolved and logged.');
  }));
  $('#runScan')?.addEventListener('click', () => { toast('Scanning Discord, Telegram, and social mentions…'); setTimeout(() => toast('Scan complete. No new urgent signals.'), 1500); });
  $$('[data-advance-lead]').forEach((button) => button.addEventListener('click', () => {
    const stages = ['Discovered', 'Qualified', 'Contacted', 'Meeting']; const lead = state.leads.find((item) => item.id === Number(button.dataset.advanceLead)); lead.stage = stages[stages.indexOf(lead.stage) + 1]; recordActivity('◇', `${lead.company} moved to ${lead.stage}`); navigate('Partnerships'); toast('Opportunity moved forward.');
  }));
  $('#discoverLead')?.addEventListener('click', () => {
    const candidates = [
      { company: 'Relay Works', fit: 91, stage: 'Discovered', value: '$14K', reason: 'Developer tooling audience overlaps with Nova ecosystem teams.' },
      { company: 'Modular Commons', fit: 86, stage: 'Discovered', value: '$11K', reason: 'Education programs align with the current builder campaign.' },
      { company: 'Beacon Labs', fit: 83, stage: 'Discovered', value: '$8K', reason: 'Infrastructure roadmap creates a timely integration opportunity.' }
    ];
    const existing = new Set(state.leads.map((lead) => lead.company));
    const additions = candidates.filter((lead) => !existing.has(lead.company)).map((lead, index) => ({ ...lead, id: Date.now() + index }));
    toast('Partnership Scout is scoring ecosystem signals…');
    setTimeout(() => {
      if (!additions.length) { toast('Discovery complete. All current matches are already in the pipeline.'); return; }
      state.leads.unshift(...additions); recordActivity('◇', `Partnership Scout added ${additions.length} qualified leads`); navigate('Partnerships'); toast(`Discovery complete: ${additions.length} leads added to the pipeline.`);
    }, 700);
  });
  $$('[data-save-event]').forEach((button) => button.addEventListener('click', () => { const event = state.events.find((item) => item.id === Number(button.dataset.saveEvent)); event.saved = !event.saved; recordActivity('□', `${event.saved ? 'Saved' : 'Removed'} event: ${event.name}`); navigate('Events'); toast(event.saved ? 'Event saved with deadline reminders.' : 'Event removed from your plan.'); }));
  $('#refreshEvents')?.addEventListener('click', () => toast('Event matches refreshed from your goals and budget.'));
  $$('[data-customer-task]').forEach((button) => button.addEventListener('click', () => { const customer = state.customers.find((item) => item.id === Number(button.dataset.customerTask)); state.tasks.unshift({ id: Date.now(), title: `${customer.action}: ${customer.name}`, meta: 'Customer Advocate · Due in 2 days', type: customer.health === 'At risk' ? 'Urgent' : 'Review', icon: '♙', owner: 'AM' }); recordActivity('♙', `Created customer action for ${customer.name}`); persist(); $('#taskBadge').textContent = state.tasks.length; toast('Customer intervention added to the work queue.'); }));
  $('#syncCustomers')?.addEventListener('click', () => toast('Customer health sources synced successfully.'));
  $$('[data-approve-invoice]').forEach((button) => button.addEventListener('click', () => { const invoice = state.invoices.find((item) => item.id === Number(button.dataset.approveInvoice)); invoice.status = 'Awaiting second approval'; recordActivity('$', `Invoice approved: ${invoice.vendor} ${money(invoice.amount)}`); navigate('Finance'); toast('First approval recorded. A second reviewer was notified.'); }));
  $('#uploadInvoice')?.addEventListener('click', () => toast('Invoice intake will extract fields and match the related contract.'));
  $('#exportReport')?.addEventListener('click', () => { const report = `Wave outcome report\nApproved outcomes: ${state.completed}\nEstimated time saved: 41h\nApproval rate: 92%`; const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([report], { type: 'text/plain' })); link.download = 'wave-outcome-report.txt'; link.click(); URL.revokeObjectURL(link.href); toast('Outcome report exported.'); });
  $('#resetDemo')?.addEventListener('click', () => { try { window.localStorage.removeItem(STATE_KEY); } catch (error) { console.warn(error); } toast('Demo data reset. Reloading…'); setTimeout(() => location.reload(), 700); });
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
  updateApprovalBadge();
  if (page === 'Command Center') attachHomeEvents(); else attachModuleEvents(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTaskDialog() {
  $('#taskDate').value = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  if (typeof $('#taskDialog').showModal === 'function') $('#taskDialog').showModal();
  else $('#taskDialog').setAttribute('open', '');
  setTimeout(() => $('#taskTitle').focus(), 50);
}

function closeTaskDialog() {
  const dialog = $('#taskDialog');
  $('#taskForm').reset();
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
}

function attachHomeEvents() {
  renderTasks(); renderAgents(); renderActivity(); updateApprovalBadge();
  $('#taskFilters')?.addEventListener('click', (event) => { if (!event.target.dataset.filter) return; currentFilter = event.target.dataset.filter; $$('#taskFilters button').forEach((button) => button.classList.toggle('active', button === event.target)); renderTasks(); });
  $$('[data-open-task]').forEach((button) => button.addEventListener('click', openTaskDialog));
  $$('[data-page-link]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.pageLink)));
  $('#draftPost')?.addEventListener('click', () => navigate('Content Studio'));
  $('#scanCommunity')?.addEventListener('click', () => navigate('Community'));
  $('#findLeads')?.addEventListener('click', () => navigate('Partnerships'));
  $('#manageAgents')?.addEventListener('click', () => navigate('Settings'));
}

$$('.nav-item[data-page]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.page)));
$$('[data-close-task]').forEach((button) => button.addEventListener('click', closeTaskDialog));
$('#taskForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const owner = $('#taskOwner').value;
  const title = $('#taskTitle').value.trim();
  state.tasks.unshift({ id: Date.now(), title, meta: `${owner} · Due ${$('#taskDate').value}`, type: $('#taskPriority').value, icon: '✓', owner: owner.split(' ').map((word) => word[0]).join('').slice(0, 2) });
  recordActivity('＋', `Created: ${title}`);
  closeTaskDialog();
  if (currentPage === 'Tasks') navigate('Tasks'); else if (currentPage === 'Command Center') { renderTasks(); renderActivity(); }
  toast('Task created and routed successfully.');
});


function closeContentDialog() {
  editingContentId = null;
  $('#contentForm').reset();
  const dialog = $('#contentDialog'); if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
}
$$('[data-close-content]').forEach((button) => button.addEventListener('click', closeContentDialog));
$$('[data-close-preview]').forEach((button) => button.addEventListener('click', () => { const dialog = $('#contentPreviewDialog'); if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); }));
$('#contentForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const item = state.content.find((content) => content.id === editingContentId);
  if (!item) return;
  item.title = $('#contentTitle').value.trim(); item.copy = $('#contentCopy').value.trim(); item.channel = $('#contentChannel').value; item.status = $('#contentStatus').value; item.date = $('#contentDate').value.trim() || 'Unscheduled';
  recordActivity('✦', `Updated content: ${item.title}`); closeContentDialog(); if (currentPage === 'Content Studio') navigate('Content Studio'); toast('Content changes saved.');
});

const commandDialog = $('#commandDialog');
const pages = ['Command Center', ...Object.keys(views)];
function renderCommands(query) {
  const matches = pages.filter((page) => page.toLowerCase().includes(query.toLowerCase()));
  $('#commandResults').innerHTML = `<div class="command-group"><div class="command-label">Navigate</div>${matches.map((page) => `<button class="command-item" data-command="${page}"><span>→</span><div><b>${page}</b><small>Open workspace module</small></div></button>`).join('') || '<div class="command-label">No matching commands</div>'}</div>`;
  $$('[data-command]').forEach((button) => button.addEventListener('click', () => { if (typeof commandDialog.close === 'function') commandDialog.close(); else commandDialog.removeAttribute('open'); navigate(button.dataset.command); }));
}
function openCommands() { if (typeof commandDialog.showModal === 'function') commandDialog.showModal(); else commandDialog.setAttribute('open', ''); $('#commandInput').value = ''; renderCommands(''); setTimeout(() => $('#commandInput').focus(), 20); }
$('#searchTrigger').addEventListener('click', openCommands);
$('#commandInput').addEventListener('input', (event) => renderCommands(event.target.value));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openCommands(); } });
$('#notificationButton').addEventListener('click', () => $('#notificationPanel').classList.toggle('show'));
$('#closeNotifications').addEventListener('click', () => $('#notificationPanel').classList.remove('show'));
$('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));

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
window.WAVE_READY = true;
document.documentElement.classList.add('wave-ready');
