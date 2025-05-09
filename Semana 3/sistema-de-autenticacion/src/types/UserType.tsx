import { User } from '../interfaces/user'

export type TypeUser = {
    user: User | null
    login: (userName: string, password: string) => void
    logout: () => void
}
 