import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const rutas: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'new-hero', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'search', component: BuscarComponent },
      { path: ':id', component: HeroeComponent },
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
