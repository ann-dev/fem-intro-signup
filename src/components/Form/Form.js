import React from "react";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import { BUTTON_NAMES } from "../shared/Button/constants";
import Attribution from "../Attribution/Attribution";
import "./Form.scss";

const Form = () => (
    <div className="form">
        <Button name={BUTTON_NAMES.CTA}>
            <span>Try it free 7 days </span>then $20/mo. thereafter
        </Button>
        <div className="form__content">
            <form autoComplete="off">
                <Input name="name" placeholder="First Name" />
                <Input name="surname" placeholder="Last Name" />
                <Input name="email" placeholder="Email Address" />
                <Input name="password" placeholder="Password" />
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

export default Form;
