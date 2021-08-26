import { Component, Input, OnInit } from '@angular/core';
import { error } from 'protractor';
import { S3Service } from '../../../service/s3.service';

@Component({
  selector: 'popup-file',
  templateUrl: './popup-file.component.html',
  styleUrls: ['./popup-file.component.css']
})
export class PopupFileComponent implements OnInit {

  constructor(private s3Service: S3Service) { }

  @Input() bucket: String;

  ngOnInit(): void {
  }

  files = new FormData();

  selectFiles(e){
    e.preventDefault();
    for(let i = 0; i< e.target.files.length; i++){
      this.files.append("files",e.target.files[i],e.target.files[i].name);
    }

 }


  upload(){
    this.s3Service.uploadObjects(this.bucket, this.files).subscribe(result=>{
      console.log(result);
    },
    error=>{
      //make me a real boy error with an output that mnodifies the popup to show the message modal. 
      console.log(error);
    })
  }
  
}
