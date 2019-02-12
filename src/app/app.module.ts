import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    PageNotFoundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
