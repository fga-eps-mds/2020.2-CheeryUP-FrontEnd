import React from 'react';
import Button from '../Button/Button';
import '../../style/pages/HomePage/About.css';

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
            <ul>
                <h1 className='objetivo'>Nosso Objetivo:</h1>
                    <li>
                        <h2>
                            Ajudar a sociedade, principalmente nesse difícil cenário de pandemia.
                        </h2>
                    </li>
                <br></br>
                <br></br>

                <h1 className='objetivo'>Como faremos isso?</h1>
                    <li>
                        <h2>
                            Dando uma atenção especial para saúde mental
                            daqueles afetados pelo contexto epidêmico.
                        </h2>
                    </li>
                <br></br>
                <br></br>

                <h1 className='objetivo'>Quem pode nos ajudar?</h1>
                    <li>
                        <h2>
                            Você, profissional da psicologia, que quer se aliar
                            à nossa luta!
                        </h2>
                    </li>
                <br></br>
                <br></br>

                <h1 className='objetivo'>Sobre a ferramenta:</h1>

                    <li>
                        <h2>
                            A Cheery Up é uma plataforma web que ajudará os psicólogos
                            à monitorar e acompanhar a saúde mental de seus 
                            pacientes.
                        </h2>
                    </li>
                    <li>
                        <h2>
                            Tudo isso com o apoio de Dashboards e Quadros de evolução.
                            Venha experimentar essa incrível ferramenta!
                        </h2>
                    </li>
                <br></br>
                <br></br>
            </ul>
        /*<h3 className='sobre-nos'>
            Cheery Up é um projeto que dá atenção à saúde mental da sociedade, 
            especialmente no contexto da pandemia do Covid-19. O propósito da Cheery Up 
            consiste em uma plataforma web para ajudar profissionais da psicologia
            à monitorar e acompanhar a saúde psicológica de seus pacientes.
            Portanto, convidamos você, psicólogo, a se juntar à nossa luta nesse 
            momento tão delicado no país e no mundo.
        </h3>*/
    )
}

export default About