import React, { Component, Fragment } from "react";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import useFormPaciente from "../../components/useFormPaciente";
import "../../style/pages/Cadastro/CadastroPaciente.css";

/* function validatePac(values) {
  let errors = {};
  if (!values.nome.trim()) {
    errors.nome = "É necessário preencher seu nome";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.nascimento) {
    errors.nascimento = "É necessário preencher seu e-mail";
  }

  if (!values.regiao) {
    errors.regiao = "É necessário preencher nºcrp";
  }
  if (!values.nCPF) {
    errors.nCPF = "É necessário preencher uma senha";
  } else if (values.senha.length < 11) {
    errors.nCPF = "A senha deve conter mais de 6 caracteres";
  }

  if (!values.genero) {
    errors.genero = "É necessário confirmar sua senha";
  }

  if (!values.descricao) {
    errors.descricao = "É necessário confirmar sua senha";
  }
  return errors;
} */

// Opções de Região
const opcoesRegiao = [
  { key: 1, text: "Águas Claras", value: 1 },
  { key: 2, text: "Taguatinga", value: 2 },
  { key: 3, text: "Vicente Pires", value: 3 },
  { key: 4, text: "Asa Sul", value: 4 },
  { key: 5, text: "Asa Norte", value: 5 },
  { key: 6, text: "Arniqueiras", value: 6 },
  { key: 7, text: "Riacho Fundo", value: 7 },
  { key: 8, text: "Park Way", value: 8 },
  { key: 9, text: "Guará", value: 9 },
];

// Função para escolha de gênero do paciente
class Genero extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form.Group inline>
        <label>Gênero</label>
        <Form.Radio
          label="Masculino"
          value="masc"
          checked={value === "masc"}
          onChange={this.handleChange}
        />
        <Form.Radio
          label="Feminino"
          value="fem"
          checked={value === "fem"}
          onChange={this.handleChange}
        />
        <Form.Radio
          label="Indefinido"
          value="ind"
          checked={value === "ind"}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }
}

// Formulário de Cadastrod de Paciente
const CadastroPac = ({ SubmitFormPac }) => {
  const { handleSubmit, handleChange, values } = useFormPaciente(
    SubmitFormPac
    /* validatePac */
  );

  return (
    <Fragment>
      <div className="container-cadPac">
        <NavbarPsic />

        <div className="dados-psicologo">
          Nome do Psicólogo <br />
          Número do CRP
        </div>

        <div className="form-cadPac">
          <div className="titulo-form">
            <h1 className="titulo">Cadastro de Paciente</h1>
          </div>
          <Form>
            <div className="form-items">
              <div className="primeira-linha">
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={handleChange}
                    value={values.nome}
                    fluid
                    name="nome"
                    label="Nome"
                    placeholder="Nome do Paciente"
                  />
                </Form.Group>
              </div>
              <div className="segunda-linha">
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Data de Nascimento"
                    placeholder="YYYY-MM-DD"
                    onChange={handleChange}
                    value={values.nascimento}
                    name="nascimento"
                  />
                  <Form.Input
                    fluid
                    label="CPF"
                    placeholder="CPF do Paciente"
                    onChange={handleChange}
                    value={values.nCPF}
                    name="nCPF"
                  />
                  <Form.Select
                    fluids
                    label="Região"
                    options={opcoesRegiao}
                    placeholder="Região do Paciente"
                    onChange={handleChange}
                    value={values.regiao}
                    name="regiao"
                  />
                </Form.Group>
              </div>
              <div className="terceira-linha">
                <Genero />
              </div>
              <div className="quarta-linha">
                <Form.TextArea
                  label="Descrição"
                  placeholder="Informações adicionais do paciente..."
                  onChange={handleChange}
                  value={values.descricao}
                  name="descricao"
                />
              </div>
              <div className="quinta-linha">
                <Button onClick={handleSubmit} type="submit">
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
