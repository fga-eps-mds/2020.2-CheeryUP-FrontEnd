import { useState, useEffect } from 'react'
import '../../pages/Login/Login'

export default function useForm(callback, validate) {
    const [values, setValues] = useState({
        email: '',
        senha: '',
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



