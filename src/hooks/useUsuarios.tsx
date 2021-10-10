import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"


export const useUsuarios = () => {

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
                // paginaRef.current++
            }else{
                paginaRef.current--
                alert('No hay mas registros')
            }
        })
        .catch( console.log )
    }

    const paginaSiguiente = () => {
        paginaRef.current++
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if( paginaRef.current > 1){
            paginaRef.current--
            cargarUsuarios()
        }else{
            alert('No hay mas registros')
        }

    }

    return{
        usuarios,        
        paginaSiguiente,
        paginaAnterior
    }
}