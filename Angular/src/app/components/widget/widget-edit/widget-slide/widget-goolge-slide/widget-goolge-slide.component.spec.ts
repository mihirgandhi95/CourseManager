import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGoolgeSlideComponent } from './widget-goolge-slide.component';

describe('WidgetGoolgeSlideComponent', () => {
  let component: WidgetGoolgeSlideComponent;
  let fixture: ComponentFixture<WidgetGoolgeSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGoolgeSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGoolgeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
