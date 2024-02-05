import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'antd/lib/form/Form';
import { Input, Form, Button, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import {
 
  authLogin,
  
} from '@app/utils/oidc-providers';
import { setAuthentication } from '@app/store/reducers/auth';
import { setWindowClass } from '@app/utils/helpers';
import { useFormik } from 'formik';


const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [form] = useForm();

  const login = async (User_Name: string, password: string) => {
    try {
      setAuthLoading(true);
      setAuthLoading(true);
      const response = await authLogin(User_Name, password);
      dispatch(setAuthentication(response as any));
      toast.success('Login is succeed!');
      setAuthLoading(false);
      // dispatch(loginUser(token));
      navigate('/');
    } catch (error: any) {
      setAuthLoading(false);
      toast.error(error.message || 'Failed');
    }
  };
  const onFinish = (values: any) => {
    login(values.User_Name, values.password);
  };

  const validationSchema = Yup.object({
    User_Name: Yup.string().email('Invalid User_Name address').required('Required'),
    password: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
  });
  const {  } = useFormik({
    initialValues: {
      User_Name: '',
      password: '',
    },
   
    validationSchema: Yup.object({
      User_Name: Yup.string().email('Invalid User_Name address').required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    }),
    onSubmit: (values: { User_Name: string; password: string; }) => {
      login(values.User_Name, values.password);
    },
    
  });

  setWindowClass('hold-transition login-page');
  
  

   return (
    <div className="login-box" 
      style={{ 
        borderRadius:'1%',
        margin:'20px',
        //border: '1px solid #274a9f',
        // backgroundColor: '#274a9f',
        
        //boxShadow: '4px 4px 6px rgba(25, 25, 25, 255)',
        padding: '20px',
        }}>
      <div className="card card-outline card"
               style={{
                borderRadius:'5%',
               backgroundColor: 'rgb(255, 255, 255)',
              }}>
        <div className="card-header text-center">
        <div className='card-header img-center'
        style={{ paddingLeft:'30%',}}>
        <img
    src='../../../../Public/favicon.ico'
    style={{
      
         borderRadius: '50%', 
         width: '100px', 
         height: '100px', 
         backgroundColor: 'whitesmoke', 
         }}
    alt="Icon"
  />
         </div>      
          <Link to="/" className="h6">
            <b>እንኳን ወደ ማኅበረ ቅዱሳን </b>
            <span>ፖርታል በደህና መጡ!</span>
          </Link>
        </div>

          <div className="card-body">
            <p className="login-box-msg"></p>
            <Form  form={form} onFinish={onFinish}>
              <div className="mb-3">
                 <Form.Item
                        name="User_Name"
                        rules={[{ required: true, 
                        message: 'The user name is Required' }, 
                        { type: 'email', message: 'Invalid User_Name address'
                         }]} >
                   <Input
                        prefix={<i className="fas fa-envelope" />} 
                        placeholder="User_Name" />
                 </Form.Item>
              </div>
              <div className="mb-3">
                 <Form.Item
                       name="password"
                        rules={[{ required: true, message: 'The pasword is requred' },
                       { min: 5, message: 'Must be 5 characters or more' }, 
                       { max: 30, message: 'Must be 30 characters or less' }]}
                      >
                    <Input.Password 
                        prefix={<i className="fas fa-lock" />} 
                         placeholder="Password" />
                </Form.Item>
              </div>
            
              <div className="row">
              <Form.Item>
                
                  <Checkbox >RememberMe</Checkbox>
               

                  <a style={{textAlign:'end'}}
                  
                  className="login-form-forgot" href="/forgot-password">
                    Forgot password
                </a>
                <div className="row">
              <div className="col-12">
              
               <Button
                 style={{
                        margin:'15px'
                
                       }}
                 type="primary"
                 htmlType="submit"
                 className="login-form-button"
                 loading={isAuthLoading}
               
                 block     >
                  Login
               </Button> 
                </div>
             
                </div>
            </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
     
    
    );
 
   }
  export default Login;
   
