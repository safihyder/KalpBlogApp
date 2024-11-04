import React from 'react';
import styled from 'styled-components';

const Button = (
  {
    children,
    type="button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}
) => {
  return (
    <StyledWrapper>
       <button className={`neu-button px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .neu-button {
    background-color: #e0e0e0;
    border-radius: 15px;
    box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
    color: #4d4d4d;
    cursor: pointer;
    font-size: 15px;
    padding: 10px 10px;
    transition: all 0.2s ease-in-out;
    border: 2px solid rgb(206, 206, 206);
  }

  .neu-button:hover {
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
  }

  .neu-button:focus {
    outline: none;
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
  }`;

export default Button;
