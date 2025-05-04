import { Routes } from '@angular/router'
// my importation
import { isLoggedInGuard } from './core/guards/is-logged-in.guard'
import { PokemonAddComponent } from './pages/pokemon/pokemon-add/pokemon-add.component'
import { PokemonDetailComponent } from './pages/pokemon/pokemon-detail/pokemon-detail.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full'
    },
    {
        title: 'Liste de pokémons',
        path: 'pokemons',
        canActivate: [isLoggedInGuard],
        loadComponent: () => import('./pages/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
    },
    {
        path: 'pokemon',
        children: [
            { title: 'Ajout pokémon', path: '', component: PokemonAddComponent, canActivate: [isLoggedInGuard], },
            { title: 'Détail du pokémon', path: ':numero', component: PokemonDetailComponent, canActivate: [isLoggedInGuard], },
        ]

    },
    {
        title: 'Connexion',
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
]
