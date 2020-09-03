import React from 'react';
import "./Input.scss";

const Input = ({type, name, placeholder}) => (
    <div className="input">
        <input className="input__field" type={type} id={name} name={name} placeholder={placeholder} required/>
    </div>
);

export default Input;
