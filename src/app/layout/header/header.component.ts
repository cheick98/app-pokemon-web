import { Router } from '@angular/router'
import { Component, inject } from '@angular/core'

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  imports: [],
})

export class HeaderComponent {
  private router = inject(Router)

  goToHome() {
    this.router.navigate(['pokemons'])
  }

  goToAddPokemon() {
    this.router.navigate(['pokemon'])
  }
}
