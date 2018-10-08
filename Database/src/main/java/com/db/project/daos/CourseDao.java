package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Course;
import com.db.project.models.Faculty;
import com.db.project.models.Module;
import com.db.project.models.Student;
import com.db.project.repositories.CourseRepository;


@Service("CourseDao")
@Transactional
public class CourseDao {
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private FacultyDao facultyDao;
	
	public Course createCourse(int uid, Course course) {
		Course c = courseRepository.save(course);
		if (studentDao.findStudentById(uid) != null) {
			studentDao.addCourseToStudent(c.getId(), uid);
		} else if (facultyDao.findfacultyById(uid) != null) {
			facultyDao.addCourseToFaculty(c.getId(), uid);
		}
		return c;
	}
	
	public Course createCourse(Course course) {
		return courseRepository.save(course);
	}
	
	public void deleteAllCourses() {
		courseRepository.deleteAll();
	}
	
	public List<Course> findAllCourses() {
		return (List<Course>) courseRepository.findAll();
	}
	
	public Course findCourseById(int id) {
		return courseRepository.findOne(id);
	}
	
	
	public Course updateCourse(int id, Course newCourse) {
		Course course = courseRepository.findOne(id);
		course.set(newCourse);
		return courseRepository.save(course);
	}
	
	public void deleteCourse(int id) {
		courseRepository.delete(id);
	}
	
	public List<Module> findModulesForCourse(int cid) {
		Course course = courseRepository.findOne(cid);
		return course.getModules();
	}
	
	public Course enrollStudentInCourse(int sid, int cid) {
		Course course = courseRepository.findOne(cid);
		Student student = studentDao.findStudentById(sid);
		course.addStudent(student);
		return courseRepository.save(course);
	}
	
	public void addFacultyToCourse(int fid, int cid) {
		Course course = courseRepository.findOne(cid);
		Faculty faculty = facultyDao.findfacultyById(fid);
		course.setInstructor(faculty);
		courseRepository.save(course);
	}
	
	public void unenrollStudent(int sid, int cid) {
		Course course = courseRepository.findOne(cid);
		Student student = studentDao.findStudentById(sid);
		course.removeStudent(student);
		courseRepository.save(course);
	}

}
