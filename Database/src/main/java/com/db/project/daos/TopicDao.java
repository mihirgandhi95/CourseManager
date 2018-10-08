package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Topic;
import com.db.project.models.Widget;
import com.db.project.repositories.TopicRepository;

@Service("TopicDao")
@Transactional
public class TopicDao {
	@Autowired
	TopicRepository topicRepository;
	
	@Autowired
	WidgetDao widgetDao;
	
	@Autowired
	ChapterDao chapterDao;
	
	public Topic createTopic(Topic topic) {
		return topicRepository.save(topic);
	}
	
	public Topic createTopicForChapter(int cid, Topic topic) {
		Topic t = topicRepository.save(topic);
		chapterDao.addTopicToChapter(t.getId(), cid);
		return t;
	}
	
	public void deleteAllTopics() {
		topicRepository.deleteAll();
	}
	
	public List<Topic> findAllTopics() {
		return (List<Topic>) topicRepository.findAll();
	}
	
	public void deleteTopic(int id) {
		topicRepository.delete(id);
	}
	
	public Topic findTopicById(int id) {
		return topicRepository.findOne(id);
	}
	
	public Topic updateTopic(int id, Topic newTopic) {
		Topic topic = topicRepository.findOne(id);
		topic.set(newTopic);
		return topicRepository.save(topic);
	}
	
	public List<Widget> findWidgetsForTopic(int topicId) {
		Topic topic = topicRepository.findOne(topicId);
		return topic.getContentWidgets();
	}
	
	public void addWidgetToTopic(int wid, int tid) {
		Topic topic = topicRepository.findOne(tid);
		Widget widget = widgetDao.findWidgetById(wid);
		topic.addWidget(widget);
		topicRepository.save(topic);
	}
	
}
