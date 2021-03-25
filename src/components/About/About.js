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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
        </h3>
    )
}

export default About