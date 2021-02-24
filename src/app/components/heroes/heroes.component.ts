import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private HEROESSERVICE: HeroesService) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.HEROESSERVICE.getHeroes();
    console.log(this.heroes);
  }
}


