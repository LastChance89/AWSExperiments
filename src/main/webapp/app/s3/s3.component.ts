import { Component, OnInit } from '@angular/core';
import { Bucket } from '../model/bucket';
import { BucketObject } from '../model/bucket-object';
import { S3Service } from '../service/s3.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  constructor(private s3Service: S3Service) { }

  buckets: Array<Bucket>;
  bucketObjects: Array<BucketObject>;
  selectedBucket: String;

  ngOnInit(): void {
    this.s3Service.getBuckets().subscribe(result =>{
      console.log(this.buckets);
      this.buckets = result;
    }, error =>{
      //Build error message
      console.log("Error: ", error);
    })
  }

  selectBucket(bucketName: String){
    this.selectedBucket = bucketName;
    this.s3Service.getBucketContents(bucketName).subscribe(result =>{
      console.log(result);
      this.bucketObjects = result;
    },
    error =>{
      console.log("ERROR: ", error)
    }
    )
    console.log("BLEH");
  }


  

}
