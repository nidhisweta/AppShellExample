import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompComponent } from './comp/comp.component';


const routes: Routes = [
  {path :'comp', component :CompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

