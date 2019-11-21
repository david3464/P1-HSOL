var express = require('express');
var router = express.Router();
// app.use('/courses', coursesRouter);


// Include Employee Model
const Course = require('../models/Course');


//router address localhost:3000/courses
//descriptions: Course Index Page
//comments: Test Page for Layout Setting
//status: not online need direct route
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('courses/course_index', { classes });
    });
});

//router address localhost:3000/courses/featurecourse
//descriptions: Feature Course Page
//comments: 
router.get('/featurecourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
              res.render('courses/1featurecourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/commoncourse
//descriptions: Common Course Page
//comments: 
router.get('/commoncourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
              res.render('courses/2commoncourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/fronthostcourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/fronthostcourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
            res.render('courses/3fronthostcourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/servercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/servercourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
            res.render('courses/4servercourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/sushibarrollercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/sushibarrollercourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
            res.render('courses/5sushibarrollercourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/kitchenchefcourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/kitchenchefcourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
            res.render('courses/6kitchenchefcourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/managercourse
//descriptions: Front Desk Host Course Page
//comments: 
router.get('/managercourse', function(req, res, next) {
    Course.find(function(err,courses){
		if (err) {console.log(err);}
        else {
            //   console.log(courses);
            res.render('courses/7managercourse', { courses: courses });
        }
    })
});

//router address localhost:3000/courses/:id/details
//descriptions: Course Index Page
//comments: Demo single Course Details
router.get('/:id/details', async (req, res, next)=> {
	try {
        var course = await Course.findById(req.params.id)
                                 .exec();
        res.render('courses/course_details', { course:course });
        // console.log(course)    ;
    } catch (error) {
        res.redirect('/')
    }
});

//router address localhost:3000/courses/:id/lessons/edit
//descriptions: Edit Lesson Content
//comments: 
router.get('/:id/lesson/edit', (req, res, next)=> {
    res.render('courses/lesson_edit');
});

//router address localhost:3000/courses/:id/lessons/add
//descriptions: Add a New Lesson
//comments: 
router.get('/:id/lesson/add', (req, res, next)=> {
    res.render('courses/lesson_add',{course_id:req.params.id});
});

//router address localhost:3000/courses/:id/lessons/add
//descriptions: Register Lesson Handle
//comments: Get New Lesson Info and Store Into Datebase
router.post('/:id/lesson/add', (req, res, next)=> {
    var info = [];
    info ['course_id'] = req.params.id;
    info ['lesson_number'] = req.body.lesson_number;
    info ['lesson_title'] =req.body.lesson_title;
    info ['lesson_summary'] =req.body.lesson_summary;
    info ['lesson_description'] =req.body.lesson_description;
    info ['lesson_content'] =req.body.lesson_content;
    // console.log(req.body.lesson_number)
    console.log(info);
    console.log(info ['course_id']);
    
    Course.addLesson(info, function (err,lesson) {
        console.log('lesson added...');
    });
    req.flash('success_msg','Lesson Add to this Course!');
    res.redirect('/users/dashboard')
});

//router address localhost:3000/courses/:id/lessonlist
//descriptions: View lesson list in a Course
//comments: 
router.get('/:id/lessonlist', (req, res, next)=> {
    Course.getCourseById([req.params.id],function(err,course){
        // console.log(course.lessons.length);
        // console.log(course.lessons[0]._id);
        // console.log(course.lessons[0].lesson_number);
        // console.log(course.lessons[0].lesson_title);
        if (err) throw err;
        res.render('courses/lessonlist',{course:course});    
    });
});

//router address localhost:3000/courses/:id/lesson/:lesson_id
//descriptions: View specific lesson in detail
//comments: 
router.get('/:id/lesson/:lesson_id', (req, res, next)=> {
    Course.getCourseById([req.params.id],function(err, course){
        // console.log(course);
        let lesson_id = req.params.lesson_id;
        // console.log(lesson_id);
		if(err) throw err;
		res.render('courses/lessondetails',{course: course, lesson_id: lesson_id});
	});
});

module.exports = router;
