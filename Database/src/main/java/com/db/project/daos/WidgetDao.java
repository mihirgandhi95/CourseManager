package com.db.project.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.project.models.Section;
import com.db.project.models.Widget;
import com.db.project.repositories.WidgetRepository;

@Service("WidgetDao")
@Transactional
public class WidgetDao {
	@Autowired
	WidgetRepository widgetRepository;
	
	@Autowired
	TopicDao topicDao;
	
	public Widget createWidget(Widget widget) {
		return widgetRepository.save(widget);
	}
	
	public Widget createWidgetForTopic(int tid, Widget widget) {
		Widget w = widgetRepository.save(widget);
		topicDao.addWidgetToTopic(w.getId(), tid);
		return w;
	}
	
	public void deleteAllWidgets() {
		widgetRepository.deleteAll();
	}
	
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	
	public Widget findWidgetById(int id) {
		return widgetRepository.findOne(id);
	}
	
	public Widget updateWidget(int id, Widget newWidget) {
		Widget widget = widgetRepository.findOne(id);
		widget.set(newWidget);
		return widgetRepository.save(widget);
	}
	
	public void deleteWidget(int id) {
		widgetRepository.delete(id);
	}
	
	public void reorderWidget(int topicId, int startIndex, int endIndex) {
		List<Widget> widgets = topicDao.findWidgetsForTopic(topicId);
		for (Widget widget : widgets) {
			if(startIndex < endIndex){
		        if(widget.getPosition() == startIndex){
		        		widget.setPosition(endIndex);
		        		updateWidget(widget.getId(), widget);
		        }else if (widget.getPosition() > startIndex
		          && widget.getPosition() <= endIndex){
		        		widget.setPosition(widget.getPosition()-1);
		        		updateWidget(widget.getId(), widget);
		        }else {
		          if(widget.getPosition() == startIndex){
		        	  	widget.setPosition(endIndex);
		        	  	updateWidget(widget.getId(), widget);
		          } else if(widget.getPosition() < startIndex
		            && widget.getPosition() >= endIndex){
		        	  widget.setPosition(widget.getPosition()+1);
		            updateWidget(widget.getId(), widget);
		          }
		        }
			}
		}
		
	}
	

}
