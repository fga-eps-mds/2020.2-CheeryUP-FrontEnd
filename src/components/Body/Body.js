
import React, { useState, Fragment } from 'react';
import ButtonCad from '../Button/ButtonCadastro';
import '../../style/pages/HomePage/Body.css';
import '../../style/pages/HomePage/Body.css';
import {Fragment} from 'react'
import Grafico from '../Graficos/GraficoHomePage'
import { useSelector } from "react-redux";


function Body() {
  const { mobile } = useSelector((state) => state);

    return (
        <div className={mobile ? "body-container-mobile" : "body-container"}>
            <div className={mobile ? "imagem-superior-mobile" : "imagem-superior"}>
                <img
                src="/imagens/imagemHome.png"
                alt="Imagem Logo"
                width="100%"
                height="100%"
                />
            </div>
            <div>
                <div className={mobile ? "convite-mobile" : "convite"}>
                <h1 className={mobile ? "mensagem-mobile" : "mensagem"}>
                    Faça parte da nossa equipe!
                </h1>
                <h2 className={mobile ? "submensagem-mobile" : "submensagem"}>
                    Escolha a ferramenta que facilita a gerência de seus pacientes.
                </h2>
                </div>
                <div className={mobile ? "body-botao-mobile" : "body-botao"}>
                <ButtonCad>Faça seu Cadastro</ButtonCad>
                </div>
            </div>
            <div className={ mobile ? "como-funciona-mobile" : "como-funciona" }>
                <div className={ mobile ? "mensagem-como-funciona-mobile" : "mensagem-como-funciona" }>
                    <h2>Como Funciona</h2>
                    <p>Ao criar sua conta você terá acesso há diversas ferramentas para cadastrar, deletar e editar consultas e dados de seus pacientes, e também acesso a diversos graficos para um melhor monitoramento.</p>
                </div>
               <div className={ mobile ? "grafico-mobile" : "grafico"} >
                <Fragment>
                    <Grafico/>
                </Fragment>
               </div>
            </div>
            <div className={ mobile ? "contato-mobile" : "contato"}>
                <h2 className={ mobile ? "contato-titulo-mobile" : "contato-titulo"}>Contato</h2>
                <p className={ mobile ? "mensagem-titulo-mobile" : "mensagem-titulo" }>Caso haja qualquer duvida,problema ou queira colaborar com o projeto basta nos procurar através das plataformas.</p>
                <div className={ mobile ? "imagens-mobile" : "imagens"}>
                    <div className={ mobile ? "telegram-mobile" : "telegram"}>
                        <a href="https://t.me/juninhigh"> <img src="/imagens/telegram_logo.png" /></a>
                        { !mobile && <h2>Telegram</h2> }

                    </div>
                    <div className={ mobile ? "github-mobile" : "github"}>
                        <a href="https://github.com/fga-eps-mds/2020.2-CheeryUP"> <img src="/imagens/github_logo.png" /></a>
                        { !mobile && <h2>Github</h2>}


                    </div>

                </div>
            </div>

        </div>

    )
}

export default Body
