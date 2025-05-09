'use client'
import { useAuth } from "../provider/authProvider";
import { useState } from "react";

export default function UserProfile() {
    
    const {user, login, logout} = useAuth()
    
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        login(userName, password)
        setUserName('')
        setPassword('')
    }

    return(
        <div>
            {user ? (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl font-bold">Bienvenido, {user.name}</h1>
                    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                </div>
            ) : (
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl font-bold">Por favor inicia sesión</h1>
                    <input 
                        type="text" 
                        placeholder="Ingrese su nombre de usuario" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        className="border border-gray-300 p-2 rounded"
                    />
                    <input
                        type="password" 
                        placeholder="Ingrese su contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border border-gray-300 p-2 rounded"
                    />
                    <button onClick={handleLogin} 
                    className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                </div>
            )}
        </div>
    )
}