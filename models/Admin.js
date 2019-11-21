var mongoose = require('mongoose');

// Admin Schema
var AdminSchema = mongoose.Schema({
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
		default:'All Account Admin',
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
		default: "All Store",
		required: true
	},
	courses:[{
		course_id:{type: [mongoose.Schema.Types.ObjectId]},
		course_title: {type:String},
		course_package: {type:String}
	}]
	
});

var Admin = module.exports = mongoose.model('Admin', AdminSchema);

// Get Admin by Username
module.exports.getAdminByUsername = function(username, callback){
	var query = {username: username};
	Admin.findOne(query, callback);
}

// Get Register Admin to The Class Enable change the Lesson
module.exports.register = function (info, callback){
	admin_username = info ['admin_username'];
	course_id = info['course_id'];
	course_title = info['course_title'];
	course_package = info['course_package'];
	var query = {username : admin_username}
	Admin.findOneAndUpdate(
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

