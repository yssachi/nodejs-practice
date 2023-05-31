// These are the alternative syntax that we can use for module.exports

module.exports.items = ['item1', 'item2']; //syntax 1 for array

const person = {
    name: 'Yssa'
}

module.exports.singlePerson = person; // syntax 2 for object


// * =========FILE: app.js ===========
// const data = require('./6-alternative-syntax');
// console.log(data);
