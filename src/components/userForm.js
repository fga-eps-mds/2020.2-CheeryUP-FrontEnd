import { useState, useEffect } from 'react'
import '../pages/Registrar/SignUP.js'

import axios from 'axios'

import api from '../services/api';

export default function useForm(callback, validate) {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        nCRP: '',
        senha: '',
        senha2: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                console.log(values);
                alert("Cadastro efetuado passado!");  
        
                fetch('http://localhost:8000/api/psicologo/',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'}
                }).then(
                    data => {
                        
                    }
                ).catch(errors => console.error(errors))
                      
            }





        },
        [errors]
    );


    return { handleChange, values, handleSubmit, errors };
};



