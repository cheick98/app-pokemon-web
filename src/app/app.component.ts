import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
// my importations
import { LoginService } from './core/services/login.service'
import { HeaderComponent } from './layout/header/header.component'

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent],
})

export class AppComponent {
  private loginService = inject(LoginService)

  constructor() {
    this.loginService.initializeUserFromStorage()
  }
}
