import React from 'react';
import { withFormik, Form, Field } from "formik";

function FormData() {
    return (
        <Form>

            <Field type="text" name="name" placeholder="Insert Name Here" />
            <Field type="email" name="email" placeholder=" Insert Email Here" />
            <Field type="password" name="password" placeholder=" Insert Password Here" />
            <Field type="checkbox" name="terms of service" />
           
            <button> Submit </button>
       </Form>
    ); 
}

const FormikFormData = withFormik({

    mapPropsToValues({ username, password}) {
        return{
              username: username || '',
              password: password || ''  
        };
    }
}) (FormData);



export default FormData;

