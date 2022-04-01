import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnewsComponent } from './topnews/topnews.component';

const routes: Routes = [
  {path:'',component:TopnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
