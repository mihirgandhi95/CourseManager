package com.db.project.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.db.project.models.Student;
import com.db.project.models.User;

public interface StudentRepository extends CrudRepository<Student, Integer>{
	@Query("SELECT u FROM Student u WHERE u.username=:username")
	Iterable<Student> findStudentByUsername(@Param("username") String username);
	
	@Query("SELECT u FROM Student u WHERE u.username=:username AND u.password=:password")
	Student findStudentByCredentials(@Param("username") String username, 
			@Param("password") String password);
}
