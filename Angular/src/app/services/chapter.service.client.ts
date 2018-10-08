import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()
export class ChapterService {
  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  api = {
    'createChapter' : this.createChapter,
    'findChaptersByModule' : this.findChaptersByModule,
    'findChapterById' : this.findChapterById,
    'updateChapter' : this.updateChapter,
    'deleteChapter' : this.deleteChapter
  };

  createChapter(moduleId: string, chapter: any) {
    const url = this.baseUrl + '/api/module/' + moduleId + '/chapter';

    return this.http.post(url, chapter).map((response: Response) => {
      return response.json();
    });
  }

  findChaptersByModule(moduleId: string) {
    const url = this.baseUrl + '/api/module/' + moduleId + '/chapter';

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findChapterById(chapterId: string) {
    const url = this.baseUrl + '/api/chapter/' + chapterId;

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateChapter(chapterId: string, chapter: any) {
    const url = this.baseUrl + '/api/chapter/' + chapterId;

    return this.http.put(url, chapter).map((response: Response) => {
      return response.json();
    });
  }

  deleteChapter(chapterId: string) {
    const url = this.baseUrl + '/api/chapter/' + chapterId;

    return this.http.delete(url).map((response: Response) => {
      return null;
    });
  }

}
