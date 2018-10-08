import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../../../../services/youtube.service';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-youtube-channel-search',
  templateUrl: './youtube-channel-search.component.html',
  styleUrls: ['./youtube-channel-search.component.css']
})
export class YoutubeChannelSearchComponent implements OnInit {
  user: any;
  items: any[];
  youtubes: any[];
  name: string;
  searching = false;
  topicId: string;
  disable: boolean[];
  url = 'https://www.youtube.com/embed/';

  constructor(private youtubeService: YoutubeService, private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe((params: any) => {
      this.topicId = params['tid'];
    });
  }

  searchYouTube(name) {
    this.searching = true;
    return this.youtubeService.searchChannelByName(name)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.items = data.items;
          const pid = this.items[0].contentDetails.relatedPlaylists.uploads;
          console.log(pid);
          this.getPlaylists(pid);
          this.searching = false; },
        (error: any) => {console.log(error); }
      );
  }

  getPlaylists(pid) {
    return this.youtubeService.getPlayList(pid)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.youtubes = data.items;
          for (let i = 0; i < this.youtubes.length; i++) {
            this.youtubes[i].disabled = false;
          }},
        (error: any) => {console.log(error); }
      );
  }

  getUrl(vid) {
    return this.url + vid + '/';
  }

  selectVideo(video) {
    const widget = {
      'name' : video.snippet.title,
      'url' : this.getUrl(video.snippet.resourceId.videoId),
      'dtype' : 'YouTube'
    };
    return this.widgetService.createWidget(this.topicId, widget)
      .subscribe(
        (data: any) => {
          video.disabled = true;
          console.log(data);
        }
      );
  }

}
