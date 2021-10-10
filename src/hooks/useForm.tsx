import { useState } from "react"

export const useForm = <T extends Object>( formulario: T ) => {

    const [state, setState] = useState( formulario )

    // con campo: keyof T nos aseguramos que el campo es parte del objeto T
    const onChange = ( value: string, campo: keyof T) => {

        setState({
            ...state,
            [ campo ] : value
        })
    }

    return{
        state, // queda para poder mostrar los valores en la etiqueta pre 
        ...state,
        onChange
    }
}