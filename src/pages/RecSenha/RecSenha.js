import React, {Fragment} from 'react'
import useState from 'react'
import '../../style/pages/RecSenha/RecSenha.css';
import useForm from '../../components/useForm';
import { Card, Form, Button } from 'semantic-ui-react'

const RecPassword = ({ SubmitForm }) => 
{
    const { handleChange, values, handleSubmit, errors } = useForm(SubmitForm, validate);
    return(
        <Fragment>
            <div className="container-Rec">
                <div className= "form-RecPassword-container">
                    <div className="top-RecPassword">
                        <a href="http://localhost:3000/"> 
                            <img className="top-RecPassword-logo" src="img/logo_word.png" alt="logo CheeryUp" />
                        </a>

                        <a href="http://localhost:3000/"> 
                            <label className="top-RecPassword-navbar-option">Início</label>
                        </a>
                    </div>
                    <div className="form-RecPassword-wrap">
                    <Card className = "form-Rec-card" style={{ border: "none", boxShadow: "none" }}>
                        <Card.Content className="form-title-RecPassword">
                        <Card.Header> Esqueceu sua senha ? </Card.Header>
                        </Card.Content>
                        <Card.Content> 
                            <Form className="form-content-input-RecPassword">
                                <Form.Input placeholder="Email" label="Email" required fluid onChange={handleChange} name='email' value={values.email}/>
                                    {errors.email && <p class="p-message">{errors.email}</p>}
                                <Button type="submit" onClick={handleSubmit}> Enviar </Button>

                            </Form>
                        </Card.Content>
                    
                    </Card>
                    
                    </div>

               </div>
               <div className="side-image-Rec" >
                    <img src="imagens/FundoLateral.png" alt="Fundo Lateral"/>
                </div> 
                <div className="side-image-Rec2">
                    <img src="imagens/textRecSenha.png" alt="Texto Recuperar Senha"/>
                </div> 

            </div>
        </Fragment>
  
        
    )
} 
export default RecSenha