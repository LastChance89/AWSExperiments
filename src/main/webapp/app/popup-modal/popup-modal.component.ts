import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupType } from '../model/popup-type';
@Component({
  selector: 'popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit {


  filePop= PopupType.FILE;
  messagePop= PopupType.MESSAGE;
  showS3Pop = PopupType.SHOWS3OBJECT;

  constructor(public activeModal: NgbActiveModal) { }
  @Input() tpye: PopupType;
  @Input() bucket: String; 
  @Input() message: Message;


  ngOnInit(): void {
  }



  close(){
    this.activeModal.close();
  }

  continue(){

  }


}
