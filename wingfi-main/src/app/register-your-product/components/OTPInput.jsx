// components/OTPInput.js
"use client";

const OTPInput = ({ otpDigits, handleOtpChange, handleKeyDown, error }) => {
    return (
      <label className="form-control w-full max-w-xs">
        <div className="flex justify-between">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              placeholder="0"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={[
                "input input-bordered w-12 text-center",
                error ? "input-error" : "",
              ].join(" ")}
            />
          ))}
        </div>
        {error && (
          <div className="label">
            <span className="label-text-alt text-red-500">{error}</span>
          </div>
        )}
      </label>
    );
  };
  
  export default OTPInput;
  