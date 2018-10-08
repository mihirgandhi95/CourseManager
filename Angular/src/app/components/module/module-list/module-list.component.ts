import {Component, OnInit, ViewChild} from '@angular/core';
import {Module} from './module';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterListComponent} from '../../chapter/chapter-list/chapter-list.component';
import {SharedService} from "../../../services/shared.service.client";
import {ModuleService} from "../../../services/module.service.client";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css'],
})
export class ModuleListComponent implements OnInit {
  userId: string;
  user: any;
  modules = [];
  courseId: string;
  hide: boolean;

  constructor(private router: Router,
              private sharedService: SharedService,
              private moduleService: ModuleService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;
    if (this.user.role === 'Faculty') {
      this.hide = true;
    }

    this.activatedRoute.params.subscribe((params: any) => {
        this.courseId = params['cid'];
      }
    );

    this.moduleService.findModulesByCourse(this.courseId).subscribe((modules) => {
      this.modules = modules;
      console.log(modules);
    });


  }

  selectModule(module) {
    this.modules.forEach(function(_module: Module) {
      _module.selected = false;
    });
    module.selected = true;
    this.router.navigate(['/module', module.id, 'chapter', 1, 'topic', 1]);
  }

  deleteModule(module) {
    this.modules.splice(this.modules.indexOf(module), 1);
  }

  addModule() {
    const module = new Module('New Module', false);
    this.modules.push(module);
    this.selectModule(module);
  }

}
