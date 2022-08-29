import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  { path: 'content', component: ContentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
