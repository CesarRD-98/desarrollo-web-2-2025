'use client'
import React, { useState, useContext, useEffect } from 'react'
import { AuthUserContext } from '../context/authContext'
import { PropsChildren } from '../interfaces/propChildren'
import { User } from '../interfaces/user'

export default function AuthProvider(props: PropsChildren) {

    const [user, setUser] = useState<User | null>(null)

    const registeredUser: User = { name: 'Cesar Reyes', password: 'Cesar' }

    function login(userName: string, password: string) {
        if (userName === registeredUser.name && password === registeredUser.password) {
            setUser(registeredUser)
        } else {
            alert('Usuario no registrado')
        }
    }

    useEffect(() => {
        if (user) {
            alert('Usuario autenticado')
        }
    }, [user])

    function logout() {
        setUser(null)
    }

    return (
        <AuthUserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthUserContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthUserContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

