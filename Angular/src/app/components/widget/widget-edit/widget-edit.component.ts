import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../../../services/widget.service.client";
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  userId: string;
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  widgetId: string;
  type: string;
  user: any;
  widget: any;
  widgetType: string;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;
    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.chapterId = params['chid'];
      this.topicId = params['tid'];
      this.widgetId = params['wid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          console.log(widget);
          this.widget = widget;
          this.widgetType = widget.dtype;
        });
    });
  }

}
