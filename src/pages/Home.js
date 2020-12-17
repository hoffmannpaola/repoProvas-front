import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


export default function Home() {

    const history = useHistory();

    return (
        <ContainerBox>
            <h1>RepoProvas</h1>

            <div className="options">
                <div onClick = { () => history.push(`/buscar`) }>Consultar Prova</div>
                <div onClick = { () => history.push(`/postar`) }>Upload de Prova</div>
            </div>

        </ContainerBox>
        
    );


}

const ContainerBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    h1 {
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 6rem;
        margin-top: 3rem;
        letter-spacing: 0.5rem;
    }

    .options {
        margin-top: 3rem;
        margin-bottom: 1rem;
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.5rem;
        flex-wrap: wrap;

        div {
            width: 15rem;
            height: 15rem;
            border-radius: 1rem;
            background: rgba(162, 57, 202, 0.84);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
            text-align: center;
            margin-right: 3rem;
            margin-bottom: 1rem;

        }

    }

        @media (max-width: 800px) { 

            h1 {
                font-size: 3.5rem;
                margin-top: 3rem;
                
            }

            .options {
                margin-top: 1.5rem;
                flex-direction: column;
                padding: 0.5rem;

                div {
                    width: 15rem;
                    height: 15rem;
                    font-size: 2rem;
                    text-align: center;
                    margin-bottom: 1rem;

                }
        }
`;