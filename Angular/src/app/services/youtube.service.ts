import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()

export class YoutubeService {
  private query: string;
  private API_KEY: string = environment.YOUTUBE_API_KEY;
  private API_URL: string = environment.YOUTUBE_API_URL;
  private CHANNEL_URL = this.API_URL + 'channels?part=contentDetails&forUsername=';
  private LIST_URL = this.API_URL + 'playlistItems?part=snippet&playlistId=';
  private KEY = '&key=' + this.API_KEY + '&maxResults=10';
  private Channel_id = 'Jose Annunziato';

  constructor(private http: Http) {
  }

  searchChannelByName(name: String) {
    const url = this.CHANNEL_URL + name + this.KEY;
    console.log(url);
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  getPlayList(pid) {
    const url = this.LIST_URL + pid + this.KEY;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  retrieveAllPlaylists(channelId) {
    let url = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId={{cid}}&maxResults=50&key={YOUR_API_KEY}';
    url = url.replace('{{cid}}', channelId);
    url = url.replace('{YOUR_API_KEY}', this.API_KEY);
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
      });
  }
}
