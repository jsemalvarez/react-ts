import { useState } from "react"

export const Contador = () => {

    const [valor, setValor] = useState(0)
    // const [valor, setValor] = useState<number>(0) // si quisieramos definir el tipo de dato

    const acumular = ( numero: number ) => {
        setValor( valor + numero )
    }

    return (
        <>
            <h3>Contador: <small> { valor } </small></h3>

            <button 
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            > +1 </button>

            <button 
                className="btn btn-primary m-1"
                onClick={ () => acumular(-1) }
            > -1 </button>

        </>
    )
}
