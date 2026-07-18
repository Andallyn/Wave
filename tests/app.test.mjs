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

test('contains no merge markers or leaked conflict branch labels', () => {
  const debris = /^(<<<<<<<|=======|>>>>>>>)( |$)|^\s*(codex\/create-proposal-for-client-management-tools-[a-z0-9]+|main)\s*$/m;
  for (const [path, content] of files) assert.doesNotMatch(content, debris, path);
});
