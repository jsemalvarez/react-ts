import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const { state, email, password, onChange } =  useForm({
        email:'test@test.com',
        password:'123456'
    })

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={ email }
                onChange={ ({ target }) => onChange( target.value, 'email')}
            /> 
             <input
                type="password"
                className="form-control my-2"
                placeholder="Password"
                value={ password }
                onChange={ ({ target }) => onChange( target.value, 'password')}
            />

            <code>
                <pre>{ JSON.stringify( state, null, 2 ) }</pre>
            </code>
        </>
        
    )
}
