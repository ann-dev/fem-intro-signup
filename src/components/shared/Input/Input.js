import React from "react";
import "./Input.scss";

const Input = ({ className, type, name, placeholder, register }) => (
    <input
        className={className}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
    />
);

export default Input;
