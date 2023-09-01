import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;
const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 5rem auto 0 auto;
    display: block;
`;
const Heading = styled.h1`
    font-family: "Lato";
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
    font-size: 2rem;

    &::after {
        content: "";
        width: 25%;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 1rem auto 0 auto;
    }
`;

function App() {
    const [monedas, setMonedas] = useState({});
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (Object.keys(monedas).length > 0) {
            setCargando(true);
            const cotizarCripto = async () => {
                const {moneda, criptomoneda} = monedas;
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setResultado(resultado.DISPLAY[criptomoneda][moneda]);

                setCargando(false);
            };
            cotizarCripto();
        }
    }, [monedas]);

    return (
        <div>
            <Contenedor>
                <Imagen src={ImagenCripto} alt="Imagenes criptomonedas" />

                <div>
                    <Heading>Cotiza Criptomonedas al instante</Heading>

                    <Formulario
                        setMonedas={setMonedas}
                        setResultado={setResultado}
                    />
                    {cargando && <Spinner />}
                    {!cargando && resultado.PRICE && (
                        <Resultado resultado={resultado} />
                    )}
                </div>
            </Contenedor>
        </div>
    );
}

export default App;
