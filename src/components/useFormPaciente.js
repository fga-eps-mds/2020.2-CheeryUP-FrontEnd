import { useState, useEffect } from 'react'
import '../pages/Registrar/CadastroPaciente'

import api from '../services/api';

export default function useFormPaciente(callback, validate) {
    const [values, setValues] = useState({
        nome: '',
        nascimento: '',
        nCPF: '',
        regiao: '',
        genero: '',
        descricao: '',
        situacao: 'Controlada'
        // genero: "M"

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

    // Ainda falta completar toda essa parte aqui ksksksks

    // useEffect(
    //     async () => {
    //         if (Object.keys(errors).length === 0 && isSubmitting) {
    //             console.log(values);
                
                
    //             data.append('user.username', values.nome)
    //             data.append('user.password', values.senha)
    //             data.append('user.email', values.email)
    //             data.append('nCRP', values.nCRP)
    //             data.append('bio', values.bio)
    //             data.append('genero', values.genero)

    
    //             await api.post('api/psicologos/', data)
    //                 .then(() => {
    //                     alert("Cadastro efetuado passado!");  
    //                 })
    //                 .catch((err) => alert("Cadastro Inválido"))
    
    //         }
   
    //     },
    //     [errors]
    // );


    return { handleChange, values, handleSubmit, errors };
};