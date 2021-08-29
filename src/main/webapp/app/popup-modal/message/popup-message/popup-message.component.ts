import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent implements OnInit {

  constructor() { }


  @Input() message: String;

  ngOnInit(): void {
  }
  

  


}
