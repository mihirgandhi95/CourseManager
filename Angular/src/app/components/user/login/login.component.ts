import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {Router} from '@angular/router';
import {GoogleApiService, GoogleAuthService} from 'ng-gapi';
import {GoogleService} from '../../../services/google.service.client';
import {SheetService} from '../../../services/sheet.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorFlag: boolean;
  errorMessage = 'Invalid Username or Password!';

  constructor(private userService: UserService, private sharedService: SharedService,
              private router: Router, private gapiService: GoogleApiService,
              private googleService: GoogleService, private sheetService: SheetService) {
    this.gapiService.onLoad().subscribe();
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(
        (user) => {
          this.sharedService.user = user;
          this.sharedService.userRole = user.role;
          console.log(user);
          console.log(this.sharedService.userRole);
          this.errorFlag = false;
          if (user.role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/profile']);
          }
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }

}
