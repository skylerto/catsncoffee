'use strict';

const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
var request = require('supertest');
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;

describe('Server', () => {
  var server;
  beforeEach(() => {
    server = require('../index.js');
  });
  afterEach(() => {
    server.close();
  });
  it('should respond to /', (done) => {
    request(server).get('/').expect(200, done);
  });
  it('should respond to /products', (done) => {
    request(server).get('/products').expect(200, done);
  });
  it('should 404 garbage', (done) => {
    request(server).get('/foo/bar').expect(404, done);
  });
});
