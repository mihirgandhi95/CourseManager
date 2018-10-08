import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {ChapterService} from "../../../services/chapter.service.client";
import {TopicService} from "../../../services/topic.service.client";

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {
  userId: string;
  user: any;
  topics = [];
  courseId: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  topic: any;
  topicName: string;
  error: string;
  errorFlag: boolean;

  constructor(private router: Router,
              private sharedService: SharedService,
              private topicService: TopicService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user.id;

    this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['cid'];
      this.moduleId = params['mid'];
      this.chapterId = params['chid'];
      this.topicId = params['tid'];
    });

    this.topicService.findTopicById(this.topicId).subscribe((topic) => {
      this.topic = topic;
      this.topicName = topic.name;
    });

    this.topicService.findTopicsByChapter(this.chapterId).subscribe((topics) => {
      this.topics = topics;
    });
  }

  edit() {
    if (this.topicName !== '') {
      this.topic.name = this.topicName;

      this.topicService.updateTopic(this.topicId, this.topic).subscribe((topic) => {
        this.topic = topic;
        console.log('GettingTopic');
        console.log(topic);
        this.router.navigate(['/user', 'course', this.courseId,
          'module', this.moduleId, 'chapter', this.chapterId, 'topic']);
      });
    } else {
      this.error = 'Course name is required!';
      this.errorFlag = true;
    }
  }

  delete() {
    this.topicService.deleteTopic(this.topicId).subscribe((topics) => {
      this.topics = topics;
      this.router.navigate(['/user', 'course', this.courseId, 'module', this.moduleId, 'chapter', this.chapterId, 'topic']);
    });
  }

}
