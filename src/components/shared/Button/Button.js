import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";
import { BUTTON_NAMES } from "./constants";

const Button = ({ type, name, children, className = "" }) => (
    <button
        type={type}
        name={name}
        className={cx(
            styles.button,
            {
                [styles["button--cta"]]: name === BUTTON_NAMES.CTA,
            },
            className
        )}
    >
        {children}
    </button>
);

export default Button;
