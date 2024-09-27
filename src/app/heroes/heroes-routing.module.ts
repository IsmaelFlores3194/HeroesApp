import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const rutas: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'listado', component: ListPageComponent },
      { path: 'new-hero', component: NewPageComponent },
      // { path: 'editar/:id', component: AgregarComponent },
      { path: 'search', component: SearchPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
