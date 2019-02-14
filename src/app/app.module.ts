import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NavComponent } from './nav/nav.component';

import {HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { PopupComponent } from './popup/popup.component';

import { UploadImageComponent } from './upload-image/upload-image.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NavComponent,
    PopupComponent,
    PageNotFoundComponent,
    UploadImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FormsModule

  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
