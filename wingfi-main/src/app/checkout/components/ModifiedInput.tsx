import { Dispatch, SetStateAction } from "react";

interface propTypes {
  className: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  title: string;
}

export default function ModifiedInput({
  className = "",
  value = "",
  setValue,
  title = "",
}: propTypes) {
  return (
    <div className={className + " rounded-none"}>
      <label
        htmlFor={title}
        className="relative block border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 basis-1/2 rounded-none"
      >
        <input
          type="text"
          id={title}
          className="peer border-none placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-3 w-full rounded-none"
          placeholder={title}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-md px-2">
          {title}
        </span>
      </label>
    </div>
  );
}
