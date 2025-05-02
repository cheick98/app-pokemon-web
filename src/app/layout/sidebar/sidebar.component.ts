import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// my importations
import { icons } from '../../shared/icons/icons'

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule, RouterModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  private router = inject(Router)

  items = [
    { name: 'Pokémons', route: 'home', icon: '/icons/pokemon1.png' },
    { name: 'Dresseurs', route: 'trainers', icon: '/icons/pokemon1.png' },
    { name: 'Objets', route: 'items', icon: '/icons/pokemon1.png' }
  ]

  icons = icons


  isRouteActive(route: string) { return this.router.url.includes(route) }
}
