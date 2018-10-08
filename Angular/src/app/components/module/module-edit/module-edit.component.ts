import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../../../services/module.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.css']
})
export class ModuleEditComponent implements OnInit {

  userId: string;
  user: any;
  modules = [];
  courseId: string;
  moduleId: string;
  module: any;
  moduleName: string;
  error: string;
  errorFlag: boolean;

  constructor(private router: Router,
              private sharedService: SharedService,
              private moduleService: ModuleService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
    });

    this.moduleService.findModuleById(this.moduleId).subscribe((module) => {
      this.module = module;
      this.moduleName = module.moduleName;
    });

    this.moduleService.findModulesByCourse(this.courseId).subscribe((modules) => {
      this.modules = modules;
    });
  }

  edit() {
    if (this.moduleName !== '') {
      this.module.moduleName = this.moduleName;

      this.moduleService.updateModule(this.moduleId, this.module).subscribe((module) => {
        this.module = module;
        this.router.navigate(['/user', 'course', this.courseId, 'module']);
      });
    }else {
      this.error = 'Course name is required!';
      this.errorFlag = true;
    }
  }


  delete() {
    this.moduleService.deleteModule(this.courseId).subscribe((modules) => {
      this.modules = modules;
      this.router.navigate(['/user', 'course', this.courseId, 'module']);
    });
  }

}
