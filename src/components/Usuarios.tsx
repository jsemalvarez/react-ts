import { useUsuarios } from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios()


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

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <button 
                    className="btn btn-primary m-2"
                    onClick={ paginaAnterior }
                >Anteriores</button>

                <button 
                    className="btn btn-primary m-2"
                    onClick={ paginaSiguiente }
                >Siguientes</button>
            </div>

            
        </>
    )
}
