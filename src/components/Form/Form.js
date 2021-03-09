import React from "react";
import { useForm } from "react-hook-form";

import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import { BUTTON_NAMES } from "../shared/Button/constants";
import Attribution from "../Attribution/Attribution";
import "./Form.scss";

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        alert("Thank you for submitting!")
    };

    return (
        <div className="form">
            <Button name={BUTTON_NAMES.CTA}>
                <span>Try it free 7 days </span>then $20/mo. thereafter
            </Button>
            <div className="form__content">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__item">
                        <Input
                            className={errors.name ? "input__field input-error" : "input__field"}
                            name="name"
                            placeholder={errors.name ? "" : "First Name"}
                            register={register({
                                required: true,
                                minLength: 2,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/,
                            })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <span className="text-error">First name cannot be empty</span>
                        )}
                        {errors.name && errors.name.type === "minLength" && (
                            <span className="text-error">
                                First name must be minimum length of 2
                            </span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                            <span className="text-error">
                                First name must be maximum length of 20
                            </span>
                        )}
                        {errors.name && errors.name.type === "pattern" && (
                            <span className="text-error">Enter a valid first name</span>
                        )}
                    </div>
                    <div className="form__item">
                        <Input
                            className={errors.surname ? "input__field input-error" : "input__field"}
                            name="surname"
                            placeholder={errors.surname ? "" : "Last Name"}
                            register={register({
                                required: true,
                                minLength: 2,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/,
                            })}
                        />
                        {errors.surname && errors.surname.type === "required" && (
                            <span className="text-error">Last name cannot be empty</span>
                        )}
                        {errors.surname && errors.surname.type === "minLength" && (
                            <span className="text-error">
                                Last name must be minimum length of 2
                            </span>
                        )}
                        {errors.surname && errors.surname.type === "maxLength" && (
                            <span className="text-error">
                                Last name must be maximum length of 20
                            </span>
                        )}
                        {errors.surname && errors.surname.type === "pattern" && (
                            <span className="text-error">Enter a valid last name</span>
                        )}
                    </div>
                    <div className="form__item">
                        <Input
                            className={errors.email ? "input__field input-error" : "input__field"}
                            name="email"
                            type="email"
                            placeholder={errors.email ? "" : "Email Address"}
                            register={register({
                                required: true,
                                pattern: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
                            })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <span className="text-error">Email cannot be empty</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <span className="text-error">Enter a valid email address</span>
                        )}
                    </div>
                    <div className="form__item">
                        <Input
                            className={
                                errors.password ? "input__field input-error" : "input__field"
                            }
                            name="password"
                            type="password"
                            placeholder={errors.password ? "" : "Password"}
                            register={register({
                                required: true,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            })}
                        />
                        {errors.password && errors.password.type === "required" && (
                            <span className="text-error">Password cannot be empty</span>
                        )}
                        {errors.password && errors.password.type === "pattern" && (
                            <span className="text-error">
                                Enter a valid password: min 8 characters, at least 1 letter, 1
                                number and 1 special character
                            </span>
                        )}
                    </div>

                    <Button>
                        <span>{"claim your free trial".toUpperCase()}</span>
                    </Button>
                </form>
                <p className="form__consent">
                    By clicking the button, you are agreeing to out{" "}
                    <span className="form__consent--emphasis">Terms and services</span>
                </p>
            </div>
            <Attribution />
        </div>
    );
};

export default Form;
