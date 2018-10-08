package com.db.project.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.db.project.daos.FacultyDao;
import com.db.project.daos.StudentDao;
import com.db.project.models.Course;
import com.db.project.models.Faculty;
import com.db.project.models.Student;
import com.db.project.models.User;
import com.db.project.repositories.UserRepository;



/**
 * Service class to listen to REST requests for User entity.
 * @author hanfff
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	StudentDao studentDao;

	@Autowired
	FacultyDao facultyDao;

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@GetMapping("/api/allusers")
	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int uid) {
		return userRepository.findOne(uid);
	}

//	@GetMapping("/api/user")
//	public User findUserByCredentials(@RequestParam(name="username") String username,
//			@RequestParam(name="password") String pwd) {
//		return userRepository.findUserByCredentials(username, pwd);
//	}


//	@GetMapping("/api/user/{userId}/course")
//	public List<Course> findCoursesForUser(@PathVariable("userId") int uid) {
//		User user = userRepository.findOne(uid);
//		List<Course> res = new ArrayList<>();
//		if (user.getRole()=="Faculty") {
//			Faculty f = (Faculty) user;
//			res = f.getCourses();
//		} else if (user.getRole()=="Student") {
//			Student s = (Student) user;
//			res = s.getEnrolledCourses();
//		}
//		return res;
//	}

	
	@GetMapping("/api/user/{userId}/course")
	public List<Course> findCoursesForUser(@PathVariable("userId") int uid) {
		User user = userRepository.findOne(uid);
		List<Course> res = new ArrayList<>();
		System.out.println(user.getRole());
		if (user.getRole().equals("Faculty")) {
			res = facultyDao.findCoursesForFaculty(uid);
		} else if (user.getRole().equals("Student")) {
			res = studentDao.findCoursesForStudent(uid);
		}
		return res;
	}

	@PostMapping("/api/login")
	public User login(@RequestBody User user) {
		String name = user.getUsername();
		String pwd = user.getPassword();
		return userRepository.findUserByCredentials(name, pwd);
	}

	@GetMapping("/api/user")
	public User findUserByCredentials(@RequestParam(name="username") String username,
			@RequestParam(name="password") String pwd) {
		return userRepository.findUserByCredentials(username, pwd);
	}



	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int uid, @RequestBody User newUser) {
		User user = userRepository.findOne(uid);
		user.set(newUser);
		return userRepository.save(user);
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int uid) {
		userRepository.delete(uid);
	}
}
