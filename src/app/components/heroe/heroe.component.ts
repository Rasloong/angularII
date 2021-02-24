import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};
  constructor(
    private ACTIVEROUTE: ActivatedRoute,
    private HEROESSERVICE: HeroesService,
    private router: Router
  ) {
    this.ACTIVEROUTE.params.subscribe((params) => {
      this.heroe = this.HEROESSERVICE.getHeroe(params['id']);
    });
  }
  regresar() {
    this.router.navigate(['/heroes']);
  }
}
