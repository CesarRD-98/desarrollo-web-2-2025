import './App.css'
import { Persona } from './models/Persona';
import PersonaComponente from './componentes/PersonaComponente';


function App() {

  let lstPersona: Persona[] = [
    { nombre: "Juan", ocupacion: "Ingeniero", pais: "Colombia" },
    { nombre: "Pedro", ocupacion: "Arquitecto", pais: "Argentina" },
    { nombre: "Maria", ocupacion: "Abogada", pais: "Chile" },
    { nombre: "Ana", ocupacion: "Medico", pais: "Peru" }
  ];

  return (
    <>
      <div className='container mt-5'>
        {
          lstPersona.map((persona, index) => (
            <PersonaComponente
              key={index}
              nombre={persona.nombre}
              ocupacion={persona.ocupacion}
              pais={persona.pais} />
          ))
        }
      </div>
    </>
  )
}

export default App
