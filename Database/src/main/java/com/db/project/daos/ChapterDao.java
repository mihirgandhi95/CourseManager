package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Chapter;
import com.db.project.models.Module;
import com.db.project.models.Topic;
import com.db.project.repositories.ChapterRepository;

@Service("ChapterDao")
@Transactional
public class ChapterDao {
	
	
	@Autowired
	private ChapterRepository chapterRepository;
	
	@Autowired
	private ModuleDao moduleDao;
	
	@Autowired
	private TopicDao topicDao;

	public Chapter createChapter(Chapter chapter) {
		return chapterRepository.save(chapter);
	}
	
	public Chapter createChapterForModule(int mid, Chapter chapter) {
		Chapter c = chapterRepository.save(chapter);
		moduleDao.addChapterToModule(c.getId(), mid);
		return c;
	}
	
	public void deleteAllChapters() {
		chapterRepository.deleteAll();
	}
	
	public List<Chapter> findAllChapters() {
		return (List<Chapter>) chapterRepository.findAll();
	}
	
	public Chapter findChapterById(int id) {
		return chapterRepository.findOne(id);
	}
	
	public Chapter updateChapter(int id, Chapter newChapter) {
		Chapter chapter = chapterRepository.findOne(id);
		chapter.set(newChapter);
		return chapterRepository.save(chapter);
	}
	
	public void deleteChapter(int id) {
		chapterRepository.delete(id);
	}
	
	public List<Chapter> findChaptersForModule(int mid) {
		Module module = moduleDao.findModuleById(mid);
		return module.getChapters();
	}
	
	public void addTopicToChapter(int tid, int cid) {
		Topic topic = topicDao.findTopicById(tid);
		Chapter chapter = chapterRepository.findOne(cid);
		chapter.addTopic(topic);
		chapterRepository.save(chapter);
	}
	
	public List<Topic> findTopicsForChapter(int cid) {
		Chapter chapter = chapterRepository.findOne(cid);
		return chapter.getTopics();
	}

}
