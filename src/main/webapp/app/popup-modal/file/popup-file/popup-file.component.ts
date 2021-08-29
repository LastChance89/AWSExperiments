import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'protractor';
import { PopupType } from '../../../model/popup-type';
import { S3Service } from '../../../service/s3.service';
import { PopupModalComponent } from '../../popup-modal.component';

@Component({
  selector: 'popup-file',
  templateUrl: './popup-file.component.html',
  styleUrls: ['./popup-file.component.css']
})
export class PopupFileComponent implements OnInit {

  constructor(private s3Service: S3Service, public activeModal: NgbActiveModal) { }

  @Input() bucket: String;
  @Output() close = new EventEmitter();

  notification: boolean = false;

  ngOnInit(): void {
  }


  selectedFiles : String[] = [];

  files = new FormData();

  selectFiles(e){
    e.preventDefault();
    let files: String[] = [];
    for(let i = 0; i< e.target.files.length; i++){
      files.push(e.target.files[i].name);
      this.files.append("files",e.target.files[i],e.target.files[i].name);
    }
    //IMO crappy way to reset the selected files but good enough I suppose. 
    this.selectedFiles = files;
 }


  checkFiles(){
    this.s3Service.checkIfFileNamesExist(this.bucket, this.selectedFiles).subscribe(result=>{
      console.log(result);
      if(result.length === 0){
        this.upload();
        this.close.emit();
      }
      else{
        this.notification = true;
      }
          
    },
    error =>{
      console.log("error", error);
      this.activeModal.close;
    })
  }


  upload(){
    this.s3Service.uploadObjects(this.bucket, this.files).subscribe(result=>{
      console.log(result);
      this.close.emit();
    },
    error=>{
      //make me a real boy error with an output that mnodifies the popup to show the message modal. 
      console.log(error);
    })
  }

  
}
