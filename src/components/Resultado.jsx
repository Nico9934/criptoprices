import styled from "@emotion/styled"

const Contenedor = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 15rem;
    justify-content: space-around;
    font-family: 'Lato';
    margin-top: 5rem;
`
const Parrafo = styled.p`
    color: #FFF;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
`
const Span = styled.span`
    font-weight: 900 ;

`
// const Imagen = styled.img `
//     width: 5rem;
//     height: 5rem;
//     display: block;
// `

const Resultado = ({ resultado }) => {
    console.log(resultado);
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR } = resultado
    return (
        <Contenedor>
            {/* <Imagen src={`criptocompare.com${IMAGEURL}`} alt="imagenCripto" /> */}
            <Parrafo>El precio es de: <Span>{PRICE}</Span></Parrafo>
            <Parrafo>El precio mas alto del dia: <Span>{HIGHDAY}</Span></Parrafo>
            <Parrafo>El precio mas bajo del dia: <Span>{LOWDAY}</Span></Parrafo>
            <Parrafo>Variacion de últimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span></Parrafo>


        </Contenedor>
    )
}

export default Resultado