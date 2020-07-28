import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px'
    };

    return <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.name} />;
};

export default userInput;