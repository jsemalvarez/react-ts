import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect( () => {
        cargarUsuarios()
    }, [])


    const cargarUsuarios = () => {
        reqResApi.get<ReqResListado>('/users', {
            params:{
                page: paginaRef.current
            }
        })
        .then( res => {
            // res.data es un atributo de axios y es de tipo AxiosResponse

            if( res.data.data.length > 0 ){
                setUsuarios( res.data.data )
                paginaRef.current++
            }else{
                alert('No hay mas registros')
            }
        })
        .catch( console.log )
    }

    const renderItem = ( {id, first_name, last_name, email, avatar}: Usuario) => {
        return(
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar } 
                        alt={ first_name } 
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td> { first_name } { last_name }</td>
                <td> { email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button 
                className="btn btn-primary"
                onClick={ cargarUsuarios }
            >Siguientes</button>
        </>
    )
}
