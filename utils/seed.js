const connection = require('../config/connection');
const { Item } = require('../models');
const watches = require('./data').default;
connection.on('error', (err) => err);
console.time('seeding');
connection.once('open', async () => {
    console.log('connected to database');

    await Item.deleteMany();

    await Item.insertMany(watches);

    console.table(watches);
    console.timeEnd('seeding complete 🌱');
    ProcessingInstruction.exit(0)

});