package com.db.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Widget {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne()
	@JsonIgnore
	private Topic topic;
	
	private String name;
	private int position;
	private String dateCreated;
	private String placeholder;
	private String url;
	private String text;
	private int size;
	private String dtype;
	
	public Widget() {}
	
	public Widget(String dtype) {
		this.setDtype(dtype);
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPosition() {
		return position;
	}
	public void setPosition(int position) {
		this.position = position;
	}
	public String getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}
	public String getPlaceholder() {
		return placeholder;
	}
	public void setPlaceholder(String placeholder) {
		this.placeholder = placeholder;
	}
	public int getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public String getDtype() {
		return dtype;
	}

	public void setDtype(String dtype) {
		this.dtype = dtype;
	}
	
	public void set(Widget newWidget) {
		this.setDateCreated(newWidget.dateCreated);
		this.setDtype(newWidget.dtype);
		this.setSize(newWidget.size);
		this.setName(newWidget.name);
		this.setPlaceholder(newWidget.placeholder);
		this.setPosition(newWidget.position);
		this.setText(newWidget.text);
		this.setUrl(newWidget.url);
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
		if (!topic.getContentWidgets().contains(this)) {
			topic.getContentWidgets().add(this);
		}
	}
	
}
