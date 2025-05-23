import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Add() {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div>
                <Formik
                    initialValues={{ img: '', name: '', price: '' }}
                    validationSchema={Yup.object({
                        img: Yup.string()
                            .required('Required'),
                        name: Yup.string()
                            .required('Required'),
                        price: Yup.number().required('Required'),
                    })}
                    onSubmit={(values) => {
                        axios
                            .post('http://localhost:3000', values)
                            .then(res => navigate("/admin"))
                    }}
                >
                    <Form>
                        <label htmlFor="img">IMG</label>
                        <Field name="img" type="text" />
                        <ErrorMessage name="img" />

                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />

                        <label htmlFor="price">Price</label>
                        <Field name="price" type="price" />
                        <ErrorMessage name="price" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Add