import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

const RadioButton = ({ id, value, options, onChange }) => {
  return options.map(opt => (
    <RadioButtonWrapper key={id + opt}>
      <label className={classnames("container", { checked: value === opt })}>
        {opt}
        <input
          type="radio"
          name={id}
          value={opt}
          checked={value === opt}
          onChange={onChange}
        ></input>
        <span className="checkmark"></span>
      </label>
    </RadioButtonWrapper>
  ));
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  position: relative;
  padding-left: 35px;
  margin-left: 0.5rem;
  cursor: pointer;
  user-select: none;

  .container {
    color: #b0bec5;
    &.checked {
      color: #263238;
    }
  }
  // hide the default radio button
  input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  // create a custom radio button
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: rgba(140, 198, 63, 0.15);
    border-radius: 50%;
    border: 1px solid #8cc63f;
  }

  // on mouse-over, add a green background color
  &:hover input ~ .checkmark {
    background-color: rgba(140, 198, 63, 0.35);
  }

  // when the radio button is checked, add a green background
  & input:checked ~ .checkmark {
    background-color: #8cc63f;
  }

  // when the radio button is focused, add a green glow
  & input:focus ~ .checkmark {
    filter: drop-shadow(1px 2px 3px green);
  }

  /* inner dot/circle - hidden when not checked */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* show dot/circle when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* style the dot/circle */
  .container .checkmark:after {
    top: 6px;
    left: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;
