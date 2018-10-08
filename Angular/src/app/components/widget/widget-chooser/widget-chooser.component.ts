import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  user: any;
  userId: string;
  webId: string;
  pageId: string;
  widgets: any[];
  widgetType: string;
  widget: any;
  widgetId: string;
  defaultWidget = {
    'SLIDE': {dtype: 'Slide', 'size' : 2},
    'YOUTUBE': {dtype: 'YouTube', width: '100%', url: 'https://www.youtube.com/embed/AM2Ivdi9c4E'},
    'Text': {dtype: 'Text'},
  };

  constructor(private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
  }

  // goToWidget(type) {
  //   if (type !== 'Slide' || type !== 'YouTube' || type !== 'Text') {
  //     return;
  //   }
  //   this.widget = this.defaultWidget[type];
  //   console.log(this.widget);
  //   // const newWidget = new Widget(null, type, this.pageId, null, null, null);
  //   this.widgetService.createWidget(this.widget).
  //   subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.widgetId = data._id;
  //       this.router.navigate(['/user', 'website', this.webId, 'page', this.pageId, 'widget', this.widgetId]);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     });
  // }
}
