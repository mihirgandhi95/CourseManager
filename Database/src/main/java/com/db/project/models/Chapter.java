package com.db.project.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Chapter {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String chapterName;
	
	@ManyToOne
	@JsonIgnore
	private Module module;
	
	@OneToMany(mappedBy="chapter", cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Topic> topics;
	
	public Chapter() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getChapterName() {
		return chapterName;
	}

	public void setChapterName(String chapterName) {
		this.chapterName = chapterName;
	}

	

	public Module getModule() {
		return module;
	}
	
	public void set(Chapter other) {
		this.chapterName = other.chapterName;
	}
	
	public void setModule(Module module) {
		this.module = module;
		if (!this.module.getChapters().contains(this)) {
			this.module.getChapters().add(this);
		}
	}

	public List<Topic> getTopics() {
		return topics;
	}

	public void setTopics(List<Topic> topics) {
		this.topics = topics;
		for (Topic topic : topics) {
			topic.setChapter(this);
		}
	}
	
	public void addTopic(Topic topic) {
		if (!topics.contains(topic)) {
			topics.add(topic);
		}
		topic.setChapter(this);
	}
	
}
