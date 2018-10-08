//package com.db.project.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.db.project.models.Course;
//import com.db.project.models.Faculty;
//import com.db.project.models.Section;
//import com.db.project.repositories.FacultyRepository;
//import com.db.project.repositories.SectionRepository;
//
//@CrossOrigin(origins = "http://localhost:4200")
//@RestController
//public class SectionController {
//	
//	@Autowired
//	SectionRepository sectionRepository;
//	
//	@Autowired
//	FacultyRepository facultyRepository;
	
//	@PostMapping("/api/section")
//	public Section createSection(@RequestBody Section section) {
//		return sectionRepository.save(section);
//	}
//	
//	@GetMapping("/api/faculty/{sectionId}/section")
//	public List<Section> findSectionById(@PathVariable("sectionId") int sid) {
//			return (List<Section>) sectionRepository.findOne(sid);
//		}
//	
//	@GetMapping("/api/faculty/{sectionId}/section") 
//	public Faculty findFacultyForSection(@PathVariable("sectionId") int sid) {
//		Section section = sectionRepository.findOne(sid);
//		return section.getInstructor();
//	}

//}
