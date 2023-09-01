import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div `
    background-color: #c14949;
    color: #FFFFFF;
    font-family: 'Lato';
    font-weight: 900;
    text-align: center;
    padding: 1rem;
    border-radius: .6rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error