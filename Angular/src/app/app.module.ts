import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { CourseEditorComponent } from './components/course/course-editor/course-editor.component';
import { SectionListEditorComponent } from './components/section/section-list-editor/section-list-editor.component';
import { SubsectionListEditorComponent } from './components/section/subsection-list-editor/subsection-list-editor.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableDirective } from 'ng-contenteditable';
import { SortablejsModule } from 'angular-sortablejs';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Routing } from './app.routing';
import { HomeComponent } from './components/home/home/home.component';
import { WidgetDisplayComponent } from './components/widget/widget-display/widget-display.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { SafePipe} from './pipes/safe.pipe';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetSlideComponent } from './components/widget/widget-edit/widget-slide/widget-slide.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {YoutubeService} from './services/youtube.service';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from './services/authentication.service.client';
import {SharedService} from './services/shared.service.client';
import {UserService} from './services/user.service.client';
import { YoutubeChannelSearchComponent } from './components/widget/widget-edit/widget-youtube/youtube-channel-search/youtube-channel-search.component';
import {CourseViewComponent} from './components/course/course-view/course-view.component';
import { ChapterListComponent } from './components/chapter/chapter-list/chapter-list.component';
import { TopicListComponent } from './components/topic/topic-list/topic-list.component';
import {WidgetService} from './services/widget.service.client';
import { TopicNewComponent } from './components/topic/topic-new/topic-new.component';
import { TopicEditComponent } from './components/topic/topic-edit/topic-edit.component';
import { CourseNewComponent } from './components/course/course-new/course-new.component';
import {CourseService} from './services/course.service.client';
import { ChapterEditComponent } from './components/chapter/chapter-edit/chapter-edit.component';
import { ChapterNewComponent } from './components/chapter/chapter-new/chapter-new.component';
import { WidgetTinyMCEComponent } from './components/widget/widget-edit/widget-tiny-mce/widget-tiny-mce.component';
import { EditorComponent } from './components/widget/widget-edit/editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from 'ng-gapi';
import {ChapterService} from './services/chapter.service.client';
import {ModuleService} from './services/module.service.client';
import { ModuleNewComponent } from './components/module/module-new/module-new.component';
import { ModuleEditComponent } from './components/module/module-edit/module-edit.component';
import {TopicService} from './services/topic.service.client';
import {SheetService} from './services/sheet.service.client';
import {GoogleService} from './services/google.service.client';
import { WidgetGoolgeSlideComponent } from './components/widget/widget-edit/widget-slide/widget-goolge-slide/widget-goolge-slide.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AllCoursesComponent } from './components/user/all-courses/all-courses.component';
import {SlideService} from './services/slide.service.client';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '607856133745-v6fagddhjv76lsmi5hamjd8krcao94ke.apps.googleusercontent.com',
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  scope: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/spreadsheets.readonly'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    CourseEditorComponent,
    SectionListEditorComponent,
    SubsectionListEditorComponent,
    ContenteditableDirective,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    WidgetDisplayComponent,
    WidgetEditComponent,
    WidgetChooserComponent,
    SafePipe,
    WidgetYoutubeComponent,
    WidgetSlideComponent,
    WidgetTextComponent,
    YoutubeChannelSearchComponent,
    CourseListComponent,
    CourseViewComponent,
    ChapterListComponent,
    TopicListComponent,
    YoutubeChannelSearchComponent,
    TopicNewComponent,
    TopicListComponent,
    TopicEditComponent,
    CourseNewComponent,
    ChapterEditComponent,
    ChapterNewComponent,
    TopicEditComponent,
    WidgetTinyMCEComponent,
    EditorComponent,
    ModuleNewComponent,
    ModuleEditComponent,
    WidgetGoolgeSlideComponent,
    ModuleEditComponent,
    UserListComponent,
    AllCoursesComponent
  ],
  imports: [
    SortablejsModule,
    FormsModule,
    BrowserModule,
    Routing,
    QuillEditorModule,
    HttpModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [YoutubeService, AuthenticationService,
    SharedService, UserService, WidgetService, GoogleService,
    CourseService, ChapterService, ModuleService, TopicService, SheetService, SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
