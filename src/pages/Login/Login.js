import React from 'react'
import useState from 'react'
import '../../style/pages/Login/Login.css';
import useForm from '../../components/useForm';


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

function SubmitForm(validate){
    if (validate != 0){
        document.write("Boaaaaaaa cuzao")
    }
}


function FormSucess () {
    return (
        <div className = "form-sucess">
            <h1> Recebemos o seu dados. YUUUUUUUUUUUUUUUUPI TÚ É DA EQUIPE GARAI</h1>
        </div>
    )    
}


const Login = ({ SubmitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);



    return (
        <>
            <div className="form-container">
                <div class="top">
                    <img src="img/logo_word.png" alt="cereja" class="form-img" />
                    <a href="http://localhost:3000/Home"> 
                    <button className="form-input-btn-home" type="submit">Inicio</button>  
                    </a>
                    
                </div>

                
                <div className="form-content-center">
                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Login do psicólogo</h2>
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
                            {errors.email && <p>{errors.email}</p>}
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
                            <p><a className="links" href="#">Esqueceu sua senha?</a></p>
                            {errors.senha && <p>{errors.senha}</p>}
                        </div>

                        
                        
                            <button className="form-input-btn" type="submit">Login</button>
                            <span className="form-input-help">
                                <p>Não possui login ?</p> 
                                <p><a className="links" href="http://localhost:3000/SignUP"> Cadastre-se</a></p>
                            </span>
                        
                    
                        <p></p>
                    </form>


                </div>

            </div>
        </>
    )
}
   

export default Login;