import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom'

import Header from "../components/Header";
import { examsContext } from "../contexts/ExamsContext";



export default function Periodo() {

    const typeCategoria = useParams();
    
    const { provas, setProvas, periodos, setPeriodos, } = useContext(examsContext);
    const [ categorias, setCategorias ] = useState('');
    console.log(provas)

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_BACKURL}/api/categorias/all-categories`);
            
    
        request.then(({data}) => {
            setCategorias(data);
              
        });

        request.catch( () => {
                alert("Não foi possivel realizar esta busca!");
 
        }); 

    }, [])

    const disc = [
        {id:1, nome: "P1"},
        {id:2, nome: "P2"},
        {id:3, nome: "Substitutiva"},
        {id:4, nome: "P3"},
        {id:5, nome: "PF"},
        {id:6, nome: "2ch"},
        {id:7, nome: "Outras"},
    ]


    const p1 = provas.filter(p => p.categoria_id === 1);
    const p2 = provas.filter(p => p.categoria_id === 2);
    const sub = provas.filter(p => p.categoria_id === 3);
    const p3 = provas.filter(p => p.categoria_id === 4);
    const pf = provas.filter(p => p.categoria_id === 5);
    const segCham = provas.filter(p => p.categoria_id === 6);
    const outras = provas.filter(p => p.categoria_id === 7);

   


  
    return (
        <>
        <Header />
        <ContainerBox>

            {(sub)
            ? (sub.map((p) => { 
                <li>{p.nome}</li> }))
            : ''

            }

            

            {/* {(p2)
                ?
                :
            }

            {(sub)
                ?
                :
            }

            {(p3)
                ?
                :
            }

            {(pf)
                ?
                :
            }

            {(segCham)
                ?
                :
            }

            {(outras)
                ?
                :
            }        */}





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