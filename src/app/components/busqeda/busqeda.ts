import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes-service';
@Component({
  selector: 'app-busqeda',
  standalone: false,
  templateUrl: './busqeda.html',
  styleUrl: './busqeda.css',
})

export class Busqeda {

  heroes: any[] = [];
  termino: string = "";

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {

      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino']
      console.log(this.heroes);
    })
  }

  muestraHeroe(index: number) {
    this.router.navigate(['heroe', index]);
    
  }
}
