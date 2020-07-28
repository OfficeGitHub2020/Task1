import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return(
    <div className="UserOutput">
        <p>THIS IS PARA 1 AND USERNAME IS {props.userName}</p>
        <p>THIS IS PARA 2 AND USERNAME IS {props.userName}</p>
    </div>
    );
};

export default userOutput;