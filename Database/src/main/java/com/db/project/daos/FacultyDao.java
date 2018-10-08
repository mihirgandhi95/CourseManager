package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Course;
import com.db.project.models.Faculty;
import com.db.project.models.Section;
import com.db.project.models.Student;
import com.db.project.repositories.FacultyRepository;




@Service("FacultyDao")
@Transactional
public class FacultyDao {
	
	@Autowired
	private FacultyRepository facultyRepository;
	
	@Autowired
	private CourseDao courseDao;

	public Faculty createFaculty(Faculty faculty) {
		return facultyRepository.save(faculty);
	}
	
	public void deleteAllFaculty() {
		facultyRepository.deleteAll();
	}
	
	public List<Faculty> findAllFaculty() {
		return (List<Faculty>) facultyRepository.findAll();
	}
	
	public List<Course> findCoursesForFaculty(int fid) {
		Faculty faculty = facultyRepository.findOne(fid);
		return faculty.getCourses();
	}
	
	public void addCourseToFaculty(int cid, int fid) {
		Faculty faculty = facultyRepository.findOne(fid);
		Course course = courseDao.findCourseById(cid);
		faculty.addCourse(course);
		facultyRepository.save(faculty);
	}
	
	public Faculty findFacultyByCredentials(String firstName, String lastName) {
		return facultyRepository.findFacultyByCredentials(firstName, lastName);
	}
	
	public Faculty findfacultyById(int id) {
		return facultyRepository.findOne(id);
	}
	
	public Faculty updateFaculty(int id, Faculty newFaculty) {
		Faculty faculty = facultyRepository.findOne(id);
		faculty.set(newFaculty);
		return facultyRepository.save(faculty);
	}
	
	public void deleteFaculty(int id) {
		facultyRepository.delete(id);
	}
}
