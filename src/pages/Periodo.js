import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom'

import Header from "../components/Header";
import { examsContext } from "../contexts/ExamsContext";



export default function Periodo() {

    const typeCategoria = useParams();
    
    const { provas, setProvas, periodos, setPeriodos, } = useContext(examsContext);
    console.log(provas)

    const categorias = [
        {id: 1 , nome: "P1" },
        {id: 2, nome: "P2" },
        {id: 3, nome: "Substitutiva" },
    ]


    // let provas1 = [];
    // let provas2 = [];
    // let substitutiva = [];
    // //dividir as provas por categoria

    // for (let i = 0; i < provas.length; i++) {

    //     for (let j = 0; j < categorias.length; j++) {
    
    //         if (provas[i].categoria.id === categorias[j].id ) {

    //         }
     
    //     }
    
    // }


  
    return (
        <>
        <Header />
        <ContainerBox>
            <div className="boxProvas">
                <h2>P1</h2>
                <li>2018.1 Prof. Fabinho</li>
                <li>2018.1 Prof. Fabinho</li>
                <li>2018.1 Prof. Fabinho</li>

            </div>

            <div className="boxProvas">
                <h2>P2</h2>
                <li>2018.1 Prof. Fabinho</li>
                <li>2018.1 Prof. Fabinho</li>
                <li>2018.1 Prof. Fabinho</li>

            </div>
            

        </ContainerBox>
        
        </>
    )
}

const ContainerBox = styled.div `
    width: 100%; 
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    .boxProvas {
        margin-left: 2rem;
        h2 {
            font-size: 2rem; 
            margin-bottom: 1rem;
        }
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20rem;
            height: 3rem;
            background: #4717F6;
            border: none;
            border-radius: 0.5rem;
            font-size: 1.5rem; 
            margin-top: 1rem;
            list-style-type: none;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

    }

    @media (max-width: 800px) { 
        flex-direction: column;
        margin-top: 2rem;

        .boxProvas {
            margin-left: 0;
            margin-bottom: 1rem;

        }
    }

    
`