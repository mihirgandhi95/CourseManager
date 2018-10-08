import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {CourseService} from "../../../services/course.service.client";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  courses = [];
  user: any;
  userId: string;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.courseService.findAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  deleteCourse(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe((res) => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
