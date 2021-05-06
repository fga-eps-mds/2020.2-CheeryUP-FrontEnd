import React, { Component, Fragment } from 'react'
import { Button, Card, Form, Dropdown } from 'semantic-ui-react'
import NavbarPsic from '../../components/Navbar/NavbarPsicologo';
import '../../style/pages/AtualizaSenha/AtualizarSenha.css';


class AttSenha extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Fragment className="container-attSenha">
                <NavbarPsic />
                
                <div className="form-attSenha">
                    <div className="titulo-form-attSenha">
                        <h1 className="titulo-attSenha">Alterar Senha</h1>
                    </div>
                    <Form>
                        
                        <div className="form-items-attSenha">
                            <div className="primeira-linha-attSenha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='' placeholder='Senha atual' />
                                </Form.Group>
                            </div>
                            <div className="segunda-linha-attSenha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='' placeholder='Nova senha' />
                                </Form.Group>
                            </div>
                            <div className="terceira-linha-attSenha">
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='' placeholder='Confirmar nova senha' />
                                </Form.Group>
                            </div>
                            <div className="quarta-linha-attSenha">
                                <a href="/">
                                <button type="button" className="default-buttonConfirm" >Confirmar </button>
                                </a>
                                
                            </div>
                            <div className="quinta-linha-attSenha">
                                <a href="/AtualizarPsicologo">
                                <button type="button" className="default-buttonCancel" >Cancelar </button>
                                </a>
                            </div>
                        </div>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default AttSenha;