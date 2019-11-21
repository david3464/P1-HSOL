var mongoose = require('mongoose');

// Course Schema
var CourseSchema = mongoose.Schema({
	course_number: { 
		type: String
	},
	category: {
		type: String
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	author:{
		type: String
	},
	package:{
		type: String
	},
	lessons:[{
		lesson_number: {type: Number},
		lesson_title: {type: String},
		lesson_summary:{type: String},
		lesson_description:{type: String},
		lesson_content:{type: String}
	}]
});

var Course = module.exports = mongoose.model('Course', CourseSchema);

//Fetch Single Course 
module.exports.getCourseById = function(id, callback){
	Course.findById(id, callback);
};

//Add Lesson to Course
module.exports.addLesson = function(info, callback) {
	course_id = info ['course_id'];
	lesson_number = info ['lesson_number'];
	lesson_title = info ['lesson_title'];
	lesson_summary = info ['lesson_summary'];
	lesson_description = info ['lesson_description'];
	lesson_content = info ['lesson_content'];
	var query = {_id : course_id,}
	Course.findByIdAndUpdate(
		query,
		{$push : { "lessons" : {
			lesson_number : lesson_number,
			lesson_title : lesson_title,
			lesson_summary : lesson_summary,
			lesson_description : lesson_description,
			lesson_content : lesson_content
		}}},
		{safe: true, upsert: true},
		callback
	);
};