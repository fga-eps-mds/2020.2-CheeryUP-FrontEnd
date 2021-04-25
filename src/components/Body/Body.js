import React, {useState} from 'react';
import { Button } from '../Button/Button';
import ButtonCad from '../Button/ButtonCadastro';
import '../../style/pages/HomePage/Body.css';

function Body() {
    return (
        <div className='body-container'>
            <div className='imagem-superior'>
                <img src="/imagens/imagemHome.png" alt="Imagem Logo" width='100%' height='100%'/>
            </div>
            <div className='convite'>
                <h1 className='mensagem'>Faça parte da nossa equipe!</h1>
                <h2 className='submensagem'>
                    Escolha a ferramenta que facilita
                    a gerência de seus pacientes.
                </h2>
            </div>
            <div className='body-botao'>
                <ButtonCad>
                    Faça seu Cadastro
                </ButtonCad>
            </div>
            <div className='rodape'>
                <div className='imagem-rodape'>
                    <img src="/imagens/github.png" alt="Imagem Logo" width='50' height='50'/>
                </div>
            </div>
            
        </div>
        
    )
}

export default Body
