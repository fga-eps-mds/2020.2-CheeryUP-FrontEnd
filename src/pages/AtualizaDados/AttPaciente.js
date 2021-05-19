import React, { Component, Fragment } from 'react'
import {opcoesRegiao} from '../../helper/index'
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

//const history = useHistory();

const AttDadosPac = ({SubmitAttForm}) => {
    const { handleSubmit, handleChange, values, handleSelect, errors} = useFormAttPaciente(
      SubmitAttForm, 
      validatePac
      );

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
                      {errors.nome && <p class="alert-message">{errors.nome}</p>}
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
                      {errors.nascimento && <p class="alert-message">{errors.nascimento}</p>}
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
                      {errors.nCPF && <p class="alert-message">{errors.nCPF}</p>}
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
                      {errors.regiao && <p class="alert-message">{errors.regiao}</p>}
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
                    {errors.descricao && <p class="alert-message">{errors.descricao}</p>}
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