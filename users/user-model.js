const db = require('../data/db-config.js');

module.exports = {
    findAll, findById
};

function findAll() {
    return db('users');
    // return db.select('*').from('users');
}

function findById(id) {
    return db('users').where({id});
}