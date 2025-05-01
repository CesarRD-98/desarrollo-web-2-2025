import "./App.css";

const Unidad: Array<string> = ['Celsius', 'Fahrenheit', 'Kelvin'];

function App() {
  const unidad: string = Unidad[2];
  const tempInicial: number = 305;

  let celsius: number = 0;
  let fahrenheit: number = 0;
  let kelvin: number = 0;

  switch (unidad) {
    case 'Celsius':
      celsius = tempInicial;
      fahrenheit = (tempInicial * 9/5) + 32;
      kelvin = tempInicial + 273.15;
      break;
    case 'Fahrenheit':
      celsius = (tempInicial - 32) * 5/9;
      fahrenheit = tempInicial;
      kelvin = (tempInicial - 32) * 5/9 + 273.15;
      break;
    case 'Kelvin':
      celsius = tempInicial - 273.15;
      fahrenheit = (tempInicial - 273.15) * 9/5 + 32;
      kelvin = tempInicial;
      break;
    default:
      break;
  }

  
  const resultados = [];

  if (unidad !== 'Celsius') {
    resultados.push({ etiqueta: 'Celsius', valor: celsius });
  }
  if (unidad !== 'Fahrenheit') {
    resultados.push({ etiqueta: 'Fahrenheit', valor: fahrenheit });
  }
  if (unidad !== 'Kelvin') {
    resultados.push({ etiqueta: 'Kelvin', valor: kelvin });
  }

  console.log(resultados);
  
  return (
    <>
      <div>
        <h1>Conversor de temperaturas</h1>
        <h3>Valor inicial en {unidad}: {tempInicial}</h3>
        <h5>Resultados de conversiones:</h5>
        <ul>
          {resultados.map((resultado, index) => (
            <li key={index}>
              <p>{unidad} a {resultado.etiqueta}</p>
              <strong>{resultado.valor.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
