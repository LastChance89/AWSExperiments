import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3Component } from './s3/s3.component';
import { S3Service } from './service/s3.service';
import { S3ObjectsComponent } from './s3/s3-objects/s3-objects.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupFileComponent } from './popup-modal/file/popup-file/popup-file.component';
import { PopupMessageComponent } from './popup-modal/message/popup-message/popup-message.component';
@NgModule({
  declarations: [
    AppComponent,
    S3Component,
    S3ObjectsComponent,
    PopupModalComponent,
    PopupFileComponent,
    PopupMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
	FormsModule
  ],
  entryComponents:[PopupModalComponent],
  providers: [S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
