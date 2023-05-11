import React from "react";
import "./button.scss";
import classNames from "classnames";

interface ButtonProps {
  label: any;
  outline?: boolean;
  primary?: boolean;
  gray?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, outline, primary, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", { outline }, { primary })}
    >
      {label}
    </button>
  );
};
export default Button;
