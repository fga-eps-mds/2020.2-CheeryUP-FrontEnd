import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaDados/AttPaciente.css';
import useFormAttPaciente from '../../components/useFormAttPaciente'

function validatePac(values) {
  let errors = {};
  if (!values.nome.trim()) {
    errors.nome = "Forneça o nome";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.nascimento) {
    errors.nascimento = "Forneça o nascimento";
  }

  if (!values.regiao) {
    errors.regiao = "Forneça a região";
  }
  if (!values.nCPF) {
    errors.nCPF = "Forneça o nºCPF";
  } else if (values.nCPF.length !== 11) {
    errors.nCPF = "O CPF deve conter 11 caracteres";
  }

  if (!values.genero) {
    errors.genero = "Forneça o gênero";
  }

  if (!values.descricao) {
    errors.descricao = "Forneça uma descrição";
  }
  return errors;
}

const opcoesRegiao = [
  { key: 1, text: "Águas Claras", value: "AC" },
  { key: 2, text: "Asa Sul", value: "AS" },
  { key: 3, text: "Asa Norte", value: "AN" },
  { key: 4, text: "Arniqueiras", value: "AR" },
  { key: 5, text: "Brazlândia", value: "BZ" },
  { key: 6, text: "Candangolândia", value: "CA" },
  { key: 7, text: "Ceilândia", value: "CI" },
  { key: 8, text: "Cruzeiro", value: "CZ" },
  { key: 9, text: "Fercal", value: "FE" },
  { key: 10, text: "Gama", value: "GA" },
  { key: 11, text: "Guará", value: "GR" },
  { key: 12, text: "Itapoã", value: "IT" },
  { key: 13, text: "Jardim Botânico", value: "JB" },
  { key: 14, text: "Lago Sul", value: "LS" },
  { key: 15, text: "Lago Norte", value: "LN" },
  { key: 16, text: "Núcleo Bandeirante", value: "NB" },
  { key: 17, text: "Park Way", value: "PW" },
  { key: 18, text: "Paranoá", value: "PA" },
  { key: 19, text: "Planaltina", value: "PL" },
  { key: 20, text: "Plano Piloto", value: "PP" },
  { key: 21, text: "Recanto das Emas", value: "RE" },
  { key: 22, text: "Riacho Fundo", value: "RF" },
  { key: 23, text: "Riacho Fundo 2", value: "RFII" },
  { key: 24, text: "Samambaia", value: "SA" },
  { key: 25, text: "Santa Maria", value: "SM" },
  { key: 26, text: "São Sebastião", value: "SB" },
  { key: 27, text: "SCIA", value: "SCIA" },
  { key: 28, text: "SIA", value: "SI" },
  { key: 29, text: "Sobradinho", value: "SO" },
  { key: 30, text: "Sobradinho 2", value: "SOII" },
  { key: 31, text: "Sol Nascente", value: "SN" },
  { key: 32, text: "Sudoeste", value: "SD" },
  { key: 33, text: "Taguatinga", value: "TA" },
  { key: 34, text: "Varjão", value: "VA" },
  { key: 35, text: "Vicente Pires", value: "VP" },
  { key: 36, text: "Entre Outros", value: "EO" },
];

//const history = useHistory();

const AttDadosPac = ({SubmitAttForm}) => {
    const { handleSubmit, handleChange, values, handleSelect} = useFormAttPaciente(SubmitAttForm);

        return (
          <Fragment className="container-attPac">
            <NavbarPsic />

            <div className="form-attPac">
              <div className="titulo-form-attPac">
                <h1 className="titulo-att">Atualizar dados - Paciente</h1>
              </div>
              <Form>
                <div className="form-items-attPac">
                  <div className="primeira-linha-att">
                    <Form.Group widths="equal">
                      <Form.Input
                        required
                        onChange={handleChange}
                        value={values.nome}
                        fluid
                        required
                        name="nome"
                        label="Nome"
                        placeholder="Nome do paciente"
                      />
                    </Form.Group>
                  </div>
                  <div className="segunda-linha-att">
                    <Form.Group widths="equal">
                      <Form.Input
                        required
                        fluid
                        required
                        label="Data de Nascimento"
                        placeholder="YYYY-MM-DD"
                        onChange={handleChange}
                        value={values.nascimento}
                        name="nascimento"
                      />
                      <Form.Input
                        required
                        fluid
                        required
                        label="CPF"
                        placeholder="CPF do Paciente"
                        onChange={handleChange}
                        value={values.nCPF}
                        name="nCPF"
                      />
                      <Form.Select
                        fluid
                        required
                        label="Região"
                        options={opcoesRegiao}
                        placeholder="Região do Paciente"
                        onChange={(e, { value, name }) =>
                          handleSelect(e, value, name)
                        }
                        name="regiao"
                        value={values.regiao}
                      />
                    </Form.Group>
                  </div>
                  <div className="terceira-linha-att">
                    <Form.Group inline>
                      <label>Gênero</label>
                      <Form.Radio
                        label="Masculino"
                        value="M"
                        checked={values.genero === "M"}
                        onChange={(e, { value, name }) =>
                          handleSelect(e, value, name)
                        }
                        name="genero"
                      />
                      <Form.Radio
                        label="Feminino"
                        value="F"
                        checked={values.genero === "F"}
                        onChange={(e, { value, name }) =>
                          handleSelect(e, value, name)
                        }
                        name="genero"
                      />
                      <Form.Radio
                        label="Outro"
                        value="P"
                        checked={values.genero === "P"}
                        onChange={(e, { value, name }) =>
                          handleSelect(e, value, name)
                        }
                        name="genero"
                      />
                    </Form.Group>
                  </div>
                  <div className="quarta-linha-att">
                    <Form.TextArea
                      required
                      label="Descrição"
                      placeholder="Informações adicionais do paciente..."
                      onChange={handleChange}
                      value={values.descricao}
                      name="descricao"
                    />
                  </div>
                  <div className="quinta-linha-att">
                  
                      <Button onClick={handleSubmit}> Atualizar </Button>
                    
                  </div>
                </div>
              </Form>
            </div>
          </Fragment>
        );
}

export default AttDadosPac;