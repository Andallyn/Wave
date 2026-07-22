import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const paths = ['README.md', 'index.html', 'plan.md', 'styles.css', 'app.js', 'package.json'];
const files = new Map(await Promise.all(paths.map(async (path) => [
  path,
  await readFile(new URL(`../${path}`, import.meta.url), 'utf8')
])));
const html = files.get('index.html');
const app = files.get('app.js');

test('loads exactly one canonical application bundle and stylesheet', () => {
  assert.equal((html.match(/<script src="app\.js\?v=4"/g) || []).length, 1);
  assert.equal((html.match(/<link rel="stylesheet" href="styles\.css\?v=4"/g) || []).length, 1);
  assert.doesNotMatch(html, /wave-app-v\d+\.js/);
});

test('provides a visible boot failure recovery path', () => {
  assert.match(html, /id="bootError"/);
  assert.match(html, /id="bootRetry"/);
  assert.match(html, /window\.WAVE_READY/);
  assert.match(html, /event\.lineno/);
  assert.match(html, /source !== 'app\.js'/);
  assert.match(app, /window\.WAVE_READY = true/);
});

test('binds every main navigation destination', () => {
  const pages = ['Command Center', 'Tasks', 'Content Studio', 'Community', 'Partnerships', 'Events', 'Customers', 'Finance', 'Analytics', 'Settings'];
  pages.forEach((page) => assert.match(html, new RegExp(`data-page="${page}"`)));
  assert.match(app, /\.nav-item\[data-page\]/);
  assert.match(app, /navigate\(button\.dataset\.page\)/);
});

test('versions persisted state and validates collection shapes', () => {
  assert.match(app, /wave-state-v3/);
  assert.match(app, /Array\.isArray/);
  assert.match(app, /window\.localStorage\.setItem\(STATE_KEY/);
});

test('supports browsers without the native dialog API', () => {
  assert.match(app, /typeof .*\.showModal === 'function'/);
  assert.match(app, /setAttribute\('open', ''\)/);
});

test('submits and cancels tasks without native dialog validation deadlocks', () => {
  assert.match(html, /data-close-task/);
  assert.match(app, /taskForm'\)\.addEventListener\('submit'/);
  assert.match(app, /function closeTaskDialog/);
  assert.match(app, /\$\$\('\[data-close-task\]'\)\.forEach/);
  assert.doesNotMatch(app, /createTaskButton'\)\.addEventListener\('click'/);
});

test('content and partnership generation mutate persisted workspace state', () => {
  assert.match(app, /const ideas = \[/);
  assert.match(app, /state\.content\.unshift/);
  assert.match(app, /const candidates = \[/);
  assert.match(app, /state\.leads\.unshift/);
});

test('provides complete Content Studio workflows', () => {
  assert.match(html, /id="contentDialog"/);
  assert.match(html, /id="contentPreviewDialog"/);
  ['data-content-view', 'data-preview-content', 'data-edit-content', 'data-delete-content'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /contentForm'\)\.addEventListener\('submit'/);
  assert.match(app, /state\.content = state\.content\.filter/);
  assert.match(app, /data-page-link="Settings"/);
});

test('never iterates a single-element selector as a collection', () => {
  assert.doesNotMatch(app, /(^|\n)\s*\$\([^\)\n]+\)\.forEach/g);
  assert.match(app, /\$\$\('\[data-close-content\]'\)\.forEach/);
  assert.match(app, /\$\$\('\[data-content-view\]'\)\.forEach/);
});

test('provides an evidence-based unified Approval Inbox', () => {
  assert.match(html, /data-page="Approvals"/);
  ['Content', 'Community', 'Outreach', 'Finance'].forEach((type) => assert.match(app, new RegExp(`type: '${type}'`)));
  assert.match(app, /function applyApprovalDecision/);
  assert.match(app, /data-approval-filter/);
  assert.match(app, /data-approve-action/);
  assert.match(app, /data-reject-approval/);
  assert.match(app, /approval\.decision/);
  assert.match(app, /approval\.decidedAt/);
  assert.match(app, /invoice\.status = 'Awaiting second approval'/);
});

test('provides connected Campaign Workspaces', () => {
  assert.match(html, /data-page="Campaigns"/);
  assert.match(app, /campaigns: \[/);
  assert.match(app, /function campaignMetrics/);
  ['taskIds', 'contentCampaigns', 'leadIds', 'eventIds', 'budget', 'spent'].forEach((field) => assert.match(app, new RegExp(field)));
  assert.match(app, /data-select-campaign/);
  assert.match(app, /data-campaign-task/);
  assert.match(app, /data-campaign-page="Approvals"/);
  assert.match(app, /campaign\.taskIds\.push/);
});


test('provides a structured searchable Audit Trail', () => {
  assert.match(html, /data-page="Audit Trail"/);
  assert.match(app, /audit: \[/);
  assert.match(app, /state\.audit\.unshift/);
  ['actor', 'module', 'category', 'evidence', 'time'].forEach((field) => assert.match(app, new RegExp(field)));
  assert.match(app, /data-audit-filter/);
  assert.match(app, /id="auditSearch"/);
  assert.match(app, /id="exportAudit"/);
  assert.match(app, /wave-audit-trail\.csv/);
});


test('provides persistent brand memory and workspace roles', () => {
  assert.match(app, /brandProfile: \{/);
  assert.match(app, /members: \[/);
  ['voice', 'audience', 'promise', 'avoid', 'terms'].forEach((field) => assert.match(app, new RegExp(field)));
  assert.match(app, /id="brandMemoryForm"/);
  assert.match(app, /data-settings-tab/);
  assert.match(app, /data-member-role/);
  assert.match(app, /rolePermissions/);
  assert.match(app, /Brand profile updated/);
  assert.match(app, /Access changed from/);
  assert.match(app, /state\.brandProfile\.voice/);
});


test('provides governed Agent Operations and connector health', () => {
  assert.match(html, /data-page="Agent Operations"/);
  assert.match(app, /'Agent Operations'\(\)/);
  ['autonomy', 'budgetUsed', 'budgetLimit', 'runs', 'lastRun'].forEach((field) => assert.match(app, new RegExp(field)));
  assert.match(app, /connectors: \[/);
  assert.match(app, /data-agent-autonomy/);
  assert.match(app, /data-run-agent/);
  assert.match(app, /data-sync-connector/);
  assert.match(app, /workload unit used/);
  assert.match(app, /connector healthy/);
});


test('provides interactive exportable Live Analytics', () => {
  assert.match(app, /pageHeader\('Live Analytics'/);
  assert.match(app, /function analyticsSnapshot/);
  assert.match(app, /data-analytics-range/);
  assert.match(app, /id="analyticsCampaign"/);
  assert.match(app, /id="refreshAnalytics"/);
  assert.match(app, /wave-live-analytics\.csv/);
  ['funnel', 'channels', 'contributions', 'approvalRate', 'costPerOutcome'].forEach((field) => assert.match(app, new RegExp(field)));
  assert.match(app, /Refreshed live analytics/);
});


test('provides connected Goals and Outcomes planning', () => {
  assert.match(html, /data-page="Goals"/);
  assert.match(app, /goals: \[/);
  assert.match(app, /Goals\(\)/);
  assert.match(app, /function goalProgress/);
  assert.match(app, /keyResults/);
  assert.match(app, /data-goal-filter/);
  assert.match(app, /data-update-kr/);
  assert.match(app, /data-open-goal-campaign/);
  assert.match(app, /id="createGoal"/);
  assert.match(app, /Updated key result/);
});


test('keeps the expanded sidebar navigation independently scrollable', () => {
  const styles = files.get('styles.css');
  assert.match(styles, /\.nav\{[^}]*flex:1[^}]*min-height:0[^}]*overflow-y:auto/);
  assert.match(styles, /overscroll-behavior:contain/);
  assert.match(styles, /\.sidebar-footer\{flex:none/);
});


test('provides a decision-ready persistent Daily Briefing', () => {
  assert.match(html, /data-page="Briefing"/);
  assert.match(app, /Briefing\(\)/);
  assert.match(app, /function briefingItems/);
  assert.match(app, /briefingDismissed/);
  assert.match(app, /briefingSnoozed/);
  ['data-briefing-filter', 'data-open-briefing', 'data-dismiss-briefing', 'data-snooze-briefing'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /id="refreshBriefing"/);
  assert.match(app, /Generated fresh Daily Briefing/);
});


test('provides a connected reschedulable Operations Calendar', () => {
  assert.match(html, /data-page="Calendar"/);
  assert.match(app, /Calendar\(\)/);
  assert.match(app, /function calendarItems/);
  assert.match(app, /function calendarItemMarkup/);
  assert.match(app, /function rescheduleCalendarItem/);
  ['data-calendar-filter', 'data-calendar-view', 'data-open-calendar', 'data-reschedule-calendar'].forEach((control) => assert.match(app, new RegExp(control)));
  ['Content', 'Task', 'Campaign', 'Event'].forEach((type) => assert.match(app, new RegExp(type + ':')));
  assert.match(app, /Schedule updated across the workspace/);
});


test('Calendar scheduling creates new persisted content', () => {
  assert.match(app, /data-schedule-content/);
  assert.match(app, /\$\('#scheduleContent, \[data-schedule-content\]'\)/);
  assert.match(app, /const creating = !item/);
  assert.match(app, /state\.content\.unshift\(item\)/);
  assert.match(app, /Content scheduled successfully/);
});

test('provides governed persistent Automation Rules', () => {
  assert.match(html, /data-page="Automations"/);
  assert.match(app, /automations: \[/);
  assert.match(app, /Automations\(\)/);
  ['data-automation-filter', 'data-toggle-automation', 'data-run-automation'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /id="createAutomation"/);
  assert.match(app, /requiresApproval/);
  assert.match(app, /Ran automation/);
});


test('provides an operational Customer Success workspace', () => {
  assert.match(app, /pageHeader\('Customer Success'/);
  ['owner', 'renewal', 'value', 'milestones', 'interactions'].forEach((field) => assert.match(app, new RegExp(field)));
  ['data-customer-filter', 'data-select-customer', 'data-customer-milestone', 'data-add-customer-note', 'data-update-customer-health'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /Customer success plan updated/);
  assert.match(app, /Customer interaction saved/);
  assert.match(app, /Customer health updated with evidence/);
  assert.match(app, /milestones: Array\.isArray\(customer\.milestones\)/);
  assert.match(app, /interactions: Array\.isArray\(customer\.interactions\)/);
  assert.match(app, /Create task ·/);
  assert.match(app, /navigate\('Tasks'\)/);
});


test('provides governed end-to-end Finance Operations', () => {
  assert.match(app, /pageHeader\('Finance Operations'/);
  ['approvalCount', 'matchStatus', 'reference', 'submittedBy'].forEach((field) => assert.match(app, new RegExp(field)));
  ['data-finance-filter', 'data-select-invoice', 'data-match-invoice', 'data-approve-invoice', 'data-payment-instruction'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /state\.invoices = state\.invoices\.map/);
  assert.match(app, /Dual approval complete/);
  assert.match(app, /Payment instruction sent to the connected provider/);
  assert.match(app, /Wave prepares and records payment instructions/);
  assert.match(app, /Invoice added as a draft/);
  assert.match(app, />Select<\/button>/);
  assert.match(app, /finance-row-actions/);
  assert.match(app, /Invoice selected\. Review its evidence/);
});


test('provides an approval-gated Partnership CRM', () => {
  assert.match(app, /pageHeader\('Partnership CRM'/);
  ['contact', 'nextStep', 'fitReasons', 'interactions'].forEach((field) => assert.match(app, new RegExp(field)));
  ['data-lead-filter', 'data-select-lead', 'data-add-lead-note', 'data-create-outreach'].forEach((control) => assert.match(app, new RegExp(control)));
  assert.match(app, /state\.leads = state\.leads\.map/);
  assert.match(app, /First external outreach/);
  assert.match(app, /Outreach draft routed to Approval Inbox/);
  assert.match(app, /Relationship note saved/);
});

test('contains no merge markers or leaked conflict branch labels', () => {
  const debris = /^(<<<<<<<|=======|>>>>>>>)( |$)|^\s*(codex\/create-proposal-for-client-management-tools-[a-z0-9]+|main)\s*$/m;
  for (const [path, content] of files) assert.doesNotMatch(content, debris, path);
});

test('provides safe beta onboarding, export, and feedback workflows', () => {
  ['betaWelcomeDialog', 'betaWelcomeForm', 'wave-beta-onboarding-v1', 'openBetaGuide', 'exportWorkspace', 'betaFeedbackForm', 'wave-workspace-export.json', 'wave-feedback-'].forEach((marker) => assert.match(app + html, new RegExp(marker)));
  assert.match(app, /This preview does not transmit it automatically/);
  assert.match(html, /I will not enter confidential or financial credentials/);
  assert.match(html, /privacy\.html/);
  assert.match(html, /terms\.html/);
});

test('provides a gated Supabase account and cloud workspace foundation', () => {
  ['Account & cloud', 'cloudSignInForm', 'cloudSignUpForm', 'saveCloudNow', 'importLocalCloud', 'cloudSignOut', 'initializeWaveCloud', 'WaveCloud'].forEach((marker) => assert.ok(app.includes(marker), marker));
  assert.match(html, /config\.js\?v=1/);
  assert.match(html, /cloud\.js\?v=1/);
  assert.match(app, /service-role key/);
  assert.match(app, /scheduleSave\(state\)/);
});

test('provides validated recovery backups and local reliability diagnostics', () => {
  ['Reliability Center', 'downloadRecovery', 'chooseRecovery', 'recoveryFile', 'runReliabilityCheck', 'clearDiagnostics', 'exportDiagnostics', 'captureDiagnostic', 'validWorkspaceShape', 'wave-recovery'].forEach((marker) => assert.ok(app.includes(marker), marker));
  assert.match(app, /file\.size > 5000000/);
  assert.match(app, /payload\.format !== 'wave-recovery'/);
  assert.match(app, /Object\.keys\(defaults\)/);
  assert.match(app, /unhandledrejection/);
  assert.match(app, /DIAGNOSTICS_KEY/);
});

test('uses an authenticated server-side AI gateway with a safe demo fallback', () => {
  assert.match(app, /fetch\('\/api\/generate'/);
  assert.match(app, /Authorization: `Bearer/);
  assert.match(app, /WaveCloud\?\.accessToken/);
  assert.match(app, /human review required/);
  assert.match(app, /AI fallback/);
  assert.match(app, /Demo draft created/);
});
