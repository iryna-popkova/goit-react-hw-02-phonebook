import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Field,
  Form,
  Button,
  FormContainer,
  FormGroup,
  ErrorMessage,
} from './contactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onSubmit(values);
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" placeholder="Mike" />
            <ErrorMessage name="name" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="number" placeholder="+380..." />
            <ErrorMessage name="number" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
