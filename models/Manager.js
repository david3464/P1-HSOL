var mongoose = require('mongoose');

// Manager Schema
var ManagerSchema = mongoose.Schema({
    first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	full_name: {
		type: String
	},	
	username: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default:'Store Manager'
	},
	address: {
		type: String
	},
	post_code: {
		type: String
	},
	city: {
		type: String
	},
	email: {
		type: String
	},
    mobile: {
		type: String
	},
	branch: {
		type: String,
		required: true
	},
	courses:[{
		course_id:{type: [mongoose.Schema.Types.ObjectId]},
		course_title: {type:String},
		course_package: {type:String}
	}]
	
});

var Manager = module.exports = mongoose.model('Manager', ManagerSchema);

// Get Manager by Username
module.exports.getManagerByUsername = function(username, callback){
	var query = {username: username};
	Manager.findOne(query, callback);
};

//Manager Register to The Class and Enable view the course
module.exports.register = function (info, callback){
	manager_username = info ['manager_username'];
	course_id = info['course_id'];
	course_title = info['course_title'];
	course_package = info['course_package'];
	var query = {username : manager_username}
	Manager.findOneAndUpdate(
		query,
		{$push : { "courses" : {
					course_id : course_id,
					course_title : course_title,
					course_package : course_package
		}}},
		{safe: true, upsert: true},
		callback
	);
}
