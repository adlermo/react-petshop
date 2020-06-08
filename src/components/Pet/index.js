import React from 'react';

const Pet = (props) => {
    return (
        <div class="col s4">
            <div class="card small">
                <div class="card-image">
                    <img src={props.img} alt={props.name} />
                </div>
                <div class="card-content">
                    <p><strong>Nome:</strong> {props.name}</p>
                    <p><strong>Idade:</strong> {props.age}</p>
                    <p><strong>Sexo:</strong> {props.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default Pet;