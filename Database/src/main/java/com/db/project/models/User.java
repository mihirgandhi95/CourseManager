package com.db.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id  //indicate primary key, can use a class to denote multiple pks
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String email;
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String role;
	
	public User() {
		
	}
	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public void set(User other) {
		this.username = other.username == null ? this.username : other.username;
		this.firstName = other.firstName == null ? this.firstName : other.firstName;
		this.lastName = other.lastName == null ? this.lastName : other.lastName;
		this.password = other.password == null ? this.password : other.password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
