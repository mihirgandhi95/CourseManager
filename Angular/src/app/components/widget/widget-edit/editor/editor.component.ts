import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    $('.g-singnin2').css('display', 'none');
    $('.data ').css('display', 'block');
    $('#email').text(profile.getEmail());
  }

}
