import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaDadosPessoais/AttDadosPessoais.css';
import useFormAttContaPsic from '../../components/useFormAttContaPsic'
import { Redirect } from 'react-router';

function validate(values) {
    let errors = {};
    if (!values.nome.trim()) {
      errors.nome = "É necessário preencher seu nome";
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = "É necessário preencher seu e-mail";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mail inválido. Preencha com algum e-mail válido";
    }
    if (!values.nCRP) {
      errors.nCRP = "É necessário preencher nºcrp";
    }
    //if (!values.senha) {
      //errors.senha = "É necessário preencher uma senha";
    //} else if (values.senha.length < 6) {
      //errors.senha = "A senha deve conter mais de 6 caracteres";
    //}
  
    //if (!values.senha2) {
      //errors.senha2 = "É necessário confirmar sua senha";
    //} else if (values.senha2 !== values.senha) {
      //errors.senha2 = "As senhas digitadas não conferem";
    //}
    return errors;
  }

const AttDadosPsico = ({SubmitAttForm}) => {
    const { handleSubmit, handleChange, values, handleSelect,errors} = useFormAttContaPsic(
        SubmitAttForm,
        validate
        );
        return (
            <Fragment className="container-attPsico">
                <NavbarPsic />

                <div className="form-attPsico">
                    <div className="titulo-form-attPsico">
                        <h1 className="titulo-attPsico">Atualizar dados pessoais </h1>
                    </div>
                    <Form>
                        <div className="form-items-attPsico">
                            <div className="primeira-linha-attPsico">
                                <Form.Group widths='equal'>
                                    {/* <Form.Input 
                                    required
                                    onChange={handleChange}
                                    value={values.nome}
                                    fluid
                                    required
                                    name="nome"
                                    label="Nome"
                                    placeholder="Seu nome"
                                    />
                                    {errors.nome && <p class="p-message">{errors.nome}</p>} */}
                                </Form.Group>
                            </div>
                            <div className="segunda-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input  
                                    required
                                    onChange={handleChange}
                                    value={values.email}
                                    fluid
                                    required
                                    name="email"
                                    label="Email"
                                    placeholder="Seu e-mail"
                                    />
                                    {errors.email && <p class="p-message">{errors.email}</p>}
                                </Form.Group>
                            </div>
                            <div className="terceira-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input 
                                    required
                                    fluid
                                    required
                                    label="Número do CRP"
                                    placeholder="Seu CRP"
                                    onChange={handleChange}
                                    value={values.nCRP}
                                    name="nCRP"
                                    />
                                    {errors.nCRP && <p class="p-message">{errors.nCRP}</p>}
                                </Form.Group>
                            </div>
                            <div className="quarta-linha-attPsico">
                                <Form.Group inline>
                                <label> Avaliação da plataforma: </label>
                                <Form.Radio
                                    label='Satisfeito'
                                    value='good'
                                    checked={values.avaliacao === 'good'}
                                    onChange={(e, { value, name }) =>
                                      handleSelect(e, value, name)
                                    }
                                    name="avaliacao"
                                    
                                />
                                <Form.Radio
                                    label='Insatisfeito'
                                    value='bad'
                                    checked={values.avaliacao === 'bad'}
                                    onChange={(e, { value, name }) =>
                                      handleSelect(e, value, name)
                                    }
                                    name="avaliacao"
                                />


                                </Form.Group>
                            </div>

                            <div className="quinta-linha-attPsico">
                                <Button onClick={handleSubmit}> Atualizar </Button>
                            </div>
                        </div>
                        <span className="form-input-attPsico">
                                <a href="/AtualizarSenha">
                                <button type="button" className="default-buttonAlt" >Alterar Senha </button> 
                                </a>
                        </span>

                    </Form>
        
                </div>
            </Fragment>
        );
}

export default AttDadosPsico;