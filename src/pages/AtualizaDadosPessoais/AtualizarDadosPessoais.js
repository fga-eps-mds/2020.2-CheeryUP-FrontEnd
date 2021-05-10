import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaDadosPessoais/AttDadosPessoais.css';
import { Redirect } from 'react-router';


class AttDadosPsico extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Fragment className="container-attPsico">
                <NavbarPsic />

                <div className="dados-psicologo-attPsico">
                    Nome do Psicólogo <br/>
                    Número do CRP
                </div>


                <div className="form-attPsico">
                    <div className="titulo-form-attPsico">
                        <h1 className="titulo-attPsico">Atualizar dados pessoais </h1>
                    </div>
                    <Form>
                        <div className="form-items-attPsico">
                            <div className="primeira-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label="Nome" placeholder="Nome" />
                                </Form.Group>
                            </div>
                            <div className="segunda-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='E-mail' placeholder='E-mail' />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha-attPsico">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='CRP' placeholder='CRP' />
                                </Form.Group>
                            </div>
                            <div className="quarta-linha-attPsico">
                                <Form.Group inline>
                                <label> Avaliação da plataforma: </label>
                                <Form.Radio
                                    label='Satisfeito'
                                    value='good'
                                    checked={value === 'good'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='Insatisfeito'
                                    value='bad'
                                    checked={value === 'bad'}
                                    onChange={this.handleChange}
                                />


                                </Form.Group>
                            </div>

                            <div className="quinta-linha-attPsico">
                                <a href="/">
                                <button type="button" className="default-buttonAtt" >Atualizar </button> 
                                </a>
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
        )
    }
}

export default AttDadosPsico;