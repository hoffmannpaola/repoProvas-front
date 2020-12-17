import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";

export default function ConsultarProva() {

    const history = useHistory();

    const [ option, setOption ] = useState(false);
    
    const [ buttonEnabled, setButtonEnabled ] = useState(true);
    const [ listTeachers, setListTeachers ] = useState([]);
    const [ listSubjects, setListSubjects ] = useState([]);
    const [ subject, setSubject ] = useState('');
    const [ teacher, setTeacher ] = useState('');

    useEffect(() => {
        const request = axios.get(`http://localhost:3000/api/disciplinas/get-subjects`);
    
        request.then(({data}) => {
            setListSubjects(data);
            setSubject(data[0].nome)
        });
         request.catch( () => {
             alert("Não foi possivel buscar as disciplinas!")
    
        });
   
    }, []);

    useEffect(() => {
        const request = axios.get(`http://localhost:3000/api/professores/get-teacher`);
    
        request.then(({data}) => {
            setListTeachers(data); 
            setTeacher(data[0].nome);
        });
         request.catch( () => {
             alert("Não foi possivel buscar os professores!")
    
        });

   
    }, []);

    function killingBlanks(name) {
        const formatting = name.split(' ');
        let formatted = '';

        formatting.forEach(element => {
            formatted += element;
        });

        
        console.log(formatted);
        return formatted;
        
    }

    function removeAccent (text) {       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');

        return text;                 
    }
  
    
    function fromIdToName(choice) {

        let toSearch;
        

         (option === "disciplina") 
        ? listSubjects.find((s) => {
            if (s.id === parseInt(choice)) {
                setSubject(s.nome);
                toSearch = killingBlanks(s.nome);
            } 
        })
        : listTeachers.find((s) => {
            if (s.id === parseInt(choice)) {
                setTeacher(s.nome);
                toSearch = killingBlanks(s.nome);
            } 

        })
        
        sendChoicesToDatabase(toSearch);
    }

  
   

    function sendChoicesToDatabase(toSearch) {

        setButtonEnabled(false);

                
        toSearch = removeAccent(toSearch);


        const request = axios.post(`http://localhost:3000/`, {}, {toSearch});
    
        request.then(({data}) => {
            history.push(`/disciplina/${toSearch}`)
        });

        request.catch( () => {
             alert("Não foi possivel realizar esta busca!");
             setButtonEnabled(true);
    
        }); 

    }



    

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
                         onChange={(e) => setSubject(e.target.value)}>
                        {listSubjects.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.nome}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button onClick={() => fromIdToName(subject)}>
                                {(buttonEnabled) ? 'Buscar' : 'Buscando' }</button>
                        </div> </>
                        : " "
                    }

                    {(option === "professor") 
                        ? <>
                        <select className="select"
                         onChange={(e) => setTeacher(e.target.value)}>
                        {listTeachers.map((item) => (
                            <option key={item.id} value={item.id}>
                            {item.nome}
                            </option>
                        ))}
                        </select>
                        <div className="botao"> 
                            <button onClick={() => fromIdToName(teacher)}>{(buttonEnabled) ? 'Buscar' : 'Buscando' }</button>
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