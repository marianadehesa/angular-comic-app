import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  heroes: Heroe [] = [];

  constructor(private heroesService: HeroesService, private router: Router) {
    console.log("constructor");
    
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  muestraHeroe(index: number) {
    this.router.navigate(['heroe', index]);
    
  }
}

interface Heroe {
  nombre: string,
  bio: string,
  img: string,
  aparicion: string,
  casa: string;
}
