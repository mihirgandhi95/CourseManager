import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  widgetId: string;
  userId: string;
  widget: any;
  widgetName: string;
  // baseUrl: string;
  text: string;
  error: string;
  flag = false;
  alert: string;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    // this.baseUrl = environment.baseUrl;
    this.error = 'Please provide the title for your text';
    this.alert = '* Enter the header HTML';
    this.userId = this.sharedService.user.id;
    this.activatedRoute.params.subscribe((params: any) => {
        this.courseId = params['cid'];
        this.moduleId = params['mid'];
        this.chapterId = params['chid'];
        this.topicId = params['tid'];
        this.widgetId = params['wid'];
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((widget) => {
            this.widget = widget;
            console.log(widget);
            console.log(widget.text);
            this.widgetName = widget.name;
          });
      }
    );
  }

  save() {
    if (!this.widgetName) {
      this.flag = true;
      return;
    }
    console.log(this.text);
    this.widget.text = this.text;
    this.widget.name = this.widgetName;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((data: any) => {
        this.router.navigate(['user', 'course',
          this.courseId, 'module', this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
      });
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data: any) => {
        this.router.navigate(['user', 'course',
          this.courseId, 'module', this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
      });
  }

  cancel() {
    this.router.navigate(['user', 'course',
      this.courseId, 'module', this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
  }


}
