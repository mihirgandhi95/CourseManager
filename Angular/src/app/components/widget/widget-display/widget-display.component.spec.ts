import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDisplayComponent } from './widget-display.component';

describe('WidgetDisplayComponent', () => {
  let component: WidgetDisplayComponent;
  let fixture: ComponentFixture<WidgetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
