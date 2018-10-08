package com.db.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.db.project.daos.CourseDao;
import com.db.project.daos.FacultyDao;
import com.db.project.daos.StudentDao;
import com.db.project.models.Course;
import com.db.project.models.Faculty;
import com.db.project.models.Module;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CourseController {

	@Autowired
	CourseDao courseDao;
	
	@Autowired
	FacultyDao facultyDao;
	
	@Autowired
	StudentDao studentDao;
	
	@PostMapping("/api/user/{userId}/course")
	public Course createCourse(@PathVariable("userId") int uid,
			@RequestBody Course course) {
		return courseDao.createCourse(uid, course);
	}
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		return courseDao.createCourse(course);
	}
	
	@GetMapping("/api/course/{courseId}")
	public Course findCourseById(@PathVariable("courseId") int cid) {
		return courseDao.findCourseById(cid);
	}
	
	@GetMapping("/api/course")
	public List<Course> findAllCourses() {
		return courseDao.findAllCourses();
	}
	
	@GetMapping("/api/faculty/course/{courseId}") 
	public Faculty findFacultyForCourse(@PathVariable("courseId") int cid) {
		Course course = courseDao.findCourseById(cid);
		return course.getInstructor();
	}
	
	@GetMapping("/api/course/{courseId}/module") 
	public List<Module> findModulesForCourse(@PathVariable("courseId") int cid) {
		return courseDao.findModulesForCourse(cid);
	}
	
	@DeleteMapping("/api/course/{courseId}") 
	public void deleteCourse(@PathVariable("courseId") int cid) {
		courseDao.deleteCourse(cid);
	}
	
	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(@PathVariable("courseId") int cid, @RequestBody Course newCourse) {
		return courseDao.updateCourse(cid, newCourse);
	}
	
	@PostMapping("/api/student/{sid}/course/{cid}")
	public Course enrollStudentInCourse(@PathVariable("cid") int cid,
			@PathVariable("sid") int sid) {
		return courseDao.enrollStudentInCourse(sid, cid);
	}
	
	@PutMapping("/api/student/{studentId}/course/{courseId}") 
	public void unenrollStudentFromCourse(@PathVariable("courseId") int cid,
			@PathVariable("studentId") int sid) {
		courseDao.unenrollStudent(sid, cid);
	}
	
	@PostMapping("/api/faculty/{fid}/course/{cid}")
	public void addFacultyToCourse(@PathVariable("fid") int fid,
			@PathVariable("cid") int cid) {
		courseDao.addFacultyToCourse(fid, cid);
	}
}
