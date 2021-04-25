import React from 'react'
import '../../style/pages/HomePage/Button.css'

const ButtonCad = ({children}) => {
    return (
    <a href ="/SignUP" className='botaoCadastro'>{children}</a>
   )
}

export default ButtonCad