
export const TiposBasicos = () => {

    const nombre: string | number = 'Jose'
    const edad: number = 35
    let estaActivo: boolean = true
  
    const poderes: string[] = ['Velocidad','Valor','Volar']
    
    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'true' : 'false' }
            <br />
            { poderes.join(', ')}
        </>
    )
}
