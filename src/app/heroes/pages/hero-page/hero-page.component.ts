import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{


  public hero? : Hero;

  constructor(
    private heroService : HeroesService,
    private activateRoute : ActivatedRoute,
    private router : Router

  ){}




    ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroService.getHeroeById( id )),
    ).subscribe (hero => {
      if( !hero ) return this.router.navigate([ '/heroes/listado' ]);

      this.hero = hero;
      return;

    })
  }


  goBack() : void{
    this.router.navigateByUrl('/heroes/listado')
  }

}
