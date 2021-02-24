import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() idx: number;
  @Output() heroeSelect: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    this.router.navigate(['/heroe',this.idx]);
  }
}
