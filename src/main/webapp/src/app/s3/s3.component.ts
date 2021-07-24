import { Component, OnInit } from '@angular/core';
import { Bucket } from '../model/bucket';
import { S3Service } from '../service/s3.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  constructor(private s3Service: S3Service) { }

  buckets: Array<Bucket>;

  ngOnInit(): void {
    this.s3Service.getBuckets().subscribe(result =>{
      console.log(this.buckets);
      this.buckets = result;
    }, error =>{
      console.log("ERROR!!!!!!!");
    })
  }



  

}
