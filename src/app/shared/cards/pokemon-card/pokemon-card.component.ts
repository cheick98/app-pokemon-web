import { Router } from '@angular/router'
import { Component, inject, input } from '@angular/core'
// my importations
import { IPokemon } from '../../../models/pokemon.model'

@Component({
  selector: 'app-pokemon-card',
  styleUrl: './pokemon-card.component.css',
  templateUrl: './pokemon-card.component.html',
  imports: [],
})

export class PokemonCardComponent {
  private router = inject(Router)

  pokemon = input.required<IPokemon>()

  goToDetail() {
    this.router.navigate(['pokemon', this.pokemon().numero])
  }
}
