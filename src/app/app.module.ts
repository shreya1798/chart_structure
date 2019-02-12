import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import {HttpClientModule } from '@angular/common/http';
=======
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { PopupComponent } from './popup/popup.component';
>>>>>>> 43933e5aba7d14f5721031f1deac5563621702bf


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NavComponent,
    PopupComponent,
    PageNotFoundComponent,
<<<<<<< HEAD
    NavComponent,
=======
>>>>>>> 43933e5aba7d14f5721031f1deac5563621702bf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    CoreModule,
>>>>>>> 43933e5aba7d14f5721031f1deac5563621702bf
    SharedModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
