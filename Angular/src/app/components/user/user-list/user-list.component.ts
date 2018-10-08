import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from "../../../services/shared.service.client";
import {CourseService} from "../../../services/course.service.client";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  courses = [];
  user: any;
  userId: string;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.userService.findAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }


  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

}
