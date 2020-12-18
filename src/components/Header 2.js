import React from 'react';
import styled from 'styled-components';


export default function Header(){
    
    return(
        <Top> 
            <h1>RepoProvas</h1> 
        </Top>
    )
}

const Top = styled.header`
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    font-size: 4rem; 

`;