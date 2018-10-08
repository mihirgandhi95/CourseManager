import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {ModuleService} from '../../../services/module.service.client';

@Component({
  selector: 'app-module-new',
  templateUrl: './module-new.component.html',
  styleUrls: ['./module-new.component.css']
})
export class ModuleNewComponent implements OnInit {
  modules = [];
  userId: string;
  courseId: string;
  user: any;
  moduleName: string;

  constructor(private moduleService: ModuleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.activatedRoute.params.subscribe((params: any) => {
        this.courseId = params['cid'];
      }
    );

    this.moduleService.findModulesByCourse(this.courseId).subscribe((modules) => {
      this.modules = modules;
      console.log(modules);
    });
  }

  create() {
    if (this.moduleName) {
      const module = {'moduleName': this.moduleName};

      this.moduleService.createModule(this.courseId, module).subscribe((modules) => {
        this.modules = modules;
        this.router.navigate(['user', 'course', this.courseId, 'module']);
      });
    }
  }

}
