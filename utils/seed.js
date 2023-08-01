const connection = require('../config/connection');
const { Watch } = require('../models');
const { watch1,
    watch2,
    watch3,
    watch4,
    watch5,
    watch6,
    watch7,
    watch8,
    watch9,
    watch10,
    watch11,
    watch12,
    watch13,
    watch14,
    watch15,
    watch16,
    watch17,
    watch18,
    watch19,
    watch20,
    watch21,
    watch22,
    watch23,
    watch24,
    watch25,
    watch26,
    watch27,
    watch28,
    watch29,
    watch30,
    watch31,
    watch32,
    watch33,
    watch34,
    watch35,
    watch36} = require('./data');

connection.on('error', (err) => err);
console.time('seeding');
connection.once('open', async () => {
    console.log('connected to database');

    const watches = [watch1,
        watch2,
        watch3,
        watch4,
        watch5,
        watch6,
        watch7,
        watch8,
        watch9,
        watch10,
        watch11,
        watch12,
        watch13,
        watch14,
        watch15,
        watch16,
        watch17,
        watch18,
        watch19,
        watch20,
        watch21,
        watch22,
        watch23,
        watch24,
        watch25,
        watch26,
        watch27,
        watch28,
        watch29,
        watch30,
        watch31,
        watch32,
        watch33,
        watch34,
        watch35,
        watch36];

    await Watch.deleteMany({});
    // console.log(watches[0]);

    await Watch.insertMany(watches);

    console.table(watches);
    console.timeEnd('seeding complete 🌱');
});