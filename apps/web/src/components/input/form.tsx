import { InputField, InputFieldProps } from "./input-field";
import { useEffect, useState } from "react";

import { Button } from "./button";
import { FlexRow } from "../layout/flex-row";
import { Heading } from "../typography";
import styled from "styled-components";

type FormProps = {
  heading?: string;
  submitText?: string;
  onSubmit: (any) => void;
  fields: Array<Omit<InputFieldProps, "onValueChange">>;
};

export const Form = ({ heading, submitText, onSubmit, fields }: FormProps) => {
  const [formState, setFormState] = useState({});

  const updateFormState = ([name, value]: [string, string | number]) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <FormWrapper>
      {heading && <Heading level={4}>{heading}</Heading>}
      <InputsGrid>
        {fields.map((field) => (
          <InputField
            key={field.name}
            onValueChange={updateFormState}
            {...field}
          />
        ))}
      </InputsGrid>
      <FlexRow>
        <Button primary onClick={() => onSubmit(formState)}>
          {submitText ?? "Submit"}
        </Button>
      </FlexRow>
    </FormWrapper>
  );
};

const FormWrapper = styled.div``;
const InputsGrid = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: ${(props) => props.theme.spacing.medium};

  label {
    text-align: right;
  }
`;
