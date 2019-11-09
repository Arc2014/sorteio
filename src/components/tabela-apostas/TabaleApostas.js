import React from 'react';

function TabelaApostas() {
    return (
        <table class="table table-striped table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                        .map((aposta, index) => {
                            return <th scope="col" key={index}>{aposta}</th>
                        })}
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
                    .map((aposta, index) => {
                        return <tr key={index}>
                    <th scope="row">{aposta}</th>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                                .map((aposta, index) => {
                                    return <td key={index}>{aposta}</td>
                                })}
                        </tr>
                    }
                    )}
            </tbody>
        </table>
    );
}

export default TabelaApostas;
