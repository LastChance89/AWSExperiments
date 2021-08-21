import { Component, Input, OnInit, Output } from '@angular/core';
import { BucketObject } from '../../model/bucket-object';
import { S3Object } from '../../model/s3-object';
import { S3Service } from '../../service/s3.service';

@Component({
  selector: 's3-objects',
  templateUrl: './s3-objects.component.html',
  styleUrls: ['./s3-objects.component.css']
})
export class S3ObjectsComponent implements OnInit {


  disabled = true
  @Input() selectedBucket : String;
  @Output() objectContents: S3Object;
  constructor(private s3: S3Service) { }

  

  @Input() bucketObjects: Array<BucketObject>;
  

  ngOnInit(): void {
  }

  getBucketObject(objectName: String): any{
    this.s3.getObjectContents(this.selectedBucket, objectName).subscribe(result=>{
      console.log(result);
      this.objectContents = result; 
    },
    error=>{
      console.log(error);
    })


  }

  uploadFiles(e){
    e.preventDefault();
  }





}
