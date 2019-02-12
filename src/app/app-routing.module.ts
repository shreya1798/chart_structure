import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { PopupComponent } from './popup/popup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

<<<<<<< HEAD
const routes: Routes = [
  {path: "tree", component: TreeComponent},
  {path: "", component: TreeComponent},
  {path: "**", component: PageNotFoundComponent},
  {path: '404error', component: PageNotFoundComponent}
=======
const routes: Routes = [ 
  { path: "popup3/:id", component:PopupComponent  },
  {path: "", component: TreeComponent}, 
  {path: "tree", component: TreeComponent},
  {path: "404error", component: PageNotFoundComponent},
  {path: "**", component: PageNotFoundComponent},
>>>>>>> 43933e5aba7d14f5721031f1deac5563621702bf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
