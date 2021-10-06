import { TiposBasicos } from "./typescript/TiposBasicos"

const App = () => {

  const nombre: string | number = 'Jose'
  const edad: number = 35
  let estaActivo: boolean = true

  const poderes = ['Velocidad','Valor','Volar']

  return (
    <div className="mt-2">
      <h2>Introduccion a TS - React</h2>
      <hr />
      <TiposBasicos />
      { nombre }, { edad }, { (estaActivo) ? 'true' : 'false' }
      <br />
      { poderes.join(', ')}
    </div>
  )
}

export default App
