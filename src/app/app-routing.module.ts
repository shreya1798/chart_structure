import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { PopupComponent } from './popup/popup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [ 
  { path: "popup3/:id", component:PopupComponent  }, 
  {path:"upload" ,component:UploadImageComponent},
  {path: "404error", component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
