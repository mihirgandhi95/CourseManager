package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.repositories.StudentRepository;
import com.db.project.models.Course;
import com.db.project.models.Section;
import com.db.project.models.Student;


@Service("StudentDao")
@Transactional
public class StudentDao {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private CourseDao courseDao;
	
	public Student createStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public void deleteAllStudents() {
		studentRepository.deleteAll();
	}
	
	public List<Student> findAllStudents() {
		return (List<Student>) studentRepository.findAll();
	}
	
	
	public Student findStudentByCredentials(String firstName, String lastName) {
		return studentRepository.findStudentByCredentials(firstName, lastName);
	}
	
	public Student findStudentById(int id) {
		return studentRepository.findOne(id);
	}
	
	public List<Course> findCoursesForStudent(int id) {
		Student student = studentRepository.findOne(id);
		return student.getEnrolledCourses();
	}
	
	public Student updateStudent(int id, Student newStudent) {
		Student student = studentRepository.findOne(id);
		student.set(newStudent);
		return studentRepository.save(student);
	}
	
	public void deleteStudent(int id) {
		studentRepository.delete(id);
	}
	
	public void addCourseToStudent(int cid, int sid) {
		Student student = studentRepository.findOne(sid);
		Course course = courseDao.findCourseById(cid);
		student.addCourse(course);
		studentRepository.save(student);
	}
}
