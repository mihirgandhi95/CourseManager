import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicService} from "../../../services/topic.service.client";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  user: any;
  hide: boolean;
  topics: any[];

  courseId: string;
  moduleId: string;
  chapterId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private topicService: TopicService, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe((params: any) => {
      if (this.user.role === 'Faculty') {
        this.hide = true;
      }
        this.chapterId = params['chid'];
        this.courseId = params['cid'];
        this.moduleId = params['mid'];


      }
    );



    this.topicService.findTopicsByChapter(this.chapterId).subscribe((topics) => {
      this.topics = topics;
      console.log(this.topics);
    });

  }



  selectTopic(topic) {
    for (const t of this.topics) {
      t.selected = false;
    }
    topic.selected = true;
  }
}
