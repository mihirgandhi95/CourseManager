import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, RequestOptions, Response} from '@angular/http';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()
export class WidgetService {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) {}

  createWidget(topicId, widget) {
    const url = this.baseUrl + '/api/topic/' + topicId + '/widget';
    // console.log('client side create widget: ', url);
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetsForTopic(topicId: string) {
    const url = this.baseUrl + '/api/topic/' + topicId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findWidgetById(widgetId: string) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  updateWidget(widgetId: string, widget) {
    console.log(widgetId);
    const url = this.baseUrl + '/api/widget/' + widgetId;
    console.log(url);
    console.log('updateWidget from client side', widget);
    return this.http.put(url, widget)
      .map((response: Response) => {
        console.log('updateWidget from client side');
        return response.json();
      });
  }
  deleteWidget(widgetId: string) {
    const url = this.baseUrl +  '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  reorderWidgets(pageId, start, end) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + start + '&final=' + end;
    console.log(url);
    return this.http.put(url, '')
      .map((response: Response) => {
        const data = response;
        return data;
      });
  }
}
