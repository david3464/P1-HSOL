var express = require('express');
var router = express.Router();
// Include User Model
const User = require('../models/User');
// Include Admin Model
const Admin = require('../models/Admin');
// Include Course Model
const Course = require('../models/Course');

// app.use('/admins', adminsRouter);

//router address localhost:3000/admins/:username/details
//descriptions:Admin Personal Details Info
//comments: 
router.get('/:username/details', async (req, res, next)=> {
	Admin.getAdminByUsername(req.params.username, function(err, admin){
        if(err) throw err;    
        res.render('admins/dashboard', {admin: admin} );
        
        });
});

//router address localhost:3000/admins/:username/details/edit
//descriptions:Show Admin Personal Details Info
//comments: Render the existing Admin Info
router.get('/:username/details/edit', async (req, res, next)=> {
	Admin.getAdminByUsername(req.params.username, function(err, admin){
        if(err) throw err;    
        res.render('admins/admin_edit_page', {admin: admin} );
        });
});

//router address localhost:3000/admins/:username/details/edit
//descriptions:Update Admin Personal Details Info
//comments: Edit the existing Admin Info
router.put('/:username/details/edit', async (req, res, next)=> {
        let admin
        try {
                admin = await Admin.findOneAndUpdate({username :req.params.username})
                                admin.first_name = req.body.first_name,
                                admin.last_name = req.body.last_name,
                                admin.address = req.body.address,
                                admin.post_code = req.body.post_code,
                                admin.city = req.body.city,
                                admin.email = req.body.email,
                                admin.mobile = req.body.mobile
                                // console.log(admin)
                                await admin.save()
                res.redirect(`/users/dashboard`)
        }
        catch (err) {
                if (admin == null) {
                        console.log('err during during put 3000/admins/:username/details/edit can not find admin on exist database'+err);
                        res.redirect('/')
                } else {
                       console.log('err during 3000/admin/:username/details/edit update manager '+err);
                       res.redirect('/')
                }
        }
});

//router address localhost:3000/admins/:username/classes
//descriptions:Admin View Course Page
//comments: 
router.get('/:username/classes', async (req, res, next)=> {
	Admin.getAdminByUsername(req.params.username, function(err, admin){
        if(err) throw err;
        // console.log(admin);
        // console.log(admin.courses[0].course_id);
        res.render('admins/course_list', {admin: admin} );
        });
});

//router address localhost:3000/admin/:username/managerlist
//descriptions:Manager List in All Branch
//comments: 
router.get('/:username/managerlist', async (req, res, next)=> {
	Admin.getAdminByUsername(req.params.username, function(err, admin){
                if(err) throw err;    
                User.find(function(err,users){
                        if(err) throw err;  
                        // console.log(users);
                        res.render('admins/all_list', { admin: admin, users: users });
                        // console.log(admin.branch)
                });
        });
});


//router address localhost:3000/admins/classes/register
//descriptions:Admin Register Course Page
//comments: 
router.post('/classes/register', async (req, res, next)=> {
        info = [];
        info ['admin_username'] = req.user.username;
        info ['course_id'] = req.body.course_id;
        info ['course_title'] = req.body.course_title;
        info ['course_package'] = req.body.course_package;
        // console.log(info); 
        Admin.register(info, function(err,admin){
                if(err) throw err; 
                // console.log(admin)
        })
        req.flash('success_msg', 'You are now register to edit this course!')
        res.redirect('/users/dashboard')
});


module.exports = router;

