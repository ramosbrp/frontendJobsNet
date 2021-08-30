import React from 'react';
import { useHistory } from 'react-router-dom';




export function Home ()  {
    
    const history = useHistory();
    
    const register = ()=> {
        history.push('/register');
    }

    return(
        <>
           <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">jobsNET</a>                            
                </div>
            </nav>

            <div className="text-center text-white bg-primary masthead">
                <div className="container" style={{ justifyContent:"center" }} >
                    <img className="img-fluid d-block mx-auto mb-5" src="assets/img/portfolio/372-3721808_job-interview.png" alt="interview_img"/>
                    <h1>Jobs NET</h1>
                    {/* <div>
                        <hr className="star-light"/>
                    </div> */}
                    
                    
                </div>
            <h2 className="font-weight-light mb-0">Nós te ajudamos a consuistar o emprego dos seus sonhos</h2>
            </div>

            <section className="text-white bg-primary mb-0" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="lead">Temos as melhores&nbsp; vagas para você&nbsp;</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="lead">Mais de 100.000 currículos cadastrados, mais de 10.000 empresas contratando</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-outline-light text-center text-warning d-xl-flex justify-content-xl-center align-items-xl-start btn-xl"  onClick={register} >
                        <span>Cadastrar Currículo!</span>
                    </button>
                    
                    <small style={{ marginTop:'100px' }} >Copyright ©&nbsp;jobsNET 2021</small>
                </div>
            </section>
       
        </>
    )
}