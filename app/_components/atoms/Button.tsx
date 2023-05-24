import React from "react";
import "./button.scss";
import classNames from "classnames";

interface ButtonProps {
  label: any;
  outline?: boolean;
  primary?: boolean;
  gray?: boolean;
  circle?: boolean;
  noFill?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  outline,
  primary,
  circle,
  noFill,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button",
        { outline },
        { primary },
        { circle },
        { noFill }
      )}
    >
      {label}
    </button>
  );
};
export default Button;
