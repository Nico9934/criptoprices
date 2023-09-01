import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import {monedas} from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9794ff;
    border: none;
    width: 100%;
    padding: 0.8rem 0;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "Lato";
    font-size: 1.2rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease-in-out;
    margin-bottom: 5rem;
    &:hover {
        background-color: #9750ff;
        cursor: pointer;
    }
`;

const Formulario = ({setMonedas, setResultado}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas(
        "Elige tu moneda:",
        monedas
    );
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
        "Elige tu Criptomoneda:",
        criptos
    );

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map((cripto) => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                };
                return objeto;
            });

            setCriptos(arrayCriptos);
        };
        consultarAPI();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda, criptomoneda].includes("")) {
            setError(true);
            setResultado({});
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            criptomoneda,
        });
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="cotizar" />
            </form>
        </>
    );
};

export default Formulario;
