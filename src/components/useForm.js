import { useState, useEffect } from 'react'
import '../pages/Registrar/SignUP.js'

export default function useForm(callback, validate) {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        nºcrp: '',
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
            if (Object.keys(errors).length == 0 && isSubmitting) {
                console.log(values);
                alert("Cadastro efetuado passado!");          
            }





        },
        [errors]
    );


    return { handleChange, values, handleSubmit, errors };
};




