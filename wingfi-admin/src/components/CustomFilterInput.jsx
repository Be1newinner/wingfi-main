import React, { useState } from 'react';

const CustomFilterInput = ({ 
  value, 
  onChange, 
  options, 
  placeholder,
  className = "p-2 border rounded-lg"
}) => {
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState("");

  const handleCustomInputToggle = () => {
    setIsCustomInput(true);
    setCustomValue(value);
    onChange(""); // Clear the select value when switching to custom input
  };

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "custom") {
      handleCustomInputToggle();
    } else {
      onChange(newValue);
    }
  };

  const handleCustomValueChange = (e) => {
    const newValue = e.target.value;
    setCustomValue(newValue);
    onChange(newValue);
  };

  const handleBackToSelect = () => {
    setIsCustomInput(false);
    setCustomValue("");
    onChange(""); // Clear the value when switching back to select
  };

  if (isCustomInput) {
    return (
      <div className="relative">
        <input
          type="text"
          value={customValue}
          onChange={handleCustomValueChange}
          placeholder={`Enter custom ${placeholder}`}
          className={className}
        />
        <button
          onClick={handleBackToSelect}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ↶
        </button>
      </div>
    );
  }

  return (
    <select
      value={value}
      onChange={handleSelectChange}
      className={className}
    >
      <option value="">{`Select ${placeholder}`}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {typeof option === 'string' 
            ? option.charAt(0).toUpperCase() + option.slice(1) 
            : option}
        </option>
      ))}
      <option value="custom">+ Add Custom {placeholder}</option>
    </select>
  );
};

export default CustomFilterInput;