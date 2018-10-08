import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../../../services/youtube.service';
import {WidgetService} from "../../../../services/widget.service.client";
import {SharedService} from "../../../../services/shared.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  user: any;
  userId: string;
  courseId: string;
  chapterId: string;
  topicId: string;
  widgetId: string;
  moduleId: string;
  widget: any;
  url: string;
  width: string;
  widgets: any[];
  error: string;
  flag = false;
  alert: string;
  widgetName: string;

  constructor(private youtubeService: YoutubeService, private widgetService: WidgetService,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.error = 'Enter the name of the Youtube';
    this.alert = '* Enter the Youtube name';
    this.user = this.sharedService.user;
    this.userId = this.user.id;
    this.activatedRoute.params.subscribe((params: any) => {
      this.chapterId = params['chid'];
      this.topicId = params['tid'];
      this.courseId = params['cid'];
      this.widgetId = params['wid'];
      this.moduleId = params['mid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          this.widgetName = widget.name;
          this.widget = widget;
          this.url = widget.url;
        });
    });
  }

    UpdateYoutube() {
      if (!this.widgetName) {
        this.flag = true;
        return;
      }
      this.widget.name = this.widgetName;
      this.widget.url = this.url;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe((widgets) => {
          console.log(widgets);
          this.router.navigate(['user', 'course', this.courseId, 'module',
            this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
        });
    }
    Delete() {
      this.widgetService.deleteWidget(this.widgetId)
        .subscribe((widget) => {
          this.router.navigate(['user', 'course', this.courseId, 'module',
            this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
        });
    }
    Cancel() {
      this.router.navigate(['user', 'course', this.courseId, 'module',
        this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget']);
    }


    search() {
      this.router.navigate(['user', 'course', this.courseId, 'module',
        this.moduleId, 'chapter', this.chapterId, 'topic', this.topicId, 'widget', 'channel']);
    }
}
