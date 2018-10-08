import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service.client';
import {GoogleAuthService} from 'ng-gapi';
import {GoogleService} from '../../../../services/google.service.client';
import {SheetService} from '../../../../services/sheet.service.client';
import {SlideService} from "../../../../services/slide.service.client";

@Component({
  selector: 'app-widget-slide',
  templateUrl: './widget-slide.component.html',
  styleUrls: ['./widget-slide.component.css']
})
export class WidgetSlideComponent implements OnInit {
  user: any;
  userId: string;
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  widgetId: string;
  widget: any;
  widgetName: string;
  url: string;
  text: string;
  placeholder: string;
  error: string;
  flag = false;
  alert: string;
  slideId: any;
  public slide: any;
  public foundSlide: any;

  constructor(private widgetService: WidgetService, private sharedService: SharedService,
              private router: Router, private authService: GoogleAuthService,
              private gapiService: GoogleService, private googleService: GoogleService,
              private slideService: SlideService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.baseUrl = environment.baseUrl;
    this.error = 'Enter the name for your slide';
    this.alert = '* Enter the name for your slide';
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
            this.widget = widget;
            this.widgetName = widget.name;
            this.placeholder = widget.placeholder;
            this.url = widget.url;
          });
      }
    );
  }

  UpdateUrl() {
    if (!this.widgetName) {
      this.flag = true;
      return;
    }
    this.widget.name = this.widgetName;
    this.widget.placeholder = this.placeholder;
    this.widget.url = this.url;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((data: any) => {
        this.router.navigate(
          ['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter',
            this.chapterId, 'topic', this.topicId, 'widget']
        );
      });
  }

  Delete() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data: any) => {
        // this.widgets = widgets;
        this.router.navigate(
          ['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter',
            this.chapterId, 'topic', this.topicId, 'widget']
        );
      });
  }
  Cancel() {
    this.router.navigate(
      ['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter',
        this.chapterId, 'topic', this.topicId, 'widget']
    );
  }

  public isLoggedIn(): boolean {
    return this.googleService.isUserSignedIn();
  }

  public signIn() {
    this.googleService.signIn();
  }

  public create() {
    this.slideService.create(this.googleService.getToken())
      .subscribe( res => this.slide = res );
  }

  public findSheet() {
    if (!this.slideId) {
      console.warn('no slide id provided');
      return;
    }

    this.slideService.findById(this.slideId, this.googleService.getToken())
      .subscribe( res => this.foundSlide = res);
  }
}
