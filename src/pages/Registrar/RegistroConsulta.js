import React, { Component, Fragment, useState } from "react";
import { Radio, Form } from "semantic-ui-react";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import "../../style/pages/Cadastro/RegistroConsulta.css";
import axiosInstance from "../../services/apiToken";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


const RegistroConsulta = ({ paciente }) => {
  const history = useHistory();
  const { infopaciente } = useParams();
  const { psic } = useSelector((state) => state);
  const [produtividade, setprodutividade] = useState("0");
  const [problemasPessoais, setproblemasPessoais] = useState("0");
  const [humor, sethumor] = useState("0");
  const [estabilidadeDeEmocoes, setestabilidadeDeEmocoes] = useState("0");
  const [interessePelaVida, setinteressePelaVida] = useState("0");
  const [capacidadeDeSituacoesDificeis, setcapacidadeDeSituacoesDificeis] =
    useState("0");
  const [convivioFamiliar, setconvivioFamiliar] = useState("0");
  const [energiaSono, setenergiaSono] = useState("0");
  const [convivioAmigos, setconvivioAmigos] = useState("0");
  const [conhecimentoDoenca, setconhecimentoDoenca] = useState("0");
  const [criseEspacoInterior, setcriseEspacoInterior] = useState("0");
  const [exposicaoRisco, setexposicaoRisco] = useState("0");
  const [qualidadeSono, setqualidadeSono] = useState("0");
  const [tentativaSuicidio, settentativaSuicidio] = useState("0");
  const [qualidadeEscuta, setqualidadeEscuta] = useState("0");
  const [maturidadeEmocional, setmaturidadeEmocional] = useState("0");
  const [qualidadeNutritiva, setqualidadeNutritiva] = useState("0");
  const [autoMedicacao, setautoMedicacao] = useState("0");
  const [intoleranciaFrustracao, setintoleranciaFrustracao] = useState("0");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPac = new FormData();
    var data = new Date();
    const dataConsulta =
      data.getFullYear() + "-" + data.getMonth + "-" + data.getDate();
    dataPac.append("data", dataConsulta);
    /* pegar o id do paciente */
    dataPac.append("produtividade", produtividade);
    dataPac.append("problemasPessoais", problemasPessoais);
    dataPac.append("humor", humor);
    dataPac.append("estabilidadeDeEmoções", estabilidadeDeEmocoes);
    dataPac.append("interessePelaVida", interessePelaVida);
    dataPac.append(
      "capacidadeDeSituaçõesDificeis",
      capacidadeDeSituacoesDificeis
    );
    dataPac.append("convivioFamiliar", convivioFamiliar);
    dataPac.append("energiaSono", energiaSono);
    dataPac.append("convivioAmigos", convivioAmigos);
    dataPac.append("conhecimentoDoenca", conhecimentoDoenca);
    dataPac.append("criseEspaçoInterior", criseEspacoInterior);
    dataPac.append("exposiçãoRisco", exposicaoRisco);
    dataPac.append("qualidadeSono", qualidadeSono);
    dataPac.append("tentativaSuicidio", tentativaSuicidio);
    dataPac.append("qualidadeEscuta", qualidadeEscuta);
    dataPac.append("intoleranciaFrustração", intoleranciaFrustracao);
    dataPac.append("qualidadeNutritiva", qualidadeNutritiva);
    dataPac.append("maturidadeEmocional", maturidadeEmocional);
    dataPac.append("autoMedicacao", autoMedicacao);

    await axiosInstance
      .post(
        `api/psicologos/${psic.user.username}/pacientes/${infopaciente}/consultas/`,
        dataPac
      )
      .then((dataPac) => {
        alert("Cadastro efetuado passado!");
        console.log(dataPac);
      })
      .catch((err) => alert("Cadastro de Paciente inválido!"));
      
    history.push('/ListaPacientes')
  };

  return (
    <Fragment>
      <NavbarPsic />

      <Form>
        <h2>Registrar consulta</h2>
        {/*produtividade*/}
        <Form.Field>
          <label>
            Produtividade:
          </label>
          <Radio
            label="Houve melhora"
            name="produtividade"
            value="1"
            checked={produtividade === "1"}
            onChange={(e) => setprodutividade("1")}
          />
          <Radio
            label="Não houve mudança"
            name="produtividade"
            value="0"
            checked={produtividade === "0"}
            onChange={(e) => setprodutividade("0")}
          />
          <Radio
            label="Situação piorou"
            name="produtividade"
            value="-1"
            checked={produtividade === "-1"}
            onChange={(e) => setprodutividade("-1")}
          />
        </Form.Field>

        {/*problemasPessoais*/}
        <Form.Field>
          <label>
            Problemas pessoais:
          </label>
          <Radio
            label="Houve melhora"
            name="problemasPessoais"
            value="1"
            checked={problemasPessoais === "1"}
            onChange={(e) => setproblemasPessoais("1")}
          />
          <Radio
            label="Não houve mudança"
            name="problemasPessoais"
            value="0"
            checked={problemasPessoais === "0"}
            onChange={(e) => setproblemasPessoais("0")}
          />
          <Radio
            label="Situação piorou"
            name="problemasPessoais"
            value="-1"
            checked={problemasPessoais === "-1"}
            onChange={(e) => setproblemasPessoais("-1")}
          />
        </Form.Field>

        {/*humor*/}
        <Form.Field>
          <label>
            Humor:
          </label>
          <Radio
            label="Houve melhora"
            name="humor"
            value="1"
            checked={humor === "1"}
            onChange={(e) => sethumor("1")}
          />
          <Radio
            label="Não houve mudança"
            name="humor"
            value="0"
            checked={humor === "0"}
            onChange={(e) => sethumor("0")}
          />
          <Radio
            label="Situação piorou"
            name="humor"
            value="-1"
            checked={humor === "-1"}
            onChange={(e) => sethumor("-1")}
          />
        </Form.Field>

        {/*estabilidadeDeEmocoes*/}
        <Form.Field>
          <label>
            Estabilidade de emoções:
          </label>
          <Radio
            label="Houve melhora"
            name="estabilidadeDeEmocoes"
            value="1"
            checked={estabilidadeDeEmocoes === "1"}
            onChange={(e) => setestabilidadeDeEmocoes("1")}
          />
          <Radio
            label="Não houve mudança"
            name="estabilidadeDeEmocoes"
            value="0"
            checked={estabilidadeDeEmocoes === "0"}
            onChange={(e) => setestabilidadeDeEmocoes("0")}
          />
          <Radio
            label="Situação piorou"
            name="estabilidadeDeEmocoes"
            value="-1"
            checked={estabilidadeDeEmocoes === "-1"}
            onChange={(e) => setestabilidadeDeEmocoes("-1")}
          />
        </Form.Field>

        {/*interessePelaVida*/}
        <Form.Field>
          <label>
            Interesse pela vida:
          </label>
          <Radio
            label="Houve melhora"
            name="interessePelaVida"
            value="1"
            checked={interessePelaVida === "1"}
            onChange={(e) => setinteressePelaVida("1")}
          />
          <Radio
            label="Não houve mudança"
            name="interessePelaVida"
            value="0"
            checked={interessePelaVida === "0"}
            onChange={(e) => setinteressePelaVida("0")}
          />
          <Radio
            label="Situação piorou"
            name="interessePelaVida"
            value="-1"
            checked={interessePelaVida === "-1"}
            onChange={(e) => setinteressePelaVida("-1")}
          />
        </Form.Field>

        {/*capacidadeDeSituacoesDificeis*/}
        <Form.Field>
          <label>
            Capacidade de situações dificeis:
          </label>
          <Radio
            label="Houve melhora"
            name="capacidadeDeSituacoesDificeis"
            value="1"
            checked={capacidadeDeSituacoesDificeis === "1"}
            onChange={(e) => setcapacidadeDeSituacoesDificeis("1")}
          />
          <Radio
            label="Não houve mudança"
            name="capacidadeDeSituacoesDificeis"
            value="0"
            checked={capacidadeDeSituacoesDificeis === "0"}
            onChange={(e) => setcapacidadeDeSituacoesDificeis("0")}
          />
          <Radio
            label="Situação piorou"
            name="capacidadeDeSituacoesDificeis"
            value="-1"
            checked={capacidadeDeSituacoesDificeis === "-1"}
            onChange={(e) => setcapacidadeDeSituacoesDificeis("-1")}
          />
        </Form.Field>

        {/*convivioFamiliar*/}
        <Form.Field>
          <label>
            Convivio familiar:
          </label>
          <Radio
            label="Houve melhora"
            name="convivioFamiliar"
            value="1"
            checked={convivioFamiliar === "1"}
            onChange={(e) => setconvivioFamiliar("1")}
          />
          <Radio
            label="Não houve mudança"
            name="convivioFamiliar"
            value="0"
            checked={convivioFamiliar === "0"}
            onChange={(e) => setconvivioFamiliar("0")}
          />
          <Radio
            label="Situação piorou"
            name="convivioFamiliar"
            value="-1"
            checked={convivioFamiliar === "-1"}
            onChange={(e) => setconvivioFamiliar("-1")}
          />
        </Form.Field>

        {/*energiaSono*/}
        <Form.Field>
          <label>
            Energia sono:
          </label>
          <Radio
            label="Houve melhora"
            name="energiaSono"
            value="1"
            checked={energiaSono === "1"}
            onChange={(e) => setenergiaSono("1")}
          />
          <Radio
            label="Não houve mudança"
            name="energiaSono"
            value="0"
            checked={energiaSono === "0"}
            onChange={(e) => setenergiaSono("0")}
          />
          <Radio
            label="Situação piorou"
            name="energiaSono"
            value="-1"
            checked={energiaSono === "-1"}
            onChange={(e) => setenergiaSono("-1")}
          />
        </Form.Field>

        {/*convivioAmigos*/}
        <Form.Field>
          <label>
            Convivio amigos:
          </label>
          <Radio
            label="Houve melhora"
            name="convivioAmigos"
            value="1"
            checked={convivioAmigos === "1"}
            onChange={(e) => setconvivioAmigos("1")}
          />
          <Radio
            label="Não houve mudança"
            name="convivioAmigos"
            value="0"
            checked={convivioAmigos === "0"}
            onChange={(e) => setconvivioAmigos("0")}
          />
          <Radio
            label="Situação piorou"
            name="convivioAmigos"
            value="-1"
            checked={convivioAmigos === "-1"}
            onChange={(e) => setconvivioAmigos("-1")}
          />
        </Form.Field>

        {/*conhecimentoDoenca*/}
        <Form.Field>
          <label>
            Conhecimento doenca: 
          </label>
          <Radio
            label="Houve melhora"
            name="conhecimentoDoenca"
            value="1"
            checked={conhecimentoDoenca === "1"}
            onChange={(e) => setconhecimentoDoenca("1")}
          />
          <Radio
            label="Não houve mudança"
            name="conhecimentoDoenca"
            value="0"
            checked={conhecimentoDoenca === "0"}
            onChange={(e) => setconhecimentoDoenca("0")}
          />
          <Radio
            label="Situação piorou"
            name="conhecimentoDoenca"
            value="-1"
            checked={conhecimentoDoenca === "-1"}
            onChange={(e) => setconhecimentoDoenca("-1")}
          />
        </Form.Field>

        {/*criseEspacoInterior*/}
        <Form.Field>
          <label>
            Crise espaço interior: 
          </label>
          <Radio
            label="Houve melhora"
            name="criseEspacoInterior"
            value="1"
            checked={criseEspacoInterior === "1"}
            onChange={(e) => setcriseEspacoInterior("1")}
          />
          <Radio
            label="Não houve mudança"
            name="criseEspacoInterior"
            value="0"
            checked={criseEspacoInterior === "0"}
            onChange={(e) => setcriseEspacoInterior("0")}
          />
          <Radio
            label="Situação piorou"
            name="criseEspacoInterior"
            value="-1"
            checked={criseEspacoInterior === "-1"}
            onChange={(e) => setcriseEspacoInterior("-1")}
          />
        </Form.Field>

        {/*exposiçãoRisco*/}
        <Form.Field>
          <label>
            Exposição risco:
          </label>
          <Radio
            label="Houve melhora"
            name="exposicaoRisco"
            value="1"
            checked={exposicaoRisco === "1"}
            onChange={(e) => setexposicaoRisco("1")}
          />
          <Radio
            label="Não houve mudança"
            name="exposicaoRisco"
            value="0"
            checked={exposicaoRisco === "0"}
            onChange={(e) => setexposicaoRisco("0")}
          />
          <Radio
            label="Situação piorou"
            name="exposicaoRisco"
            value="-1"
            checked={exposicaoRisco === "-1"}
            onChange={(e) => setexposicaoRisco("-1")}
          />
        </Form.Field>

        {/*qualidadeSono*/}
        <Form.Field>
          <label>
            Qualidade sono:
          </label>
          <Radio
            label="Houve melhora"
            name="qualidadeSono"
            value="1"
            checked={qualidadeSono === "1"}
            onChange={(e) => setqualidadeSono("1")}
          />
          <Radio
            label="Não houve mudança"
            name="qualidadeSono"
            value="0"
            checked={qualidadeSono === "0"}
            onChange={(e) => setqualidadeSono("0")}
          />
          <Radio
            label="Situação piorou"
            name="qualidadeSono"
            value="-1"
            checked={qualidadeSono === "-1"}
            onChange={(e) => setqualidadeSono("-1")}
          />
        </Form.Field>

        {/*tentativaSuicidio*/}
        <Form.Field>
          <label>
            Tentativa suicidio:
          </label>
          <Radio
            label="Houve melhora"
            name="tentativaSuicidio"
            value="1"
            checked={tentativaSuicidio === "1"}
            onChange={(e) => settentativaSuicidio("1")}
          />
          <Radio
            label="Não houve mudança"
            name="tentativaSuicidio"
            value="0"
            checked={tentativaSuicidio === "0"}
            onChange={(e) => settentativaSuicidio("0")}
          />
          <Radio
            label="Situação piorou"
            name="tentativaSuicidio"
            value="-1"
            checked={tentativaSuicidio === "-1"}
            onChange={(e) => settentativaSuicidio("-1")}
          />
        </Form.Field>

        {/*qualidadeEscuta*/}
        <Form.Field>
          <label>
            Qualidade escuta: 
          </label>
          <Radio
            label="Houve melhora"
            name="qualidadeEscuta"
            value="1"
            checked={qualidadeEscuta === "1"}
            onChange={(e) => setqualidadeEscuta("1")}
          />
          <Radio
            label="Não houve mudança"
            name="qualidadeEscuta"
            value="0"
            checked={qualidadeEscuta === "0"}
            onChange={(e) => setqualidadeEscuta("0")}
          />
          <Radio
            label="Situação piorou"
            name="qualidadeEscuta"
            value="-1"
            checked={qualidadeEscuta === "-1"}
            onChange={(e) => setqualidadeEscuta("-1")}
          />
        </Form.Field>

        {/*maturidadeEmocional*/}
        <Form.Field>
          <label>
            Maturidade emocional: 
          </label>
          <Radio
            label="Houve melhora"
            name="maturidadeEmocional"
            value="1"
            checked={maturidadeEmocional === "1"}
            onChange={(e) => setmaturidadeEmocional("1")}
          />
          <Radio
            label="Não houve mudança"
            name="maturidadeEmocional"
            value="0"
            checked={maturidadeEmocional === "0"}
            onChange={(e) => setmaturidadeEmocional("0")}
          />
          <Radio
            label="Situação piorou"
            name="maturidadeEmocional"
            value="-1"
            checked={maturidadeEmocional === "-1"}
            onChange={(e) => setmaturidadeEmocional("-1")}
          />
        </Form.Field>

        {/*qualidadeNutritiva*/}
        <Form.Field>
          <label>
            Qualidade nutritiva: 
          </label>
          <Radio
            label="Houve melhora"
            name="qualidadeNutritiva"
            value="1"
            checked={qualidadeNutritiva === "1"}
            onChange={(e) => setqualidadeNutritiva("1")}
          />
          <Radio
            label="Não houve mudança"
            name="qualidadeNutritiva"
            value="0"
            checked={qualidadeNutritiva === "0"}
            onChange={(e) => setqualidadeNutritiva("0")}
          />
          <Radio
            label="Situação piorou"
            name="qualidadeNutritiva"
            value="-1"
            checked={qualidadeNutritiva === "-1"}
            onChange={(e) => setqualidadeNutritiva("-1")}
          />
        </Form.Field>

        {/*autoMedicacao*/}
        <Form.Field>
          <label>
            Auto medicação: 
          </label>
          <Radio
            label="Houve melhora"
            name="autoMedicacao"
            value="1"
            checked={autoMedicacao === "1"}
            onChange={(e) => setautoMedicacao("1")}
          />
          <Radio
            label="Não houve mudança"
            name="autoMedicacao"
            value="0"
            checked={autoMedicacao === "0"}
            onChange={(e) => setautoMedicacao("0")}
          />
          <Radio
            label="Situação piorou"
            name="autoMedicacao"
            value="-1"
            checked={autoMedicacao === "-1"}
            onChange={(e) => setautoMedicacao("-1")}
          />
        </Form.Field>

        {/*intoleranciaFrustracao*/}
        <Form.Field>
          <label>
            Intolerancia a frustração:
          </label>
          <Radio
            label="Houve melhora"
            name="intoleranciaFrustracao"
            value="1"
            checked={intoleranciaFrustracao === "1"}
            onChange={(e) => setintoleranciaFrustracao("1")}
          />
          <Radio
            label="Não houve mudança"
            name="intoleranciaFrustracao"
            value="0"
            checked={intoleranciaFrustracao === "0"}
            onChange={(e) => setintoleranciaFrustracao("0")}
          />
          <Radio
            label="Situação piorou"
            name="intoleranciaFrustracao"
            value="-1"
            checked={intoleranciaFrustracao === "-1"}
            onChange={(e) => setintoleranciaFrustracao("-1")}
          />
        </Form.Field>
        <Form.Button onClick={handleSubmit} type="submit">
          Registrar
        </Form.Button>
      </Form>
    </Fragment>
  );
};

export default RegistroConsulta;
