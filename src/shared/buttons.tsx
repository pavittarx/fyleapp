import React from "react";
import styled from "styled-components";

type ButtonProp = {
  icon?: string;
  text: string;
};

const ButtonStyles = styled.div`
  background: var(--text);
  color: var(--dark);

  cursor: default;

  padding: 10px 20px;
  display: inline;
  border: 1px solid var(--text);
  border-radius: 50px;
  transition: 0.5s ease-in all;

  display: inline-flex;
  align-items: center;

  span:last-child{
    margin-left: 10px;
  }

  &:hover {
    background: var(--dark);
    color: var(--text);
  }

  &:focus {
    background: var(--text);
    color: var(--dark);
    opacity: 0.75;
  }
`;

const GradientButtonStyles = styled(ButtonStyles)``;

export const Button = ({ icon, text }: ButtonProp) => {
  return (
    <ButtonStyles>
      {icon ? (
        <span>
          <img src={icon} alt="Icon" />
        </span>
      ) : null}

      <span>{text}</span>
    </ButtonStyles>
  );
};

export const GradientButton = ({ text }: ButtonProp) => {
  return <GradientButtonStyles>{text}</GradientButtonStyles>;
};
