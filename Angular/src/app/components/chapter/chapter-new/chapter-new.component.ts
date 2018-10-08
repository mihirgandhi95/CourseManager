import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterService} from "../../../services/chapter.service.client";

@Component({
  selector: 'app-chapter-new',
  templateUrl: './chapter-new.component.html',
  styleUrls: ['./chapter-new.component.css']
})
export class ChapterNewComponent implements OnInit {

  chapters = [];
  courseId: string;
  moduleId: string;
  chapterName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private chapterService: ChapterService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.moduleId = params['mid'];
        this.courseId = params['cid'];
      }
    );

    this.chapterService.findChaptersByModule(this.moduleId).subscribe((chapters) => {
      this.chapters = chapters;
    });

  }

  create() {
    if (this.chapterName) {
      const chapter = {'chapterName': this.chapterName};

      this.chapterService.createChapter(this.moduleId, chapter).subscribe((chapters) => {
        this.chapters = chapters;
        this.router.navigate(['/user', 'course', this.courseId,
          'module', this.moduleId, 'chapter']);
      });
    }
  }

}
