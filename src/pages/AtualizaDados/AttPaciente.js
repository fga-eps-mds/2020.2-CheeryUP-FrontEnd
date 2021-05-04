import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaDados/AttPaciente.css';

const opcoesRegiao = [
    { key: 1, text: 'Águas Claras', value: 1 },
    { key: 2, text: 'Taguatinga', value: 2 },
    { key: 3, text: 'Vicente Pires', value: 3 },
    { key: 4, text: 'Asa Sul', value: 4 },
    { key: 5, text: 'Asa Norte', value: 5 },
    { key: 6, text: 'Arniqueiras', value: 6 },
    { key: 7, text: 'Riacho Fundo', value: 7 },
    { key: 8, text: 'Park Way', value: 8 },
    { key: 9, text: 'Guará', value: 9 },
  ]

class AttDadosPac extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Fragment className="container-attPac">
                <NavbarPsic />

                <div className="dados-psicologo-attPac">
                    Nome do Psicólogo <br/>
                    Número do CRP
                </div>


                <div className="form-attPac">
                    <div className="titulo-form-attPac">
                        <h1 className="titulo-att">Atualizar dados - Paciente</h1>
                    </div>
                    <Form>
                        <div className="form-items-attPac">
                            <div className="primeira-linha-att">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label="Nome" placeholder="Paciente x" />
                                </Form.Group>
                            </div>
                            <div className="segunda-linha-att">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Data de Nascimento' placeholder='11/11/2001' />
                                    <Form.Input fluid label='CPF' placeholder='12345678910' />
                                    <Form.Select
                                        fluids
                                        label='Região'
                                        options={opcoesRegiao}
                                        placeholder='Local X'
                                    />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha-att">
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
                            <div className="quarta-linha-att">
                                <Form.TextArea label='Descrição' placeholder='Paciente apresenta um quadro de...' />
                            </div>
                            <div className="quinta-linha-att">
                                <Form.Button>Atualizar</Form.Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default AttDadosPac;