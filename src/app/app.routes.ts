import { Routes } from '@angular/router'
// my importation
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
        loadComponent: () => import('./pages/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
    },
    {
        path: 'pokemon',
        children: [
            { title: 'Ajout pokémon', path: '', component: PokemonAddComponent },
            { title: 'Détail du pokémon', path: ':numero', component: PokemonDetailComponent, },
        ]

    },
    {
        title: 'Liste de pokémons',
        path: 'trainers',
        loadComponent: () => import('./pages/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
    },
    {
        title: 'Liste de pokémons',
        path: 'items',
        loadComponent: () => import('./pages/pokemon/pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent),
    },
]
