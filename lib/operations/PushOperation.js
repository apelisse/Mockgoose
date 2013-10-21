'use strict';

var _ = require('lodash');

module.exports = function pushOperation(model, update, options) {
    _.forIn(update, function (value, key) {
        var temp = [];
        if (model[key]) {
            temp = temp.concat(model[key]);
        }
        var updates = value;
        if (updates.$each) {
            temp = temp.concat(updates.$each);
        } else {
            temp.push(updates);
        }
        model[key] = temp;
    });
}