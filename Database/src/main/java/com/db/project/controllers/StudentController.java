package com.db.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties.Credential;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.db.project.models.Credentials;
import com.db.project.models.Student;
import com.db.project.repositories.StudentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentController {
	
	@Autowired
	StudentRepository studentRepository;
	
	@PostMapping("/api/student")
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	
	@GetMapping("/api/student/{studentId}")
	public Student findStudentById(@PathVariable("studentId") int uid) {
		return studentRepository.findOne(uid);
	}
	
	@GetMapping("/api/student")
	public Student findStudentByCredentials(@RequestParam(name="studentname") String studentname,
			@RequestParam(name="password") String pwd) {
		return studentRepository.findStudentByCredentials(studentname, pwd);
	}
	
	@PutMapping("/api/student/{studentId}")
	public Student updateStudent(@PathVariable("studentId") int uid, @RequestBody Student newStudent) {
		Student student = studentRepository.findOne(uid);
		student.set(newStudent);
		return studentRepository.save(student);
	}
	
	@DeleteMapping("/api/student/{studentId}")
	public void deleteStudent(@PathVariable("studentId") int uid) {
		studentRepository.delete(uid);
	}
}
