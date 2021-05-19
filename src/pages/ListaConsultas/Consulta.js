import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Popup from '../../components/Popup/Popup'
import { Icon } from 'semantic-ui-react'
import axiosInstance from "../../services/apiToken";
import { useParams } from "react-router-dom";

const Consulta = ({ consulta }) => {
  const { psic, cons } = useSelector((state) => state);
  const [buttonPopup, setButtonPopup] = useState(false);
  const { infopaciente } = useParams();

  function handleDados(dado){

    return dado === 1 ? "Melhorou" : dado === 0 ? "Estável" : "Piorou";
  }

  return (
    <tr>
        <td className="table-body-option">{consulta.data}</td>
        <td>
            <button type="button"  onClick={() => setButtonPopup(true)}className="default-button" >
              Dados da consulta 
            <Icon name="arrow right" color="white" />
          </button> 
          </td>
          <td>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Dados da consulta do dia {consulta.data}</h2>
            <p>Produtividade: {handleDados(consulta.produtividade)}</p>
            <p>Problemas pessoais: {handleDados(consulta.problemasPessoais)}</p>
            <p>humor: {handleDados(consulta.humor)}</p>
            <p>Estabilidade de emoções: {handleDados(consulta.estabilidadeDeEmoções)}</p>
            <p>Interesse pela vida: {handleDados(consulta.interessePelaVida)}</p>
            <p>Capacidade de situações dificeis: {handleDados(consulta.capacidadeDeSituaçõesDificeis)}</p>
            <p>Convivio familiar: {handleDados(consulta.convivioFamiliar)}</p>
            <p>Energia sono: {handleDados(consulta.energiaSono)}</p>
            <p>Convivio amigos: {handleDados(consulta.convivioAmigos)}</p>
            <p>Conhecimento doenca: {handleDados(consulta.conhecimentoDoenca)}</p>
            <p>Crise espaço interior: {handleDados(consulta.criseEspaçoInterior)}</p>
            <p>Exposição risco: {handleDados(consulta.exposiçãoRisco)}</p>
            <p>Qualidade sono: {handleDados(consulta.qualidadeSono)}</p>
            <p>Tentativa suicidio: {handleDados(consulta.tentativaSuicidio)}</p>
            <p>Qualidade escuta: {handleDados(consulta.qualidadeEscuta)}</p>
            <p>Maturidade emocional: {handleDados(consulta.maturidadeEmocional)}</p>
            <p>Qualidade nutritiva: {handleDados(consulta.qualidadeNutritiva)}</p>
            <p>Auto medicacao: {handleDados(consulta.autoMedicacao)}</p>
            <p>Intolerancia frustração: {handleDados(consulta.intoleranciaFrustração)}</p>
          </Popup>
        </td>
    </tr>
  );
};

export default Consulta;
