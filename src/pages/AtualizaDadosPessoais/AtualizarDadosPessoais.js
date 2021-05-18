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
    <Fragment className="container-attPsico">
      <NavbarPsic />

      <div className="form-attPsico">
        <div className="titulo-form-attPsico">
          <h1 className="titulo-attPsico">Atualizar dados pessoais </h1>
        </div>
        <Form>
          <div className="form-items-attPsico">
            <div className="primeira-linha-attPsico">
{/*                <Form.Input
                placeholder= {psic.user.username}
                label="Username"
                required
                fluid
                onChange={handleChange}
                name="username"
                value={values.username}
              />  */}
              <Form.Input
                placeholder= {psic.name}
                label="Nome"
                required
                fluid
                onChange={handleChange}
                name="nome"
                value={values.nome}
              />
            </div>
            <div className="segunda-linha-attPsico">
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
            </div>
            <div className="terceira-linha-attPsico">
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
                placeholder="Escolha sua nova senha "
                label="Senha"
                type="password"
                required
                fluid
                onChange={handleChange}
                name="senha"
                value={values.senha}
              />
              <Form.Input
                placeholder="Confirme sua nova senha"
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
          <span className="form-input-attPsico">
            <a href="/AtualizarSenha">
              {/* <button type="button" className="default-buttonAlt">
                Alterar Senha{" "}
              </button> */}
            </a>
          </span>
        </Form>
      </div>
    </Fragment>
  );
};

export default AttDadosPsico;
