import React, {Fragment} from 'react'
import useState from 'react'
import '../../style/pages/Login/Login.css';
import useForm from '../../components/useFormSignIn';
import { Card, Form, Button, Checkbox, Image} from 'semantic-ui-react'

function validate(values){
    let errors = {};

    if (!values.email) {
        errors.email = 'É necessário preencher seu e-mail';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'E-mail inválido. Preencha com algum e-mail válido';
    }
    if (!values.senha) {
        errors.senha = 'É necessário preencher uma senha';
    } else if (values.senha.length < 6) {
        errors.senha = 'A senha deve conter mais de 6 caracteres';
    }
    return errors;
};

const Login = ({ SubmitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);

    return (
            <Fragment>

                <div className="form-login-container">
                    <div class="top-login" >
                        <img src="img/logo_word.png" alt="cereja" class="form-img-login" />
                        <a href="/"> 
                        <button className="form-input-btn-home" type="submit">Inicio</button>  
                        </a>
                    </div>

                    <div className="form-login-wrap">
                        <Card className = "form-ui-card" style={{ border: "none", boxShadow: "none" }}>
                        
                            <Card.Content style={{ border: "none", boxShadow: "none" }}>
                                <Image className="logo-img" src='/imagens/logo.png' alt='Logo-login' wrapped ui={false} />
                            </Card.Content>

                            <Card.Content className = "form-title-login" style={{ border: "none", boxShadow: "none" }}>
                                <Card.Header> Login </Card.Header>
                            </Card.Content>
                            
                            <Card.Content> 
                                <Form className ="form-content-input-login">
                                    <Form.Input placeholder="Email" label="Email" required fluid onChange={handleChange} name='email' value={values.email}/>
                                        {errors.email && <p class="p-message">{errors.email}</p>}
                                    <Form.Input placeholder="Senha" label="Senha" required fluid onChange={handleChange} name='senha' value={values.senha}/>
                                        {errors.senha && <p class="p-message">{errors.senha}</p>}
                                        <p><a className="links" href="#">Esqueceu sua senha?</a></p>
                                    <Button type="submit" onClick={handleSubmit}>Login</Button>
                           
                                </Form>
                            </Card.Content>
                            <br />
                            <span className="form-input-help">
                                        Não possui uma conta ?
                                        <a className="links" href="/SignUP">Cadastre-se</a>
                            </span>
                        </Card>
                   
                    </div>

                </div>
            </Fragment>
        
            )
}
   
export default Login;