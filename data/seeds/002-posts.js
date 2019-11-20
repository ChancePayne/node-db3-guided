exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('posts')
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex('posts').insert([
                {user_id: 1, contents: 'there is no saying where feet would take you'},
                {user_id: 2, contents: 'of course you are and I am coming with you'},
                {user_id: 3, contents: 'I will take it'}
            ]);
        });
};
