import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { PopupComponent } from './popup/popup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ 
  { path: "popup3/:id", component:PopupComponent  },
  {path: "tree", component: TreeComponent},
  {path: "404error", component: PageNotFoundComponent},
  
  //{path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
