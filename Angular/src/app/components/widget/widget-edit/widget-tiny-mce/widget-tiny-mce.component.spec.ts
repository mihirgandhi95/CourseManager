import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTinyMCEComponent } from './widget-tiny-mce.component';

describe('WidgetTinyMCEComponent', () => {
  let component: WidgetTinyMCEComponent;
  let fixture: ComponentFixture<WidgetTinyMCEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTinyMCEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTinyMCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
