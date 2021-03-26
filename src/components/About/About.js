import React from 'react';
import { Button } from '../Button/Button';
import './About.css';

function About(){
    return(
        <div className='about-container'>
            <div className='imagem-inferior'>
                <img src='/imagens/logoCheery_Up_3_-removebg-preview.png' alt='Logo Cereja'/>
            </div>
            <div className='titulo-about'>
                <h1>Somos a </h1>
                    <img src='/imagens/logoUpper2-removebg-preview.png' alt='Logo Cheery Up'/>
            </div>
            <div className='texto-about'>
                <Texto />
            </div>

        </div>
    )
}

function Texto(){
    return(
        <h3 className='sobre-nos'>
            Cheery Up é um projeto que dá atenção à saúde mental da sociedade, 
            especialmente no contexto da pandemia do Covid-19. O propósito da Cheery Up 
            consiste em uma plataforma web para ajudar profissionais da psicologia
            à monitorar e acompanhar a saúde psicológica de seus pacientes.
            Portanto, convidamos você, psicólogo, a se juntar à nossa luta nesse 
            momento tão delicado no país e no mundo.
        </h3>
    )
}

export default About