import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  // and 2) identifies it as a HeroService injection site
  constructor(private heroService: HeroService){ }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name){ return;}

    this.heroService.addHero({name} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
    })
  }

  delete(hero: Hero): void{
    // removed from this list
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.delete(hero.id).subscribe();

  }
}
