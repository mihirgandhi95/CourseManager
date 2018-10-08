package com.db.project.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.db.project.models.User;

/**
 * This class represents a repository interface that provides CRUD functionality
 * for User entity.
 * @author hanfff
 *
 */
public interface UserRepository extends CrudRepository<User, Integer> {
	//<User, Integer> : <table name, pk type>
	@Query("SELECT u FROM User u WHERE u.username=:username")
	Iterable<User> findUserByUsername(@Param("username") String username);
	
	@Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
	User findUserByCredentials(@Param("username") String username, 
			@Param("password") String password);
	
	
	@Query("SELECT u FROM User u WHERE u.email=:email")
	Iterable<User> findUserByEmail(@Param("email") String email);
}
