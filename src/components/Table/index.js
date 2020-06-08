import React from 'react';

const Table = (props) => {
    return (
        <table className='highlight'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Gênero</th>
                    <th>Pet</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
};

export default Table;