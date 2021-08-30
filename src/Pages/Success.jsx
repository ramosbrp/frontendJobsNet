
import React from 'react';

import { useHistory } from 'react-router-dom';

import styled from 'styled-components';


const Div = styled.div`
    background-image: linear-gradient(to right top, #939eae, #a9b4c1, #c0cad4, #d8e0e8, #f1f7fc);
    height: 100vh;
`;


export function Success () {
    
    const history = useHistory();
    const home = ()=> {
        history.push('/home');
    }
    
    return(
        <>
             <Div className="d-flex masthead">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">Currículo cadastrado</h1><a className="btn btn-primary btn-xl js-scroll-trigger" role="button" href="#about" onClick={home} >Voltar</a>
                </div>
            </Div>
        </>

    )
}

   

