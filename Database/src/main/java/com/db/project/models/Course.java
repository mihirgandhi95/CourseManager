package com.db.project.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Course {
	@Id  //indicate primary key, can use a class to denote multiple pks
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String courseName;
	
	@ManyToOne
	@JsonIgnore
	private Faculty instructor;
	
	@OneToMany(mappedBy="course")
	private List<Module> modules;
	
	@ManyToMany(mappedBy="enrolledCourses")
	@JsonIgnore
	private List<Student> students;
	
	public Course() {}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Faculty getInstructor() {
		return instructor;
	}

	public void setInstructor(Faculty instructor) {
		this.instructor = instructor;
		if (!this.instructor.getCourses().contains(this)) {
			this.instructor.getCourses().add(this);
		}
	}
	
	public List<Module> getModules() {
		return modules;
	}
	public void setModules(List<Module> modules) {
		this.modules = modules;
		for (Module module : modules) {
			module.setCourse(this);
		}
	}
	
	public void addModule(Module module) {
		if (module.getCourse() != this) {
			module.setCourse(this);
		} 
		this.modules.add(module); 
	}
	
	public void set(Course other) {
		this.courseName = other.courseName;
	}

	
	public void removeStudent(Student student) {
		if (students.contains(student)) {
			this.students.remove(student);
		}
		if (student.getEnrolledCourses().contains(this)) {
			student.getEnrolledCourses().remove(this);
		}
	}

	public List<Student> getStudents() {
		if (students == null) students= new ArrayList<>();
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
		for (Student s : students) {
			if (!s.getEnrolledCourses().contains(this)) {
				s.getEnrolledCourses().add(this);
			}
		}
	}
	
	public void addStudent(Student student) {
		if (!students.contains(student)) {
			this.students.add(student);
		}
		if (!student.getEnrolledCourses().contains(this)) {
			student.getEnrolledCourses().add(this);
		}
	}
}
