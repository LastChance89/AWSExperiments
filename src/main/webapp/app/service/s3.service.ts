import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bucket } from '../model/bucket';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor(private http: HttpClient) { }

  getBuckets(): Observable<Array<Bucket>> {
    return this.http.post<Array<Bucket>>('/s3/listBuckets','');
  }


}
