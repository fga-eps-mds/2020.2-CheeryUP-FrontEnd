import React, { Fragment, useEffect } from "react";

const Consulta = ({ consulta }) => {
  useEffect(() => {
    console.log(consulta);
  }, []);

  return (
    <main className="main-content">
      <div className="upper-main-content">
        <h2 class="page-name">Lista Pacientes</h2>
      </div>
      <table className="table-content" cellspacing="10">
        <thead>
          {/** constante, logo não mudará. É o header da table */}
          <tr className="table-header-columns">
            <th></th>
            <th className="table-header-option">Id</th>
            <th className="table-header-option">Dados Consultas</th>
          </tr>
        </thead>
        <tbody>
            <th className="table-body-option">{consulta}</th>
        </tbody>
      </table>
    </main>
  );
};

export default Consulta;
