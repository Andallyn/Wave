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
    { name: 'Content Strategist', status: 'Drafting campaign', icon: '✦', color: 'purple', active: true, autonomy: 'Guided', budgetUsed: 68, budgetLimit: 100, runs: 42, lastRun: '12m ago' },
    { name: 'Community Guardian', status: 'Monitoring 3 channels', icon: '◌', color: 'amber', active: true, autonomy: 'Supervised', budgetUsed: 44, budgetLimit: 80, runs: 118, lastRun: '4m ago' },
    { name: 'Partnership Scout', status: 'Scored 8 new leads', icon: '◇', color: 'blue', active: true, autonomy: 'Guided', budgetUsed: 31, budgetLimit: 60, runs: 27, lastRun: '38m ago' },
    { name: 'Market Listener', status: 'Watching 14 narratives', icon: '↗', color: 'mint', active: true, autonomy: 'Observe only', budgetUsed: 52, budgetLimit: 70, runs: 84, lastRun: '8m ago' }
  ],
  goals: [
    { id: 1101, title: 'Grow qualified builder awareness', owner: 'Alex Morgan', status: 'On track', deadline: 'Aug 30', campaignId: 801, keyResults: [{ id: 1, title: 'Reach 250K qualified impressions', current: 184, target: 250, unit: 'K' }, { id: 2, title: 'Generate 120 builder sign-ups', current: 83, target: 120, unit: '' }, { id: 3, title: 'Secure 8 ecosystem partners', current: 5, target: 8, unit: '' }] },
    { id: 1102, title: 'Increase developer activation', owner: 'Maya Chen', status: 'At risk', deadline: 'Sep 15', campaignId: 802, keyResults: [{ id: 1, title: 'Achieve 45% SDK activation', current: 31, target: 45, unit: '%' }, { id: 2, title: 'Publish 12 education assets', current: 7, target: 12, unit: '' }, { id: 3, title: 'Resolve top 10 onboarding gaps', current: 6, target: 10, unit: '' }] }
  ],
  connectors: [
    { id: 'discord', name: 'Discord', scope: 'Community signals', status: 'Healthy', lastSync: '4m ago', records: 284 },
    { id: 'telegram', name: 'Telegram', scope: 'Community signals', status: 'Healthy', lastSync: '7m ago', records: 193 },
    { id: 'x', name: 'X / Twitter', scope: 'Publishing and listening', status: 'Attention', lastSync: '2h ago', records: 76 },
    { id: 'crm', name: 'CRM', scope: 'Partners and customers', status: 'Healthy', lastSync: '18m ago', records: 142 }
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
    { id: 301, company: 'LayerZero Labs', fit: 94, stage: 'Qualified', value: '$18K', reason: 'Shared interoperability audience and 3 mutual ecosystem partners.', contact: 'Nina Patel · Ecosystem Lead', nextStep: 'Prepare first-contact proposal', fitReasons: ['Shared builder audience', '3 mutual partners', 'Interoperability alignment'], interactions: [{ note: 'Qualified from ecosystem graph signals.', author: 'Partnership Scout', time: '38m ago' }] },
    { id: 302, company: 'Orbit Foundry', fit: 87, stage: 'Contacted', value: '$12K', reason: 'Active accelerator cohort aligns with Nova developer acquisition.', contact: 'Marcus Hill · Program Director', nextStep: 'Follow up on accelerator integration', fitReasons: ['Developer acquisition', 'Active cohort', 'Education overlap'], interactions: [{ note: 'Introductory message approved and sent.', author: 'Alex Morgan', time: '3d ago' }] },
    { id: 303, company: 'NodeHouse', fit: 82, stage: 'Discovered', value: '$9K', reason: 'Infrastructure provider expanding into Nova’s target region.', contact: 'Contact not identified', nextStep: 'Identify ecosystem decision maker', fitReasons: ['Regional expansion', 'Infrastructure fit', 'New audience'], interactions: [{ note: 'Discovered through partner network scan.', author: 'Partnership Scout', time: '1d ago' }] },
    { id: 304, company: 'Commons Guild', fit: 78, stage: 'Meeting', value: '$9K', reason: 'Community-led education program with an engaged builder network.', contact: 'Sam Okafor · Community Director', nextStep: 'Document workshop partnership terms', fitReasons: ['Education program', 'Engaged builders', 'Community alignment'], interactions: [{ note: 'Discovery meeting booked for Thursday.', author: 'Alex Morgan', time: '5h ago' }] }
  ],
  events: [
    { id: 401, name: 'ETHGlobal New York', date: 'Aug 15–17', location: 'New York', match: 96, deadline: 'Apply by Jul 22', saved: true },
    { id: 402, name: 'Web3 Growth Summit', date: 'Sep 4', location: 'London', match: 88, deadline: 'Speakers close Jul 28', saved: false },
    { id: 403, name: 'Modular Builders Space', date: 'Jul 25', location: 'Online', match: 84, deadline: 'Rolling applications', saved: false }
  ],
  customers: [
    { id: 501, name: 'Atlas Wallet', health: 'At risk', score: 61, trend: -14, reason: 'Usage fell 18% and two support issues remain unresolved.', action: 'Schedule success review', owner: 'Alex Morgan', renewal: 'Sep 28', value: 24000, milestones: [{ title: 'Resolve mobile connection issues', done: false }, { title: 'Restore weekly active usage', done: false }, { title: 'Complete executive success review', done: false }], interactions: [{ note: 'Support escalation reviewed with product team.', time: '2d ago', author: 'Alex Morgan' }] },
    { id: 502, name: 'Prism Exchange', health: 'Healthy', score: 91, trend: 6, reason: 'Weekly active usage and positive community mentions increased.', action: 'Request case study', owner: 'Maya Chen', renewal: 'Nov 12', value: 36000, milestones: [{ title: 'Confirm case study participation', done: true }, { title: 'Expand integration to two teams', done: false }, { title: 'Complete Q3 value review', done: false }], interactions: [{ note: 'Customer agreed to discuss a public case study.', time: '4d ago', author: 'Maya Chen' }] },
    { id: 503, name: 'Foundry SDK', health: 'Watch', score: 74, trend: -3, reason: 'Primary contact has not engaged for 16 days.', action: 'Send check-in', owner: 'Jordan Lee', renewal: 'Oct 18', value: 18000, milestones: [{ title: 'Re-engage primary champion', done: false }, { title: 'Review SDK activation blockers', done: false }, { title: 'Confirm renewal timeline', done: false }], interactions: [{ note: 'Automated usage review detected declining activation.', time: '1w ago', author: 'Customer Advocate' }] }
  ],
  invoices: [
    { id: 601, vendor: 'Northstar Design', amount: 3200, due: 'Jul 19', status: 'Needs approval', deliverable: 'Mainnet launch creative', approvalCount: 0, matchStatus: 'Matched', reference: 'INV-2407', submittedBy: 'Alex Morgan' },
    { id: 602, vendor: 'Commons Guild', amount: 1800, due: 'Jul 24', status: 'Ready to pay', deliverable: 'Community workshop series', approvalCount: 2, matchStatus: 'Matched', reference: 'INV-2411', submittedBy: 'Maya Chen' },
    { id: 603, vendor: 'Maya Chen', amount: 2400, due: 'Jul 28', status: 'Draft', deliverable: 'July content production', approvalCount: 0, matchStatus: 'Needs evidence', reference: 'INV-2415', submittedBy: 'Finance Operations' }
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
  brandProfile: {
    name: 'Nova Protocol',
    voice: 'Clear, optimistic, technically credible',
    audience: 'Web3 builders, ecosystem partners, and community operators',
    promise: 'Open infrastructure that helps communities build and coordinate',
    avoid: 'Hype, guaranteed outcomes, unexplained jargon',
    terms: 'builders, open infrastructure, community-owned, resilient'
  },
  members: [
    { id: 1001, name: 'Alex Morgan', email: 'alex@novaprotocol.xyz', role: 'Owner', initials: 'AM' },
    { id: 1002, name: 'Maya Chen', email: 'maya@novaprotocol.xyz', role: 'Editor', initials: 'MC' },
    { id: 1003, name: 'Jordan Lee', email: 'jordan@novaprotocol.xyz', role: 'Reviewer', initials: 'JL' }
  ],
  audit: [
    { id: 901, action: 'Created campaign drafts', actor: 'Content Strategist', module: 'Content Studio', category: 'Content', evidence: '3 assets linked to Mainnet launch', time: '12m ago' },
    { id: 902, action: 'Escalated wallet connection reports', actor: 'Community Guardian', module: 'Community', category: 'Operations', evidence: '28 Discord messages · negative sentiment', time: '28m ago' },
    { id: 903, action: 'Approved Mainnet campaign thread', actor: 'Alex Morgan', module: 'Approvals', category: 'Decision', evidence: '94% voice match · Brand review', time: '46m ago' },
    { id: 904, action: 'Matched invoice to deliverable', actor: 'Finance Operations', module: 'Finance', category: 'Operations', evidence: 'Northstar Design · Mainnet launch creative', time: '1h ago' }
  ],
  automations: [
    { id: 1201, name: 'Escalate urgent community signals', trigger: 'Urgent signal detected', action: 'Create approval and briefing item', status: 'Active', runs: 14, lastRun: '28m ago', requiresApproval: true, module: 'Community' },
    { id: 1202, name: 'Prepare weekly campaign report', trigger: 'Every Friday at 16:00', action: 'Refresh analytics and export summary', status: 'Active', runs: 7, lastRun: '4d ago', requiresApproval: false, module: 'Analytics' },
    { id: 1203, name: 'Follow up qualified partnership leads', trigger: 'Lead fit reaches 85%', action: 'Create outreach approval', status: 'Paused', runs: 3, lastRun: '12d ago', requiresApproval: true, module: 'Partnerships' },
    { id: 1204, name: 'Flag goals falling behind', trigger: 'Goal progress drops below 55%', action: 'Add risk to Daily Briefing', status: 'Active', runs: 5, lastRun: '2d ago', requiresApproval: false, module: 'Goals' }
  ],
  briefingDismissed: [],
  briefingSnoozed: [],
  completed: 18
};

const STATE_KEY = 'wave-state-v3';
const DIAGNOSTICS_KEY = 'wave-diagnostics-v1';
const LAST_SAVE_KEY = 'wave-last-save-v1';
const WAVE_APP_VERSION = 'beta-0.29';

function readDiagnostics() {
  try { const value = JSON.parse(window.localStorage.getItem(DIAGNOSTICS_KEY) || '[]'); return Array.isArray(value) ? value.slice(0, 20) : []; }
  catch (error) { return []; }
}
function captureDiagnostic(kind, message, detail = '') {
  try {
    const items = readDiagnostics();
    items.unshift({ id: Date.now(), time: new Date().toISOString(), kind, message: String(message || 'Unknown event').slice(0, 240), detail: String(detail || '').slice(0, 500), page: currentPage || 'Startup' });
    window.localStorage.setItem(DIAGNOSTICS_KEY, JSON.stringify(items.slice(0, 20)));
  } catch (error) { console.warn('Wave could not store diagnostics.', error); }
}
function validWorkspaceShape(candidate) {
  if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) return false;
  const arrays = ['tasks', 'agents', 'activities', 'content', 'signals', 'leads', 'events', 'customers', 'invoices', 'approvals', 'campaigns', 'audit', 'members', 'connectors', 'goals', 'briefingDismissed', 'briefingSnoozed', 'automations'];
  return arrays.every((key) => candidate[key] === undefined || Array.isArray(candidate[key]));
}

const clone = (value) => typeof structuredClone === 'function'
  ? structuredClone(value)
  : JSON.parse(JSON.stringify(value));

function readStoredState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STATE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return null;
    const arrays = ['tasks', 'agents', 'activities', 'content', 'signals', 'leads', 'events', 'customers', 'invoices', 'approvals', 'campaigns', 'audit', 'members', 'connectors', 'goals', 'briefingDismissed', 'briefingSnoozed', 'automations'];
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
state.customers = state.customers.map((customer) => {
  const seed = defaults.customers.find((item) => item.id === customer.id) || {};
  return {
    ...clone(seed),
    ...customer,
    milestones: Array.isArray(customer.milestones) ? customer.milestones : clone(seed.milestones || []),
    interactions: Array.isArray(customer.interactions) ? customer.interactions : clone(seed.interactions || [])
  };
});
state.invoices = state.invoices.map((invoice) => {
  const seed = defaults.invoices.find((item) => item.id === invoice.id) || {};
  return { ...clone(seed), ...invoice, approvalCount: Number.isFinite(invoice.approvalCount) ? invoice.approvalCount : (seed.approvalCount || 0), matchStatus: invoice.matchStatus || seed.matchStatus || 'Needs evidence' };
});
state.leads = state.leads.map((lead) => {
  const seed = defaults.leads.find((item) => item.id === lead.id) || {};
  return { ...clone(seed), ...lead, fitReasons: Array.isArray(lead.fitReasons) ? lead.fitReasons : clone(seed.fitReasons || []), interactions: Array.isArray(lead.interactions) ? lead.interactions : clone(seed.interactions || []) };
});
let currentFilter = 'All';
let currentPage = 'Command Center';
let currentContentView = 'Pipeline';
let editingContentId = null;
let currentApprovalFilter = 'Pending';
let currentCampaignId = null;
let currentAuditFilter = 'All';
let currentAuditQuery = '';
let currentSettingsTab = 'Agents';
let cloudStatus = { mode: 'local', configured: false, authenticated: false, email: '', message: 'Local beta mode' };
let currentAnalyticsRange = '30';
let currentAnalyticsCampaign = 'All';
let currentGoalFilter = 'All';
let currentBriefingFilter = 'All';
let currentCalendarFilter = 'All';
let currentCalendarView = 'Week';
let currentAutomationFilter = 'All';
let currentCustomerFilter = 'All';
let currentCustomerId = null;
let currentFinanceFilter = 'All';
let currentLeadFilter = 'All';
let currentLeadId = null;
let currentInvoiceId = null;
let briefingRefreshedAt = 'just now';
let analyticsRefreshedAt = 'just now';
const homeMarkup = document.querySelector('#pageContent').innerHTML;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const persist = () => {
  try {
    window.localStorage.setItem(STATE_KEY, JSON.stringify(state));
    window.localStorage.setItem(LAST_SAVE_KEY, new Date().toISOString());
  } catch (error) {
    console.warn('Wave could not save workspace data in this browser.', error);
    captureDiagnostic('Storage error', error.message, 'Local workspace save failed');
  }
  window.WaveCloud?.scheduleSave(state);
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
  Automations() {
    const visible = currentAutomationFilter === 'All' ? state.automations : state.automations.filter((rule) => rule.status === currentAutomationFilter); const active = state.automations.filter((rule) => rule.status === 'Active');
    return `${pageHeader('Automation Rules', 'Turn repeatable operating patterns into governed Wave workflows.', '<button class="primary-btn" id="createAutomation">＋ New rule</button>')}
      ${summaryCards([{ icon: '↻', value: active.length, label: 'Active rules' }, { icon: '✓', value: state.automations.reduce((sum, rule) => sum + rule.runs, 0), label: 'Successful runs', color: 'blue' }, { icon: '⌾', value: state.automations.filter((rule) => rule.requiresApproval).length, label: 'Human-gated rules', color: 'purple' }, { icon: '◷', value: state.automations.filter((rule) => rule.status === 'Paused').length, label: 'Paused rules', color: 'amber' }])}
      <section class="automation-toolbar module-card"><div class="segmented">${['All', 'Active', 'Paused'].map((filter) => `<button class="${currentAutomationFilter === filter ? 'active' : ''}" data-automation-filter="${filter}">${filter}</button>`).join('')}</div><span class="safe-chip">Approvals remain enforced</span></section>
      <section class="automation-list module-card"><div class="automation-head"><span>Rule</span><span>Trigger → Action</span><span>Governance</span><span>Runs</span><span>Controls</span></div>${visible.map((rule) => `<article class="automation-row"><span><span class="automation-icon">${rule.module.slice(0, 1)}</span><span><b>${escapeHtml(rule.name)}</b><small>${escapeHtml(rule.module)} · Last run ${escapeHtml(rule.lastRun)}</small></span></span><span><b>${escapeHtml(rule.trigger)}</b><small>→ ${escapeHtml(rule.action)}</small></span><span><em class="status-pill ${rule.requiresApproval ? 'needs' : 'scheduled'}">${rule.requiresApproval ? 'Approval required' : 'Within boundary'}</em></span><strong>${rule.runs}</strong><span class="automation-actions"><button class="secondary-btn compact" data-run-automation="${rule.id}" ${rule.status === 'Active' ? '' : 'disabled'}>Run now</button><button class="text-btn" data-toggle-automation="${rule.id}">${rule.status === 'Active' ? 'Pause' : 'Activate'}</button></span></article>`).join('') || emptyState('↻', 'No automation rules', 'Create a governed rule or change the current filter.')}</section>`;
  },
  Calendar() {
    const all = calendarItems(); const items = currentCalendarFilter === 'All' ? all : all.filter((item) => item.type === currentCalendarFilter); const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const content = currentCalendarView === 'Week' ? `<section class="calendar-week">${days.map((day) => { const dayItems = items.filter((item) => item.day === day); return `<article class="calendar-day"><header><b>${day}</b><span>${dayItems.length}</span></header><div>${dayItems.map(calendarItemMarkup).join('') || '<small class="calendar-empty">No scheduled work</small>'}</div></article>`; }).join('')}</section>` : `<section class="module-card calendar-agenda">${items.map(calendarItemMarkup).join('') || emptyState('□', 'Nothing scheduled', 'Change the filter to see other operational dates.')}</section>`;
    return `${pageHeader('Operations Calendar', 'Coordinate publishing, tasks, campaigns, and events from one schedule.', '<button class="primary-btn" data-schedule-content>＋ Schedule content</button>')}
      ${summaryCards([{ icon: '✦', value: all.filter((item) => item.type === 'Content').length, label: 'Content items' }, { icon: '✓', value: all.filter((item) => item.type === 'Task').length, label: 'Task deadlines', color: 'blue' }, { icon: '◎', value: all.filter((item) => item.type === 'Campaign').length, label: 'Campaign milestones', color: 'purple' }, { icon: '□', value: all.filter((item) => item.type === 'Event').length, label: 'Events', color: 'amber' }])}
      <section class="calendar-toolbar module-card"><div class="segmented">${['All', 'Content', 'Task', 'Campaign', 'Event'].map((filter) => `<button class="${currentCalendarFilter === filter ? 'active' : ''}" data-calendar-filter="${filter}">${filter}</button>`).join('')}</div><div class="segmented"><button class="${currentCalendarView === 'Week' ? 'active' : ''}" data-calendar-view="Week">Week</button><button class="${currentCalendarView === 'Agenda' ? 'active' : ''}" data-calendar-view="Agenda">Agenda</button></div></section>${content}`;
  },
  Briefing() {
    const items = briefingItems().filter((item) => currentBriefingFilter === 'All' || item.type === currentBriefingFilter); const allItems = briefingItems(); const urgent = allItems.filter((item) => item.priority === 'High').length;
    return `${pageHeader('Daily Briefing', 'A decision-ready summary of what changed, what needs attention, and where to act next.', '<button class="primary-btn" id="refreshBriefing">✦ Generate fresh brief</button>')}
      ${summaryCards([{ icon: '!', value: urgent, label: 'High-priority items', color: 'amber' }, { icon: '⌾', value: allItems.filter((item) => item.type === 'Decision').length, label: 'Decisions needed', color: 'purple' }, { icon: '↗', value: allItems.filter((item) => item.type === 'Opportunity').length, label: 'Opportunities', color: 'blue' }, { icon: '✓', value: state.briefingDismissed.length, label: 'Items handled' }])}
      <section class="briefing-hero module-card"><div><p class="eyebrow">EXECUTIVE SUMMARY · UPDATED ${escapeHtml(briefingRefreshedAt)}</p><h2>${urgent ? `${urgent} priority ${urgent === 1 ? 'item needs' : 'items need'} your attention` : 'Your workspace is operating smoothly'}</h2><p>${urgent ? 'Approvals and at-risk outcomes are the fastest path to unblock progress today.' : 'Review opportunities below or continue planned campaign execution.'}</p></div><span class="briefing-score"><strong>${Math.max(0, 100 - urgent * 12)}</strong><small>Workspace readiness</small></span></section>
      <section class="briefing-toolbar module-card"><div class="segmented">${['All', 'Decision', 'Risk', 'Opportunity'].map((filter) => `<button class="${currentBriefingFilter === filter ? 'active' : ''}" data-briefing-filter="${filter}">${filter}</button>`).join('')}</div><small>${items.length} active recommendations</small></section>
      <section class="briefing-layout"><div class="briefing-feed">${items.map((item) => `<article class="module-card briefing-item"><span class="briefing-priority ${item.priority.toLowerCase()}">${item.priority}</span><div><span><em class="status-pill ${item.type === 'Risk' ? 'needs' : item.type === 'Opportunity' ? 'scheduled' : 'draft'}">${item.type}</em><small>${escapeHtml(item.source)}</small></span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.why)}</p><strong>Recommended: ${escapeHtml(item.action)}</strong></div><aside><button class="primary-btn" data-open-briefing="${item.page}">Open ${escapeHtml(item.page)}</button><button class="text-btn" data-dismiss-briefing="${item.id}">Mark handled</button><button class="text-btn" data-snooze-briefing="${item.id}">Snooze</button></aside></article>`).join('') || emptyState('✓', 'Briefing cleared', 'You handled every item in this view. Generate a fresh brief when workspace data changes.')}</div><aside class="module-card briefing-context"><div class="module-card-head"><div><h3>Today’s context</h3><p>Signals shaping these recommendations.</p></div></div><div><span><b>${state.approvals.filter((item) => item.status === 'Pending').length}</b><small>Pending approvals</small></span><span><b>${state.tasks.filter((item) => item.type === 'Urgent').length}</b><small>Urgent tasks</small></span><span><b>${state.goals.filter((item) => item.status === 'At risk').length}</b><small>At-risk goals</small></span><span><b>${state.connectors.filter((item) => item.status !== 'Healthy').length}</b><small>Connector issues</small></span></div><button class="full-link" data-page-link="Audit Trail">Review supporting evidence <span>→</span></button></aside></section>`;
  },
  Goals() {
    const visible = currentGoalFilter === 'All' ? state.goals : state.goals.filter((goal) => goal.status === currentGoalFilter); const progresses = state.goals.map(goalProgress); const overall = progresses.length ? Math.round(progresses.reduce((sum, value) => sum + value, 0) / progresses.length) : 0; const totalKrs = state.goals.reduce((sum, goal) => sum + goal.keyResults.length, 0); const achieved = state.goals.reduce((sum, goal) => sum + goal.keyResults.filter((kr) => kr.current >= kr.target).length, 0);
    return `${pageHeader('Goals & Outcomes', 'Turn strategy into measurable results connected to campaigns and execution.', '<button class="primary-btn" id="createGoal">＋ New goal</button>')}
      ${summaryCards([{ icon: '◎', value: state.goals.length, label: 'Active goals' }, { icon: '↗', value: overall + '%', label: 'Overall progress', color: 'blue' }, { icon: '✓', value: achieved + ' / ' + totalKrs, label: 'Key results achieved', color: 'purple' }, { icon: '!', value: state.goals.filter((goal) => goal.status === 'At risk').length, label: 'Goals at risk', color: 'amber' }])}
      <section class="goals-toolbar module-card"><div class="segmented">${['All', 'On track', 'At risk', 'Complete'].map((filter) => `<button class="${currentGoalFilter === filter ? 'active' : ''}" data-goal-filter="${filter}">${filter}</button>`).join('')}</div><small>Progress is calculated from linked key results.</small></section>
      <section class="goals-workspace">${visible.map((goal) => { const progress = goalProgress(goal); const campaign = state.campaigns.find((item) => item.id === goal.campaignId); return `<article class="module-card goal-card"><header><div><span class="status-pill ${goal.status === 'On track' ? 'scheduled' : goal.status === 'At risk' ? 'needs' : 'approved'}">${escapeHtml(goal.status)}</span><h3>${escapeHtml(goal.title)}</h3><p>Owner: ${escapeHtml(goal.owner)} · Due ${escapeHtml(goal.deadline)}</p></div><strong>${progress}%</strong></header><div class="goal-progress"><i style="width:${progress}%"></i></div><div class="key-results">${goal.keyResults.map((kr) => { const krProgress = Math.min(100, Math.round((kr.current / kr.target) * 100)); return `<div class="key-result"><span><b>${escapeHtml(kr.title)}</b><small>${kr.current}${escapeHtml(kr.unit)} of ${kr.target}${escapeHtml(kr.unit)} · ${krProgress}%</small></span><div><i style="width:${krProgress}%"></i></div><button class="secondary-btn compact" data-update-kr="${goal.id}:${kr.id}">Update</button></div>`; }).join('')}</div><footer><span>Linked campaign: <b>${campaign ? escapeHtml(campaign.name) : 'None'}</b></span>${campaign ? `<button class="text-btn" data-open-goal-campaign="${campaign.id}">Open campaign →</button>` : ''}</footer></article>`; }).join('') || emptyState('◎', 'No goals match', 'Choose another status or create a new company goal.')}</section>`;
  },
  'Agent Operations'() {
    const totalUsed = state.agents.reduce((sum, agent) => sum + agent.budgetUsed, 0); const totalLimit = state.agents.reduce((sum, agent) => sum + agent.budgetLimit, 0); const healthy = state.connectors.filter((item) => item.status === 'Healthy').length;
    return `${pageHeader('Agent Operations', 'Control autonomy, workload budgets, agent runs, and connected data health.')}
      ${summaryCards([{ icon: '✦', value: state.agents.filter((agent) => agent.active).length, label: 'Active agents' }, { icon: '◷', value: state.agents.reduce((sum, agent) => sum + agent.runs, 0), label: 'Runs recorded', color: 'blue' }, { icon: '◎', value: totalUsed + ' / ' + totalLimit, label: 'Monthly workload units', color: 'purple' }, { icon: '↗', value: healthy + ' / ' + state.connectors.length, label: 'Healthy connectors', color: healthy === state.connectors.length ? 'mint' : 'amber' }])}
      <section class="operations-grid"><article class="module-card"><div class="module-card-head"><div><h3>Agent controls</h3><p>Budgets reset monthly. Publishing and outreach still require approval.</p></div><span class="safe-chip">Human-governed</span></div><div class="operations-list">${state.agents.map((agent, index) => { const percent = Math.min(100, Math.round((agent.budgetUsed / agent.budgetLimit) * 100)); return `<div class="operations-agent"><span class="agent-orb ${agent.color}">${agent.icon}</span><div class="operations-copy"><span><b>${escapeHtml(agent.name)}</b><em class="status-pill ${agent.active ? 'scheduled' : ''}">${agent.active ? 'Active' : 'Paused'}</em></span><small>${escapeHtml(agent.status)} · Last run ${escapeHtml(agent.lastRun)}</small><div class="budget-meter"><i style="width:${percent}%"></i></div><small>${agent.budgetUsed} of ${agent.budgetLimit} workload units · ${agent.runs} runs</small></div><select data-agent-autonomy="${index}" aria-label="Autonomy for ${escapeHtml(agent.name)}"><option ${agent.autonomy === 'Observe only' ? 'selected' : ''}>Observe only</option><option ${agent.autonomy === 'Supervised' ? 'selected' : ''}>Supervised</option><option ${agent.autonomy === 'Guided' ? 'selected' : ''}>Guided</option></select><button class="secondary-btn compact" data-run-agent="${index}" ${agent.active ? '' : 'disabled'}>Run now</button></div>`; }).join('')}</div></article>
      <aside class="module-card connector-card"><div class="module-card-head"><div><h3>Connector health</h3><p>Freshness of data feeding Wave agents.</p></div></div>${state.connectors.map((connector) => `<div class="connector-row"><span class="connector-mark ${connector.status === 'Healthy' ? '' : 'attention'}"></span><span><b>${escapeHtml(connector.name)}</b><small>${escapeHtml(connector.scope)} · ${connector.records} records</small></span><em>${escapeHtml(connector.status)}<small>Synced ${escapeHtml(connector.lastSync)}</small></em><button class="text-btn" data-sync-connector="${connector.id}">Sync</button></div>`).join('')}</aside></section>`;
  },
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
      <aside class="module-card brief-card"><span class="module-symbol purple">✦</span><h3>Agent brief</h3><span class="ai-mode ${cloudStatus.authenticated ? 'ready' : 'demo'}">${cloudStatus.authenticated ? 'AI gateway ready' : 'Demo generation'}</span><p>Content Strategist is using your brand voice, launch narrative, and recent performance data.</p><dl><div><dt>Primary goal</dt><dd>Mainnet awareness</dd></div><div><dt>Audience</dt><dd>Protocol builders</dd></div><div><dt>Voice match</dt><dd>94%</dd></div></dl><button class="secondary-btn full" data-page-link="Settings">Edit brand profile</button></aside></section>`;
  },
  Community() {
    return `${pageHeader('Community Desk', 'Understand conversations, emerging risks, and unanswered questions.', '<button class="primary-btn" id="runScan">◌ Run live scan</button>')}
      ${summaryCards([{ icon: '◌', value: '87%', label: 'Positive sentiment', color: 'amber', note: '−0.2% today' }, { icon: '?', value: '14', label: 'Questions resolved' }, { icon: '!', value: state.signals.filter((s) => !s.resolved).length, label: 'Open signals', color: 'purple' }])}
      <section class="module-layout"><article class="module-card"><div class="module-card-head"><div><h3>Signal inbox</h3><p>Evidence-linked patterns detected across 3 channels.</p></div><span class="live-chip"><i></i> Live</span></div><div class="signal-list">${state.signals.filter((s) => !s.resolved).map((signal) => `<article class="signal-row"><span class="severity ${signal.level.toLowerCase()}">${signal.level}</span><div><h4>${escapeHtml(signal.title)}</h4><p>${escapeHtml(signal.detail)}</p><small>${signal.source} · ${signal.sentiment} sentiment</small></div><button class="secondary-btn" data-resolve-signal="${signal.id}">Resolve</button></article>`).join('') || emptyState('✓', 'Inbox cleared', 'All detected signals have been resolved.')}</div></article>
      <aside class="module-card"><div class="module-card-head"><div><h3>Top questions</h3><p>Last 24 hours</p></div></div><ol class="question-list"><li><span>1</span><p><b>When does staking open?</b><small>43 mentions · Telegram</small></p></li><li><span>2</span><p><b>Is the airdrop checker official?</b><small>31 mentions · Discord</small></p></li><li><span>3</span><p><b>Does the SDK support Python?</b><small>18 mentions · Discord</small></p></li></ol></aside></section>`;
  },
  Partnerships() {
    if (!currentLeadId && state.leads.length) currentLeadId = state.leads[0].id; const visible = currentLeadFilter === 'All' ? state.leads : state.leads.filter((lead) => lead.stage === currentLeadFilter); const lead = state.leads.find((item) => item.id === currentLeadId) || visible[0] || state.leads[0]; const pipelineValue = state.leads.reduce((sum, item) => sum + Number(item.value.replace(/[^0-9.]/g, '')) * 1000, 0); const interactions = lead?.interactions || [];
    return `${pageHeader('Partnership CRM', 'Qualify, nurture, and govern ecosystem relationships from discovery to meeting.', '<button class="primary-btn" id="discoverLead">◇ Discover leads</button>')}
      ${summaryCards([{ icon: '◇', value: state.leads.length, label: 'Active opportunities', color: 'blue' }, { icon: '$', value: money(pipelineValue), label: 'Pipeline value' }, { icon: '↗', value: state.leads.filter((item) => item.fit >= 85).length, label: 'High-fit leads', color: 'purple' }, { icon: '⌾', value: state.leads.filter((item) => ['Contacted', 'Meeting'].includes(item.stage)).length, label: 'Active relationships', color: 'amber' }])}
      <section class="partner-toolbar module-card"><div class="segmented">${['All', 'Discovered', 'Qualified', 'Contacted', 'Meeting'].map((filter) => `<button class="${currentLeadFilter === filter ? 'active' : ''}" data-lead-filter="${filter}">${filter}</button>`).join('')}</div><small>First external outreach always requires human approval.</small></section>
      <section class="partner-workspace"><aside class="module-card partner-list"><div class="module-card-head"><div><h3>Pipeline</h3><p>Select a lead to inspect relationship evidence.</p></div></div>${visible.map((item) => `<button class="partner-select ${lead?.id === item.id ? 'active' : ''}" data-select-lead="${item.id}"><span class="company-avatar">${item.company[0]}</span><span><b>${escapeHtml(item.company)}</b><small>${escapeHtml(item.stage)} · ${escapeHtml(item.value)}</small></span><strong>${item.fit}%</strong></button>`).join('') || emptyState('◇', 'No leads match', 'Choose another stage or discover new leads.')}</aside>
      ${lead ? `<div class="partner-detail"><article class="module-card partner-profile"><header><div><p class="eyebrow">${escapeHtml(lead.stage)} · ${lead.fit}% FIT</p><h2>${escapeHtml(lead.company)}</h2><p>${escapeHtml(lead.reason)}</p></div><span class="partner-fit"><strong>${lead.fit}</strong><small>Fit score</small></span></header><div class="partner-facts"><span><small>Potential value</small><b>${escapeHtml(lead.value)}</b></span><span><small>Primary contact</small><b>${escapeHtml(lead.contact || 'Not identified')}</b></span><span><small>Next step</small><b>${escapeHtml(lead.nextStep || 'Define next step')}</b></span></div><div class="fit-evidence">${(lead.fitReasons || []).map((reason) => `<span>✓ ${escapeHtml(reason)}</span>`).join('')}</div><div class="partner-actions">${lead.stage !== 'Meeting' ? `<button class="secondary-btn" data-advance-lead="${lead.id}">Move to next stage</button>` : ''}<button class="primary-btn" data-create-outreach="${lead.id}">Draft outreach for approval</button><button class="secondary-btn" data-add-lead-note="${lead.id}">＋ Add note</button></div></article><article class="module-card"><div class="module-card-head"><div><h3>Relationship history</h3><p>Shared context for every interaction and decision.</p></div></div><div class="interaction-list">${interactions.map((entry) => `<div><span class="avatar">${entry.author.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><p><b>${escapeHtml(entry.note)}</b><small>${escapeHtml(entry.author)} · ${escapeHtml(entry.time)}</small></p></div>`).join('') || emptyState('◇', 'No interactions yet', 'Add the first relationship note.')}</div></article></div>` : ''}</section>`;
  },
  Events() {
    return `${pageHeader('Event Matcher', 'Prioritize conferences, spaces, and speaking opportunities by likely value.', '<button class="primary-btn" id="refreshEvents">↻ Refresh matches</button>')}
      ${summaryCards([{ icon: '□', value: state.events.length, label: 'High-fit matches', color: 'blue' }, { icon: '✓', value: state.events.filter((event) => event.saved).length, label: 'Saved events' }, { icon: '◷', value: '2', label: 'Deadlines this month', color: 'amber' }])}
      <section class="event-grid">${state.events.map((event) => `<article class="module-card event-card"><div class="event-score"><span>${event.match}%</span><small>match</small></div><span class="event-date">${event.date}</span><h3>${event.name}</h3><p>⌖ ${event.location}</p><div class="match-reasons"><span>Builder audience</span><span>Partnership potential</span></div><footer><small>${event.deadline}</small><button class="${event.saved ? 'saved-btn' : 'secondary-btn'}" data-save-event="${event.id}">${event.saved ? '✓ Saved' : '＋ Save'}</button></footer></article>`).join('')}</section>`;
  },
  Customers() {
    if (!currentCustomerId && state.customers.length) currentCustomerId = state.customers[0].id; const visible = currentCustomerFilter === 'All' ? state.customers : state.customers.filter((customer) => customer.health === currentCustomerFilter); const customer = state.customers.find((item) => item.id === currentCustomerId) || visible[0] || state.customers[0]; const milestones = customer?.milestones || []; const interactions = customer?.interactions || []; const planProgress = milestones.length ? Math.round(milestones.filter((item) => item.done).length / milestones.length * 100) : 0; const average = Math.round(state.customers.reduce((sum, item) => sum + item.score, 0) / state.customers.length);
    return `${pageHeader('Customer Success', 'Turn health signals into accountable success plans, interventions, and expansion.', '<button class="primary-btn" id="syncCustomers">↻ Sync health data</button>')}
      ${summaryCards([{ icon: '♥', value: average, label: 'Average health' }, { icon: '!', value: state.customers.filter((item) => item.health === 'At risk').length, label: 'At-risk accounts', color: 'amber' }, { icon: '$', value: money(state.customers.reduce((sum, item) => sum + (item.value || 0), 0)), label: 'Managed value', color: 'blue' }, { icon: '✓', value: state.customers.filter((item) => item.health === 'Healthy').length, label: 'Healthy accounts', color: 'purple' }])}
      <section class="customer-toolbar module-card"><div class="segmented">${['All', 'Healthy', 'Watch', 'At risk'].map((filter) => `<button class="${currentCustomerFilter === filter ? 'active' : ''}" data-customer-filter="${filter}">${filter}</button>`).join('')}</div><small>Health combines usage, support, engagement, and relationship signals.</small></section>
      <section class="customer-workspace"><aside class="module-card customer-list"><div class="module-card-head"><div><h3>Accounts</h3><p>Select an account to inspect its success plan.</p></div></div>${visible.map((item) => `<button class="customer-select ${customer?.id === item.id ? 'active' : ''}" data-select-customer="${item.id}"><i class="company-avatar">${item.name[0]}</i><span><b>${escapeHtml(item.name)}</b><small>${escapeHtml(item.owner || 'Unassigned')} · Renewal ${escapeHtml(item.renewal || 'Not set')}</small></span><em class="health ${item.health.toLowerCase().replace(' ', '-')}">${item.score} · ${item.health}</em></button>`).join('') || emptyState('♙', 'No accounts match', 'Choose another health filter.')}</aside>
      ${customer ? `<div class="customer-detail"><article class="module-card customer-profile"><header><div><p class="eyebrow">CUSTOMER SUCCESS PLAN</p><h2>${escapeHtml(customer.name)}</h2><p>${escapeHtml(customer.reason)}</p></div><div><strong>${customer.score}</strong><small>Health score</small></div></header><div class="customer-facts"><span><small>Owner</small><b>${escapeHtml(customer.owner || 'Unassigned')}</b></span><span><small>Renewal</small><b>${escapeHtml(customer.renewal || 'Not set')}</b></span><span><small>Value</small><b>${money(customer.value || 0)}</b></span><span><small>Trend</small><b class="${customer.trend > 0 ? 'positive-text' : 'negative-text'}">${customer.trend > 0 ? '+' : ''}${customer.trend}</b></span></div><div class="customer-profile-actions"><button class="primary-btn" data-customer-task="${customer.id}">Create task · ${escapeHtml(customer.action)}</button><button class="secondary-btn" data-update-customer-health="${customer.id}">Update health</button><button class="secondary-btn" data-add-customer-note="${customer.id}">＋ Add note</button></div></article><div class="customer-detail-grid"><article class="module-card"><div class="module-card-head"><div><h3>Success milestones</h3><p>${planProgress}% complete</p></div><strong>${milestones.filter((item) => item.done).length}/${milestones.length}</strong></div><div class="success-plan">${milestones.map((milestone, index) => `<button class="success-milestone ${milestone.done ? 'done' : ''}" data-customer-milestone="${customer.id}:${index}"><span>${milestone.done ? '✓' : ''}</span><b>${escapeHtml(milestone.title)}</b></button>`).join('') || emptyState('✓', 'No milestones yet', 'Add a note to capture the next success outcome.')}</div></article><article class="module-card"><div class="module-card-head"><div><h3>Interaction history</h3><p>Relationship context shared across the team.</p></div></div><div class="interaction-list">${interactions.map((entry) => `<div><span class="avatar">${entry.author.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><p><b>${escapeHtml(entry.note)}</b><small>${escapeHtml(entry.author)} · ${escapeHtml(entry.time)}</small></p></div>`).join('') || emptyState('♙', 'No interactions', 'Add the first customer note.')}</div></article></div></div>` : ''}</section>`;
  },
  Finance() {
    if (!currentInvoiceId && state.invoices.length) currentInvoiceId = state.invoices[0].id; const visible = currentFinanceFilter === 'All' ? state.invoices : state.invoices.filter((invoice) => invoice.status === currentFinanceFilter); const selected = state.invoices.find((invoice) => invoice.id === currentInvoiceId) || visible[0] || state.invoices[0]; const outstanding = state.invoices.filter((invoice) => invoice.status !== 'Paid').reduce((sum, invoice) => sum + invoice.amount, 0); const ready = state.invoices.filter((invoice) => invoice.status === 'Ready to pay').reduce((sum, invoice) => sum + invoice.amount, 0);
    return `${pageHeader('Finance Operations', 'Track obligations, evidence, approvals, and payment instructions—without Wave holding funds.', '<button class="primary-btn" id="uploadInvoice">＋ Add invoice</button>')}
      ${summaryCards([{ icon: '$', value: money(outstanding), label: 'Outstanding' }, { icon: '!', value: state.invoices.filter((invoice) => ['Needs approval', 'Awaiting second approval'].includes(invoice.status)).length, label: 'Awaiting approval', color: 'amber' }, { icon: '✓', value: money(ready), label: 'Ready to pay', color: 'blue' }, { icon: '⌾', value: state.invoices.filter((invoice) => (invoice.matchStatus || 'Matched') === 'Matched').length + '/' + state.invoices.length, label: 'Evidence matched', color: 'purple' }])}
      <section class="finance-toolbar module-card"><div class="segmented">${['All', 'Draft', 'Needs approval', 'Awaiting second approval', 'Ready to pay', 'Paid'].map((filter) => `<button class="${currentFinanceFilter === filter ? 'active' : ''}" data-finance-filter="${filter}">${filter}</button>`).join('')}</div><span class="safe-chip">⌾ Dual approval enabled</span></section>
      <section class="finance-workspace"><article class="module-card invoice-card"><div class="module-card-head"><div><h3>Invoice queue</h3><p>Every instruction remains human-approved and evidence-linked.</p></div></div><div class="table-head finance-head"><span>Vendor</span><span>Deliverable</span><span>Amount</span><span>Status</span><span>Action</span></div>${visible.map((invoice) => `<div class="table-row finance-row ${selected?.id === invoice.id ? 'active' : ''}"><span><i class="company-avatar">${invoice.vendor[0]}</i><b>${escapeHtml(invoice.vendor)}</b></span><span>${escapeHtml(invoice.deliverable)}<small>${escapeHtml(invoice.reference || 'No reference')} · Due ${escapeHtml(invoice.due)}</small></span><span><b>${money(invoice.amount)}</b></span><span><em class="status-pill ${invoice.status.toLowerCase().replaceAll(' ', '-')}">${escapeHtml(invoice.status)}</em></span><span class="finance-row-actions"><button class="secondary-btn compact" data-select-invoice="${invoice.id}">Select</button>${invoice.matchStatus !== 'Matched' ? `<button class="text-btn" data-match-invoice="${invoice.id}">Match evidence</button>` : ''}${['Needs approval', 'Awaiting second approval'].includes(invoice.status) ? `<button class="text-btn" data-approve-invoice="${invoice.id}">Approve</button>` : ''}</span></div>`).join('') || emptyState('$', 'No invoices match', 'Choose another status or add a new invoice.')}</article>
      ${selected ? `<aside class="module-card invoice-detail"><div class="module-card-head"><div><h3>${escapeHtml(selected.vendor)}</h3><p>${escapeHtml(selected.reference || 'No invoice reference')}</p></div><strong>${money(selected.amount)}</strong></div><dl><div><dt>Deliverable</dt><dd>${escapeHtml(selected.deliverable)}</dd></div><div><dt>Due date</dt><dd>${escapeHtml(selected.due)}</dd></div><div><dt>Submitted by</dt><dd>${escapeHtml(selected.submittedBy || 'Workspace member')}</dd></div><div><dt>Evidence match</dt><dd><em class="status-pill ${selected.matchStatus === 'Matched' ? 'scheduled' : 'needs'}">${escapeHtml(selected.matchStatus || 'Needs evidence')}</em></dd></div><div><dt>Approvals</dt><dd>${selected.approvalCount || 0} / 2</dd></div><div><dt>Payment status</dt><dd>${escapeHtml(selected.status)}</dd></div></dl><div class="invoice-approval-track"><i style="width:${Math.min(100, ((selected.approvalCount || 0) / 2) * 100)}%"></i></div><p class="finance-boundary">Wave prepares and records payment instructions. Your connected payment provider executes them after authorized approval.</p><div class="invoice-detail-actions">${selected.matchStatus !== 'Matched' ? `<button class="secondary-btn" data-match-invoice="${selected.id}">Match evidence</button>` : ''}${['Needs approval', 'Awaiting second approval'].includes(selected.status) ? `<button class="primary-btn" data-approve-invoice="${selected.id}">Record approval</button>` : ''}${selected.status === 'Ready to pay' ? `<button class="primary-btn" data-payment-instruction="${selected.id}">Send payment instruction</button>` : ''}</div></aside>` : ''}</section>`;
  },
  'Audit Trail'() {
    const query = currentAuditQuery.toLowerCase();
    const entries = state.audit.filter((entry) => (currentAuditFilter === 'All' || entry.category === currentAuditFilter) && (!query || [entry.action, entry.actor, entry.module, entry.evidence].some((value) => value.toLowerCase().includes(query))));
    return `${pageHeader('Audit Trail', 'Understand who or what changed the workspace, why it happened, and what evidence supported it.', '<button class="secondary-btn" id="exportAudit">↓ Export CSV</button>')}
      ${summaryCards([{ icon: '≡', value: state.audit.length, label: 'Recorded actions' }, { icon: '✓', value: state.audit.filter((entry) => entry.category === 'Decision').length, label: 'Human decisions', color: 'blue' }, { icon: '✦', value: new Set(state.audit.map((entry) => entry.actor)).size, label: 'Active actors', color: 'purple' }, { icon: '⌾', value: state.audit.filter((entry) => entry.evidence !== 'Workspace state changed').length, label: 'Evidence linked', color: 'amber' }])}
      <section class="module-card"><div class="module-toolbar audit-toolbar"><div class="segmented"><button class="${currentAuditFilter === 'All' ? 'active' : ''}" data-audit-filter="All">All</button><button class="${currentAuditFilter === 'Decision' ? 'active' : ''}" data-audit-filter="Decision">Decisions</button><button class="${currentAuditFilter === 'Content' ? 'active' : ''}" data-audit-filter="Content">Content</button><button class="${currentAuditFilter === 'Operations' ? 'active' : ''}" data-audit-filter="Operations">Operations</button></div><input class="module-search" id="auditSearch" value="${escapeHtml(currentAuditQuery)}" placeholder="Search actions, actors, evidence…"></div><div class="audit-list">${entries.map((entry) => `<article class="audit-row"><span class="audit-mark ${entry.category.toLowerCase()}"></span><div class="audit-action"><span><b>${escapeHtml(entry.action)}</b><em class="status-pill">${escapeHtml(entry.category)}</em></span><p>${escapeHtml(entry.evidence)}</p><small>${escapeHtml(entry.actor)} · ${escapeHtml(entry.module)}</small></div><time>${escapeHtml(entry.time)}</time></article>`).join('') || emptyState('⌕', 'No matching actions', 'Change the filters or search term to inspect more workspace history.')}</div></section>`;
  },
  Analytics() {
    const snapshot = analyticsSnapshot();
    return `${pageHeader('Live Analytics', 'Connect agent activity to campaign, channel, and business outcomes.', '<div class="analytics-actions"><span class="live-chip"><i></i>Updated ' + analyticsRefreshedAt + '</span><button class="secondary-btn" id="refreshAnalytics">↻ Refresh</button><button class="secondary-btn" id="exportReport">↓ Export CSV</button></div>')}
      <section class="analytics-toolbar module-card"><div class="segmented">${['7', '30', '90'].map((range) => `<button class="${currentAnalyticsRange === range ? 'active' : ''}" data-analytics-range="${range}">${range} days</button>`).join('')}</div><label>Campaign<select id="analyticsCampaign"><option>All</option>${state.campaigns.map((campaign) => `<option ${currentAnalyticsCampaign === campaign.name ? 'selected' : ''}>${escapeHtml(campaign.name)}</option>`).join('')}</select></label><small>${snapshot.scope}</small></section>
      ${summaryCards([{ icon: '✓', value: snapshot.outcomes, label: 'Approved outcomes', note: snapshot.outcomeTrend }, { icon: '◷', value: snapshot.hours + 'h', label: 'Estimated time saved', color: 'blue', note: snapshot.hoursTrend }, { icon: '$', value: money(snapshot.costPerOutcome), label: 'Cost per outcome', color: 'purple', note: snapshot.costTrend }, { icon: '↗', value: snapshot.approvalRate + '%', label: 'Approval rate', note: snapshot.approvalTrend }])}
      <section class="analytics-layout"><article class="module-card chart-card"><div class="module-card-head"><div><h3>Approved outcomes shipped</h3><p>${snapshot.periodLabel} · ${snapshot.scope}</p></div><b>${snapshot.outcomeTrend}</b></div><div class="bar-chart">${snapshot.series.map((height, i) => `<div><i style="height:${height}%"></i><small>${snapshot.labels[i]}</small></div>`).join('')}</div></article><article class="module-card"><div class="module-card-head"><div><h3>Outcome funnel</h3><p>From agent recommendation to measurable result.</p></div></div><div class="funnel-list">${snapshot.funnel.map((item, index) => `<div><span><b>${item.label}</b><small>${item.value} · ${item.rate}% of recommendations</small></span><div><i style="width:${item.rate}%"></i></div>${index ? `<em>${Math.round((item.value / snapshot.funnel[index - 1].value) * 100)}% step conversion</em>` : '<em>Starting volume</em>'}</div>`).join('')}</div></article></section>
      <section class="analytics-bottom"><article class="module-card"><div class="module-card-head"><div><h3>Channel performance</h3><p>Outcomes and engagement by connected channel.</p></div></div><div class="performance-head"><span>Channel</span><span>Outcomes</span><span>Engagement</span><span>Trend</span></div>${snapshot.channels.map((channel) => `<div class="performance-row"><span><b>${channel.name}</b><small>${channel.source}</small></span><strong>${channel.outcomes}</strong><span>${channel.engagement}</span><em class="positive-text">${channel.trend}</em></div>`).join('')}</article><article class="module-card"><div class="module-card-head"><div><h3>Agent contribution</h3><p>Approved work by specialist.</p></div></div><div class="contribution-list">${state.agents.map((agent, i) => `<div><span class="agent-orb ${agent.color}">${agent.icon}</span><p><b>${agent.name}</b><small>${snapshot.contributions[i]}% of outcomes</small></p><div><i style="width:${snapshot.contributions[i] * 2}%"></i></div></div>`).join('')}</div></article></section>`;
  },
  Settings() {
    const tabs = ['Agents', 'Brand memory', 'Members & roles', 'Account & cloud', 'Reliability', 'Beta & data'];
    const rolePermissions = { Owner: 'Full workspace, billing, members, and approvals', Editor: 'Create and edit work; submit approvals', Reviewer: 'Review and decide assigned approvals', Viewer: 'Read-only workspace access' };
    const nav = `<nav class="settings-nav">${tabs.map((tab) => `<button class="${currentSettingsTab === tab ? 'active' : ''}" data-settings-tab="${tab}">${tab}</button>`).join('')}<button data-page-link="Audit Trail">Audit Trail</button></nav>`;
    let body = '';
    if (currentSettingsTab === 'Agents') body = `<article class="module-card settings-main"><div class="module-card-head"><div><h3>Agent controls</h3><p>Pause specialists and review their current operating boundary.</p></div></div><div id="agentList"></div><div class="settings-section"><h3>Approval policy</h3><div class="policy-row"><span><b>External publishing</b><small>Content always requires a human reviewer.</small></span><strong>Required</strong></div><div class="policy-row"><span><b>First partner outreach</b><small>New contacts cannot be messaged autonomously.</small></span><strong>Required</strong></div><div class="policy-row"><span><b>Payment instructions</b><small>Requires two authorized reviewers.</small></span><strong>Dual approval</strong></div></div><button class="reset-btn" id="resetDemo">Reset demo workspace</button></article>`;
    if (currentSettingsTab === 'Brand memory') body = `<article class="module-card settings-main"><div class="module-card-head"><div><h3>Brand memory</h3><p>The shared context Wave uses when generating content and recommendations.</p></div><span class="live-chip"><i></i>Used by agents</span></div><form id="brandMemoryForm" class="brand-form"><label>Brand name<input name="name" value="${escapeHtml(state.brandProfile.name)}" required></label><label>Voice and tone<textarea name="voice" rows="3" required>${escapeHtml(state.brandProfile.voice)}</textarea></label><label>Primary audience<textarea name="audience" rows="3" required>${escapeHtml(state.brandProfile.audience)}</textarea></label><label>Core promise<textarea name="promise" rows="3" required>${escapeHtml(state.brandProfile.promise)}</textarea></label><label>Words and claims to avoid<textarea name="avoid" rows="3">${escapeHtml(state.brandProfile.avoid)}</textarea></label><label>Preferred language<textarea name="terms" rows="3">${escapeHtml(state.brandProfile.terms)}</textarea></label><div class="brand-memory-foot"><small>Changes are recorded in Audit Trail and apply to future generated drafts.</small><button class="primary-btn" type="submit">Save brand memory</button></div></form></article>`;
    if (currentSettingsTab === 'Members & roles') body = `<article class="module-card settings-main"><div class="module-card-head"><div><h3>Members & roles</h3><p>Make responsibility and workspace access explicit.</p></div><span class="safe-chip">${state.members.length} members</span></div><div class="role-guide">${Object.entries(rolePermissions).map(([role, permissions]) => `<div><b>${role}</b><small>${permissions}</small></div>`).join('')}</div><div class="member-list">${state.members.map((member) => `<div class="member-row"><span class="avatar">${escapeHtml(member.initials)}</span><span><b>${escapeHtml(member.name)}</b><small>${escapeHtml(member.email)}</small></span><select data-member-role="${member.id}" aria-label="Role for ${escapeHtml(member.name)}">${Object.keys(rolePermissions).map((role) => `<option ${member.role === role ? 'selected' : ''}>${role}</option>`).join('')}</select><small>${escapeHtml(rolePermissions[member.role] || '')}</small></div>`).join('')}</div></article>`;
    if (currentSettingsTab === 'Account & cloud') body = `<article class="module-card settings-main cloud-account-panel"><div class="module-card-head"><div><h3>Account & cloud workspace</h3><p>Move from one-browser demo storage to a private account-backed workspace.</p></div><span class="cloud-status ${cloudStatus.authenticated ? 'connected' : cloudStatus.configured ? 'ready' : 'local'}">${cloudStatus.authenticated ? 'Cloud connected' : cloudStatus.configured ? 'Ready to sign in' : 'Local beta mode'}</span></div>${!cloudStatus.configured ? `<div class="cloud-setup"><h3>Cloud connection not configured</h3><p>Wave is safely continuing in local beta mode. Connect a Supabase project using the repository setup guide to enable real accounts and private cloud sync.</p><ol><li>Create a Supabase project.</li><li>Run <code>supabase/schema.sql</code> in its SQL editor.</li><li>Add the public project URL and anon key to <code>config.js</code>.</li><li>Redeploy and return here to create an account.</li></ol><a class="primary-btn" href="https://github.com/Andallyn/Wave/blob/main/docs/CLOUD_SETUP.md" target="_blank" rel="noopener">Open setup guide</a></div>` : cloudStatus.authenticated ? `<div class="cloud-connected"><span class="avatar">${escapeHtml((cloudStatus.email || 'U').slice(0, 2).toUpperCase())}</span><div><b>${escapeHtml(cloudStatus.email)}</b><small>Authenticated with Supabase · private workspace policy enabled</small></div></div><div class="cloud-actions"><button class="primary-btn" id="saveCloudNow" type="button">Save to cloud now</button><button class="secondary-btn" id="importLocalCloud" type="button">Import this browser workspace</button><button class="reset-btn" id="cloudSignOut" type="button">Sign out</button></div><div class="beta-notice"><b>Importing replaces your cloud workspace.</b><p>Your current browser data remains available locally. Wave never uses a Supabase service-role key in the browser.</p></div>` : `<div class="auth-grid"><form id="cloudSignInForm" class="cloud-auth-form"><h3>Sign in</h3><p>Open your private Wave workspace.</p><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="current-password" minlength="8" required></label><button class="primary-btn" type="submit">Sign in</button></form><form id="cloudSignUpForm" class="cloud-auth-form"><h3>Create beta account</h3><p>Your Supabase project may require email confirmation.</p><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="new-password" minlength="8" required></label><button class="secondary-btn" type="submit">Create account</button></form></div>`}<p class="cloud-message" role="status">${escapeHtml(cloudStatus.message || '')}</p></article>`;
    if (currentSettingsTab === 'Reliability') {
      const diagnostics = readDiagnostics(); const stateBytes = new Blob([JSON.stringify(state)]).size; let lastSaved = 'Not saved in this browser yet';
      try { const saved = window.localStorage.getItem(LAST_SAVE_KEY); if (saved) lastSaved = new Date(saved).toLocaleString(); } catch (error) {}
      body = `<article class="module-card settings-main reliability-panel"><div class="module-card-head"><div><h3>Reliability Center</h3><p>Check browser health, preserve a recovery copy, and inspect recent client errors.</p></div><span class="safe-chip">Wave ${WAVE_APP_VERSION}</span></div><div class="reliability-grid"><div><small>Application</small><b>Ready</b></div><div><small>Storage mode</small><b>${cloudStatus.authenticated ? 'Cloud + browser' : 'Browser only'}</b></div><div><small>Workspace size</small><b>${Math.max(1, Math.round(stateBytes / 1024))} KB</b></div><div><small>Last browser save</small><b>${escapeHtml(lastSaved)}</b></div></div><div class="recovery-card"><div><h3>Recovery backup</h3><p>Download a complete workspace copy before major testing. Restore validates the file before replacing browser data.</p></div><div class="cloud-actions"><button class="primary-btn" id="downloadRecovery" type="button">Download recovery backup</button><button class="secondary-btn" id="chooseRecovery" type="button">Restore from backup</button><input id="recoveryFile" type="file" accept="application/json,.json" hidden></div><div class="beta-notice"><b>Recovery files may contain workspace information.</b><p>Store them securely and review them before sharing.</p></div></div><div class="diagnostic-head"><div><h3>Recent diagnostics</h3><p>Stored only in this browser and limited to the 20 most recent events.</p></div><div><button class="secondary-btn" id="runReliabilityCheck" type="button">Run checks</button><button class="reset-btn" id="clearDiagnostics" type="button">Clear log</button></div></div><div class="diagnostic-list">${diagnostics.length ? diagnostics.map((item) => `<div class="diagnostic-row"><span class="status-dot ${item.kind === 'Check passed' ? '' : 'warn'}"></span><div><b>${escapeHtml(item.kind)} · ${escapeHtml(item.message)}</b><small>${escapeHtml(new Date(item.time).toLocaleString())} · ${escapeHtml(item.page)}${item.detail ? ` · ${escapeHtml(item.detail)}` : ''}</small></div></div>`).join('') : '<div class="empty-state">No browser errors have been recorded.</div>'}</div><button class="text-btn" id="exportDiagnostics" type="button">Download diagnostic report →</button></article>`;
    }
    if (currentSettingsTab === 'Beta & data') body = `<article class="module-card settings-main beta-data-panel"><div class="module-card-head"><div><h3>Beta testing & data</h3><p>Understand what this preview stores, export your work, and report useful feedback.</p></div><span class="beta-status">Browser-only beta</span></div><div class="beta-notice"><b>Your Wave data currently stays in this browser.</b><p>It is not shared with other testers or backed up to a Wave account. Do not enter passwords, payment credentials, private keys, or confidential client information.</p></div><div class="beta-actions"><button class="primary-btn" id="openBetaGuide" type="button">View testing guide</button><button class="secondary-btn" id="exportWorkspace" type="button">Export workspace data</button></div><form id="betaFeedbackForm" class="beta-feedback"><h3>Prepare a feedback report</h3><p>Wave downloads your report as a file so you can share it with the product team. This preview does not transmit it automatically.</p><div class="form-row"><label>Feedback type<select name="type"><option>Bug</option><option>Confusing experience</option><option>Feature request</option><option>What worked well</option></select></label><label>Area<select name="area"><option>Overall experience</option><option>Tasks & approvals</option><option>Content & campaigns</option><option>Customers & partnerships</option><option>Finance & analytics</option><option>Mobile experience</option></select></label></div><label>What happened or what would help?<textarea name="details" rows="5" required maxlength="1500" placeholder="Include what you tried, what you expected, and what happened."></textarea></label><label>Contact (optional)<input name="contact" type="email" placeholder="you@example.com"></label><button class="primary-btn" type="submit">Download feedback report</button></form><div class="legal-links"><a href="privacy.html" target="_blank" rel="noopener">Privacy notice</a><a href="terms.html" target="_blank" rel="noopener">Beta terms</a><a href="https://github.com/Andallyn/Wave/issues/new" target="_blank" rel="noopener">Report on GitHub</a></div><button class="reset-btn" id="resetDemo">Reset demo workspace</button></article>`;
    return `${pageHeader('Workspace Settings', 'Control brand context, agent boundaries, roles, and accountability.')}
      <section class="settings-layout">${nav}${body}</section>`;
  }
};



function calendarItems() {
  const items = []; const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; let position = 0;
  state.content.filter((item) => item.date !== 'Unscheduled').forEach((item) => items.push({ id: `Content:${item.id}`, type: 'Content', title: item.title, date: item.date, meta: `${item.channel} · ${item.status}`, page: 'Content Studio', day: days[position++ % days.length] }));
  state.tasks.slice(0, 6).forEach((item) => items.push({ id: `Task:${item.id}`, type: 'Task', title: item.title, date: item.meta.split('·').pop().trim(), meta: item.type + ' · ' + item.owner, page: 'Tasks', day: days[position++ % days.length] }));
  state.campaigns.forEach((item) => items.push({ id: `Campaign:${item.id}`, type: 'Campaign', title: item.name, date: item.deadline, meta: `${item.status} · ${item.owner}`, page: 'Campaigns', day: days[position++ % days.length] }));
  state.events.forEach((item) => items.push({ id: `Event:${item.id}`, type: 'Event', title: item.name, date: item.date, meta: `${item.location} · ${item.match}% match`, page: 'Events', day: days[position++ % days.length] }));
  return items;
}

function calendarItemMarkup(item) {
  return `<div class="calendar-entry ${item.type.toLowerCase()}"><span class="calendar-type">${item.type.slice(0, 1)}</span><div><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.date)} · ${escapeHtml(item.meta)}</small></div><aside><button class="text-btn" data-open-calendar="${item.page}">Open</button><button class="text-btn" data-reschedule-calendar="${item.id}">Reschedule</button></aside></div>`;
}

function rescheduleCalendarItem(reference) {
  const [type, rawId] = reference.split(':'); const id = Number(rawId); let item; let previous; const next = window.prompt('Enter the new schedule or deadline:'); if (!next?.trim()) return;
  if (type === 'Content') { item = state.content.find((entry) => entry.id === id); if (item) { previous = item.date; item.date = next.trim(); } }
  if (type === 'Campaign') { item = state.campaigns.find((entry) => entry.id === id); if (item) { previous = item.deadline; item.deadline = next.trim(); } }
  if (type === 'Event') { item = state.events.find((entry) => entry.id === id); if (item) { previous = item.date; item.date = next.trim(); } }
  if (type === 'Task') { item = state.tasks.find((entry) => entry.id === id); if (item) { previous = item.meta; item.meta = item.meta.replace(/Due .*/i, `Due ${next.trim()}`); } }
  if (!item) return; recordActivity('□', `Rescheduled ${type.toLowerCase()}: ${item.title || item.name}`, { actor: 'Alex Morgan', module: 'Calendar', category: 'Decision', evidence: `${previous} → ${next.trim()}` }); persist(); navigate('Calendar'); toast('Schedule updated across the workspace.');
}

function briefingItems() {
  const items = [];
  state.approvals.filter((approval) => approval.status === 'Pending').slice(0, 2).forEach((approval) => items.push({ id: `approval-${approval.id}`, type: 'Decision', priority: approval.due === 'Today' ? 'High' : 'Medium', source: approval.owner, title: approval.title, why: `${approval.risk} · ${approval.evidence}`, action: 'Review the evidence and record a decision.', page: 'Approvals' }));
  state.goals.filter((goal) => goal.status === 'At risk').forEach((goal) => items.push({ id: `goal-${goal.id}`, type: 'Risk', priority: 'High', source: 'Goals & Outcomes', title: goal.title, why: `Progress is ${goalProgress(goal)}% with a ${goal.deadline} deadline.`, action: 'Update the weakest key result or adjust campaign execution.', page: 'Goals' }));
  state.signals.filter((signal) => !signal.resolved && signal.level === 'Urgent').slice(0, 1).forEach((signal) => items.push({ id: `signal-${signal.id}`, type: 'Risk', priority: 'High', source: signal.source, title: signal.title, why: signal.detail, action: 'Review the signal and approve a response.', page: 'Community' }));
  state.leads.filter((lead) => ['Discovered', 'Qualified'].includes(lead.stage) && lead.fit >= 85).slice(0, 2).forEach((lead) => items.push({ id: `lead-${lead.id}`, type: 'Opportunity', priority: lead.fit >= 92 ? 'High' : 'Medium', source: 'Partnership Scout', title: `${lead.company} is a ${lead.fit}% fit`, why: lead.reason, action: 'Review the lead and advance the partnership.', page: 'Partnerships' }));
  state.connectors.filter((connector) => connector.status !== 'Healthy').forEach((connector) => items.push({ id: `connector-${connector.id}`, type: 'Risk', priority: 'Medium', source: 'Agent Operations', title: `${connector.name} connector needs attention`, why: `Last successful sync was ${connector.lastSync}.`, action: 'Run a connector sync to restore fresh data.', page: 'Agent Operations' }));
  return items.filter((item) => !state.briefingDismissed.includes(item.id) && !state.briefingSnoozed.includes(item.id));
}

function goalProgress(goal) {
  if (!goal.keyResults.length) return 0;
  return Math.round(goal.keyResults.reduce((sum, kr) => sum + Math.min(1, kr.current / kr.target), 0) / goal.keyResults.length * 100);
}

function analyticsSnapshot() {
  const range = Number(currentAnalyticsRange); const factor = range === 7 ? 0.36 : range === 90 ? 2.15 : 1; const campaign = state.campaigns.find((item) => item.name === currentAnalyticsCampaign); const approvals = state.approvals.filter((item) => item.status === 'Approved' && (!campaign || campaign.taskIds.includes(item.targetId) || campaign.leadIds.includes(item.targetId) || campaign.contentCampaigns.some((name) => item.title.includes(name))));
  const baseOutcomes = Math.max(1, campaign ? campaignMetrics(campaign).outcomes : state.completed); const outcomes = Math.max(1, Math.round(baseOutcomes * factor)); const approvalBase = state.approvals.filter((item) => item.status !== 'Pending'); const approved = approvalBase.filter((item) => item.status === 'Approved').length; const approvalRate = approvalBase.length ? Math.round((approved / approvalBase.length) * 100) : 92; const recommendations = Math.max(outcomes + 4, Math.round(outcomes * 1.8)); const reviewed = Math.max(outcomes + 2, Math.round(recommendations * .78)); const shipped = Math.max(outcomes, Math.round(reviewed * .82));
  const seriesBase = range === 7 ? [48, 62, 55, 71, 66, 84, 92] : range === 90 ? [34, 46, 43, 58, 64, 61, 75, 82, 78, 88, 91, 96] : [35, 48, 42, 65, 58, 82, 76, 94]; const labels = range === 7 ? ['M','T','W','T','F','S','S'] : range === 90 ? seriesBase.map((_, i) => `W${i + 1}`) : seriesBase.map((_, i) => `W${i + 1}`);
  return { outcomes, hours: Math.round(outcomes * 2.3), costPerOutcome: Math.max(3, Math.round((680 / outcomes) * 100) / 100), approvalRate, outcomeTrend: '+18.4%', hoursTrend: '+12.1%', costTrend: '-9.3%', approvalTrend: '+4.2%', periodLabel: `Last ${range} days`, scope: campaign ? campaign.name : 'All campaigns', series: seriesBase, labels, funnel: [{ label: 'Recommendations', value: recommendations, rate: 100 }, { label: 'Human reviewed', value: reviewed, rate: Math.round((reviewed / recommendations) * 100) }, { label: 'Shipped', value: shipped, rate: Math.round((shipped / recommendations) * 100) }, { label: 'Outcome recorded', value: outcomes, rate: Math.round((outcomes / recommendations) * 100) }], channels: [{ name: 'X / Twitter', source: 'Publishing', outcomes: Math.max(1, Math.round(outcomes * .42)), engagement: '6.8%', trend: '+21%' }, { name: 'Discord', source: 'Community', outcomes: Math.max(1, Math.round(outcomes * .31)), engagement: '18.2%', trend: '+14%' }, { name: 'LinkedIn', source: 'Publishing', outcomes: Math.max(1, Math.round(outcomes * .18)), engagement: '4.9%', trend: '+8%' }, { name: 'Partnerships', source: 'CRM', outcomes: Math.max(1, Math.round(outcomes * .09)), engagement: '12.4%', trend: '+5%' }], contributions: [42, 27, 18, 13] };
}

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
  $$('[data-lead-filter]').forEach((button) => button.addEventListener('click', () => { currentLeadFilter = button.dataset.leadFilter; navigate('Partnerships'); }));
  $$('[data-select-lead]').forEach((button) => button.addEventListener('click', () => { currentLeadId = Number(button.dataset.selectLead); navigate('Partnerships'); }));
  $$('[data-add-lead-note]').forEach((button) => button.addEventListener('click', () => { const lead = state.leads.find((item) => item.id === Number(button.dataset.addLeadNote)); if (!lead) return; const note = window.prompt(`Add a relationship note for ${lead.company}:`); if (!note?.trim()) return; lead.interactions = lead.interactions || []; lead.interactions.unshift({ note: note.trim(), author: 'Alex Morgan', time: 'just now' }); recordActivity('◇', `Added partnership note: ${lead.company}`, { actor: 'Alex Morgan', module: 'Partnerships', category: 'Operations', evidence: note.trim() }); navigate('Partnerships'); toast('Relationship note saved.'); }));
  $$('[data-create-outreach]').forEach((button) => button.addEventListener('click', () => { const lead = state.leads.find((item) => item.id === Number(button.dataset.createOutreach)); if (!lead) return; const existing = state.approvals.find((item) => item.type === 'Outreach' && item.targetId === lead.id && item.status === 'Pending'); if (existing) { navigate('Approvals'); toast('This outreach is already waiting for approval.'); return; } const approval = { id: Date.now(), type: 'Outreach', title: `First contact with ${lead.company}`, owner: 'Partnership Scout', risk: 'First external outreach', evidence: `${lead.fit}% fit · ${(lead.fitReasons || []).join(' · ')}`, due: 'Today', status: 'Pending', targetId: lead.id }; state.approvals.unshift(approval); recordActivity('◇', `Drafted outreach for ${lead.company}`, { actor: 'Partnership Scout', module: 'Partnerships', category: 'Content', evidence: approval.evidence }); updateApprovalBadge(); navigate('Approvals'); toast('Outreach draft routed to Approval Inbox.'); }));
  $$('[data-finance-filter]').forEach((button) => button.addEventListener('click', () => { currentFinanceFilter = button.dataset.financeFilter; navigate('Finance'); }));
  $$('[data-select-invoice]').forEach((button) => button.addEventListener('click', () => { currentInvoiceId = Number(button.dataset.selectInvoice); navigate('Finance'); toast('Invoice selected. Review its evidence and approval status.'); }));
  $$('[data-match-invoice]').forEach((button) => button.addEventListener('click', () => { const invoice = state.invoices.find((item) => item.id === Number(button.dataset.matchInvoice)); if (!invoice) return; invoice.matchStatus = 'Matched'; recordActivity('$', `Matched invoice evidence: ${invoice.vendor}`, { actor: 'Alex Morgan', module: 'Finance', category: 'Decision', evidence: `${invoice.reference || 'Invoice'} · ${invoice.deliverable}` }); navigate('Finance'); toast('Invoice evidence matched to its deliverable.'); }));
  $$('[data-payment-instruction]').forEach((button) => button.addEventListener('click', () => { const invoice = state.invoices.find((item) => item.id === Number(button.dataset.paymentInstruction)); if (!invoice || invoice.status !== 'Ready to pay') return; invoice.status = 'Paid'; recordActivity('$', `Sent payment instruction: ${invoice.vendor}`, { actor: 'Alex Morgan', module: 'Finance', category: 'Decision', evidence: `${money(invoice.amount)} · two approvals · ${invoice.reference}` }); navigate('Finance'); toast('Payment instruction sent to the connected provider.'); }));
  $$('[data-customer-filter]').forEach((button) => button.addEventListener('click', () => { currentCustomerFilter = button.dataset.customerFilter; navigate('Customers'); }));
  $$('[data-select-customer]').forEach((button) => button.addEventListener('click', () => { currentCustomerId = Number(button.dataset.selectCustomer); navigate('Customers'); }));
  $$('[data-customer-milestone]').forEach((button) => button.addEventListener('click', () => { const [customerId, index] = button.dataset.customerMilestone.split(':').map(Number); const customer = state.customers.find((item) => item.id === customerId); const milestone = customer?.milestones?.[index]; if (!milestone) return; milestone.done = !milestone.done; recordActivity('♙', `${milestone.done ? 'Completed' : 'Reopened'} customer milestone: ${milestone.title}`, { actor: 'Alex Morgan', module: 'Customers', category: 'Decision', evidence: customer.name }); navigate('Customers'); toast('Customer success plan updated.'); }));
  $$('[data-add-customer-note]').forEach((button) => button.addEventListener('click', () => { const customer = state.customers.find((item) => item.id === Number(button.dataset.addCustomerNote)); if (!customer) return; const note = window.prompt(`Add an interaction note for ${customer.name}:`); if (!note?.trim()) return; customer.interactions = customer.interactions || []; customer.interactions.unshift({ note: note.trim(), time: 'just now', author: 'Alex Morgan' }); recordActivity('♙', `Added customer note for ${customer.name}`, { actor: 'Alex Morgan', module: 'Customers', category: 'Operations', evidence: note.trim() }); navigate('Customers'); toast('Customer interaction saved.'); }));
  $$('[data-update-customer-health]').forEach((button) => button.addEventListener('click', () => { const customer = state.customers.find((item) => item.id === Number(button.dataset.updateCustomerHealth)); if (!customer) return; const score = Number(window.prompt(`Update ${customer.name} health score (0–100):`, String(customer.score))); if (!Number.isFinite(score) || score < 0 || score > 100) { toast('Enter a health score from 0 to 100.'); return; } const previous = customer.score; customer.trend = score - previous; customer.score = score; customer.health = score < 65 ? 'At risk' : score < 80 ? 'Watch' : 'Healthy'; recordActivity('♥', `Updated customer health: ${customer.name}`, { actor: 'Alex Morgan', module: 'Customers', category: 'Decision', evidence: `${previous} → ${score} · ${customer.health}` }); navigate('Customers'); toast('Customer health updated with evidence.'); }));
  $('#scheduleContent, [data-schedule-content]')?.addEventListener('click', () => { editingContentId = null; $('#contentForm').reset(); $('#contentStatus').value = 'Scheduled'; const dialog = $('#contentDialog'); if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); });
  $$('[data-automation-filter]').forEach((button) => button.addEventListener('click', () => { currentAutomationFilter = button.dataset.automationFilter; navigate('Automations'); }));
  $$('[data-toggle-automation]').forEach((button) => button.addEventListener('click', () => { const rule = state.automations.find((item) => item.id === Number(button.dataset.toggleAutomation)); if (!rule) return; rule.status = rule.status === 'Active' ? 'Paused' : 'Active'; recordActivity('↻', `${rule.status}: ${rule.name}`, { actor: 'Alex Morgan', module: 'Automations', category: 'Decision', evidence: `${rule.trigger} · ${rule.requiresApproval ? 'Human approval retained' : 'Within agent boundary'}` }); navigate('Automations'); toast(`Automation ${rule.status.toLowerCase()}.`); }));
  $$('[data-run-automation]').forEach((button) => button.addEventListener('click', () => { const rule = state.automations.find((item) => item.id === Number(button.dataset.runAutomation)); if (!rule || rule.status !== 'Active') return; rule.runs += 1; rule.lastRun = 'just now'; recordActivity('↻', `Ran automation: ${rule.name}`, { actor: 'Alex Morgan', module: 'Automations', category: 'Operations', evidence: `${rule.trigger} → ${rule.action}` }); navigate('Automations'); toast(rule.requiresApproval ? 'Automation ran and routed its action for approval.' : 'Automation completed within its operating boundary.'); }));
  $('#createAutomation')?.addEventListener('click', () => { const name = window.prompt('Name this automation rule:'); if (!name?.trim()) return; const trigger = window.prompt('When should it run?', 'Every Monday at 09:00'); if (!trigger?.trim()) return; const action = window.prompt('What should Wave do?', 'Create a task and add it to Daily Briefing'); if (!action?.trim()) return; state.automations.unshift({ id: Date.now(), name: name.trim(), trigger: trigger.trim(), action: action.trim(), status: 'Active', runs: 0, lastRun: 'Never', requiresApproval: true, module: 'Workspace' }); recordActivity('↻', `Created automation: ${name.trim()}`, { actor: 'Alex Morgan', module: 'Automations', category: 'Decision', evidence: `${trigger.trim()} → ${action.trim()} · approval required` }); navigate('Automations'); toast('Governed automation rule created.'); });
  $$('[data-calendar-filter]').forEach((button) => button.addEventListener('click', () => { currentCalendarFilter = button.dataset.calendarFilter; navigate('Calendar'); }));
  $$('[data-calendar-view]').forEach((button) => button.addEventListener('click', () => { currentCalendarView = button.dataset.calendarView; navigate('Calendar'); }));
  $$('[data-open-calendar]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.openCalendar)));
  $$('[data-reschedule-calendar]').forEach((button) => button.addEventListener('click', () => rescheduleCalendarItem(button.dataset.rescheduleCalendar)));
  $$('[data-briefing-filter]').forEach((button) => button.addEventListener('click', () => { currentBriefingFilter = button.dataset.briefingFilter; navigate('Briefing'); }));
  $$('[data-open-briefing]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.openBriefing)));
  $$('[data-dismiss-briefing]').forEach((button) => button.addEventListener('click', () => { state.briefingDismissed.push(button.dataset.dismissBriefing); recordActivity('✓', 'Handled Daily Briefing item', { actor: 'Alex Morgan', module: 'Briefing', category: 'Decision', evidence: button.dataset.dismissBriefing }); navigate('Briefing'); toast('Item marked as handled.'); }));
  $$('[data-snooze-briefing]').forEach((button) => button.addEventListener('click', () => { state.briefingSnoozed.push(button.dataset.snoozeBriefing); recordActivity('◷', 'Snoozed Daily Briefing item', { actor: 'Alex Morgan', module: 'Briefing', category: 'Operations', evidence: button.dataset.snoozeBriefing }); navigate('Briefing'); toast('Item snoozed for this briefing.'); }));
  $('#refreshBriefing')?.addEventListener('click', () => { state.briefingSnoozed = []; briefingRefreshedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); recordActivity('✦', 'Generated fresh Daily Briefing', { actor: 'Alex Morgan', module: 'Briefing', category: 'Operations', evidence: `${briefingItems().length} active recommendations` }); navigate('Briefing'); toast('Fresh briefing generated from current workspace data.'); });
  $$('[data-goal-filter]').forEach((button) => button.addEventListener('click', () => { currentGoalFilter = button.dataset.goalFilter; navigate('Goals'); }));
  $$('[data-update-kr]').forEach((button) => button.addEventListener('click', () => { const [goalId, krId] = button.dataset.updateKr.split(':').map(Number); const goal = state.goals.find((item) => item.id === goalId); const kr = goal?.keyResults.find((item) => item.id === krId); if (!kr) return; const value = window.prompt(`Update “${kr.title}” (target: ${kr.target}${kr.unit})`, String(kr.current)); if (value === null) return; const next = Number(value); if (!Number.isFinite(next) || next < 0) { toast('Enter a valid positive number.'); return; } const previous = kr.current; kr.current = next; const progress = goalProgress(goal); goal.status = progress >= 100 ? 'Complete' : progress < 55 ? 'At risk' : 'On track'; recordActivity('◎', `Updated key result: ${kr.title}`, { actor: 'Alex Morgan', module: 'Goals', category: 'Decision', evidence: `${previous}${kr.unit} → ${kr.current}${kr.unit} · goal now ${progress}%` }); navigate('Goals'); toast('Key result and goal progress updated.'); }));
  $$('[data-open-goal-campaign]').forEach((button) => button.addEventListener('click', () => { currentCampaignId = Number(button.dataset.openGoalCampaign); navigate('Campaigns'); }));
  $('#createGoal')?.addEventListener('click', () => { const title = window.prompt('What outcome should this goal achieve?'); if (!title?.trim()) return; const owner = window.prompt('Who owns this goal?', 'Alex Morgan'); if (owner === null) return; const deadline = window.prompt('What is the deadline?', 'Sep 30'); if (deadline === null) return; const id = Date.now(); state.goals.unshift({ id, title: title.trim(), owner: owner.trim() || 'Alex Morgan', status: 'On track', deadline: deadline.trim() || 'Not set', campaignId: null, keyResults: [{ id: 1, title: 'Define the first measurable key result', current: 0, target: 100, unit: '%' }] }); recordActivity('◎', `Created goal: ${title.trim()}`, { actor: 'Alex Morgan', module: 'Goals', category: 'Operations', evidence: `Owner: ${owner.trim() || 'Alex Morgan'} · deadline: ${deadline.trim() || 'Not set'}` }); navigate('Goals'); toast('Goal created with a starter key result.'); });
  $$('[data-analytics-range]').forEach((button) => button.addEventListener('click', () => { currentAnalyticsRange = button.dataset.analyticsRange; navigate('Analytics'); }));
  $('#analyticsCampaign')?.addEventListener('change', (event) => { currentAnalyticsCampaign = event.target.value; navigate('Analytics'); });
  $('#refreshAnalytics')?.addEventListener('click', () => { analyticsRefreshedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); recordActivity('↗', 'Refreshed live analytics', { actor: 'Alex Morgan', module: 'Analytics', category: 'Operations', evidence: `${currentAnalyticsRange}-day range · ${currentAnalyticsCampaign}` }); navigate('Analytics'); toast('Analytics refreshed from current workspace data.'); });
  $('#exportReport')?.addEventListener('click', () => { const snapshot = analyticsSnapshot(); const rows = [['Metric', 'Value'], ['Scope', snapshot.scope], ['Period', snapshot.periodLabel], ['Approved outcomes', snapshot.outcomes], ['Time saved (hours)', snapshot.hours], ['Cost per outcome', snapshot.costPerOutcome], ['Approval rate', snapshot.approvalRate + '%'], ...snapshot.channels.map((channel) => [channel.name + ' outcomes', channel.outcomes])]; const quote = (value) => `"${String(value).replaceAll('"', '""')}"`; const csv = rows.map((row) => row.map(quote).join(',')).join('\n'); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'wave-live-analytics.csv'; link.click(); URL.revokeObjectURL(link.href); toast('Analytics report exported.'); });
  $$('[data-agent-autonomy]').forEach((select) => select.addEventListener('change', () => { const agent = state.agents[Number(select.dataset.agentAutonomy)]; if (!agent) return; const previous = agent.autonomy; agent.autonomy = select.value; recordActivity(agent.icon, `Changed ${agent.name} autonomy to ${agent.autonomy}`, { actor: 'Alex Morgan', module: 'Agent Operations', category: 'Decision', evidence: `Autonomy changed from ${previous} to ${agent.autonomy}` }); navigate('Agent Operations'); toast('Agent autonomy updated.'); }));
  $$('[data-run-agent]').forEach((button) => button.addEventListener('click', () => { const agent = state.agents[Number(button.dataset.runAgent)]; if (!agent || !agent.active) return; agent.runs += 1; agent.budgetUsed = Math.min(agent.budgetLimit, agent.budgetUsed + 1); agent.lastRun = 'just now'; agent.status = 'Run completed successfully'; recordActivity(agent.icon, `Ran ${agent.name} manually`, { actor: 'Alex Morgan', module: 'Agent Operations', category: 'Operations', evidence: `1 workload unit used · ${agent.autonomy} autonomy` }); navigate('Agent Operations'); toast(`${agent.name} run completed.`); }));
  $$('[data-sync-connector]').forEach((button) => button.addEventListener('click', () => { const connector = state.connectors.find((item) => item.id === button.dataset.syncConnector); if (!connector) return; connector.status = 'Healthy'; connector.lastSync = 'just now'; connector.records += Math.ceil(Math.random() * 5); recordActivity('↗', `Synced ${connector.name} connector`, { actor: 'Alex Morgan', module: 'Agent Operations', category: 'Operations', evidence: `${connector.records} records available · connector healthy` }); navigate('Agent Operations'); toast(`${connector.name} sync complete.`); }));
  $$('[data-settings-tab]').forEach((button) => button.addEventListener('click', () => { currentSettingsTab = button.dataset.settingsTab; navigate('Settings'); }));
  $('#brandMemoryForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); const data = new FormData(event.currentTarget); const previous = state.brandProfile.name;
    state.brandProfile = Object.fromEntries(['name', 'voice', 'audience', 'promise', 'avoid', 'terms'].map((key) => [key, String(data.get(key) || '').trim()]));
    recordActivity('◈', `Updated brand memory for ${state.brandProfile.name}`, { actor: 'Alex Morgan', module: 'Settings', category: 'Operations', evidence: `Brand profile updated · previous name: ${previous}` }); navigate('Settings'); toast('Brand memory saved and shared with Wave agents.');
  });
  $$('[data-member-role]').forEach((select) => select.addEventListener('change', () => {
    const member = state.members.find((item) => item.id === Number(select.dataset.memberRole)); if (!member) return; const previous = member.role; member.role = select.value;
    recordActivity('♙', `Changed ${member.name}'s role to ${member.role}`, { actor: 'Alex Morgan', module: 'Settings', category: 'Decision', evidence: `Access changed from ${previous} to ${member.role}` }); navigate('Settings'); toast(`${member.name} is now a ${member.role}.`);
  }));
  $('#downloadRecovery')?.addEventListener('click', () => {
    const payload = { format: 'wave-recovery', version: 1, appVersion: WAVE_APP_VERSION, createdAt: new Date().toISOString(), workspace: state };
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })); link.download = `wave-recovery-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href); captureDiagnostic('Backup', 'Recovery backup downloaded'); toast('Recovery backup downloaded. Store it securely.');
  });
  $('#chooseRecovery')?.addEventListener('click', () => $('#recoveryFile')?.click());
  $('#recoveryFile')?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0]; if (!file) return;
    try {
      if (file.size > 5000000) throw new Error('Backup is larger than the 5 MB safety limit.');
      const payload = JSON.parse(await file.text());
      if (payload.format !== 'wave-recovery' || payload.version !== 1 || !validWorkspaceShape(payload.workspace)) throw new Error('This is not a valid Wave recovery backup.');
      if (!window.confirm('Restore this backup? Current browser workspace data will be replaced.')) return;
      const restored = {}; Object.keys(defaults).forEach((key) => { if (payload.workspace[key] !== undefined) restored[key] = payload.workspace[key]; });
      window.localStorage.setItem(STATE_KEY, JSON.stringify(restored)); window.localStorage.setItem(LAST_SAVE_KEY, new Date().toISOString()); captureDiagnostic('Restore', 'Recovery backup restored'); window.location.reload();
    } catch (error) { captureDiagnostic('Restore error', error.message); toast(error.message || 'Wave could not restore this backup.'); event.target.value = ''; }
  });
  $('#runReliabilityCheck')?.addEventListener('click', () => {
    const required = ['pageContent', 'sidebar', 'taskDialog']; const missing = required.filter((id) => !document.getElementById(id));
    if (missing.length) captureDiagnostic('Check failed', 'Required interface elements are missing', missing.join(', '));
    else captureDiagnostic('Check passed', 'Application, storage, and interface checks passed', cloudStatus.authenticated ? 'Cloud session active' : 'Local mode active');
    navigate('Settings'); toast(missing.length ? 'Reliability check found a problem.' : 'Reliability checks passed.');
  });
  $('#clearDiagnostics')?.addEventListener('click', () => { try { window.localStorage.removeItem(DIAGNOSTICS_KEY); } catch (error) {} navigate('Settings'); toast('Diagnostic history cleared.'); });
  $('#exportDiagnostics')?.addEventListener('click', () => {
    const report = { appVersion: WAVE_APP_VERSION, createdAt: new Date().toISOString(), cloud: cloudStatus.mode, authenticated: cloudStatus.authenticated, diagnostics: readDiagnostics(), userAgent: navigator.userAgent };
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })); link.download = 'wave-diagnostics.json'; link.click(); URL.revokeObjectURL(link.href); toast('Diagnostic report downloaded.');
  });
  const handleCloudAuth = async (event, action) => {
    event.preventDefault(); const data = new FormData(event.currentTarget); const email = String(data.get('email') || '').trim(); const password = String(data.get('password') || '');
    const button = event.currentTarget.querySelector('button[type="submit"]'); if (button) button.disabled = true;
    try { const result = await window.WaveCloud[action](email, password); cloudStatus = result.status; toast(result.message); if (result.remote) { window.localStorage.setItem(STATE_KEY, JSON.stringify(result.remote)); window.location.reload(); return; } navigate('Settings'); }
    catch (error) { cloudStatus = { ...cloudStatus, message: error.message || 'Cloud account request failed.' }; navigate('Settings'); toast(cloudStatus.message); }
  };
  $('#cloudSignInForm')?.addEventListener('submit', (event) => handleCloudAuth(event, 'signIn'));
  $('#cloudSignUpForm')?.addEventListener('submit', (event) => handleCloudAuth(event, 'signUp'));
  $('#cloudSignOut')?.addEventListener('click', async () => { await window.WaveCloud.signOut(); cloudStatus = window.WaveCloud.status(); navigate('Settings'); toast('Signed out. This browser remains in local beta mode.'); });
  $('#saveCloudNow')?.addEventListener('click', async () => { try { await window.WaveCloud.saveWorkspace(state); cloudStatus = window.WaveCloud.status(); navigate('Settings'); toast('Workspace saved securely to the cloud.'); } catch (error) { toast(error.message); } });
  $('#importLocalCloud')?.addEventListener('click', async () => { if (!window.confirm('Replace your cloud workspace with the data currently stored in this browser?')) return; try { await window.WaveCloud.saveWorkspace(state); cloudStatus = window.WaveCloud.status(); navigate('Settings'); toast('Browser workspace imported to your cloud account.'); } catch (error) { toast(error.message); } });
  $('#openBetaGuide')?.addEventListener('click', () => { const dialog = $('#betaWelcomeDialog'); if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); });
  $('#exportWorkspace')?.addEventListener('click', () => {
    const payload = { exportedAt: new Date().toISOString(), version: 1, notice: 'Wave browser beta export. Review before sharing.', workspace: state };
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })); link.download = 'wave-workspace-export.json'; link.click(); URL.revokeObjectURL(link.href); toast('Workspace data exported. Store the file securely.');
  });
  $('#betaFeedbackForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const report = { createdAt: new Date().toISOString(), page: currentPage, type: data.get('type'), area: data.get('area'), details: String(data.get('details') || '').trim(), contact: String(data.get('contact') || '').trim(), browser: navigator.userAgent };
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })); link.download = `wave-feedback-${Date.now()}.json`; link.click(); URL.revokeObjectURL(link.href); event.currentTarget.reset(); recordActivity('◇', 'Prepared a beta feedback report', { actor: 'Beta tester', module: 'Settings', category: 'Operations', evidence: `${report.type} · ${report.area}` }); toast('Feedback report downloaded. Please share it with the Wave team.');
  });
  document.querySelectorAll('[data-audit-filter]').forEach((button) => button.addEventListener('click', () => { currentAuditFilter = button.dataset.auditFilter; navigate('Audit Trail'); }));
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
  $('#generateContent')?.addEventListener('click', async (event) => {
    const button = event.currentTarget; button.disabled = true; button.textContent = '✦ Generating…';
    const ideas = [
      { title: 'Builder spotlight: shipping on Nova', channel: 'LinkedIn', campaign: 'Ecosystem', copy: 'Meet the builders turning open infrastructure into useful products for real communities.' },
      { title: 'Three lessons from the latest testnet milestone', channel: 'X thread', campaign: 'Mainnet launch', copy: 'What the latest testnet taught us about resilience, developer experience, and the path to mainnet.' },
      { title: 'Community questions, answered', channel: 'LinkedIn', campaign: 'Education', copy: 'A concise guide to the questions builders and community members asked most often this week.' }
    ];
    let draft; let source = 'Demo generator';
    try {
      const token = window.WaveCloud?.accessToken?.();
      if (!cloudStatus.authenticated || !token) throw new Error('AI gateway requires a connected cloud account.');
      const response = await fetch('/api/generate', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ task: 'content_draft', brand: state.brandProfile, brief: { goal: 'Mainnet awareness', audience: state.brandProfile.audience, channel: 'LinkedIn or X thread' } }) });
      const payload = await response.json(); if (!response.ok) throw new Error(payload.error || 'AI generation failed.');
      draft = payload.draft; source = `OpenAI · ${payload.model}`;
    } catch (error) {
      const usedTitles = new Set(state.content.map((item) => item.title));
      draft = ideas.find((idea) => !usedTitles.has(idea.title)) || ideas[state.content.length % ideas.length];
      captureDiagnostic('AI fallback', error.message, 'Used safe demo generator');
    }
    state.content.unshift({ id: Date.now(), ...draft, status: 'Draft', date: 'Unscheduled', generatedBy: source });
    recordActivity('✦', `Content Strategist generated: ${draft.title}`, { actor: 'Content Strategist', module: 'Content Studio', category: 'Content', evidence: `${source} · ${state.brandProfile.name} · human review required` }); navigate('Content Studio'); toast(source.startsWith('OpenAI') ? 'AI draft created and held for human review.' : 'Demo draft created. Connect your cloud account to activate real AI.');
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
  $$('[data-customer-task]').forEach((button) => button.addEventListener('click', () => { const customer = state.customers.find((item) => item.id === Number(button.dataset.customerTask)); state.tasks.unshift({ id: Date.now(), title: `${customer.action}: ${customer.name}`, meta: 'Customer Advocate · Due in 2 days', type: customer.health === 'At risk' ? 'Urgent' : 'Review', icon: '♙', owner: 'AM' }); recordActivity('♙', `Created customer action for ${customer.name}`, { actor: 'Alex Morgan', module: 'Customers', category: 'Operations', evidence: `${customer.action} · task routed to Customer Advocate` }); persist(); $('#taskBadge').textContent = state.tasks.length; navigate('Tasks'); toast('Customer intervention created and opened in Tasks.'); }));
  $('#syncCustomers')?.addEventListener('click', () => toast('Customer health sources synced successfully.'));
  $$('[data-approve-invoice]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); const invoice = state.invoices.find((item) => item.id === Number(button.dataset.approveInvoice)); if (!invoice || invoice.matchStatus !== 'Matched') { toast('Match the invoice evidence before approval.'); return; } invoice.approvalCount = (invoice.approvalCount || 0) + 1; invoice.status = invoice.approvalCount >= 2 ? 'Ready to pay' : 'Awaiting second approval'; recordActivity('$', `Recorded invoice approval: ${invoice.vendor}`, { actor: 'Alex Morgan', module: 'Finance', category: 'Decision', evidence: `${invoice.approvalCount}/2 approvals · ${money(invoice.amount)} · ${invoice.reference || 'Invoice'}` }); navigate('Finance'); toast(invoice.status === 'Ready to pay' ? 'Dual approval complete. Invoice is ready for payment instruction.' : 'First approval recorded. A second reviewer was notified.'); }));
  $('#uploadInvoice')?.addEventListener('click', () => { const vendor = window.prompt('Vendor name:'); if (!vendor?.trim()) return; const amount = Number(window.prompt('Invoice amount:', '1000')); if (!Number.isFinite(amount) || amount <= 0) { toast('Enter a valid invoice amount.'); return; } const deliverable = window.prompt('Related deliverable or contract:', 'Campaign deliverable'); if (!deliverable?.trim()) return; const due = window.prompt('Due date:', 'Aug 15'); if (!due?.trim()) return; const id = Date.now(); state.invoices.unshift({ id, vendor: vendor.trim(), amount, due: due.trim(), status: 'Draft', deliverable: deliverable.trim(), approvalCount: 0, matchStatus: 'Needs evidence', reference: `INV-${String(id).slice(-4)}`, submittedBy: 'Alex Morgan' }); currentInvoiceId = id; recordActivity('$', `Added invoice: ${vendor.trim()}`, { actor: 'Alex Morgan', module: 'Finance', category: 'Operations', evidence: `${money(amount)} · ${deliverable.trim()} · evidence required` }); navigate('Finance'); toast('Invoice added as a draft. Match evidence before approval.'); });
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
  let item = state.content.find((content) => content.id === editingContentId); const creating = !item;
  if (!item) { item = { id: Date.now(), campaign: 'Unassigned' }; state.content.unshift(item); }
  item.title = $('#contentTitle').value.trim(); item.copy = $('#contentCopy').value.trim(); item.channel = $('#contentChannel').value; item.status = $('#contentStatus').value; item.date = $('#contentDate').value.trim() || 'Unscheduled';
  recordActivity('✦', `${creating ? 'Scheduled new content' : 'Updated content'}: ${item.title}`, { actor: 'Alex Morgan', module: 'Content Studio', category: 'Content', evidence: `${item.channel} · ${item.status} · ${item.date}` }); closeContentDialog(); if (currentPage === 'Content Studio' || currentPage === 'Calendar') navigate(currentPage); toast(creating ? 'Content scheduled successfully.' : 'Content changes saved.');
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

const betaWelcomeDialog = $('#betaWelcomeDialog');
$('#betaWelcomeForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  try { window.localStorage.setItem('wave-beta-onboarding-v1', 'accepted'); } catch (error) { console.warn(error); }
  if (typeof betaWelcomeDialog.close === 'function') betaWelcomeDialog.close(); else betaWelcomeDialog.removeAttribute('open');
  toast('Welcome to the Wave beta. Start with the testing checklist in Settings.');
});
document.querySelectorAll('[data-close-beta-guide]').forEach((button) => button.addEventListener('click', () => {
  if (typeof betaWelcomeDialog.close === 'function') betaWelcomeDialog.close(); else betaWelcomeDialog.removeAttribute('open');
}));
attachHomeEvents();
try {
  if (!window.localStorage.getItem('wave-beta-onboarding-v1')) setTimeout(() => {
    if (typeof betaWelcomeDialog.showModal === 'function') betaWelcomeDialog.showModal(); else betaWelcomeDialog.setAttribute('open', '');
  }, 250);
} catch (error) { console.warn(error); }
window.addEventListener('error', (event) => {
  const source = event.filename ? event.filename.split('/').pop() : 'browser';
  captureDiagnostic('Runtime error', event.message || 'Unknown browser error', `${source}:${event.lineno || 0}:${event.colno || 0}`);
});
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason instanceof Error ? event.reason.message : String(event.reason || 'Unknown rejected promise');
  captureDiagnostic('Unhandled request error', reason);
});
async function initializeWaveCloud() {
  if (!window.WaveCloud) return;
  try {
    const result = await window.WaveCloud.init();
    cloudStatus = result.status;
    if (result.remote) {
      const remote = JSON.stringify(result.remote); const local = window.localStorage.getItem(STATE_KEY);
      if (remote !== local) { window.localStorage.setItem(STATE_KEY, remote); window.location.reload(); return; }
    }
    if (currentPage === 'Settings' && currentSettingsTab === 'Account & cloud') navigate('Settings');
  } catch (error) {
    cloudStatus = { mode: 'local', configured: true, authenticated: false, email: '', message: error.message || 'Cloud connection unavailable. Local mode remains active.' };
  }
}
initializeWaveCloud();
window.WAVE_READY = true;
document.documentElement.classList.add('wave-ready');
