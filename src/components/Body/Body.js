import React, {useState} from 'react';
import { Button } from '../Button/Button';
import ButtonCad from '../Button/ButtonCadastro';
import '../stylesComp/Body.css';

function Body() {
    return (
        <div className='body-container'>
            <div className='imagem-superior'>
                <img src="/imagens/logoCerebro5-Frontal-removebg-preview.png" alt="Imagem Logo"/>
            </div>
            <div>
                <h1 className='msg-convite'>Junte-se à nossa causa</h1>
            </div>
            <div className='body-botao'>
                <ButtonCad>
                    Cadastre-se
                </ButtonCad>
            </div>
        </div>
    )
}

export default Body
