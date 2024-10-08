// components/FormField.js
"use client";

const FormField = ({ label, type, value, onChange, error }) => {
    return (
      <label className="form-control w-full">
        <input
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={[
            "input input-bordered w-full",
            error ? "input-error" : "",
          ].join(" ")}
        />
        {error && (
          <div className="label">
            <span className="label-text-alt text-red-500">{error}</span>
          </div>
        )}
      </label>
    );
  };
  
  export default FormField;
  