import React, {Fragment} from 'react'
import '../../style/pages/Cadastro/SignUP.css';
import useForm from '../../components/useForm';
import { useHistory, Link } from 'react-router-dom';
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



const SignUP = ({ SubmitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);



    return (
        <Fragment>
            <div className="form-signup-container">

                <div class="top-signup">
                    <img src="img/logo_word.png" alt="cereja" class="form-img" />
                    <a href="http://localhost:3000/"> 
                    <button className="form-input-btn-home" type="submit">Inicio</button>  
                    </a>
                </div>
                
                <div className="form-signup-wrap">
                    <Card className="form-ui-card">
                        <Card.Content className="form-title"> 
                            <Card.Header> Cadastro de Psicólogo </Card.Header>
                        </Card.Content>
                        <Card.Content> 
                            <Form className="form-content-input">
                                <Form.Input placeholder="Nome" label="Nome" required fluid onChange={handleChange} name='nome' value={values.nome}  /> 
                                    {errors.nome && <p class="p-message">{errors.nome}</p>}
                                <Form.Input placeholder="Email" label="Email" required fluid onChange={handleChange} name='email' value={values.email} /> 
                                    {errors.email && <p class="p-message">{errors.email}</p>}
                                <Form.Input placeholder="nCRP" label="nCRP" required fluid onChange={handleChange} name='nCRP' value={values.nCRP} /> 
                                    {errors.nCRP && <p class="p-message">{errors.nCRP}</p>}
                                <Form.Input placeholder="Senha" label="Senha" type="password" required fluid onChange={handleChange} name='senha' value={values.senha} /> 
                                    {errors.senha && <p class="p-message">{errors.senha}</p>}
                                <Form.Input placeholder="Confirmar senha" label="Confirmar senha" type="password" required fluid onChange={handleChange} name='senha2' value={values.senha2} /> 
                                    {errors.senha2 && <p class="p-message">{errors.senha2}</p>}
                                <Button type="submit" onClick={handleSubmit}>Cadastrar </Button>
                                <span className="form-input-loguin">
                                    Já possui cadastro ? Faça o 
                                    <a  href="http://localhost:3000/Login"> Login. </a>
                                </span>
                            </Form>
                        </Card.Content>
                    </Card>
                </div>
            
            </div>
{/*             

<div className="form-container">
<div></div>

{/*  <div className="form-content-left">
<img src="img/cereja.jpeg" alt="cereja" className="form-img" />
</div>
*/}
    {/*            

<div className="form-content-main">
<form className='form' onSubmit={handleSubmit}>
<h1> Cadastro de Psicólogo </h1>
                        <div className="form-inputs">
                            <label htmlFor="nome" className="form-label">Nome:</label>
                            <input
                                id='nome'
                                type="text"
                                name='nome'
                                className="form-input"
                                placeholder="Nome"
                                value={values.nome}
                                onChange={handleChange}
                                />
                            {errors.nome && <p>{errors.nome}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                id='email'
                                type="email"
                                name='email'
                                className="form-input"
                                placeholder="E-mail"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}F
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="nCRP" className="form-label">Nº CRP:</label>
                            <input
                                id='nCRP'
                                type="text"
                                name='nCRP'
                                className="form-input"
                                placeholder="Nº CRP"
                                value={values.nCRP}
                                onChange={handleChange}
                                />
                            {errors.nCRP && <p>{errors.nCRP}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="senha" className="form-label">Senha:</label>
                            <input
                                id="senha"
                                type="password"
                                name='senha'
                                className="form-input"
                                placeholder="Senha"
                                value={values.senha}
                                onChange={handleChange}
                                />
                            {errors.senha && <p>{errors.senha}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="senha2" className="form-label">Confirme sua senha:</label>
                            <input
                                id="senha2"
                                type="password"
                                name='senha2'
                                className="form-input"
                                placeholder="Confirmar senha"
                                value={values.senha2}
                                onChange={handleChange}
                                />
                            {errors.senha2 && <p>{errors.senha2}</p>}
                        </div>

                        <button className="form-input-btn" type="submit" onChange={handleSubmit}>Cadastrar</button>
                        <span className="form-input-loguin">
                            Já possui cadastro ? Faça o 
                            <a  href="http://localhost:3000/Login"> Login. </a>
                        </span>

                    </form>


                </div>

            </div>
 */}
        
        </Fragment>


)
}

export default SignUP;
