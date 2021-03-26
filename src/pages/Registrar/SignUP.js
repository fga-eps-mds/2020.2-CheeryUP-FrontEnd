import React from 'react'
import useState from 'react'
import '../../style/pages/SignUP.css';
import useForm from '../../components/useForm';


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
    if (!values.nºcrp) {
        errors.nºcrp = 'É necessário preencher nºcrp';
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


const SignUP = ({ SubmitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);



    return (
        <>
            <div className="form-container">

                {/*  <div className="form-content-left">
                    <img src="img/cereja.jpeg" alt="cereja" className="form-img" />
                    </div>
                */}
                
                <div class="top">
                    <img src="img/logo_word.png" alt="cereja" class="form-img" />
                    <button className="form-input-btn-home" type="submit">Inicio</button>
                </div>

                <div className="form-content-center">
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
                            {errors.email && <p>{errors.email}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="nºcrp" className="form-label">Nº CRP:</label>
                            <input
                                id='nºcrp'
                                type="text"
                                name='nºcrp'
                                className="form-input"
                                placeholder="Nº CRP"
                                value={values.nºcrp}
                                onChange={handleChange}
                            />
                            {errors.nºcrp && <p>{errors.nºcrp}</p>}
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

                        <button className="form-input-btn" type="submit">Cadastrar</button>
                        <span className="form-input-loguin">
                            Já possui cadastro ? Faça o 
                            <a  href="#"> Loguin. </a>
                        </span>

                    </form>


                </div>

            </div>

        </>


    )
}

export default SignUP;
