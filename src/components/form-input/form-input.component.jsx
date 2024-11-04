import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value = "", ...otherProps }) => {
  return (
    <div className="group">
      {/* Input field, which uses onChange to handle updates */}
      <input
        className="form-input"
        onChange={handleChange}
        value={value}
        {...otherProps}
      />

      {/* Conditionally render label with "shrink" class if value has content */}
      {label ? (
        <label
          className={`${value.length ? "shrink" : ""} form-input-label`} // Check value.length directly
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
