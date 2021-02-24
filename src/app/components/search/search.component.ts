import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private ACTIVEROUTE: ActivatedRoute,
    private HEROESSERVICE: HeroesService,
    private router: Router
  ) {
    this.ACTIVEROUTE.params.subscribe((params) => {
      this.heroes = this.HEROESSERVICE.searchHeroe(params['termino']);
    });
  }

  ngOnInit(): void {
  }
  
  verHeroe(idx: number) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
