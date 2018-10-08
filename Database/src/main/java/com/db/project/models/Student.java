package com.db.project.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Student extends User{
	private float gpa;
	private int graduateYear;

	@ManyToMany()
	@JoinTable(
			name="STUDENT_Course",
			joinColumns=@JoinColumn(name="STUDENT_ID", referencedColumnName="id"),
			inverseJoinColumns=@JoinColumn(name="COURSE_ID", referencedColumnName="id"))
	@JsonIgnore
	private List<Course> enrolledCourses;


	public Student() {super.setRole("Student");}

	public Student(String username, String password) {
		super(username, password);
		super.setRole("Student");
	}

	public float getGpa() {
		return gpa;
	}
	public void setGpa(float gpa) {
		this.gpa = gpa;
	}
	public int getGraduateYear() {
		return graduateYear;
	}
	public void setGraduateYear(int graduateYear) {
		this.graduateYear = graduateYear;
	}

	public List<Course> getEnrolledCourses() {
		if (enrolledCourses == null) {
			enrolledCourses = new ArrayList<>();
		}
		return enrolledCourses;
	}

	public void setEnrolledCourses(List<Course> enrolledCourses) {
		this.enrolledCourses = enrolledCourses;
		for (Course course : enrolledCourses) {

		}
	}

	public void addCourse(Course course) {
		if (!this.enrolledCourses.contains(course)) {
			this.enrolledCourses.add(course);
		}
		if (!course.getStudents().contains(this)) {
			course.getStudents().add(this);
		}
	}
}