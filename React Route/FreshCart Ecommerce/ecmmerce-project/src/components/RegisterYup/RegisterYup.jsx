import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function RegisterYup() {

  const navigate = useNavigate();
  const [isLoading , setisLoading] = useState(false);
  const [messageError , setmessageError] = useState('');

 async function handleRegisterSubmit(values){

        console.log('Registered....');
        console.log(values);

         setisLoading (true);

        // axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values).then((response)=>{
        //   console.log(response.data);
        //   setisLoading (false);
        // }).catch((error)=>{
        //   console.log(error.response.data.message);
        //   setisLoading (false);
        // });
      
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values).catch((error)=>{
          console.log(error.response.data.message);
          setisLoading (false);
          setmessageError (`${error.response.data.statusMsg}: ${error.response.data.message} Please try again`);
        });
        console.log(data);
        if (data.message === 'success') {
          setisLoading (false);
          navigate('/Login');
        }
         
        


  } 

 
  let formik = useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        password: '',
        rePassword: ''
      },
      validationSchema: yup.object({
        name: yup.string().required('Name is required').min(3,'Name must be at least 3 characters').max(15,'Name must be at most 15 characters'),
        phone: yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/,'Phone must be a valid Egyptian mobile number'),
        email: yup.string().required('Email is required').email('Email must be a valid email address'),
        password: yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Password must be at least 8 characters, include at least one letter and one number'),
        rePassword: yup.string().required('Retype Password is required').oneOf([yup.ref('password')],'Passwords must match')
      }),
      onSubmit: handleRegisterSubmit
    });

  return <>
    <div>
      <form onSubmit={formik.handleSubmit} >
      {messageError ? <div className="alert alert-danger">{messageError}</div> : null}
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
    { isLoading ? <button className="btn btn-primary"  disabled><i className='fas fa-spinner fa-spin'></i></button> :
            <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Register</button>
    }

      </form>
    </div>
  </>
   
  
}
