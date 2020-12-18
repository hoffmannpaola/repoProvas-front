import React, { useEffect, useState, useContext } from "react";
import {useParams} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import { killingBlanks } from '../utils/routeFormatting';
import { examsContext } from "../contexts/ExamsContext";


export default function Disciplina(props) {

    const { periodos, setPeriodos,
            provas, setProvas
          } = useContext(examsContext);
    
    const subject = props.location.state;
    const idSubject = props.location.id;

    const history = useHistory();

    useEffect(() => {

        if (subject.length !== 0) {

           
            const request = axios.post(`${process.env.REACT_APP_BACKURL}/api/provas/exams-by-name`, {"id": idSubject});
            
    
            request.then(({data}) => {
                setProvas(data)
                
            });
    
            request.catch( () => {
                    alert("Não foi possivel realizar esta busca!");
                   
    
            }); 

        }
    },[])

  
    useEffect(() => {

        if (subject.length !== 0) {

           
            const request = axios.get(`${process.env.REACT_APP_BACKURL}/api/periodos/all-periods`);
            
    
            request.then(({data}) => {
                setPeriodos(data)
                
            });
    
            request.catch( () => {
                    alert("Não foi possivel realizar esta busca!");
                    
    
            }); 

        }
    },[])
   

    const listPeriodos = [];



    for (let i = 0; i < periodos.length; i++) {

        if(provas.length !== 0) {
            const newArray = provas.some(prova => periodos[i].id === prova.periodo_id);
        (newArray) && listPeriodos.push(periodos[i].nome);

        }

    }
    
    function changePage(item) {
        const newItem = killingBlanks(item)

        history.push(`/periodo/${newItem}`)

    }

   
    
    
    

    return (
        <>
        <Header />
        <ContainerBox>
            <h1>{subject}</h1>
            
            {listPeriodos.map((item) => (
                <div
                    onClick={ () => changePage(item) }
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
      letter-spacing: 0.3rem;
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

