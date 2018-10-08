// "use strict";
// var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
//     var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
//     if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
//     else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
//     return c > 3 && r && Object.defineProperty(target, key, r), r;
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// var core_1 = require("@angular/core");
// var YoutubeChannelSearchComponent = (function () {
//     function YoutubeChannelSearchComponent(youtubeService, widgetService) {
//         this.youtubeService = youtubeService;
//         this.widgetService = widgetService;
//         this.searching = false;
//         this.url = 'https://www.youtube.com/embed/';
//     }
//     YoutubeChannelSearchComponent.prototype.ngOnInit = function () {
//     };
//     YoutubeChannelSearchComponent.prototype.searchYouTube = function (name) {
//         var _this = this;
//         this.searching = true;
//         return this.youtubeService.searchChannelByName(name)
//             .subscribe(function (data) {
//             console.log(data);
//             _this.items = data.items;
//             var pid = _this.items[0].contentDetails.relatedPlaylists.uploads;
//             console.log(pid);
//             _this.getPlaylists(pid);
//             _this.searching = false;
//         }, function (error) { console.log(error); });
//     };
//     YoutubeChannelSearchComponent.prototype.getPlaylists = function (pid) {
//         var _this = this;
//         return this.youtubeService.getPlayList(pid)
//             .subscribe(function (data) {
//             console.log(data);
//             _this.youtubes = data.items;
//         }, function (error) { console.log(error); });
//     };
//     YoutubeChannelSearchComponent.prototype.getUrl = function (vid) {
//         return this.url + vid + '/';
//     };
//     YoutubeChannelSearchComponent.prototype.selectVideo = function (video) {
//         var widget = {
//             'name': video.snippet.title,
//             'url': this.getUrl(video.snippet.resourceId.videoId),
//             'dtype': 'YouTube'
//         };
//         return this.widgetService.createWidget(widget)
//             .subscribe(function (data) {
//             console.log(data);
//         });
//     };
//     return YoutubeChannelSearchComponent;
// }());
// YoutubeChannelSearchComponent = __decorate([
//     core_1.Component({
//         selector: 'app-youtube-channel-search',
//         templateUrl: './youtube-channel-search.component.html',
//         styleUrls: ['./youtube-channel-search.component.css']
//     })
// ], YoutubeChannelSearchComponent);
// exports.YoutubeChannelSearchComponent = YoutubeChannelSearchComponent;
