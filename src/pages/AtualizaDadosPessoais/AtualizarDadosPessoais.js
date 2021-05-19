import React, { Fragment } from "react";
import { Button, Form } from "semantic-ui-react";
import NavbarPsic from "../../components/Navbar/NavbarPsicologo";
import "../../style/pages/AtualizaDadosPessoais/AttDadosPessoais.css";
import useFormAttContaPsic from "../../components/useFormAttContaPsic";
import { useSelector } from "react-redux";


const AttDadosPsico = ({ SubmitAttForm }) => {
  const { psic } = useSelector((state) => state);
  const { handleSubmit, handleChange, values } =
  useFormAttContaPsic( SubmitAttForm );
  
  return (
    <Fragment>
      <NavbarPsic />
      <div className="container-attPsico">

        <div className='container-titulo-form'>
          <div className='titulo'>Atualizar dados pessoais</div>

          <div className="form-attPsico">
            <Form>
              <div className="form-items-attPsico">
                <div className="primeira-linha-attPsico">
                  <Form.Input
                    placeholder= {psic.name}
                    label="Nome"
                    required
                    fluid
                    onChange={handleChange}
                    name="nome"
                    value={values.nome}
                  />
                  <Form.Input
                    required
                    onChange={handleChange}
                    value={values.email}
                    fluid
                    required
                    name="email"
                    label="Email"
                    placeholder= {psic.user.email}
                  />
                  <Form.Input
                    required
                    fluid
                    required
                    label="Número do CRP"
                    placeholder= {psic.nCRP}
                    onChange={handleChange}
                    value={values.nCRP}
                    name="nCRP"
                  />
                  <Form.Input
                    
                    label="Senha"
                    type="password"
                    required
                    fluid
                    onChange={handleChange}
                    name="senha"
                    value={values.senha}
                  />
                  <Form.Input
                    
                    label="Confirmar senha"
                    type="password"
                    required
                    fluid
                    onChange={handleChange}
                    name="senha2"
                    value={values.senha2}
                  />
                </div>
                <div className="quinta-linha-attPsico">
                  <Button onClick={handleSubmit}> Atualizar </Button>
                </div> 
              </div>
            </Form>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default AttDadosPsico;

