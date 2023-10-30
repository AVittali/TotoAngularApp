import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWettscheine } from './wettscheine/list-wettscheine';

const routes: Routes = [
  { path: '', redirectTo: '/wettscheine', pathMatch: 'full' },
  { path: 'wettscheine', component: ListWettscheine },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
