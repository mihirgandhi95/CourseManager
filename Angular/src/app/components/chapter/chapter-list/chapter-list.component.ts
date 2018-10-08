import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChapterService} from '../../../services/chapter.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  user: any;
  hide: boolean;
  chapters = [];
  courseId: string;
  moduleId: string;


  constructor(private activatedRoute: ActivatedRoute,
              private chapterService: ChapterService, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user.role === 'Faculty') {
      this.hide = true;
    }
    this.activatedRoute.params.subscribe((params: any) => {
        this.courseId = params['cid'];
        this.moduleId = params['mid'];
      }
    );

    this.chapterService.findChaptersByModule(this.moduleId).subscribe((chapters) => {
      this.chapters = chapters;
    });

    console.log(this.chapters);


  }

  refresh() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.moduleId = params['mid'];
        console.log('MODULE ID: ' + this.moduleId);
      }
    );

    this.chapters = [
      {label: 'd 1', selected: true},
      {label: 'd 2', selected: false},
      {label: 'd 3', selected: false},
      {label: 'd 4', selected: false},
      {label: 'd 5', selected: false},
      {label: 'd 6', selected: false}
    ];
  }

  selectChapter(chapter) {
    for (const c of this.chapters) {
      c.selected = false;
    }
    chapter.selected = true;
  }

}
