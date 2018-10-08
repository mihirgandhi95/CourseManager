import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSlideComponent } from './widget-slide.component';

describe('WidgetSlideComponent', () => {
  let component: WidgetSlideComponent;
  let fixture: ComponentFixture<WidgetSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
