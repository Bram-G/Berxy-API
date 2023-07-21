const connection = require('../config/connection');
const { Watch } = require('../models');
const {Watch1, Watch2, Watch3, Watch4, Watch5, Watch6, Watch7, Watch8, Watch9, Watch10, Watch11, Watch12, Watch13} = require('./data');

connection.on('error', (err) => err);
console.time('seeding');
connection.once('open', async () => {
    console.log('connected to database');

    const watches = [Watch1, Watch2, Watch3, Watch4, Watch5, Watch6, Watch7, Watch8, Watch9, Watch10, Watch11, Watch12, Watch13];

    await Watch.deleteMany({});
    // console.log(watches[0]);

    await Watch.insertMany(watches);

    console.table(watches);
    console.timeEnd('seeding complete 🌱');
});