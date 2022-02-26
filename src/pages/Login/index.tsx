import { useCallback } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/useAuth";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, Content, Header, Logo, Title, WrapperForm } from "./styles";

interface User {
  email: string;
  password: string;
}

export function Login() {
  const { login } = useAuth();

  const handleSubmitForm = useCallback(
    async (data: User, { setSubmitting, setErrors, resetForm }) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().email(" ").required(" "),
          password: Yup.string().min(8, " ").required(" "),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({
          email: data.email,
          password: data.password,
        });

        resetForm({});
        setSubmitting(true);
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErrors(e);
          setErrors(errors);
          return;
        }
      }
    },
    []
  );

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
          <Title>Books</Title>
        </Header>

        <WrapperForm>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmitForm}
          >
            {({ errors, isValid }) => (
              <Form>
                <Input label="Email" name="email" error={errors.email} />

                <InputPassword
                  label="Senha"
                  name="password"
                  type="password"
                  error={errors.password}
                />
              </Form>
            )}
          </Formik>
        </WrapperForm>
      </Content>
    </Container>
  );
}
