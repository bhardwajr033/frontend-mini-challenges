import React from 'react';

function Card(props) {
    return ( 
        <div className="card">
            {props.cardName}
        </div>
     );
}

export default Card;