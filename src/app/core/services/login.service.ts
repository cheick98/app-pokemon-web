import { delay, Observable, tap } from 'rxjs'
import { computed, Injectable, signal } from '@angular/core'
// my importations
import { IUser } from '../../models/user.model'
import { StorageService } from './localStorage.service'

export interface Credentials {
  username: string
  password: string
}

type UserState = {
  loading: boolean
  error: string | null
  user: IUser | null
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // Initial data
  private state = signal<UserState>({
    loading: false,
    error: null,
    user: null
  })

  // Expose computed values
  loading = computed(() => this.state().loading)
  user = computed(() => this.state().user)
  error = computed(() => this.state().error)
  isAuthenticated = computed(() => this.user() !== null)

  constructor() { }

  // Helper to update state
  private setState(patch: Partial<UserState>) {
    this.state.update(state => ({ ...state, ...patch }))
  }

  private handleAuthResponse(user: IUser | null, errorMessage: string | null = null) {
    if (user) {
      this.setState({ user, loading: false, error: null })
    } else {
      this.setState({ user: null, loading: false, error: errorMessage })
    }
  }

  initializeUserFromStorage() {
    const user = StorageService.getUser()
    this.setState({
      user,
      loading: false,
      error: user ? null : 'Non connecté'
    })
  }

  login(credentials: Credentials) {
    this.setState({ loading: true, error: null })

    return new Observable<IUser>(subscriber => {
      const { password, username } = credentials
      const user: IUser = { nom: 'Admin', prenom: 'Admin', username: 'admin' }

      if (username !== 'admin' || password !== '123456') {
        subscriber.error(undefined)
        return
      }

      StorageService.saveUser(user)
      subscriber.next(user)
    }).pipe(
      delay(500),
      tap({
        next: (user) => this.handleAuthResponse(user),
        error: () => this.handleAuthResponse(null, 'Username ou mot de passe incorrect') // ou autre msg
      })
    )
  }

  getUser() {
    this.setState({ loading: true, error: null })

    return new Observable<IUser>(subscriber => {
      const user = StorageService.getUser()

      if (user) {
        subscriber.next(user)
        return
      }

      subscriber.error(null)
    })
      .pipe(
        delay(500),
        tap({
          next: (user) => this.handleAuthResponse(user),
          error: () => this.handleAuthResponse(null, 'Non connecté') // ou autre msg
        })
      )
  }

  logout() {
    return new Observable<null>(subscriber => {
      StorageService.clearUser() // mieux que localStorage.removeItem('user') directement
      this.setState({ user: null }) // ✅ met à jour le signal
      subscriber.next(null)
    })
  }
}
