import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service.client";
import {SharedService} from "../../../services/shared.service.client";
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  userId: string;
  user: any;
  hide: boolean;
  courses = [];

  constructor(private courseService: CourseService,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['id'];
    if (this.user.role === 'Faculty') {
      this.hide = true;
    }

    this.courseService.findCoursesByUser(this.userId).subscribe((courses) => {
      this.courses = courses;
      console.log(courses);
    });

  }

  unenroll(courseId) {
    this.courseService.unenroll(courseId, this.userId).subscribe((courses) => {
      this.courses = courses;
      // this.router.navigate(['/user', 'course']);
      this.ngOnInit();
    });
  }

}
