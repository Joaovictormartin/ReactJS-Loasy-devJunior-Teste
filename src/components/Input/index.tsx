import { InputHTMLAttributes } from "react";
import { Field, FieldProps } from "formik";
import { Container, Label, Error, inputStyle } from "./styles";

interface Props extends InputHTMLAttributes<FieldProps> {
  label: string;
  name: string;
  error?: string;
  showButton?: boolean;
  showError?: boolean;
}

export function Input({
  label,
  name,
  error,
  showError = false,
  ...rest
}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field name={name} id={name} {...rest} style={inputStyle} />

      {showError && !!error && (
        <Error>
          <span>Email e/ou senha incorretos.</span>
        </Error>
      )}

      {/* <Button type="submit">Entrar</button> */}
    </Container>
  );
}
