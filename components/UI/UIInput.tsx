import { AlertCircle } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const UIInput = ({
  label,
  error = false,
  errorMessage,
  className = "",
  disabled,
  id,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-zinc-200"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        disabled={disabled}
        className={`
          w-full rounded-2xl bg-[#181818] px-5 py-4 outline-none transition
          placeholder:text-zinc-500
          ${
            error
              ? "border border-red-500 focus:border-red-500"
              : "border border-zinc-800 focus:border-main"
          }
          ${
            disabled
              ? "cursor-not-allowed bg-zinc-900 text-zinc-500 opacity-50"
              : ""
          }
          ${className}
        `}
        {...props}
      />

      {error && errorMessage && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default UIInput;