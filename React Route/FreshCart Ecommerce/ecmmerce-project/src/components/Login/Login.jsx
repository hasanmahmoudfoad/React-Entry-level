import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Login(props) {
  
              console.log( "save user data" , props);

  
  const navigate = useNavigate();
  const [isLoading , setisLoading] = useState(false);
  const [messageError , setmessageError] = useState('');

 async function handleLogin(values){

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
      
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values).catch((error)=>{
          console.log(error.response.data.message);
          setisLoading (false);
          setmessageError (`${error.response.data.statusMsg}: ${error.response.data.message} Please try again`);
        });
        console.log(data);
        
        if (data.message === 'success') {
          localStorage.setItem('userToken' , data.token);
          props.saveUserData();

          setisLoading (false);
          navigate('/');
        }
         
        


  } 

 
  let formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: yup.object({
        email: yup.string().required('Email is required').email('Email must be a valid email address'),
        password: yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'Password must be at least 8 characters, include at least one letter and one number'),
      }),
      onSubmit: handleLogin
    });

  return <>
    <div>
      <form onSubmit={formik.handleSubmit} >
      {messageError ? <div className="alert alert-danger">{messageError}</div> : null}

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

    { isLoading ? <button className="btn btn-primary"  disabled><i className='fas fa-spinner fa-spin'></i></button> :
            <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Login</button>
    }

      </form>
    </div>
  </>
   
  
}
