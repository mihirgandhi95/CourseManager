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
import org.springframework.web.bind.annotation.RestController;

import com.db.project.daos.TopicDao;
import com.db.project.models.Module;
import com.db.project.models.Topic;
import com.db.project.models.Widget;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TopicController {
	
	@Autowired
	TopicDao topicDao;
	
	@PostMapping("/api/topic")
	public Topic createTopic(@RequestBody Topic topic) {
		return topicDao.createTopic(topic);
	}
	
	@PostMapping("/api/chapter/{chapterId}/topic")
	public Topic createTopicForChapter(@PathVariable("chapterId") int cid,
			@RequestBody Topic topic) {
		return topicDao.createTopicForChapter(cid, topic);
	}
	
	@GetMapping("/api/topic/{topicId}")
	public Topic findTopicById(@PathVariable("topicId") int tid) {
		return topicDao.findTopicById(tid);
	}
	
	@GetMapping("/api/topic")
	public List<Topic> findAllTopics() {
		return topicDao.findAllTopics();
	}
	
	@PutMapping("/api/topic/{topicId}")
	public Topic updateTopic(@PathVariable("topicId") int id, @RequestBody Topic newTopic) {
		return topicDao.updateTopic(id, newTopic);
	}
	

	
	@DeleteMapping("/api/topic/{topicId}")
	public void deleteTopic(@PathVariable("topicId") int tid) {
		topicDao.deleteTopic(tid);
	}
	

	@GetMapping("/api/topic/{topicId}/widget") 
	public List<Widget> findWidgetsForTopic(@PathVariable("topicId") int id) {
		return topicDao.findWidgetsForTopic(id);
	}
	
	@PostMapping("/api/topic/{topicId}/widget/{widgetId}")
	public void addWidgetToTopic(@PathVariable("topicId") int tid, 
			@PathVariable("widgetId") int wid) {
		topicDao.addWidgetToTopic(wid, tid);
	}
}
