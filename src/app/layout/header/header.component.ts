import { take } from 'rxjs'
import { Router } from '@angular/router'
import { Component, inject } from '@angular/core'
// my importations
import { LoginService } from '../../core/services/login.service'

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  imports: [],
})

export class HeaderComponent {
  private router = inject(Router)
  private loginService = inject(LoginService)

  user = this.loginService.user

  goToHome() {
    this.router.navigate(['pokemons'])
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

  goToAddPokemon() {
    this.router.navigate(['pokemon'])
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
