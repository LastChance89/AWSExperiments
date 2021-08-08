import { Component, Input, OnInit } from '@angular/core';
import { BucketObject } from '../../model/bucket-object';

@Component({
  selector: 's3-objects',
  templateUrl: './s3-objects.component.html',
  styleUrls: ['./s3-objects.component.css']
})
export class S3ObjectsComponent implements OnInit {

  constructor() { }

  

  @Input() bucketObjects: Array<BucketObject>;
  

  ngOnInit(): void {
  }






}
