import React from 'react';
import '../../style/pages/HomePage/About.css';
import NavbarAlt from '../Navbar/NavbarAlt'

function About(){
    return(
        <div className='about-content'>
                <div className="upper-content">
                    <section className="who-we-are-content">
                        <h2 className="who-we-are-title">Quem somos?</h2>
                        <p>Cheery Up é um projeto que dá atenção à saúde psicológica da sociedade, 
                        especialmente no contexto da pandemia do Covid-19. O propósito da Cheery Up 
                        consiste em uma plataforma web para ajudar profissionais da psicologia
                        à monitorar e acompanhar a saúde mental de seus pacientes.
                        A plataforma irá oferecer ferramentas para melhor fiscalização do
                        comportamento psicológico dos pacientes, tais como Dashboards e 
                        Quadros de Evolução.</p>
                        <p>A Cheery Up nasceu a partir de uma ideia de uma professora da Universidade
                        de Brasília, Carla Rocha, na qual é desenvolvida uma ideia para ajudar 
                        a sociedade em um momento tão delicado como a Pandemia do Covid-19.
                        Esse movimento foi abraçado por um grupo de estudantes da UnB, que juntos
                        à supervisão da Professora Carla e suas monitoras, está tornando o projeto
                        Cheery Up real. </p>
                        <p>Portanto, aos psicólogos que querem facilitar seu trabalho, 
                        além de ajudar a sociedade, não percam tempo e façam seu Cadastro!</p>
                    </section>      
                </div> 

                <section className="devel-group">
                    <h2>Integrantes</h2>
                    
                    <div className="img-group">
                        <figure className="developer-img-content">
                            <img src="imagens/integrantes/abraao-pic.jpg" alt="Foto Abrãao"/>
                            <figcaption>Abraão Alves</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                        <img src="imagens/integrantes/antonio-pic.jpg" alt="Foto Antônio"/>
                            <figcaption>Antônio Neto</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                        <img src="imagens/integrantes/arthur-pic.jpg" alt="Foto Arthur"/>
                            <figcaption>Arthur Talles</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                            <img src="imagens/integrantes/davi-pic.jpg" alt="Foto Davi"/>
                            <figcaption>Davi Matheus</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                            <img/>
                            <figcaption>Lucas Ferraz</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                            <img/>
                            <figcaption>Natanael Filho</figcaption>
                        </figure>

                        <figure className="developer-img-content">
                            <img/>
                            <figcaption>Nilvan Junior</figcaption>
                        </figure>
                    </div>

                </section>
        </div>
    )
}

export default About