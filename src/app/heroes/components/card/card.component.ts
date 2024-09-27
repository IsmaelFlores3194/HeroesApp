import { Hero } from './../../interfaces/heroes.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {


  @Input()
  public hero!: Hero;


  ngOnInit(): void {
    if ( !this.hero ) throw Error('Hero property is required');
  }

}
