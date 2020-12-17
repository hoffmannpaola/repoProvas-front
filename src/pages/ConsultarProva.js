import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";

export default function ConsultarProva() {
    
    getTeachers();
    getDisciplines();

    const [ option, setOption ] = useState(false);
    const [ discipline, setDiscipline ] = useState(listDisciplines[0]);
    const [ teacher, setTeacher ] = useState(listTeachers[0]);
    const [listTeachers, setListTeachers] = useState('');
    const [listDisciplines, setListDisciplines] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(true);

    function getTeachers () {
        const request = axios.get(`http://localhost:3000/api/professores`);
    
        request.then(({data}) => {
            setListTeachers(data); 
        });
         request.catch( () => {
             alert("Não foi possivel buscar os professores!")
    
        });

    }

    function getDisciplines() {
        const request = axios.get(`http://localhost:3000/api/disciplinas`);
    
        request.then(({data}) => {
            setListDisciplines(data); 
        });
         request.catch( () => {
             alert("Não foi possivel buscar as disciplinas!")
    
        });

    }

    function sendChoicesToDatabase(choice) {

        setButtonEnabled(false);
        const formatting = choice.split(' ');
        let route;

        formatting.forEach(element => {
            route += element;
            
        });

        const request = axios.post(`http://localhost:3000/`, {}, {choice});
    
        request.then(({data}) => {
            history.push(`/disciplina/${route}`)
        });
         request.catch( () => {
             alert("Não foi possivel realizar esta busca!");
             setButtonEnabled(true);
    
        });

    }


    // const listOptions = [
    //     { id: "Calculo I", name: "Calculo I" },
    //     { id: "Calculo II", name: "Calculo II" },
    //     { id: "Matemática Aplicada", name: "Matemática Aplicada" },
    //     { id: "Otimização de Sistemas Lineares" , name: "Otimização de Sistemas Lineares" },
    //   ];

    //   const listDisc = [
    //     { id: "Prof. Fabinho", name: "Prof. Fabinho" },
    //     { id: "Prof. Bruno", name: "Prof. Bruno" },
    //     { id: "Prof. Samuel" , name: "Prof. Samuel" },
    //     { id: "Prof. Ana Cristina", name: "Prof. Ana Cristina" },
    //   ];

     

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
                        ? <>
                        <select className="select"
                         onChange={(e) => setDiscipline(e.target.value)}>
                        {listDisciplines.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.name}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button onClick={() => sendChoicesToDatabase(discipline)}>
                                {(buttonEnabled) ? Buscar : Buscando }</button>
                        </div> </>
                        : " "
                    }

                    {(option === "professor") 
                        ? <>
                        <select className="select"
                         onChange={(e) => setTeacher(e.target.value)}>
                        {listTeachers.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.name}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button onClick={() => sendChoicesToDatabase(teacher)}>{(buttonEnabled) ? Buscar : Buscando }</button>
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