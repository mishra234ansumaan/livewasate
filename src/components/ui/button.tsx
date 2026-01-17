import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";   
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "md",            
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition ${
          size === "sm"
            ? "px-2 py-1 text-xs"
            : size === "lg"
            ? "px-5 py-3 text-base"
            : "px-3 py-2 text-sm"   // md (default)
        } ${
          variant === "default"
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-transparent text-green-600 hover:bg-green-50"
        } ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";