import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
// my importations
import { LoginService } from '../services/login.service'

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginService = inject(LoginService)

  if (!loginService.isAuthenticated()) {
    router.navigate(['login'])
    return false
  }

  return true
}
