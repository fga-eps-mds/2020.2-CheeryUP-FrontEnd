import React, {Fragment} from 'react'
import '../../style/pages/Login/Login.css';
import useFormSignIn from '../../components/useFormSignIn';
import { Card, Form, Button} from 'semantic-ui-react'

function validate(values){
    let errors = {};
    if (!values.username.trim()) {
        errors.username = 'É necessário preencher seu nome';
    }
    if (!values.senha) {
        errors.senha = 'É necessário preencher uma senha';
    } else if (values.senha.length < 6) {
        errors.senha = 'A senha deve conter mais de 6 caracteres';
    }
    return errors;
};

const Login = ({ SubmitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useFormSignIn(SubmitForm, validate);

    return (
            <Fragment>
                <div className="container-login"> 
                        <div className="form-login-container">
                            <div className="top-login">
                                <a href="/"> 
                                    <img className="top-login-logo" src="img/logo_word.png" alt="logo CheeryUp" />
                                </a>
                                <a href="/"> 
                                    <label className="top-login-navbar-option">Início</label>
                                </a>
                            </div>

                        <div className="form-login-wrap">
                            <Card className = "form-card-login" style={{ border: "none", boxShadow: "none" }}>

                                <Card.Content className = "form-title-login" style={{ border: "none", boxShadow: "none" }}>
                                    <Card.Header> Login </Card.Header>
                                </Card.Content>
                                
                                <Card.Content> 
                                    <Form className ="form-content-input-login">
                                        <Form.Input placeholder="Username" label="Username" required fluid onChange={handleChange} name='username' value={values.username}/>
                                            {errors.nome && <p class="p-message">{errors.username}</p>}
                                        <Form.Input placeholder="Senha" label="Senha" required fluid onChange={handleChange} type="password" name='senha' value={values.senha}/>
                                            {errors.senha && <p class="p-message">{errors.senha}</p>}
                                            <p><a className="links" href="/RecuperarSenha">Esqueceu sua senha?</a></p>
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
                
                    <div className="side-image-login">
                        <img src="img/wallpaper_login.png" alt="Wallpaper login"/>
                    </div> 
                
                </div>
            </Fragment>
        
            )
}
export default Login;