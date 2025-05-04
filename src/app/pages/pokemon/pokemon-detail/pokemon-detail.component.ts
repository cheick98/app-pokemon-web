import { map } from 'rxjs'
import { CommonModule } from '@angular/common'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router } from '@angular/router'
import { Component, computed, effect, inject, signal } from '@angular/core'
// my importationsa
import { PokemonService } from '../../../core/services/pokemon.service'
import { PokemonType, PokemonTypeProperties } from '../../../models/pokemon.model'
import { LoadingComponent } from '../../../shared/components/loading/loading.component'

@Component({
  selector: 'app-pokemon-detail',
  styleUrl: './pokemon-detail.component.css',
  templateUrl: './pokemon-detail.component.html',
  imports: [CommonModule, LoadingComponent],
})

export class PokemonDetailComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private pokemonService = inject(PokemonService)

  // Signal à partir du paramètre d'URL
  numeroPokemon = toSignal(this.route.params.pipe(map(params => params['numero'])))

  // Accès direct aux signaux du store
  readonly pokemon = this.pokemonService.pokemon
  readonly loading = this.pokemonService.loading
  readonly error = this.pokemonService.error

  openInfo = signal(false)
  pokeball = signal<'1' | '2'>('1')
  talentSelected = signal<{ titre: string, description: string } | null>(null)

  // Couleurs dynamiques pour les types et faiblesses
  readonly bgData = computed(() => {
    const pokemon = this.pokemon()
    if (!pokemon) return { types: [], faiblesses: [] }

    const mapToColor = (types: PokemonType[]) =>
      types.map(type => ({ type, couleur: PokemonTypeProperties[type]?.couleur ?? '#ccc' }))

    return {
      types: mapToColor(pokemon.types),
      faiblesses: mapToColor(pokemon.faiblesses),
    }
  })

  constructor() {
    this.openInfo.set(false)
    this.talentSelected.set(null)

    const numero = this.numeroPokemon()
    if (numero) this.pokemonService.getPokemonById(numero).subscribe()
  }

  choosePokeball(choice: '1' | '2') { this.pokeball.set(choice) }

  getColorByType(type: string, category: 'types' | 'faiblesses') {
    return this.bgData()[category].find(t => t.type === type)?.couleur ?? '#ccc'
  }

  setOpenInfo(talent: { titre: string, description: string }) {
    this.openInfo.update((value) => !value)
    this.talentSelected.set(talent)
  }

  goToDetail(numero?: string) { numero && this.router.navigate(['pokemon', numero]) }
}
