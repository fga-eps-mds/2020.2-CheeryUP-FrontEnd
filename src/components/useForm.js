import { useState, useEffect } from 'react'
import '../pages/Registrar/SignUP.js'

import api from '../services/api';
import { useHistory } from 'react-router-dom';

export default function useForm(callback, validate) {
    const history = useHistory();
    const [values, setValues] = useState({
        nome: '',
        email: '',
        nCRP: '',
        senha: '',
        senha2: '',
        bio: "ALGO",
        genero: "M"

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
                data.append('user.email', values.email)
                data.append('nCRP', values.nCRP)
                data.append('bio', values.bio)
                data.append('genero', values.genero)

                await api.post('api/psicologos/', data)
                    .then((data) => {
                        alert("Cadastro efetuado passado!");
                        history.push('/Login')
                        
                    })
                    .catch((err) => alert("Cadastro Inválido"))
            }
        },
        [errors]
    );

    return { handleChange, values, handleSubmit, errors };
};
