import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {ChapterService} from "../../../services/chapter.service.client";

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.css']
})
export class ChapterEditComponent implements OnInit {
  userId: string;
  user: any;
  chapters = [];
  courseId: string;
  moduleId: string;
  chapterId: string;
  chapter: any;
  chapterName: string;
  error: string;
  errorFlag: boolean;


  constructor(private router: Router,
              private sharedService: SharedService,
              private chapterService: ChapterService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.chapterId = params['chid'];
    });

    this.chapterService.findChapterById(this.chapterId).subscribe((chapter) => {
      this.chapter = chapter;
      this.chapterName = chapter.chapterName;
    });

    this.chapterService.findChaptersByModule(this.moduleId).subscribe((chapters) => {
      this.chapters = chapters;
    });
  }

  edit() {
    if (this.chapterName !== '') {
      this.chapter.chapterName = this.chapterName;

      this.chapterService.updateChapter(this.chapterId, this.chapter).subscribe((chapter) => {
        this.chapter = chapter;
        this.router.navigate(['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter']);
      });
    } else {
      this.error = 'Course name is required!';
      this.errorFlag = true;
    }
  }

  delete() {
    this.chapterService.deleteChapter(this.chapterId).subscribe((chapters) => {
      this.chapters = chapters;
      this.router.navigate(['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter']);
    });
  }

}
