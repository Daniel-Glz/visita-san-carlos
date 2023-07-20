import React from "react";

const FieldHandler = ({ field }) => {
  switch (field.type) {
    case "textarea":
      return (
        <div className="form-section__item">
          {
            field.label &&
            <label htmlFor={field.name} className="form-section__label">
              {field.label}
            </label>
          }
          <textarea
            name={field.name}
            id={field.name}
            className="form-section__input"
            rows="10"
            cols="50"
          />
        </div>
      );

    default:
      return (
        <div className="form-section__item">
          {
            field.label &&
            <label htmlFor={field.name} className="form-section__label">
              {field.label}
            </label>
          }
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            className="form-section__input"
            placeholder={field.placeholder}
            value={field.value}
          />
        </div>
      )
  }
};

export default FieldHandler;
