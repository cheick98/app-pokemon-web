import { Component, inject, signal } from '@angular/core'
// my importations
import { PokemonService } from '../../../core/services/pokemon.service'
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

  visibleCount = signal(12)
  isLoadingMore = signal(false)

  constructor() {
    if (!this.pokemons().length) {
      this.pokemonService.getAllPokemons().subscribe()
    }
  }

  loadMore() {
    this.isLoadingMore.set(true)

    setTimeout(() => {
      this.visibleCount.update((pred) => pred + 12)
      this.isLoadingMore.set(false)
    }, 500);
  }
}
