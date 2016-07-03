'use strict';

const data = require('.');
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

describe('data', () => {
  it('exports test data', () => {
    assert.deepEqual(Object.keys(data), ['api']);
    assert.deepEqual(Object.keys(data.api), ['users']);
  });
});

describe('api.users', () => {
  it('exports api users', () => {
    assert(data.api.users instanceof Array);
    assert.equal(data.api.users.length, 2);

    data.api.users.forEach(user => {
      assert(user._id instanceof ObjectID);
    });
  });
});
