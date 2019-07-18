import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormData({values, errors, touched}) {
    return (
        <Form>
            <div>
                <br/>
                Full Name: &nbsp;
                <Field type="text" name="name" placeholder="Insert Name Here" />
            </div>
            <div>
                Email: &nbsp;
            {touched.email &&  errors.email && <p> {errors.email}</p>}
                <Field type="email" name="email" placeholder=" Insert Email Here" />
            </div>
            <div>
                Password: &nbsp;
                {touched.password &&  errors.password &&<p> {errors.password}</p>}
                <Field type="password" name="password" placeholder=" Insert Password Here" />
            </div>
            <br/>
            <div>
                <label>
                <Field type="checkbox" name="termsOfService" checked={values.termsOfService} />
                Accept Terms Of Service
                </label>
            </div>
            <button> Submit </button>
       </Form>
    ); 
}

const FormikFormData = withFormik({

    mapPropsToValues({ name, email, password, tos}) {
        return{
              name: name || '',
              email: email || '',
              password: password || '',
              tos: tos || false,

        };
    },
    validationSchema: Yup.object().shape({
       
        email: Yup.string(" Email address is not valid")
            .email("Email address is required")
            .required(),
        password: Yup.string()
            .min(8, "Password must be 8 or more characters")
            .required(),
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        if (values.email === "alreadytaken@atb.dev") {
            setErrors({email: "That email is already taken"});
        } else {
            axios
                .post("_https://reqres.in/api/users_", values)
                console.log(values)
                .then(res => {
                    console.log(res); 
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); 
                    setSubmitting(false);
                });
        }
        
    }

    
}) (FormData);



export default FormikFormData;

