import React from 'react'
import { useFormik } from 'formik';
export default function Register() {

  function handleRegisterSubmit(values){
        console.log('Registered....');
        console.log(values);
  } 

  function validate(values) {
    let errors = {};
    // validation code here
    if (!values.name) {
      errors.name = 'Name is required';
    }else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }else if (values.name.length > 15) {
      errors.name = 'Name must be less than 15 characters';
    }else if (!/^[a-zA-Z]+$/.test(values.name)) {
      errors.name = 'Name must contain only letters';
    }else if (!values.phone) {
      errors.phone = 'Phone is required';
    }else if (!/^[0-9]{11}$/.test(values.phone)) {
      errors.phone = 'Phone must be 8 digits';
    }else if (!values.email) {
      errors.email = 'Email is required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }else if (!values.password) {
      errors.password = 'Password is required';
    }else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }else if (values.password.length > 20) {
      errors.password = 'Password must be less than 20 characters';
    }else if (values.rePassword !== values.password) {
      errors.rePassword = 'Passwords must match';
    }

    return errors;
    // return console.log(errors);
  }

  let formik = useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        password: '',
        rePassword: ''
      },
      validate,
      onSubmit: handleRegisterSubmit
  });

  return <>
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text" 
            className="form-control" 
            name="name" 
            id="name"
            onChange={formik.handleChange}   
            onBlur={formik.handleBlur}
            value={formik.values.name} 
          />
          {formik.errors.name && formik.touched.name ? <div className="alert alert-danger mt-2">{formik.errors.name}</div>:null}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone"
            name="phone"
            onChange={formik.handleChange}   
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger mt-2">{formik.errors.phone}</div>:null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            name="email"
            onChange={formik.handleChange}   
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? <div className="alert alert-danger mt-2">{formik.errors.email}</div>:null}
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name="password"
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}  
            value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger mt-2">{formik.errors.password}</div>:null}
        </div>
        <div className="mb-3">
          <label htmlFor="repassword" className="form-label">Retype Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="repassword"
            name="rePassword"
            onChange={formik.handleChange}  
            onBlur={formik.handleBlur} 
            value={formik.values.rePassword}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger mt-2">{formik.errors.rePassword}</div>:null}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  </>
   
  
}
