'use strict';

const uniqid = require('uniqid');

const Uniqid = Symbol('Application#uniqid');

module.exports = {
  get uniqid() {
    if (!this[Uniqid]) {
      this[Uniqid] = uniqid;
    }

    return this[Uniqid];
  },
};
