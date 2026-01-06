import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={'inline-block rounded-md bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800 ${className}'}
      {...props}
    />
  );
}