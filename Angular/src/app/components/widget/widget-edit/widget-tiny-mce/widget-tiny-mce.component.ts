import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-widget-tiny-mce',
  templateUrl: './widget-tiny-mce.component.html',
  styleUrls: ['./widget-tiny-mce.component.css']
})
export class WidgetTinyMCEComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
