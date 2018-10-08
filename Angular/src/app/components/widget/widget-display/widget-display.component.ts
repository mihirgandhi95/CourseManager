import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SafePipe} from '../../../pipes/safe.pipe';
import {WidgetService} from '../../../services/widget.service.client';
import {SharedService} from '../../../services/shared.service.client';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-widget-display',
  templateUrl: './widget-display.component.html',
  styleUrls: ['./widget-display.component.css']
})
export class WidgetDisplayComponent implements OnInit {
  userId: string;
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  widgetId: string;
  type: string;
  user: any;
  hide: boolean;
  // widgets: any[];
  widget: any;
  defaultWidget = {
    'Slide': {
      dtype: 'Slide',
      name: 'new Slide',
      url: 'https://docs.google.com/presentation/d/e/2PACX-1vT6LquRTLi-Uzggk4Rlogi2ncZPEJmIHAuAK8FUx01cJUFKHzoqsXII1aAv1RM21_2Le9XkpvHFoLgb/embed?start=false&loop=false&delayms=3000'},
    'YouTube': {
      dtype: 'YouTube',
      width: '100%',
      url: 'https://www.youtube.com/embed/AM2Ivdi9c4E'},
    'Text': {
      dtype: 'Text'
    },
  };
  widgets: any[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService,
              private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    if (this.user.role === 'Faculty') {
      this.hide = true;
    }
    this.userId = this.user.id;
    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.chapterId = params['chid'];
      this.topicId = params['tid'];
      this.widgetService.findWidgetsForTopic(this.topicId)
        .subscribe((widgets) => {
        console.log(this.userId);
          this.widgets = widgets;
          console.log(this.widgets);
        });
      }
    );
  }

  goToWidget(type) {
    // if (type !== 'Slide' || type !== 'YouTube' || type !== 'Text') {
    //   return;
    // }
    this.widget = this.defaultWidget[type];
    console.log(this.widget);
    // const newWidget = new Widget(null, type, this.pageId, null, null, null);
    this.widgetService.createWidget(this.topicId, this.widget).
    subscribe(
      (data: any) => {
        this.widgetId = data.id;
        this.router.navigate(
          ['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter',
            this.chapterId, 'topic', this.topicId, 'widget', this.widgetId]
        );
      },
      (error: any) => {
        console.log(error);
      });
  }

  Edit(wid) {
    this.router.navigate(
      ['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter',
        this.chapterId, 'topic', this.topicId, 'widget', wid]
    );
  }

}
