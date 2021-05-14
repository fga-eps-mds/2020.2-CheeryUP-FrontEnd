import React, {useState} from 'react';
import { Button } from '../Button/Button';
import ButtonCad from '../Button/ButtonCadastro';
import '../../style/pages/HomePage/Body.css';
import GraficoProdutividade from '../Graficos/GraficoProdutividade';

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
            <div className="como-funciona">
                <h2>Como Funciona</h2>
                <p>Ao criar sua conta você terá acesso há diversas ferramentas para cadastrar, deletar e editar consultas e dados de seus pacientes,
                e também acesso a diversos graficos para um melhor monitoramento.
                </p>
            </div>
           
            
        </div>
        
    )
}

export default Body
