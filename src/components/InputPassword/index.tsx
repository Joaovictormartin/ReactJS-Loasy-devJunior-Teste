import { InputHTMLAttributes } from "react";
import { Field, FieldProps } from "formik";

import { Container, Label, Error, Button, inputStyle } from "./styles";

interface Props extends InputHTMLAttributes<FieldProps> {
  label: string;
  name: string;
  error?: string;
}

export function InputPassword({ label, name, error, ...rest }: Props) {
  return (
    <Container>
      <div>
        <div>
          <Label>{label}</Label>
          <Field name={name} id={name} {...rest} style={inputStyle} />
        </div>
        <Button type="submit">Entrar</Button>
      </div>

      {!!error && (
        <Error>
          <span>Email e/ou senha incorretos.</span>
        </Error>
      )}
    </Container>
  );
}
