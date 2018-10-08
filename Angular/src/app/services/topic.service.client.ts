import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()

export class TopicService {
  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}


  api = {
    'createTopic' : this.createTopic,
    'findTopicsByChapter' : this.findTopicsByChapter,
    'findTopicById' : this.findTopicById,
    'updateTopic' : this.updateTopic,
    'deleteTopic' : this.deleteTopic
  };

  createTopic(chapterId: string, topic: any) {
    const url = this.baseUrl + '/api/chapter/' + chapterId + '/topic';

    return this.http.post(url, topic).map((response: Response) => {
      return response.json();
    });
  }


  findTopicsByChapter(chapterId: string) {
    const url = this.baseUrl + '/api/chapter/' + chapterId + '/topic';

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findTopicById(topicId: string) {
    const url = this.baseUrl + '/api/topic/' + topicId;

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateTopic(topicId: string, topic: any) {
    const url = this.baseUrl + '/api/topic/' + topicId;

    console.log(topic);
    console.log(topicId);

    return this.http.put(url, topic).map((response: Response) => {
      console.log(response);
      return response.json();
    });
  }

  deleteTopic(topicId: string) {
    const url = this.baseUrl + '/api/topic/' + topicId;

    return this.http.delete(url).map((response: Response) => {
      return null;
    });
  }


}
