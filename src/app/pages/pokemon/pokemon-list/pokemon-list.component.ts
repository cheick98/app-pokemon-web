import { Component, effect, inject } from '@angular/core'
// my importations
import { PokemonService } from '../../../core/services/pokemon.service'
import { HeaderComponent } from '../../../layout/header/header.component'
import { LoadingComponent } from '../../../shared/components/loading/loading.component'
import { PokemonCardComponent } from '../../../shared/cards/pokemon-card/pokemon-card.component'

@Component({
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.component.css',
  templateUrl: './pokemon-list.component.html',
  imports: [PokemonCardComponent, LoadingComponent],
})

export class PokemonListComponent {
  private pokemonService = inject(PokemonService)

  readonly pokemons = this.pokemonService.pokemons
  readonly loading = this.pokemonService.loading
  readonly error = this.pokemonService.error

  constructor() {
    // Déclenche le chargement une fois lors de l'initialisation
    effect(() => {
      if (!this.pokemons().length) {
        this.pokemonService.getAllPokemons().subscribe()
      }
    })
  }
}
