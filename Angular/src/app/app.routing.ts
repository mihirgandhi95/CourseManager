import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {CourseListComponent} from './components/course/course-list/course-list.component';
import {CourseEditorComponent} from './components/course/course-editor/course-editor.component';
import {ModuleListComponent} from './components/module/module-list/module-list.component';
import {SectionListEditorComponent} from './components/section/section-list-editor/section-list-editor.component';
import {HomeComponent} from './components/home/home/home.component';
import {WidgetDisplayComponent} from './components/widget/widget-display/widget-display.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {CourseNewComponent} from "./components/course/course-new/course-new.component";
import {CourseViewComponent} from "./components/course/course-view/course-view.component";
import {ChapterListComponent} from "./components/chapter/chapter-list/chapter-list.component";
import {YoutubeChannelSearchComponent} from "./components/widget/widget-edit/widget-youtube/youtube-channel-search/youtube-channel-search.component";
import {ChapterNewComponent} from "./components/chapter/chapter-new/chapter-new.component";
import {ChapterEditComponent} from "./components/chapter/chapter-edit/chapter-edit.component";
import {TopicListComponent} from "./components/topic/topic-list/topic-list.component";
import {TopicNewComponent} from "./components/topic/topic-new/topic-new.component";
import {TopicEditComponent} from "./components/topic/topic-edit/topic-edit.component";
import {ModuleNewComponent} from "./components/module/module-new/module-new.component";
import {ModuleEditComponent} from "./components/module/module-edit/module-edit.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {AllCoursesComponent} from "./components/user/all-courses/all-courses.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: UserListComponent},
  {path: 'admin/course', component: AllCoursesComponent},
  {path: 'user/course', component: CourseListComponent},
  {path: 'user/course/new', component: CourseNewComponent},
  {path: 'user/course/:cid', component: CourseEditorComponent},
  {path: 'user/course/:cid/module', component: ModuleListComponent},
  {path: 'user/course/:cid/module/new', component: ModuleNewComponent},
  {path: 'user/course/:cid/module/:mid', component: ModuleEditComponent},
  {path: 'user/course/:cid/module/:mid/chapter', component: ChapterListComponent},
  {path: 'user/course/:cid/module/:mid/chapter/new', component: ChapterNewComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid', component: ChapterEditComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic', component: TopicListComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/new', component: TopicNewComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/:tid', component: TopicEditComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/:tid/widget', component: WidgetDisplayComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/:tid/widget/channel', component: YoutubeChannelSearchComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/:tid/widget/:wid/youtube', component: WidgetYoutubeComponent},
  {path: 'user/course/:cid/module/:mid/chapter/:chid/topic/:tid/widget/:wid', component: WidgetEditComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
