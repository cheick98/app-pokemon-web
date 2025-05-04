import { Component } from '@angular/core'
import { CommonModule, NgFor, NgIf } from '@angular/common'
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms'
// my importations
import { generations } from '../../../utils/constants'
import { PokemonType, PokemonTypeProperties } from '../../../models/pokemon.model'
import { SingleContainerComponent } from '../../../layout/single-container/single-container.component'
// my importations

@Component({
  selector: 'app-pokemon-add',
  styleUrl: './pokemon-add.component.css',
  templateUrl: './pokemon-add.component.html',
  imports: [ReactiveFormsModule, CommonModule, SingleContainerComponent],
})

export class PokemonAddComponent {

  generations = generations

  // formGroup = createPokemonFormGroup()
  formGroup = new FormGroup({
    numero: new FormControl<string>(''),
    nom: new FormControl<string>(''),
    imageUrl: new FormControl<string>(''),
    couleur: new FormControl<string>(''),
    generation: new FormControl<string>(''),

    description1: new FormControl<string>(''),
    description2: new FormControl<string>(''),

    taille: new FormControl<string>(''),
    categorie: new FormControl<string>(''),
    poids: new FormControl<string>(''),

    talents: new FormArray([
      new FormGroup({
        titre: new FormControl<string>(''),
        description: new FormControl<string>(''),
      })
    ]),

    types: new FormControl<PokemonType[]>([], { validators: [Validators.required] }),
    faiblesses: new FormControl<PokemonType[]>([], { validators: [Validators.required] }),

    evolutions: new FormGroup({
      precedent: new FormControl<string>(''),
      courant: new FormControl<string>(''),
      suivant: new FormControl<string>(''),
    }),
  })

  pokemonTypes = Object.values(PokemonType)
  typeColors = PokemonTypeProperties

  get formTypes(): FormControl<PokemonType[]> {
    return this.formGroup.get('types') as FormControl<PokemonType[]>
  }

  get formFaiblesses(): FormControl<PokemonType[]> {
    return this.formGroup.get('faiblesses') as FormControl<PokemonType[]>
  }

  onCheckboxChange(event: Event, field: 'types' | 'faiblesses') {
    const input = event.target as HTMLInputElement
    const type = input.value as PokemonType
    const control = this.formGroup.get(field) as FormControl<PokemonType[]>
    const current = control.value ?? []

    if (input.checked && !current.includes(type)) {
      control.setValue([...current, type])
    } else if (!input.checked && current.includes(type)) {
      control.setValue(current.filter(t => t !== type))
    }

    control.markAsTouched()
  }

  savedTalents: { titre: string; description: string }[] = []

  get talentsArray(): FormArray {
    return this.formGroup.get('talents') as FormArray
  }

  get savedTalentsList(): FormGroup[] {
    return this.talentsArray.controls
      .map(control => control as FormGroup)
      .filter(group => group.get('saved')?.value)
  }


  addTalentGroup() {
    this.talentsArray.push(
      new FormGroup({
        titre: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        saved: new FormControl(false), // ✅ nouveau champ
      })
    )
  }

  removeTalentGroup(index: number) {
    this.talentsArray.removeAt(index)
  }

  saveTalent(index: number) {
    const group = this.talentsArray.at(index) as FormGroup

    if (group.invalid) {
      group.markAllAsTouched()
      return
    }

    group.get('saved')?.setValue(true) // ✅ marquer comme sauvegardé
  }


  deleteSavedTalent(index: number) {
    this.talentsArray.removeAt(index)
  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup
  }

  handleSubmit(e: Event) {
    e.preventDefault()

    this.formGroup.patchValue({
      imageUrl: this.formGroup.value.numero ? `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${this.formGroup.value.numero}.png` : ''
    })

    console.log(this.formGroup.value)
  }
}
