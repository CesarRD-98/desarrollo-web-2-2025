'use client'
import { createContext } from 'react'
import { TypeUser } from '../types/UserType'

export const AuthUserContext = createContext<TypeUser>({
    user: null,
    login: () => { },
    logout: () => { },
})
