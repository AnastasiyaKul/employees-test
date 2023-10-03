import React from 'react';
import './Button.css';

export default function Button({ name, onClick, style }) {
    return (
        <div className="button" style={style} onClick={onClick}>
            {name}
        </div>
    )
}
