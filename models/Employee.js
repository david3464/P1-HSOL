var mongoose = require('mongoose');

// Employee Schema
var EmployeeSchema = mongoose.Schema({
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
		required: true
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

var Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

// Get Employee by Username
module.exports.getEmployeeByUsername = function(username, callback){
	var query = {username: username};
	Employee.findOne(query, callback);
};

//Employee Register to The Class and Enable view the course
module.exports.register = function (info, callback){
	employee_username = info ['employee_username'];
	course_id = info['course_id'];
	course_title = info['course_title'];
	course_package = info['course_package'];
	var query = {username : employee_username}
	Employee.findOneAndUpdate(
		query,
		{$push : { "courses" : {
					course_id : course_id,
					course_title : course_title,
					course_package : course_package
		}}},
		{safe: true, upsert: true},
		callback
	);
};