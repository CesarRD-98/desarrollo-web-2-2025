'use client'
import { useGlobalContext } from '@/app/providers/globalProvider'
import React, { useState } from 'react'

export default function page() {

    const { presupuesto } = useGlobalContext()

    const[monto, setMonto] = useState<string>('')
    const[descripcion, setDescripcion] = useState<string>('')
    const[categoria, setCategoria] = useState<string>('')
    const[fecha, setFecha] = useState<string>('')

    function manejarGasto() {
        
    }

    return (
        <div className='container-fluid d-flex align-items-center justify-content-center m-5 p-5'>
            <div className="row">
                <div className="col-auto text-center">
                    <h2>Presupuesto establecido <strong>L.{presupuesto}</strong></h2>
                    <div className="card m-4 p-2">
                        <div className="m-4">
                            <input
                                type="number"
                                className='form-control'
                                placeholder='Ingrese monto'
                                value={monto}
                                onChange={(e) => setMonto(e.target.value)} />
                        </div>
                        <div className="m-4">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Descripción'
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)} />
                        </div>
                        <div className="m-4">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Categoria'
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)} />
                        </div>
                        <div className="m-4">
                            <input
                                type="date"
                                className='form-control'
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)} />
                        </div>
                        <div className="m-4">
                            <button className='btn btn-primary' onClick={manejarGasto}>Guardar Presupuesto</button>
                        </div>
                        <div className="">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Monto</th>
                                        <th>Descripcion</th>
                                        <th>Categoria</th>
                                        <th>Fecha</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>100</td>
                                        <td>Supermercado</td>
                                        <td>Embutidos</td>
                                        <td>1-1-2025</td>
                                        <td>
                                            <button className='btn btn-sm btn-warning me-2'>Editar</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-danger'>Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
