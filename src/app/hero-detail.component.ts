import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}




