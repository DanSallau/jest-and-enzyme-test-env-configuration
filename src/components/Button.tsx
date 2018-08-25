import * as React from "react";
import "./Button.scss";


export interface ButtonProps {
    label: string;
    onClick: (event: any) => void;
    className?: string;
    disabled?: boolean;
}

export const Button: React.StatelessComponent<ButtonProps> = (props: ButtonProps): React.ReactElement<void> => {
    return (
        <button
            type="button"
            disabled={props.disabled}
            className={`btn custom-button ${props.className ? props.className : ""}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => { props.onClick && props.onClick(e); }}
        >
            <span>{props.label}</span>
        </button>
    );
};
