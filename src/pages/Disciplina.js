import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useHistory, useLocation  } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import { killingBlanks } from '../utils/routeFormatting';


export default function Disciplina(props) {
    const subject = props.location.state;
    const {id} = useParams();
    console.log(id)

    const history = useHistory();

    const periodos = [
        {id: 1, nome: "1º Semestre"},
        {id: 2, nome: "2º Semestre"},
        {id: 3, nome: "Eletivas"}
    ]

    const provas = [
        
        {id: 5, periodo_id: 1 },
        {id: 6, periodo_id: 3 },

    ]

    const listPeriodos = [];



    for (let i = 0; i < periodos.length; i++) {

        const newArray = provas.some(prova => periodos[i].id === prova.periodo_id);
        (newArray) && listPeriodos.push(periodos[i].nome);
        

    }
    
    function changePage(item) {
        const newItem = killingBlanks(item)

        history.push(`/periodo/${newItem}`)

    }
    
    // const request = axios.post(`http://localhost:3000/`, {}, {subject});

    // request.then(({data}) => {
        
    // });

    // request.catch( () => {
    //         alert("Não foi possivel realizar esta busca!");
    //         setButtonEnabled(true);

    // }); 
    

    return (
        <>
        <Header />
        <ContainerBox>
            <h1>{subject}</h1>
            
            {listPeriodos.map((item) => (
                <div
                    onClick={ changePage(item) }
                    className="periodo" 
                    key={item} 
                    value={item}>
                    {item}
                </div>
            ))}

            
        </ContainerBox>
        </> 
        
    );

}

const ContainerBox = styled.div `
    width: 100%; 
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

    h1 {
      font-size: 3rem; 
      margin-bottom: 1rem;
    }
    .periodo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 2.5rem;
        background: #A239CA;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.5rem; 
        margin-top: 1rem;

    }

    @media (max-width: 800px) {
        margin-top: 5rem;

        h1 {
            font-size: 2rem; 
            margin-bottom: 1rem;
        }

    }
`

