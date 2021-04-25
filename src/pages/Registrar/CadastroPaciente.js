import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsic';
import '../../style/pages/Cadastro/CadastroPaciente.css';

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

  const opcoesGenero = [
    { key: 1, text: 'Masculino', value: 1 },
    { key: 2, text: 'Feminino', value: 2 },
    { key: 3, text: 'Indefinido', value: 3 },
  ]

class CadastroPac extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Fragment className="container-cadPac">
                <NavbarPsic />

                <div className="dados-psicologo">
                    Nome do Psicólogo <br/>
                    Número do CRP
                </div>


                <div className="form-cadPac">
                    <div className="titulo-form">
                        <h1 className="titulo">Cadastro de Paciente</h1>
                    </div>
                    <Form>
                        <div className="form-items">
                            <div className="primeira-linha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label="Nome" placeholder="Nome do Paciente" />
                                </Form.Group>
                            </div>
                            <div className="segunda-linha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Data de Nascimento' placeholder='dd/mm/aaaa' />
                                    <Form.Input fluid label='CPF' placeholder='CPF do Paciente' />
                                    <Form.Select
                                        fluids
                                        label='Região'
                                        options={opcoesRegiao}
                                        placeholder='Região do Paciente'
                                    />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha">
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
                            <div className="quarta-linha">
                                <Form.TextArea label='Descrição' placeholder='Informações adicionais do paciente...' />
                            </div>
                            <div className="quinta-linha">
                                <Form.Button>Cadastrar</Form.Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default CadastroPac;