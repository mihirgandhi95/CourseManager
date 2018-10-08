package com.db.project.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Faculty extends User{
	private String office;
	private Boolean tenure;
	
	@OneToMany(mappedBy="instructor")
	private List<Course> courses;
	
	public Faculty() {super.setRole("Faculty");}
	
	public Faculty(String username, String password) {
		super(username, password);
		super.setRole("Faculty");
	}
	
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public Boolean isTenure() {
		return tenure;
	}
	public void setTenure(Boolean tenure) {
		this.tenure = tenure;
	}
	public List<Course> getCourses() {
		return courses;
	}
	public void setCourses(List<Course> courses) {
		this.courses = courses;
		for (Course course : courses) {
			course.setInstructor(this);
		}
	}
	
	public void addCourse(Course course) {
		if (course.getInstructor() != this) {
			course.setInstructor(this);
		} 
		this.courses.add(course); 
	}
}
