import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private heroesSvc: HeroesService) {}

  ngOnInit(): void {
    this.heroesSvc.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }

}
