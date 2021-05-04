import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import useFormPaciente from '../../components/useFormPaciente';
import '../../style/pages/Cadastro/CadastroPaciente.css';

  function validatePac(values){
    let errors = {};
    if (!values.nomePac.trim()) {
        errors.nomePac = 'É necessário preencher o nome';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
      
    if (!values.nascimento) {
        errors.nascimento = 'É necessário fornecer a data de nascimento';
    }
    
    if (!values.regiao) {
        errors.regiao = 'É necessário fornecer a região';
    }
    if (!values.nCPF) {
        errors.nCPF = 'É necessário preencher o CPF';
    } else if (values.nCPF.length != 11) {
        errors.nCPF = 'O CPF deve conter 11 caracteres';
    }

    if (!values.generoPac) {
        errors.generoPac = 'É necessário fornecer o gênero';
    }

    if (!values.descricao) {
        errors.descricao = 'É necessário fornecer uma descrição';
    }
    return errors;
};

// Opções de Região
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

// Função para escolha de gênero do paciente  
class Genero extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        const { value } = this.state
        return(
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
        )
    }
}

// Formulário de Cadastrod de Paciente
const CadastroPac = ({ SubmitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useFormPaciente(SubmitForm, validatePac);

    return(
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
                                    <Form.Input fluid label="Nome" placeholder="Nome do Paciente" required fluid onChance={handleChange} name='nomePac' value={values.nomePac}/>
                                    {errors.nomePac && <p class="alert-paciente-msg">{errors.nomePac}</p>}
                                </Form.Group>
                            </div>
                            <div className="segunda-linha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Data de Nascimento' placeholder='dd/mm/aaaa' required fluid onChance={handleChange} name='nascimento' value={values.nascimento}/>
                                    {errors.nascimento && <p class="alert-paciente-msg">{errors.nascimento}</p>}
                                    <Form.Input fluid label='CPF' placeholder='CPF do Paciente' required fluid onChance={handleChange} name='nCPF' value={values.nCPF}/>
                                    {errors.nCPF && <p class="alert-paciente-msg">{errors.nCPF}</p>}
                                    <Form.Select
                                        fluids
                                        label='Região'
                                        options={opcoesRegiao}
                                        placeholder='Região do Paciente'
                                    />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha">
                                <Genero />
                            </div>
                            <div className="quarta-linha">
                                <Form.TextArea label='Descrição' placeholder='Informações adicionais do paciente...' />
                            </div>
                            <div className="quinta-linha">
                                <Form.Button type="submit" onClick={handleSubmit}>Cadastrar</Form.Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Fragment>
    )
}

export default CadastroPac;