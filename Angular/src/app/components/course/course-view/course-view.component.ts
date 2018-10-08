import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ChapterListComponent} from '../../chapter/chapter-list/chapter-list.component';
import {ModuleListComponent} from '../../module/module-list/module-list.component';
import * as jQuery from 'jquery';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css'],
})
export class CourseViewComponent implements OnInit {
  @ViewChild(ModuleListComponent) moduleList: ModuleListComponent;

  constructor() { }

  ngOnInit() {
    // this.moduleList.ngOnInit();
  }

  test() {
    console.log('click');
    $('#widget-div').load('../../widget/widget-chooser/widget-chooser.component.html');
  }
}
