package com.db.project.repositories;

import org.springframework.data.repository.CrudRepository;

import com.db.project.models.Chapter;



public interface ChapterRepository extends CrudRepository<Chapter, Integer> {

}