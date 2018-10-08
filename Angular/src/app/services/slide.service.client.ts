import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class SlideService {
  private API_URL = environment.SLIDE_API_URL;
  constructor(private httpClient: HttpClient) {
  }
  public findById(slideId: string, authtoken: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + slideId, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${authtoken}`
      })
    });
  }

  public create(authtoken: string): Observable<any> {
    return this.httpClient.post(this.API_URL, {}, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${authtoken}`
      })
    });
  }
}
