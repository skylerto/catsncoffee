'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;

const main = require('../src/main');

describe('Main', () => {
  it('should do that cool thing you want it to', () => {
    assert(main());
  });
});
