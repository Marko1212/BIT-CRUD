import React from 'react';

function Button(props) {
    return (
        <button className={props.className} type="button" onChange={props.onChange} >{props.children}</button>
    );
}

export default Button;