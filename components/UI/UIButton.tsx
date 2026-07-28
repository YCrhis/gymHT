import { ButtonHTMLAttributes, ReactNode } from "react";

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const UIButton = ({
  children,
  variant = "solid",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  ...props
}: UIButtonProps) => {
  const baseStyles =
    "inline-flex text-black! cursor-pointer items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-main/40 disabled:cursor-not-allowed";

  const variants = {
    solid:
      "bg-main text-white hover:bg-main/90 disabled:bg-main/50",

    outline:
      "border-2 border-main text-main hover:bg-main hover:text-white disabled:border-main/40 disabled:text-main/40",

    ghost:
      "text-main hover:bg-main/10 disabled:text-main/40",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {children}
    </button>
  );
};

export default UIButton;