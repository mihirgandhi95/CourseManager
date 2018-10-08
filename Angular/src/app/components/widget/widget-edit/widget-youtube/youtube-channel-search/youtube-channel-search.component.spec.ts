import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeChannelSearchComponent } from './youtube-channel-search.component';

describe('YoutubeChannelSearchComponent', () => {
  let component: YoutubeChannelSearchComponent;
  let fixture: ComponentFixture<YoutubeChannelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeChannelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeChannelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
