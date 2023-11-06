import styled from '@emotion/styled';
import {
  Form as StyledForm,
  Field as FormFieldStyled,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const FormContainer = styled.div``;

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  font-size: 18px;
  font-weight: 600;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-weight: 600;
`;

export const Field = styled(FormFieldStyled)`
  width: 300px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: yellow;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;
