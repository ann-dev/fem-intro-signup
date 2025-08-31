import React from "react";
import "./Input.scss";

const Input = ({ className, type, name, placeholder, register }) => (
    <input
        className={className}
        type={type}
        aria-label={name}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
    />
);

export default Input;
