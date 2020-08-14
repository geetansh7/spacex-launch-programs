import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltersListComponent } from './filters-list/filters-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
