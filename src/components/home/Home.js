import React from 'react';
import NumerosExcluir from '../numeros-excluir/NumerosExcluir'
import TabelaApostas from '../tabela-apostas/TabaleApostas'
import { useSelector } from 'react-redux'
import util from '../util/util'

function Home() {
  const excludes = useSelector(state => state.excludes);
  const bets = util.betGenerator(excludes);

  return (
    <div className="container-fluid mb-5">
      <div className="row mt-3">
        <div className="col-sm-5">
          <NumerosExcluir />
        </div>
        <div className="col-sm-7">
          <TabelaApostas bets={bets} />
        </div>
      </div>
    </div>
  );
}

export default Home;
