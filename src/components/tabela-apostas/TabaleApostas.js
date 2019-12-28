import React from 'react';
import util from '../util/util'

function TabelaApostas({bets}) {
    const header = util.getSequenceArray(util.NUMBER_PER_BET);
    return (
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {header.map((aposta, index) => {
                            return <th scope="col" key={index}>{aposta}</th>
                        })}
                </tr>
            </thead>
            <tbody>
                {bets.map((aposta, index) => {
                        return <tr key={index}>
                            <th scope="row">{index}</th>
                            {aposta.map((numero, index) => {
                                return <td key={index}>{numero}</td>
                            })}
                        </tr>
                    }
                    )}
            </tbody>
        </table>
    );
}

export default TabelaApostas;
