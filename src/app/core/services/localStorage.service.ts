// my importation
import { IUser } from '../../models/user.model'

export class StorageService {
    static saveUser(user: IUser) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    static getUser(): IUser | null {
        const raw = localStorage.getItem('user')
        return raw ? JSON.parse(raw) : null
    }

    static clearUser() {
        localStorage.removeItem('user')
    }
}
