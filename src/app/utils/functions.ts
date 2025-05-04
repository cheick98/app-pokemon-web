import { FormGroup, FormControl, FormArray } from '@angular/forms'
// my importations
import { IPokemon, PokemonType } from '../models/pokemon.model'

export function createPokemonFormGroup(pokemon?: Partial<IPokemon>): FormGroup {
    return new FormGroup({
        numero: new FormControl(pokemon?.numero ?? ''),
        nom: new FormControl(pokemon?.nom ?? ''),
        imageUrl: new FormControl(pokemon?.imageUrl ?? ''),
        couleur: new FormControl(pokemon?.couleur ?? ''),
        generation: new FormControl(pokemon?.generation ?? 1),

        description1: new FormControl(pokemon?.description1 ?? ''),
        description2: new FormControl(pokemon?.description2 ?? ''),

        taille: new FormControl(pokemon?.taille ?? ''),
        categorie: new FormControl(pokemon?.categorie ?? ''),
        poids: new FormControl(pokemon?.poids ?? ''),

        talents: new FormArray(
            (pokemon?.talents ?? []).map(talent =>
                new FormGroup({
                    titre: new FormControl(talent.titre),
                    description: new FormControl(talent.description),
                })
            )
        ),

        types: new FormControl<PokemonType[]>(pokemon?.types ?? []),
        faiblesses: new FormControl<PokemonType[]>(pokemon?.faiblesses ?? []),

        evolutions: new FormGroup({
            precedent: new FormControl(pokemon?.evolutions?.precedent ?? ''),
            courant: new FormControl(pokemon?.evolutions?.courant ?? ''),
            suivant: new FormControl(pokemon?.evolutions?.suivant ?? ''),
        }),
    })
}
