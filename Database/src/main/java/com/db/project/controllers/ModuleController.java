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

import com.db.project.daos.ModuleDao;
import com.db.project.models.Chapter;
import com.db.project.models.Module;
import com.db.project.models.Widget;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ModuleController {
	
	@Autowired 
	ModuleDao moduleDao;
	
	@PostMapping("/api/course/{courseId}/module")
	public Module createModuleForCourse(@PathVariable("courseId") int cid, 
			@RequestBody Module module)  {
		return moduleDao.createModuleForCourse(cid, module);
	}
	
	@PostMapping("/api/module")
	public Module createModule(@RequestBody Module module) {
		return moduleDao.createModule(module);
	}
	
	@GetMapping("/api/module")
	public List<Module> findAllModules() {
		return moduleDao.findAllModules();
	}
	
	@GetMapping("/api/module/{moduleId}")
	public Module findModuleById(@PathVariable("moduleId") int mid) {
		return moduleDao.findModuleById(mid);
	}
	
	@PutMapping("/api/module/{moduleId}")
	public Module updateModule(@PathVariable("moduleId") int id, @RequestBody Module newModule) {
		return moduleDao.updateModule(id, newModule);
	}
	
	@DeleteMapping("/api/module/{moduleId}")
	public void deleteModule(@PathVariable("moduleId") int tid) {
		moduleDao.deleteModule(tid);
	}
	

	@GetMapping("/api/module/{moduleId}/chapter") 
	public List<Chapter> findChaptersForModule(@PathVariable("moduleId") int id) {
		return moduleDao.findChaptersForModule(id);
	}
	
	@PostMapping("/api/module/{moduleId}/chapter/{chapterId}")
	public void addChapterToModule(@PathVariable("moduleId") int cid, 
			@PathVariable("moduleId") int mid) {
		moduleDao.addChapterToModule(cid, mid);
	}
	
	@PostMapping("/api/course/{courseId}/module/{moduleId}")
	public void addModuleToCourse(@PathVariable("courseId") int cid, 
			@PathVariable("moduleId") int mid) {
		moduleDao.addModuleToCourse(mid, cid);
	}
}
