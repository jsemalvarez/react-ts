import { useEffect, useReducer } from "react"

/**
 *  usamos type cuando el objeto no se va a expandir
 *  y usamos interface cuando hay posibilidades que se expanda 
 */

interface AuthState{
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    nombre: string,
    username: string
}

type AuthAction = 
    { type: 'logout' }
    | { type: 'login', payload: LoginPayload}

const authReducer = ( state: AuthState, action:AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'logout':            
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case 'login':      
            const { nombre, username } =  action.payload     
            return {
                validando: false,
                token: 'abc1234',
                nombre,
                username
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    const [ { validando, token, nombre }, dispatch] = useReducer( authReducer, initialState )

    useEffect( () => {
        setTimeout( () => {
            dispatch( { type: 'logout'} )
        }, 1500)

    }, [])

    const login = () => {
        dispatch({ type: 'login', payload: { nombre:'Jose', username:'Argon'}} )
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }


    if( validando ){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    ? <div className="alert alert-success"> Autenticando como:{ nombre } </div>
                    : <div className="alert alert-danger"> No autenticando </div>
            }  


            {
                ( token )
                    ?(
                        <button
                            className="btn btn-danger"
                            onClick={ logout }
                        >
                            Logout
                        </button>
                    ):(
                                    
                        <button
                            className="btn btn-primary"
                            onClick={ login }
                        >
                            Login
                        </button>
                    )
            }          



            
        </>
    )
}
