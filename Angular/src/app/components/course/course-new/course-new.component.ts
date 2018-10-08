import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.css']
})
export class CourseNewComponent implements OnInit {
  courses = [];
  userId: string;
  user: any;
  courseName: string;
  hide: boolean;
  allCourses = [];


  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    if (this.user.role === 'Faculty') {
      this.hide = true;
    }


    this.courseService.findCoursesByUser(this.userId).subscribe((courses) => {
      this.courses = courses;
    });

    this.courseService.findAllCourses().subscribe((all) => {
      this.allCourses = all;
    });
  }

  create() {
    if (this.courseName) {
      const course = {'courseName': this.courseName};

      this.courseService.createCourse(this.userId, course).subscribe((courses) => {
        this.courses = courses;
        this.router.navigate(['/user', 'course']);
      });
    }
  }

  enroll(courseId) {
    this.courseService.enrollInCourse(this.userId, courseId).subscribe((courses) => {
      this.router.navigate(['/user', 'course']);
      this.allCourses = courses;
    });
  }

}
