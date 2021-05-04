import { useState, useEffect } from 'react'
import '../pages/Registrar/CadastroPaciente'

import api from '../services/api';

export default function useFormPaciente(callback, validatePac) {
    const [values, setValues] = useState({
        nomePac: 'antoniotoineto',
        nascimento: '10-10-2005',
        nCPF: '55560396109',
        regiao: 'AC',
        generoPac: 'M',
        descricao: 'alo familia',
        situacao: 'Controlada'
        // genero: "M"

    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dataPaciente = new FormData();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validatePac(values));

        setIsSubmitting(true);
    };

    // Ainda falta completar toda essa parte aqui ksksksks

    useEffect(
        async () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log(values);
                
                
                dataPaciente.append('nome', values.nomePac)
                dataPaciente.append('cpf', values.nCPF)
                dataPaciente.append('data_nascimento', values.nascimento)
                dataPaciente.append('genero', values.generoPac)
                dataPaciente.append('situacao', values.situacao)
                dataPaciente.append('descricao', values.descricao)

    
                await api.post('api/psicologos/12345678911/pacientes/', dataPaciente)
                    .then(() => {
                        alert("Cadastro efetuado passado!");  
                    })
                    .catch((err) => alert("Cadastro Inválido"))
    
            }
   
        },
        [errors]
    );


    return { handleChange, values, handleSubmit, errors };
};