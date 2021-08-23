import { Component, Input, OnInit } from '@angular/core';
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



  uploadFiles(e){
    e.preventDefault();
    const files = new FormData();
    e.target.files.array.forEach(element => {
      //name,file, filename. 
      files.append(element.name,element,element.name);
    });
    this.s3Service.uploadObjects(this.bucket, files).subscribe(result=>{
      console.log(result);
      
    },
    error=>{
      //make me a real boy error with an output that mnodifies the popup to show the message modal. 
      console.log(error);
    }    
    
      )
    

  }




}
