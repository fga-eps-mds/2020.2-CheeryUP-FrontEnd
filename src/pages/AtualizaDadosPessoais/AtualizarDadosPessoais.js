import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaDadosPessoais/AttDadosPessoais.css';
import useFormAttContaPsic from '../../components/useFormAttContaPsic'
import { Redirect } from 'react-router';

const AttDadosPsico = ({SubmitAttForm}) => {
    const { handleSubmit, handleChange, values, handleSelect} = useFormAttContaPsic(SubmitAttForm);
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
                                    <Form.Input 
                                    required
                                    onChange={handleChange}
                                    value={values.nome}
                                    fluid
                                    required
                                    name="nome"
                                    label="Nome"
                                    placeholder="Seu nome"
                                    />
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
                                    label="E-mail"
                                    placeholder="Seu e-mail"
                                    />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input 
                                    required
                                    fluid
                                    required
                                    label="CRP"
                                    placeholder="Seu CRP"
                                    onChange={handleChange}
                                    value={values.nCRP}
                                    name="nCRP"
                                    />
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