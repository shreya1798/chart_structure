import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
 
  { path: "popup3/:id", component:PopupComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
