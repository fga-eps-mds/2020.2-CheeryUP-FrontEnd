import React from 'react';
import ButtonCad from '../Button/ButtonCadastro';
import '../../style/pages/HomePage/Body.css';
import {Fragment} from 'react'
import Grafico from '../Graficos/GraficoHomePage'
function Body() {
    return (
        <div className='body-container'>
            <div className='imagem-superior'>
                <img src="/imagens/imagemHome.png" alt="Imagem Logo" width='100%' height='100%' />
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
                <div className="mensagem-como-funciona">
                    <h2>Como Funciona</h2>
                <p>Ao criar sua conta você terá acesso há diversas ferramentas para cadastrar, deletar e editar consultas e dados de seus pacientes,
                e também acesso a diversos graficos para um melhor monitoramento.</p>
                </div>
               <div className="grafico">
                <Fragment>
                    <Grafico/>
                </Fragment>
               </div>
            </div>
            <div className="contato">
                <h2 className="contato-titulo">Contato</h2>
                <p className="mensagem-titulo">Caso haja qualquer duvida,problema ou queira colaborar com o projeto <br/>basta nos procurar através das plataformas.</p>
                <div className="imagens">
                    <div className="telegram">
                        <a href="https://t.me/juninhigh"> <img src="/imagens/telegram_logo.png" alt='imagem'/></a>
                        <h2>Telegram</h2>

                    </div>
                    <div className="github">
                        <a href="https://github.com/fga-eps-mds/2020.2-CheeryUP"> <img src="/imagens/github_logo.png" alt='imagem'/></a>
                        <h2>Guthub</h2>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Body
