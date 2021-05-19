// import the db connection
const mongoose = require('./conn')
// import the model
const Moon = require('../models/moon')


// open a db connection
const db = mongoose.connection
// import seedData.json
const manyMoon = require('./seedData.json')

Moon.deleteMany({}).then(() => {
	Moon.insertMany(manyMoon).then((moon) => {
		console.log('our moon', moon);
		db.close();
	});
});