package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Chapter;
import com.db.project.models.Course;
import com.db.project.models.Module;
import com.db.project.repositories.CourseRepository;
import com.db.project.repositories.ModuleRepository;

@Service("ModuleDao")
@Transactional
public class ModuleDao {
	
	
	@Autowired
	private ModuleRepository moduleRepository;
	
	@Autowired
	private ChapterDao chapterDao;
	
	@Autowired
	private CourseDao courseDao;

	public Module createModule(Module module) {
		return moduleRepository.save(module);
	}
	
	public Module createModuleForCourse(int cid, Module module) {
		Module m = moduleRepository.save(module);
		addModuleToCourse(m.getId(), cid);
		return m;
	}
	
	public void deleteAllModules() {
		moduleRepository.deleteAll();
	}
	
	public List<Module> findAllModules() {
		return (List<Module>) moduleRepository.findAll();
	}
	
	public Module findModuleById(int id) {
		return moduleRepository.findOne(id);
	}
	
	public Module updateModule(int id, Module newModule) {
		Module module = moduleRepository.findOne(id);
		module.set(newModule);
		return moduleRepository.save(module);
	}
	
	public void deleteModule(int id) {
		moduleRepository.delete(id);
	}
	
	public Course findCourseForModule(int mid) {
		Module module = moduleRepository.findOne(mid);
		return module.getCourse();
	}
	
	public List<Chapter> findChaptersForModule(int mid) {
		Module module = moduleRepository.findOne(mid);
		return module.getChapters();
	}
	
	public void addChapterToModule(int cid, int mid) {
		Module module = moduleRepository.findOne(mid);
		Chapter chapter = chapterDao.findChapterById(cid);
		module.addChapter(chapter);
		moduleRepository.save(module);
	}
	
	public void addModuleToCourse(int mid, int cid) {
		Module module = moduleRepository.findOne(mid);
		Course course = courseDao.findCourseById(cid);
		course.addModule(module);
		moduleRepository.save(module);
	}

}
