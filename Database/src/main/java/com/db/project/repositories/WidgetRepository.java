package com.db.project.repositories;

import org.springframework.data.repository.CrudRepository;

import com.db.project.models.Widget;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {

}
