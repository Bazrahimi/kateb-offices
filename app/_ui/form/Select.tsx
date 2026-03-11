"use client";

import { cn } from "@/app/_lib/utils/cn";
import FieldError from "./FieldError";

type SelectProps = {
  id: string;
  label: string;
  options: readonly string[];
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  error?: string[];
  className?: string;
  isRTL?: boolean;
  onSelectValue?: (value: string) => void;
};

const Select = ({
  id,
  label,
  options,
  defaultValue = "",
  required = false,
  placeholder = "Select",
  error,
  className,
  isRTL = false,
  onSelectValue,
}: SelectProps) => {
  const hasError = !!error?.length;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-medium text-gray-700",
          isRTL && "text-right",
        )}
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      <select
        id={id}
        name={id}
        defaultValue={defaultValue}
        onChange={(e) => onSelectValue?.(e.target.value)}
        className={cn(
          "mt-1 block w-full rounded-md border border-gray-200",
          "py-2 pr-10 text-sm sm:text-base outline-1",
          "focus:border-org-primary-main focus:ring-2 focus:ring-blue-100",
          hasError && "border-red-300 focus:border-red-400 focus:ring-red-100",
          isRTL && "text-right direction-rtl",
          className,
        )}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        required={required}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <FieldError fieldId={id} errors={error} />
    </div>
  );
};

export default Select;