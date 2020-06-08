import React from 'react';

const Pessoa = (props) => {

    return <>
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            <td>{props.pet}</td>
        </tr>
    </>
};

export default Pessoa;