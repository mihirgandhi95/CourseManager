import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userId: string;
  username: string;
  password: string;
  verify: string;
  message: string;
  messageFlag: boolean;


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['id'];
    this.username = this.user['username'];
  }

  update() {
    console.log(this.username);
    console.log(this.user);
    console.log(this.userId);

    if ((this.password && this.verify) && (this.password === this.verify)) {
      this.user.password = this.password;
      console.log(this.password);
    }

    this.userService.updateUser(this.user).subscribe((newUser) => {
      this.user = newUser;
      this.sharedService.user = this.user;
    });
  }
}
