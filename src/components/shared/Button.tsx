import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "romantic" | "subtle" | "bold";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  // ... other props
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "romantic",
  disabled,
  className = "bg-black",
  ...rest
}) => {
  const baseClasses = "px-4 py-2 rounded font-medium";

  const variantClasses: Record<ButtonVariant, string> = {
    romantic: `bg-gradient-to-r from-rose-500 to-red-500 text-white hover:bg-gradient-to-r from-red-500 to-pink-700 shadow-md`,
    subtle: `bg-gray-200 text-gray-700 hover:bg-gray-300`,
    bold: `bg-blue-500 text-white hover:bg-blue-700`,
  };

  return (
    <button
      className={` ${baseClasses} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
