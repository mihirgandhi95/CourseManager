import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../services/shared.service.client";
import {CourseService} from "../../../services/course.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {

  user: any;
  userId: string;
  courses = [];
  course: any;
  courseId: string;
  courseName: string;
  courseDescription: string;
  error: string;
  errorFlag: boolean;

  constructor(private sharedService: SharedService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
    });

    this.courseService.findCourseById(this.courseId).subscribe((course) => {
      this.course = course;
      console.log(course);
      console.log(course.courseName);
      this.courseName = course.courseName;
    });

    this.courseService.findCoursesByUser(this.userId).subscribe((courses) => {
      this.courses = courses;
    });

  }

  edit() {
    if (this.courseName !== '') {
      this.course.courseName = this.courseName;

      console.log('ChangingName');
      console.log(this.course.name);
      this.courseService.updateCourse(this.courseId, this.course).subscribe((course: any) => {
        this.course = course;
        console.log();
        this.router.navigate(['/user', 'course']);
      });
    } else {
      this.error = 'Course name is required!';
      this.errorFlag = true;
    }
  }


  delete() {
    this.courseService.deleteCourse(this.courseId).subscribe((courses) => {
      this.courses = courses;
      this.router.navigate(['/user', 'course']);
    });
  }

}
