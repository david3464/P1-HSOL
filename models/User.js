var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	branch: {
		type: String,
		required: true
	},
	type:{
		type:String,
		required: true
    },
    password:{
		type: String,
		bcrypt: true
	},
	date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

//Store Employee and User Info into Database
module.exports.saveEmployee = function(newUser, newEmployee, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		newUser.save();	
		// console.log('Saved into User Database')
		newEmployee.save();
		// console.log('Saved into Employee Database')
	});
}

//Store Manager and User Info into Database
module.exports.saveManager = function(newUser, newManager, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		newUser.save();	
		// console.log('Saved into User Database')
		newManager.save();
		// console.log('Saved into Employee Database')
	});
}

//Admin and User Info into Database
module.exports.saveAdmin = function(newUser, newAdmin, callback){
	bcrypt.hash(newUser.password, 10, function(err, hash){
		if(err) throw errl
		// Set hash
		newUser.password = hash;
		newUser.save();	
		// console.log('Saved into User Database')
		newAdmin.save();
		// console.log('Saved into Employee Database')
	});
}