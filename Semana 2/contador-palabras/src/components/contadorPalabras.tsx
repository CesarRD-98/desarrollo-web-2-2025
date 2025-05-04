import { useState, useEffect } from "react";

export default function ContadorPalabras() {
    // texto es el estado actual, setTexto es la función para actualizar el estado
    // useState<string>('') inicializa el estado como una cadena vacía
    const [texto, setTexto] = useState<string>('');
    const [contador, setContador] = useState<number>(0);

    const cantidadLetras = texto.length;
    const colorTexto = cantidadLetras < 10 ? '#facc15' : cantidadLetras < 50 ? '#16a34a' : '#dc2626';

    useEffect(() => {
        //se eliminan espacios, se divide el texto con espacios o saltos de línea y se filtran las palabras vacías
        const palabras = texto.trim().split(/\s+/).filter((palabra) => palabra.length > 0);
        // console.log(palabras);
        setContador(palabras.length);
    }, [texto]);

    function handleText(e: any) {
        setTexto(e.target.value)
    }

    return (
        <div>
            <h1 className="mb-3">Contador de Palabras</h1>
            <textarea
                className="form-control mb-3 fw-semibold"
                value={texto}
                onChange={handleText}
                rows={5}
                placeholder="Escribe aquí..."
                style={{color: colorTexto, padding: 10}}
            ></textarea>
            <h5>Palabras: <span className="badge text-bg-secondary">{contador}</span></h5>
            <h5>Letras: <span className="badge text-bg-secondary">{cantidadLetras}</span></h5>
        </div>
    );
}