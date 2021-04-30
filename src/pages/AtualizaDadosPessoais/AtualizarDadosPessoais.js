import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsic';
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
                                <label>Gênero</label>
                                <Form.Radio
                                    label='Masculino'
                                    value='masc'
                                    checked={value === 'masc'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='Feminino'
                                    value='fem'
                                    checked={value === 'fem'}
                                    onChange={this.handleChange}
                                />
                                <Form.Radio
                                    label='Indefinido'
                                    value='ind'
                                    checked={value === 'ind'}
                                    onChange={this.handleChange}
                                />


                                </Form.Group>
                            </div>

                            <div className="quinta-linha-attPsico">
                                <Form.Button>Atualizar</Form.Button>
                            </div>
                        </div>
                        <span className="form-input-attPsico">
                                <button type="button" className="default-buttonAlt" >Alterar Senha </button> 
                                <a href="/AtualizarSenha"> clique aqui (consertar)</a>
                        </span>

                    </Form>
        
                </div>
            </Fragment>
        )
    }
}

export default AttDadosPsico;