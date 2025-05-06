import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { debounceTime, startWith, switchMap, take } from 'rxjs'
import { Component, effect, inject, signal } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
// my importations
import { LoginService } from '../../core/services/login.service'
import { PokemonService } from '../../core/services/pokemon.service'

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})

export class HeaderComponent {
  private router = inject(Router)
  private loginService = inject(LoginService)
  private pokemonService = inject(PokemonService)

  search = new FormControl('')

  user = this.loginService.user
  pokemons = this.pokemonService.pokemons

  isOpen = signal(false)

  searchResults$ = this.search.valueChanges
    .pipe(
      debounceTime(500),
      switchMap((value) => {
        const searchText = value ? value : ''
        return this.pokemonService.search(searchText)
      })
    )

  setIsOpen() {
    this.isOpen.set(!this.isOpen())
  }

  goToHome() {
    this.router.navigate(['pokemons'])
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

  goToAddPokemon() {
    this.router.navigate(['pokemon'])
  }

  goToDetail(numero?: string) {
    numero && this.router.navigate(['pokemon', numero])
    this.isOpen.set(false)
    this.search.setValue('')
  }


  logout() {
    this.loginService.logout().pipe(take(1)).subscribe({
      next: _ => {
        this.goToLogin()
      },
      error: _ => {
        this.goToLogin()
      },
    })
  }
}
