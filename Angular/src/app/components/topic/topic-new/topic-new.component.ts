import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterService} from "../../../services/chapter.service.client";
import {TopicService} from "../../../services/topic.service.client";

@Component({
  selector: 'app-topic-new',
  templateUrl: './topic-new.component.html',
  styleUrls: ['./topic-new.component.css']
})
export class TopicNewComponent implements OnInit {
  topics = [];
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicName: string;


  constructor(private activatedRoute: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.moduleId = params['mid'];
        this.courseId = params['cid'];
        this.chapterId = params['chid'];
      }
    );

    this.topicService.findTopicsByChapter(this.chapterId).subscribe((topics) => {
      this.topics = topics;
    });

  }

  create() {
    if (this.topicName) {
      const topic = {'name': this.topicName};

      this.topicService.createTopic(this.chapterId, topic).subscribe((topics) => {
        this.topics = topics;

        this.router.navigate(['/user', 'course', this.courseId,
          'module', this.moduleId, 'chapter', this.chapterId, 'topic']);
      });
    }
  }

}
