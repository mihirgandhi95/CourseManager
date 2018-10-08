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

import com.db.project.daos.FacultyDao;
import com.db.project.models.Course;
import com.db.project.models.Faculty;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FacultyController {
	@Autowired
	FacultyDao facultyDao;
	
	@PostMapping("/api/faculty")
	public Faculty createFaculty(@RequestBody Faculty faculty) {
		return facultyDao.createFaculty(faculty);
	}
	
	@GetMapping("/api/faculty")
	public List<Faculty> findAllFaculty() {
		return facultyDao.findAllFaculty();
	}
	
	@GetMapping("/api/faculty/{facultyId}")
	public Faculty findFacultyById(@PathVariable("facultyId") int fid) {
		return facultyDao.findfacultyById(fid);
	}
	
	@GetMapping("/api/faculty/{facultyId}/course")
	public List<Course> findCoursesForFaculty(@PathVariable("facultyId") int fid) {
		return facultyDao.findCoursesForFaculty(fid);
	}
	
	
	@PutMapping("/api/faculty/{fid}/course/{cid}")
	public void addCourseToFaculty(@PathVariable("fid") int fid, @PathVariable("cid") int cid) {
		facultyDao.addCourseToFaculty(cid, fid);	
	}
	
	@PutMapping("/api/faculty/{facultyId}")
	public Faculty updateFaculty(@PathVariable("facultyId") int fid, @RequestBody Faculty newFaculty) {
		return facultyDao.updateFaculty(fid, newFaculty);
	}
	
	@DeleteMapping("/api/faculty/{facultyId}")
	public void deleteFaculty(@PathVariable("facultyId") int fid) {
		facultyDao.deleteFaculty(fid);
	}
	
}
