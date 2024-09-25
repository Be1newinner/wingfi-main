import { ChangeEvent } from "react";

interface ModifiedInputProps {
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
  type?: string;
  error: string;
}

export default function ModifiedInput({
  className = "",
  value,
  onChange,
  title,
  name,
  type,
  error,
}: ModifiedInputProps) {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative`}>
        <label
          htmlFor={name}
          className="block border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 rounded-none"
        >
          <input
            type={type}
            id={name}
            name={name}
            className="peer border-none placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-3 w-full rounded-none"
            placeholder={title}
            value={value}
            onChange={onChange}
          />
          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-md px-2">
            {title}
          </span>
        </label>
      </div>
      <p className="text-error text-xs mt-1">{error}</p>
    </div>
  );
}
