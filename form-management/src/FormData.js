import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormData(values, errors, touched) {
    return (
        <Form>
            <div>
                <Field type="text" name="name" placeholder="Insert Name Here" />
            </div>
            <div>
            {touched.email &&  errors.email && <p> {errors.email}</p>}
                <Field type="email" name="email" placeholder=" Insert Email Here" />
            </div>
            <div>
                {touched.password &&  errors.password &&<p> {errors.password}</p>}
                <Field type="password" name="password" placeholder=" Insert Password Here" />
            </div>
            <div>
                <label>
                <Field type="checkbox" name="termsOfService" checked={value.termsOfService} />
                Accept terms of Service
                </label>
            </div>
            <button> Submit </button>
       </Form>
    ); 
}

const FormikFormData = withFormik({

    mapPropsToValues({ name, email, password, checkbox}) {
        return{
              name: name || '',
              email: email || '',
              password: password || '',
            termsOfService: termsOfService || ''

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .name()
            .required(),
        email: Yup.string("Sorry, email is not valid")
            .email("Sorry, email is required")
            .required(),
        password: Yup.string()
            .min(6, "Password must be 6 or more characters")
            .required(),
        termsOfService: Yup.string()
            .termsOfService("Checkbox is required to continue")
            .required(),
    }),
    handleSubmit(values) {
        console.log(values)
        // form submission
    }
}) (FormData);



export default FormikFormData;

