import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service.client";
// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.findAllCourses().subscribe((courses) => {
      this.courses = courses;
    });

  }

  test() {
    // $( '#widget-div' ).load( './components/widget/widget-chooser/widget-chooser.component.html');
  }
}
