import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const app = await readFile(new URL('../wave-app-v4.js', import.meta.url), 'utf8');

test('loads the cache-busted application bundle', () => {
  assert.match(html, /<script src="wave-app-v4\.js"/);
  assert.match(html, /onerror="window\.WAVE_BOOT_ERROR=/);
});

test('provides a visible boot failure recovery path', () => {
  assert.match(html, /id="bootError"/);
  assert.match(html, /id="bootRetry"/);
  assert.match(html, /window\.WAVE_READY/);
  assert.match(app, /window\.WAVE_READY = true/);
  assert.match(html, /event\.lineno/);
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
