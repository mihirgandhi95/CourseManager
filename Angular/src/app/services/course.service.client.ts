import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()

export class CourseService {
  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}


  api = {
    'createCourse' : this.createCourse,
    'findCoursesByUser' : this.findCoursesByUser,
    'findCourseById' : this.findCourseById,
    'updateCourse' : this.updateCourse,
    'deleteCourse' : this.deleteCourse
  };

  createCourse(userId: string, course: any) {
    const url = this.baseUrl + '/api/user/' + userId + '/course';

    return this.http.post(url, course).map((response: Response) => {
      return response.json();
    });

  }

  findCoursesByUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId + '/course';

    return this.http.get(url, userId).map((response: Response) => {
      return response.json();
    });
  }

  enrollInCourse(userId: string, courseId: string) {
    const url = this.baseUrl + '/api/student/' + userId + '/course/' + courseId;

    return this.http.post(url, null).map((res: Response) => {
      console.log(res);
      return res.json();
    });
  }

  findAllCourses() {
    return this.http.get(this.baseUrl + '/api/course')
      .map((res: Response) => {
          console.log(res);
          return res.json();
        }
      );
  }

  findCourseById(courseId: string) {
    const url = this.baseUrl + '/api/course/' + courseId;

    return this.http.get(url, courseId).map((response: Response) => {
      return response.json();
    });

  }

  updateCourse(courseId: string, course: any) {
    const url = this.baseUrl + '/api/course/' + courseId;

    return this.http.put(url, course).map((response: Response) => {
      console.log(response);
      console.log(response.json());
      return response.json();
    });

  }

  deleteCourse(courseId: string) {
    const url = this.baseUrl + '/api/course/' + courseId;

    return this.http.delete(url).map((response: Response) => {
      return null;
    });

  }

  unenroll(courseId: string, studentId: string) {
    const url = this.baseUrl + '/api/student/' + studentId + '/course/' + courseId;

    return this.http.put(url, null).map((response: Response) => {
      return null;
    });

  }



}
