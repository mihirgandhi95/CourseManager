package com.db.project.models;

import java.util.ArrayList;
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
public class Topic {
	@Id  //indicate primary key, can use a class to denote multiple pks
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@OneToMany(mappedBy="topic", cascade = CascadeType.ALL)
	private List<Widget> contentWidgets;
	
	@ManyToOne
	@JsonIgnore
	private Chapter chapter;
	
	private String name;	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Widget> getContentWidgets() {
		if (this.contentWidgets == null) {
			this.contentWidgets = new ArrayList<>();
		}
		return contentWidgets;
	}
	public void setContentWidgets(List<Widget> contentWidgets) {
		this.contentWidgets = contentWidgets;
		for (Widget w : contentWidgets) {
			w.setTopic(this);
		}
	}
	
	public void addWidget(Widget widget) {
		if (!this.contentWidgets.contains(widget)) {
			this.contentWidgets.add(widget);
			widget.setTopic(this);
		}
	}
	
	public void set(Topic other) {
		this.setName(other.name);
	}

	public Chapter getChapter() {
		return chapter;
	}
	public void setChapter(Chapter chapter) {
		this.chapter = chapter;
		if (!chapter.getTopics().contains(this)) {
			chapter.getTopics().add(this);
		}
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
}

