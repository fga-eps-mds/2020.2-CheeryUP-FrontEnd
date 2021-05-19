import React, { Component, Fragment } from "react";
import {opcoesRegiao} from '../../helper/index'
import { Button, Form } from "semantic-ui-react";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import useFormPaciente from "../../components/useFormPaciente";
import "../../style/pages/Cadastro/CadastroPaciente.css";


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

const CadastroPac = ({ SubmitFormPac }) => {
  const { handleSubmit, handleChange, values, handleSelect, errors } = useFormPaciente(
    SubmitFormPac,
    validatePac 
  );

  return (
    <Fragment>
      <NavbarPsic />
      <div className="container-cadPac">

        <div className="form-cadPac">
          <div className="titulo-form">
            <h1 className="titulo">Cadastro de Paciente</h1>
          </div>
          <Form>
            <div className="form-items">
              <div className="primeira-linha">
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    onChange={handleChange}
                    value={values.nome}
                    fluid
                    required
                    name="nome"
                    label="Nome"
                    placeholder="Nome do Paciente"
                  />
                  {errors.nome && <p class="alert-message">{errors.nome}</p>}
                </Form.Group>
              </div>
              <div className="segunda-linha">
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
              <div className="terceira-linha">
                <Form.Group inline required>
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
                {errors.genero && <p class="alert-message">{errors.genero}</p>}
              </div>
              <div className="quarta-linha">
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
              <div className="quinta-linha">
                <Button type="submit" onClick={handleSubmit}>
                  Cadastrar
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default CadastroPac;
