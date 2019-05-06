import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' }
  // { path: 'home', loadChildren: './term/term.module#TermPageModule' },
  // { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
