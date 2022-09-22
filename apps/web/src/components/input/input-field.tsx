import { InputProps, TextProps } from "../types";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { isEmail, isPhoneNumber } from "class-validator";

import styled from "styled-components";

export type InputFieldProps = InputProps &
  TextProps & {
    onValueChange: ([name, value]: [string, string | number]) => void;
  };

export const InputField = (props: InputFieldProps) => {
  const { customValidator, type } = props;
  const [currentValue, setCurrentValue] = useState(props.value);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (customValidator) {
      setIsValid(customValidator(currentValue));
      return;
    }
    switch (type) {
      case "email":
        setIsValid(isEmail(currentValue));
        return;
      case "tel":
        setIsValid(isPhoneNumber(String(currentValue)));
        return;
      default:
        return;
    }
  }, [currentValue, customValidator, type]);

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentValue(event.target.value);
    props.onValueChange([props.name, currentValue]);
  };

  return (
    <>
      <Label invalid={!isValid} htmlFor="name">
        {props.label}
        {props.required ? " *" : ""}
      </Label>
      <Input
        invalid={!isValid}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

const Label = styled.label`
  color: ${(props) =>
    props.invalid ? props.theme.colors.error.main : props.theme.colors.black};
`;

const Input = styled.input`
  color: ${(props) =>
    props.invalid ? props.theme.colors.error.main : props.theme.colors.black};
  border-color: ${(props) =>
    props.invalid ? props.theme.colors.error.main : props.theme.colors.black};
`;
