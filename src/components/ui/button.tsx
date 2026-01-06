import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {

    return (
      <button
        ref={ref}
        className={'${base} ${variants[variant]} ${className}'}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";