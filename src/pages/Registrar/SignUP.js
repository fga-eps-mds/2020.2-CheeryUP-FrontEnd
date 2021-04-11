import React, {Fragment} from 'react'
import '../../style/pages/Cadastro/SignUP.css';
import useForm from '../../components/useForm';
import { Card, Form, Button } from "semantic-ui-react"

function validate(values){
    let errors = {};
    if (!values.nome.trim()) {
        errors.nome = 'É necessário preencher seu nome';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'É necessário preencher seu e-mail';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'E-mail inválido. Preencha com algum e-mail válido';
    }
    if (!values.nCRP) {
        errors.nCRP = 'É necessário preencher nºcrp';
    }
    if (!values.senha) {
        errors.senha = 'É necessário preencher uma senha';
    } else if (values.senha.length < 6) {
        errors.senha = 'A senha deve conter mais de 6 caracteres';
    }

    if (!values.senha2) {
        errors.senha2 = 'É necessário confirmar sua senha';
    } else if (values.senha2 !== values.senha) {
        errors.senha2 = 'As senhas digitadas não conferem';
    }
    return errors;
};

const SignUP = ({ SubmitForm }) => 
{
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);

    return (
        <Fragment>
            
            <div className="form-signup-container">
                <div class="top-signup">
                    <h1 className="text-top"> CheeryUP </h1>
                    <a href="http://localhost:3000/"> 
                    <button className="form-input-btn-home" type="submit">Inicio</button>  
                    </a>
                </div>
                
                <div className="form-signup-wrap">
                    <Card className="form-card" style={{ border: "none", boxShadow: "none" }}>
                        <Card.Content className="form-title"> 
                            <Card.Header> Cadastre-se </Card.Header>
                        </Card.Content>
                        <Card.Content> 
                            <Form className="form-content-input">
                                <Form.Input placeholder="Digite seu nome" label="Nome" required fluid onChange={handleChange} name='nome' value={values.nome}  /> 
                                    {errors.nome && <p class="p-message">{errors.nome}</p>}
                                <Form.Input placeholder="Digite seu e-mail" label="Email" required fluid onChange={handleChange} name='email' value={values.email} /> 
                                    {errors.email && <p class="p-message">{errors.email}</p>}
                                <Form.Input placeholder="Digite o número do CRP" label="nCRP" required fluid onChange={handleChange} name='nCRP' value={values.nCRP} /> 
                                    {errors.nCRP && <p class="p-message">{errors.nCRP}</p>}
                                <Form.Input placeholder="Digite sua senha" label="Senha" type="password" required fluid onChange={handleChange} name='senha' value={values.senha} /> 
                                    {errors.senha && <p class="p-message">{errors.senha}</p>}
                                <Form.Input placeholder="Confirme sua senha" label="Confirmar senha" type="password" required fluid onChange={handleChange} name='senha2' value={values.senha2} /> 
                                    {errors.senha2 && <p class="p-message">{errors.senha2}</p>}
                                <Button type="submit" onClick={handleSubmit}>Cadastrar </Button>
                                <span className="form-input-loguin">
                                    Já possui cadastro ? Faça o 
                                    <a  href="http://localhost:3000/Login"> Login. </a>
                                </span>
                            </Form>
                        </Card.Content>
                    </Card>
                    
                    <div class="bottom-signup">
                        <h1> CheeryUP </h1>
                    </div>
                
                </div>               
            
            </div>
        
        </Fragment>
        )
}
export default SignUP;
