package com.db.project.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.db.project.models.Faculty;
import com.db.project.models.User;

public interface FacultyRepository extends CrudRepository<Faculty, Integer>{
	@Query("SELECT u FROM Faculty u WHERE u.username=:username")
	Iterable<Faculty> findFacultyByUsername(@Param("username") String username);
	
	@Query("SELECT u FROM Faculty u WHERE u.username=:username AND u.password=:password")
	Faculty findFacultyByCredentials(@Param("username") String username, 
			@Param("password") String password);
}
