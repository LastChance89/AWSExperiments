import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bucket } from '../model/bucket';
import { BucketObject } from '../model/bucket-object';
import { S3Object } from '../model/s3-object';

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


  getObjectContents( bucketName: String, objectName: String) : Observable<S3Object> {
    let payload = {"bucketName": bucketName, "objectName": objectName}
    return this.http.post<S3Object>('/s3/getBucketObject', payload);
  }

  uploadObjects(bucketName: String, files:FormData): Observable<boolean>{
    return this.http.post<boolean>("/s3/upload",files);

  }

  checkIfFileNamesExist(bucketName: String, filesNames:String[]){
    let payload = {"bucketName": bucketName, "fileNames": JSON.stringify(filesNames)}
    return this.http.post<any>("/s3/checkIfFileNamesExist", payload);
  }



}
