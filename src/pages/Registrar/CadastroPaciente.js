import React, { Component, Fragment } from "react";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import useFormPaciente from "../../components/useFormPaciente";
import "../../style/pages/Cadastro/CadastroPaciente.css";

 function validatePac(values) {
  let errors = {};
  if (!values.nome.trim()) {
    errors.nome = "Preencha o nome";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.nascimento) {
    errors.nascimento = "Preencha o nascimento";
  }

  if (!values.regiao) {
    errors.regiao = "Preencha a região";
  }
  if (!values.nCPF) {
    errors.nCPF = "Preencha o nºCPF";
  } else if (values.nCPF.length < 11) {
    errors.nCPF = "O CPF deve conter 11 caracteres";
  }

  if (!values.genero) {
    errors.genero = "Preencha o gênero";
  } else if(values.genero !== 'M' && values.genero !== 'F' && values.genero !== 'I'){
    errors.genero = "Gênero inválido. Digite M, F ou I."
  }

  if (!values.descricao) {
    errors.descricao = "Forneça uma descrição";
  }
  return errors;
} 

// Opções de Região
const opcoesRegiao = [
  { key: 1, text: "Águas Claras", value: "AC" },
  { key: 2, text: "Taguatinga", value: 2 },
  { key: 3, text: "Vicente Pires", value: 3 },
  { key: 4, text: "Asa Sul", value: 4 },
  { key: 5, text: "Asa Norte", value: 5 },
  { key: 6, text: "Arniqueiras", value: 6 },
  { key: 7, text: "Riacho Fundo", value: 7 },
  { key: 8, text: "Park Way", value: "PW" },
  { key: 9, text: "Guará", value: 9 },
];

// Formulário de Cadastrod de Paciente
const CadastroPac = ({ SubmitFormPac }) => {
  const { handleSubmit, handleChange, values, handleSelect } = useFormPaciente(
    SubmitFormPac
    /* validatePac */
  );
  const [regiaostate, setregiaostate] = useState("");

  return (
    <Fragment>
      <div className="container-cadPac">
        <NavbarPsic />

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
                    label="CPF"
                    placeholder="CPF do Paciente"
                    onChange={handleChange}
                    value={values.nCPF}
                    name="nCPF"
                  />
                  {errors.nCPF && <p class="alert-message">{errors.nCPF}</p>}
                  <Form.Select
                    fluid
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
              <div className="terceira-linha">
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
                    label="Indefinido"
                    value="I"
                    checked={values.genero === "I"}
                    onChange={(e, { value, name }) =>
                      handleSelect(e, value, name)
                    }
                    name="genero"
                  />
                </Form.Group>
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
