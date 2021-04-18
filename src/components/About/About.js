import React from 'react';
import '../../style/pages/HomePage/About.css';
import NavbarAlt from '../Navbar/NavbarAlt'

function About(){
    return(
        <div className='about-container'>
            <div className='aboutInfo'>
                <div className='aboutTitulo'>
                    Quem somos?
                </div>
                <div className='aboutTexto'>
                    Cheery Up é um projeto que dá atenção à saúde psicológica da sociedade, 
                    especialmente no contexto da pandemia do Covid-19. O propósito da Cheery Up 
                    consiste em uma plataforma web para ajudar profissionais da psicologia
                    à monitorar e acompanhar a saúde mental de seus pacientes.
                    A plataforma irá oferecer ferramentas para melhor fiscalização do
                    comportamento psicológico dos pacientes, tais como Dashboards e 
                    Quadros de Evolução.
                    A Cheery Up nasceu a partir de uma ideia de uma professora da Universidade
                    de Brasília, Carla Rocha, na qual é desenvolvida uma ideia para ajudar 
                    a sociedade em um momento tão delicado como a Pandemia do Covid-19.
                    Esse movimento foi abraçado por um grupo de estudantes da UnB, que juntos
                    à supervisão da Professora Carla e suas monitoras, está tornando o projeto
                    Cheery Up real. 
                    Portanto, aos psicólogos que querem facilitar seu trabalho, 
                    além de ajudar a sociedade, não percam tempo e façam seu Cadastro!
                    
                </div>
            </div>
            <div className='aboutImagem'>
                <img src = '/imagens/Cheery Up !.png' alt='Cereja Feliz' width='100%' height='100%'/>
            </div>
        </div>
    )
}

function Texto() {
    return(
        <div>

        </div>
    )
}

export default About