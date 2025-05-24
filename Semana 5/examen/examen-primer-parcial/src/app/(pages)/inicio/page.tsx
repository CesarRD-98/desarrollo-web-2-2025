'use client'
import { useGlobalContext } from '@/app/providers/globalProvider'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {

  const router = useRouter()

  const { agregarPresupuesto } = useGlobalContext()

  const [monto, setMonto] = useState<string>('')

  function manejarInput() {
    agregarPresupuesto(Number(monto))
    setMonto('')
  }

  function registroGastos() {
    router.push('/registro')
  }

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center m-5 p-5'>
      <div className="row">
        <div className="col-auto text-center">
          <h2>Establecer presupuesto Mensual</h2>
          <div className="m-4">
            <input
              type="number"
              className='form-control'
              placeholder='Ingrese su presupuesto mensual'
              value={monto}
              onChange={(e) => setMonto(e.target.value)} />
          </div>
          <div className="m-4">
            <button className='btn btn-primary' onClick={manejarInput}>Guardar Presupuesto</button>
          </div>
          <div className="m-4">
            <button className='btn btn-warning' onClick={registroGastos}>Ir a registro de gastos</button>
          </div>
        </div>
      </div>
    </div>
  )
}
