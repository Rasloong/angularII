import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number ;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verHeroe() {
    this.router.navigate(['/heroe', this.idx]);
  }
}
