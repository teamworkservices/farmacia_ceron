import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutfullComponent } from './layout/layoutfull/layoutfull.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'pages',
        component: LayoutfullComponent,
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
