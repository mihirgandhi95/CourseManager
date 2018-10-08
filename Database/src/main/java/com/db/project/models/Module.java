package com.db.project.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Module {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String moduleName;
	@ManyToOne
	@JsonIgnore
	private Course course;
	
	@OneToMany(mappedBy="module")
	private List<Chapter> chapters;
	
	public Module() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
		if (!this.course.getModules().contains(this)) {
			this.course.getModules().add(this);
		}
	}
	
	public void set(Module other) {
		this.moduleName = other.moduleName;
	}
	
	public List<Chapter> getChapters() {
		return chapters;
	}
	public void setChapters(List<Chapter> chapters) {
		this.chapters = chapters;
		for (Chapter chapter : chapters) {
			chapter.setModule(this);
		}
	}
	
	public void addChapter(Chapter chapter) {
		if (chapter.getModule() != this) {
			chapter.setModule(this);
		} 
		this.chapters.add(chapter); 
	}
	
	
}
