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

test('contains no merge markers or leaked conflict branch labels', () => {
  const debris = /^(<<<<<<<|=======|>>>>>>>)( |$)|^\s*(codex\/create-proposal-for-client-management-tools-[a-z0-9]+|main)\s*$/m;
  for (const [path, content] of files) assert.doesNotMatch(content, debris, path);
});
