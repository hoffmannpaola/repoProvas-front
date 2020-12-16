import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";

export default function ConsultarProva() {
    
    const [ option, setOption ] = useState(false)
    const [ teste, setteste ] = useState(true)

    const listOptions = [
        { id: 1, name: "Calculo I" },
        { id: 2, name: "Calculo II" },
        { id: 3, name: "Matemática Aplicada" },
        { id: 4, name: "Otimização de Sistemas Lineares" },
      ];

      const listDisc = [
        { id: 1, name: "Prof. Fabinho" },
        { id: 2, name: "Prof. Bruno" },
        { id: 3, name: "Prof. Samuel" },
        { id: 4, name: "Prof. Ana Cristina" },
      ];

    return (
        <>
            <Header />
            <ContainerBox> 
                <div className="disciplina">

                    <form>
                        <input type="radio" id="disciplina" name="disciplina" value="disciplina" onClick = { () => setOption("disciplina" ) }/>
                        <label>Buscar por Disciplina</label><br /><br />
                        
                        <input type="radio" id="professor" name="disciplina" value="professor" onClick = { () => setOption("professor" ) }/>
                       <label>Buscar por Professor</label><br />
       
                    </form>

                   
                    <div>
                    {(option === "disciplina") 
                        ? <><select className="select">
                        {listOptions.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.name}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button>Buscar</button>
                        </div> </>
                        : " "
                    }

                    {(option === "professor") 
                        ? <><select className="select">
                        {listDisc.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.name}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button>Buscar</button>
                        </div> </>
                        : " "
                    }

                    </div>
                    
                    
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

    
    label {
        width:30rem;
        font-size: 2.5rem; 
        margin-bottom: 1rem;
        margin-right: 1rem;

    }
    .disciplina {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        

        .select {
        width: 20rem;
        height: 2.5rem;
        background: #A239CA;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.5rem; 
        padding-left: 0.3rem;
        margin-top: 1rem;
;
        }

        .botao {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 1rem;

            button {
            width: 7rem;
            height: 2.5rem;
            border-radius: 0.5rem;
            font-size: 1.5rem;
            background: #4717F6; 
            border: none;
            }

        }
        
  

    }

    

`;