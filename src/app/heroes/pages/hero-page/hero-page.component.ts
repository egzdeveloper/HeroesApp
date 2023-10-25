import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroSvc: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroSvc.getHeroById(id) )
      )
      .subscribe( hero => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        return this.hero = hero;
      })
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }

}
