import { useState, useEffect } from 'react'
import '../pages/Registrar/SignUP.js'

import api from '../services/api';

export default function useFormSignIn(callback, validate) {
    const [values, setValues] = useState({
        nome: '',
        senha: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const data = new FormData();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        setIsSubmitting(true);
    };

    useEffect(
        async () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log(values);
                
                data.append('user.username', values.nome)
                data.append('user.password', values.senha)
    
                await api.post('login/api/login/', data)
                    .then(() => {
                        alert("Login efetuado passado!");  
                    })
                    .catch((err) => alert("Cadastro Inválido"))
    
            }
   
        },
        [errors]
    );


    return { handleChange, values, handleSubmit, errors };
};
