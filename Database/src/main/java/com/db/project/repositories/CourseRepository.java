package com.db.project.repositories;

import org.springframework.data.repository.CrudRepository;

import com.db.project.models.Course;
import com.db.project.models.User;

public interface CourseRepository extends CrudRepository<Course, Integer> {

}
