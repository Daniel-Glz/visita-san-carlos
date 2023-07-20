import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import FieldHandler from "../FieldHandler";

const FormSection = ({ fields, action }) => {

  return (
    <div className="form-section">
      <Container>
      <form action={action} className="form-section__form">
        {fields.map((field, index) => (
          <FieldHandler key={index} field={field} />
        ))}
        <input type="submit" value="Enviar" className="thm-btn form-section__btn-submit" />
      </form>
      </Container>
    </div>
  );
};

FormSection.propTypes = {
  data: PropTypes.object,
};

export default FormSection;
