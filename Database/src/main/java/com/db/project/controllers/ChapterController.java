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

import com.db.project.daos.ChapterDao;
import com.db.project.models.Chapter;
import com.db.project.models.Course;
import com.db.project.models.Topic;
import com.db.project.models.Chapter;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ChapterController {
	
	@Autowired
	ChapterDao chapterDao;
	
	@PostMapping("/api/chapter")
	public Chapter createChapter(@RequestBody Chapter chapter) {
		return chapterDao.createChapter(chapter);
	}
	
	@PostMapping("/api/module/{moduleId}/chapter") 
	public Chapter createChapterForModule(@PathVariable("moduleId") int mid,
			@RequestBody Chapter chapter) {
		return chapterDao.createChapterForModule(mid, chapter);	
	}
	
	@GetMapping("/api/chapter/{chapterId}")
	public Chapter findChapterById(@PathVariable("chapterId") int cid) {
		return chapterDao.findChapterById(cid);
	}
	
	@PutMapping("/api/chapter/{chapterId}")
	public Chapter updateChapter(@PathVariable("chapterId") int id, @RequestBody Chapter newChapter) {
		return chapterDao.updateChapter(id, newChapter);
	}
	
	@DeleteMapping("/api/chapter/{chapterId}")
	public void deleteChapter(@PathVariable("chapterId") int tid) {
		chapterDao.deleteChapter(tid);
	}
	

	@GetMapping("/api/chapter/{chapterId}/topic") 
	public List<Topic> findTopicsForChapter(@PathVariable("chapterId") int id) {
		return chapterDao.findTopicsForChapter(id);
	}
	
	@PostMapping("/api/chapter/{chapterId}/topic/{topicId}")
	public void addTopicToChapter(@PathVariable("chapterId") int cid, 
			@PathVariable("topicId") int tid) {
		chapterDao.addTopicToChapter(tid, cid);
	}
	

}
