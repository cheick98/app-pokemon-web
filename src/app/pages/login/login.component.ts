import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { Component, inject, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
// my importations
import { Credentials, LoginService } from '../../core/services/login.service'
import { SingleContainerComponent } from '../../layout/single-container/single-container.component'

@Component({
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, SingleContainerComponent],
})

export class LoginComponent implements OnDestroy {
  private loginService = inject(LoginService)
  private router = inject(Router)

  private loginSubscription: Subscription | null = null

  readonly user = this.loginService.user
  readonly loading = this.loginService.loading
  readonly error = this.loginService.error

  loginFormGroup = new FormGroup<{
    username: FormControl<string>
    password: FormControl<string>
  }>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  })

  constructor() {
    if (this.user()) this.gotToHome()
  }

  gotToHome() {
    this.router.navigate(['pokemons'])
  }

  handleSubmit() {
    this.loginSubscription = this.loginService.login(this.loginFormGroup.value as Credentials)
      .subscribe((user) => { this.gotToHome() })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
}
