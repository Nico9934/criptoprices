import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label `
    color: #fff; 
    display: block;
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0;
    `
const Select = styled.select `
    font-family: 'Lato';
    border: none;
    width: 100%;
    padding: 1rem;
    border-radius: .6rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`



const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <div>
             <Label>{label}</Label>
             <Select
                value={state}
                onChange={ e => setState(e.target.value)}
             >
                <option value="">Seleccione</option>

                {opciones.map( (opcion) => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ) )}
                
             </Select>
        </div>
    )

    return [ state, SelectMonedas ]
}

export default useSelectMonedas