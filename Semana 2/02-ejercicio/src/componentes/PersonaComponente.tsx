// import { React } from 'react';

import { Persona } from "../models/Persona";

export default function PersonaComponente(props: Persona) {
    return (
        <div className="card">
            <div className="card-header bg-success text-white">
                <h5>Datos Persona</h5>
            </div>
            <div className="card-body">
                <p> <strong>Nombre:</strong> {props.nombre}</p>
                <p><strong>Ocupacion:</strong> {props.ocupacion}</p>
                <p><strong>Pais:</strong> {props.pais}</p>
            </div>
            <div className="card-footer bg-success"></div>
        </div>
    )
}