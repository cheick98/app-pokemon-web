import { Component, input } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  styleUrl: './input.component.css',
  templateUrl: './input.component.html',
  imports: [ReactiveFormsModule],
})

export class InputComponent {

  id = input.required<string>()
  inputName = input.required<string>()
  type = input.required<'text' | 'password' | 'number' | 'search' | 'textarea' | 'select' | 'date' | 'email'>()

  w_33 = input<boolean>()
  w_100 = input<boolean>()
  label = input<boolean>()
  required = input<boolean>()
  disabled = input<boolean>()

  error = input<string>()
  placeholder = input<string>()
  value = input<string | number>()
}
