import React from 'react';
import NumerosExcluir from '../numeros-excluir/NumerosExcluir'
import TabelaApostas from '../tabela-apostas/TabaleApostas'

function Home() {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-sm-5">
          <NumerosExcluir />
        </div>
        <div className="col-sm-7">
          <TabelaApostas />
        </div>
      </div>
    </div>
  );
}

export default Home;
