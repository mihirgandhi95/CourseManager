package com.db.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.db.project.daos.WidgetDao;
import com.db.project.models.Widget;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WidgetController {

	@Autowired
	WidgetDao widgetDao;
	
	@PostMapping("/api/widget")
	public Widget createWidget(@RequestBody Widget widget) {
		return widgetDao.createWidget(widget);
	}
	
	@PostMapping("/api/topic/{topicId}/widget")
	public Widget createWidgetForTopic(@PathVariable("topicId") int tid,
			@RequestBody Widget widget) {
		return widgetDao.createWidgetForTopic(tid, widget);
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Widget findWidgetById(@PathVariable("widgetId") int wid) {
		return widgetDao.findWidgetById(wid);
	}
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return widgetDao.findAllWidgets();
	}
	
	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidget(@PathVariable("widgetId") int wid, @RequestBody Widget newWidget) {
		return widgetDao.updateWidget(wid, newWidget);
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int wid) {
		widgetDao.deleteWidget(wid);
	}
	
}
