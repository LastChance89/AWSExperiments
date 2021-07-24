import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3Component } from './s3/s3.component';
import { S3Service } from './service/s3.service';

@NgModule({
  declarations: [
    AppComponent,
    S3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
