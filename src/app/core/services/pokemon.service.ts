import { Observable, delay, tap } from 'rxjs'
import { Injectable, computed, signal } from '@angular/core'
// my importations
import { data } from '../../utils/data'
import { IPokemon } from '../../models/pokemon.model'

type PokemonState = {
  loading: boolean
  error: string | null
  pokemons: IPokemon[]
  pokemon: IPokemon | null
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  // Initial data
  private state = signal<PokemonState>({
    loading: false,
    error: null,
    pokemons: [],
    pokemon: null
  })

  // Expose computed values
  loading = computed(() => this.state().loading)
  pokemons = computed(() => this.state().pokemons)
  pokemon = computed(() => this.state().pokemon)
  error = computed(() => this.state().error)

  constructor() { }

  // Helper to update state
  private setState(patch: Partial<PokemonState>) {
    this.state.update(state => ({ ...state, ...patch }))
  }

  getAllPokemons(): Observable<IPokemon[]> {
    this.setState({ loading: true, error: null })

    return new Observable<IPokemon[]>(subscriber => { subscriber.next(data) }).pipe(
      delay(500),
      tap({
        next: (pokemons) => {
          this.setState({ pokemons, loading: false })
        }
      })
    )
  }

  getPokemonById(numero: string): Observable<IPokemon> {
    this.setState({ loading: true, error: null })

    return new Observable<IPokemon>(subscriber => {
      const pokemon = data.find(p => p.numero === numero)

      if (pokemon) {
        subscriber.next(pokemon)
        return // Important : éviter d'appeler `error` après
      }

      subscriber.error(undefined)
    }).pipe(
      delay(500),
      tap({
        next: (pokemon) => {
          this.setState({ pokemon, loading: false })
        },
        error: () => {
          this.setState({ error: "Désolé, ce pokémon n'existe pas dans notre base de donnée", loading: false })
        }
      })
    )
  }
}
