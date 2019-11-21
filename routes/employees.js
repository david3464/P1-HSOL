var express = require('express');
var router = express.Router();
// Include User Model
const User = require('../models/User');
// Include Employee Model
const Employee = require('../models/Employee');
// Include Course Model
const Course = require('../models/Course');

// app.use('/employees', employeesRouter);

//router address localhost:3000/employees/classes/register
//descriptions:Employee Register Course Page
//comments: 
router.post('/classes/register', async (req, res, next)=> {
        info = [];
        info ['employee_username'] = req.user.username;
        info ['course_id'] = req.body.course_id;
        info ['course_title'] = req.body.course_title;
        info ['course_package'] = req.body.course_package;
        // console.log(info); 
        Employee.register(info, function(err,employee){
                if(err) throw err; 
                // console.log(employee)
        })
        req.flash('success_msg', 'You are now register and you can view this course!')
        res.redirect('/users/dashboard')
});
//router address localhost:3000/employees/:username/details
//descriptions:Employee Personal Details Info
//comments: 
router.get('/:username/details', async (req, res, next)=> {
	Employee.getEmployeeByUsername(req.params.username, function(err, employee){
        if(err) throw err;    
        res.render('employees/dashboard', {employee: employee} );
        });
});

//router address localhost:3000/employees/:username/details/edit
//descriptions:Show Employee Personal Details Info
//comments: Render the existing Employee Info
router.get('/:username/details/edit', async (req, res, next)=> {
	Employee.getEmployeeByUsername(req.params.username, function(err, employee){
        if(err) throw err;    
        res.render('employees/employee_edit_page', {employee: employee} );
        });
});

//router address localhost:3000/employees/:username/details/edit
//descriptions:Update Employee Personal Details Info
//comments: Edit the existing Employee Info
router.put('/:username/details/edit', async (req, res, next)=> {
        let employee
        try {
                employee = await Employee.findOneAndUpdate({username :req.params.username})
                                employee.first_name = req.body.first_name,
                                employee.last_name = req.body.last_name,
                                employee.address = req.body.address,
                                employee.post_code = req.body.post_code,
                                employee.city = req.body.city,
                                employee.email = req.body.email,
                                employee.mobile = req.body.mobile
                                // console.log(employee)
                                await employee.save()
                res.redirect(`/users/dashboard`)
        }
        catch (err) {
                if (employee == null) {
                        console.log('err during during put 3000/employees/:username/details/edit can not find employee on exist database'+err);
                        res.redirect('/')
                } else {
                       console.log('err during 3000/employees/:username/details/edit update employee '+err);
                       res.redirect('/')
                }
        }
});

//router address localhost:3000/employees/:username/details
//descriptions: Clear Employee Personal Details Info
//comments: Delete the existing Employee Info
router.delete('/:username/details', async (req, res, next)=> {
        let employee
        let user
        try { 
                let deleteusername = req.params.username
                employee = await Employee.findOneAndDelete({ username: deleteusername});
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
	Employee.getEmployeeByUsername(req.params.username, function(err, employee){
        if(err) throw err;    
        res.render('employees/course_list', {employee: employee} );
        });
});

module.exports = router;
