'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
	name: String,
	memberid: String,
	address: String,
	zipcode: String,
	phone: String
});

module.exports = mongoose.model('Customer', CustomerSchema);