import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string;
  userRole: string;



  constructor(private router: Router, private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userRole = 'Student';
    console.log(this.userRole);
  }

  checkRole() {
    console.log('hello');
    console.log(this.userRole);
  }

  onSubmit(f: NgForm) {
    console.log(f.value.username);
    console.log(f.value.password);

    const newUser = {
      username: f.value.username,
      password: f.value.password,
    };

    let type;
    if (this.userRole === 'Faculty') {
      type = 'faculty';
    } else {
      type = 'student';
    }

    this.userService.register(newUser, type)
      .subscribe((user) => {
          this.sharedService.user = user;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          this.error = error._body;
        }
      );
  }
}
