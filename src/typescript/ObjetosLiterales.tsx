
/**
 * Con interface ponemos reglas de validacion a los objetos
 */
interface Direccion{
    pais: string,
    codigoPostal: number
}

interface Persona{
    nombre: string,
    edad: number,
    direccion: Direccion
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Jose',
        edad: 39,
        direccion: {
            pais: 'Argentina',
            codigoPostal: 7600
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 4 ) }
                </pre>
            </code>
        </>
    )
}
