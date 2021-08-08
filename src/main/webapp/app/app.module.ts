import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3Component } from './s3/s3.component';
import { S3Service } from './service/s3.service';
import { S3ObjectsComponent } from './s3/s3-objects/s3-objects.component';

@NgModule({
  declarations: [
    AppComponent,
    S3Component,
    S3ObjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
