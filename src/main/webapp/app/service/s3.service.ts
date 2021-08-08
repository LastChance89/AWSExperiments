import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bucket } from '../model/bucket';
import { BucketObject } from '../model/bucket-object';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor(private http: HttpClient) { }

  getBuckets(): Observable<Array<Bucket>> {
    return this.http.post<Array<Bucket>>('/s3/listBuckets','');
  }

  getBucketContents(bucketName: String): Observable<Array<BucketObject>>{
    return this.http.post<Array<BucketObject>>('/s3/getBucketContents',bucketName)
  }


}
