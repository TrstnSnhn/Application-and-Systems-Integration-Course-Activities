const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.js');
const studentPath = path.join(rootDir, 'student.json');

function readStudent() {
  return JSON.parse(readFileSync(studentPath, 'utf8'));
}

function assertFilled(value, fieldName) {
  assert.equal(typeof value, 'string', `${fieldName} must be a string`);
  assert.notEqual(value.trim(), '', `${fieldName} must be filled in`);
  assert.doesNotMatch(value, /^PUT MY .+ HERE$/, `${fieldName} must not be a placeholder`);
}

test('Activity 1 prints exactly Hello, World!', () => {
  const output = execFileSync(process.execPath, [indexPath], { encoding: 'utf8' });

  assert.equal(output.replace(/\r\n/g, '\n'), 'Hello, World!\n');
});

test('student.json fullName is filled in', () => {
  assertFilled(readStudent().fullName, 'fullName');
});

test('student.json studentNumber is filled in', () => {
  assertFilled(readStudent().studentNumber, 'studentNumber');
});

test('student.json studentEmail is filled in', () => {
  assertFilled(readStudent().studentEmail, 'studentEmail');
});

test('student.json personalEmail is filled in', () => {
  assertFilled(readStudent().personalEmail, 'personalEmail');
});

test('student.json githubAccount is filled in', () => {
  assertFilled(readStudent().githubAccount, 'githubAccount');
});
