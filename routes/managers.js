var express = require('express');
var router = express.Router();
// Include User Model
const User = require('../models/User');
// Include Manager Model
const Manager = require('../models/Manager');
// Include Course Model
const Course = require('../models/Course');

// app.use('/managers', managersRouter);

//router address localhost:3000/employees/:username/details
//descriptions:Employee Personal Details Info
//comments: 
router.get('/:username/details', async (req, res, next)=> {
	Manager.getManagerByUsername(req.params.username, function(err, manager){
        if(err) throw err;    
        res.render('managers/dashboard', { manager: manager});
        });
});

//router address localhost:3000/managers/:username/details/edit
//descriptions:Show Manager Personal Details Info
//comments: Render the existing Manager Info
router.get('/:username/details/edit', async (req, res, next)=> {
	Manager.getManagerByUsername(req.params.username, function(err, manager){
        if(err) throw err;    
        res.render('managers/manager_edit_page', {manager: manager} );
        });
});

//router address localhost:3000/managers/:username/details/edit
//descriptions:Update Manager Personal Details Info
//comments: Edit the existing Employee Info
router.put('/:username/details/edit', async (req, res, next)=> {
        let manager
        try {
                manager = await Manager.findOneAndUpdate({username :req.params.username})
                                manager.first_name = req.body.first_name,
                                manager.last_name = req.body.last_name,
                                manager.address = req.body.address,
                                manager.post_code = req.body.post_code,
                                manager.city = req.body.city,
                                manager.email = req.body.email,
                                manager.mobile = req.body.mobile
                                // console.log(employee)
                                await manager.save()
                res.redirect(`/users/dashboard`)
        }
        catch (err) {
                if (manager == null) {
                        console.log('err during during put 3000/managers/:username/details/edit can not find manager on exist database'+err);
                        res.redirect('/')
                } else {
                       console.log('err during 3000/managers/:username/details/edit update manager '+err);
                       res.redirect('/')
                }
        }
});

//router address localhost:3000/managers/:username/details
//descriptions: Cleare Manager Personal Details Info
//comments: Delete the existing Manager Info
router.delete('/:username/details', async (req, res, next)=> {
        let manager
        let user
        try { 
                let deleteusername = req.params.username
                manager = await Manager.findOneAndDelete({ username: deleteusername});
                user = await User.findOneAndDelete({ username:deleteusername})
                res.redirect('/users/dashboard')
        } 
        catch(err) {
                console.log(err)
        }
});

//router address localhost:3000/employees/:username/classes
//descriptions:Employee Registered ClassesDetails Info
//comments: 
router.get('/:username/classes', async (req, res, next)=> {
	Manager.getManagerByUsername(req.params.username, function(err, manager){
        if(err) throw err;    
        res.render('managers/course_list', { manager: manager});
        });
});

//router address localhost:3000/employees/:username/employeelist
//descriptions:Employee List Under this Branch
//comments: 
router.get('/:username/employeelist', async (req, res, next)=> {
	Manager.getManagerByUsername(req.params.username, function(err, manager){
                if(err) throw err;    
                User.find(function(err,users){
                        if(err) throw err;  
                        // console.log(users);
                        res.render('managers/employee_list', { manager: manager, users: users });
                        // console.log(manager.branch)
                });
        });
});

//router address localhost:3000/managers/classes/register
//descriptions:Manager Register Course Page
//comments: 
router.post('/classes/register', async (req, res, next)=> {
        info = [];
        info ['manager_username'] = req.user.username;
        info ['course_id'] = req.body.course_id;
        info ['course_title'] = req.body.course_title;
        info ['course_package'] = req.body.course_package;
        // console.log(info); 
        Manager.register(info, function(err,manager){
                if(err) throw err; 
                // console.log(manager)
        })
        req.flash('success_msg', 'You are now register and you can view this course!')
        res.redirect('/users/dashboard')
});
module.exports = router;