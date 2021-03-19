import React, {useState} from 'react';
import { Button } from '../Button';
import './Body.css';

function Body() {
    return (
        <div className='body-container'>
            <img src="/imagens/logoCerebro5-Frontal-removebg-preview.png" alt="Imagem Logo"/>
            <div>
                <h1 className='msg-convite'>Junte-se à nossa causa</h1>
            </div>
            <div className='body-botao'>
                <Button
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Cadastre-se
                </Button>
            </div>
        </div>
    )
}

export default Body
