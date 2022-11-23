const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('./CONFIG');

const sequelize = new Sequelize(
	'bookstore',
	'root',
	'@Olasunkanmi1',
	{
		host: CONFIG.DB_HOST,
		dialect: CONFIG.DB_DIALECT,
	},
);
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection Successful');
	})
	.catch((err) => {
		console.log(err);
	});

// extediing an instance of our original db obejcts
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Create  Models
db.users = require('../Models/UsersModel')(sequelize, DataTypes);

// sync to modify table
db.sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Table sync success');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = db;
