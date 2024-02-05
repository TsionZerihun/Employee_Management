import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { setWindowClass } from '@app/utils/helpers';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ForgotPassword = () => {
  const [t] = useTranslation();

  const { handleChange, values, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      toast.warn('Not yet functional');
      console.log('values', values);
    },
  });

  setWindowClass('hold-transition login-page');

  return (
    <div className="login-box" 
    style={{ 
      borderRadius:'2%',
      margin:'20px',
      border: '1px solid #274a9f',
      backgroundColor: '#274a9f',
      
      boxShadow: '4px 4px 6px rgba(25, 25, 25, 255)',
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
       backgroundColor: 'lightgray', 
       }}
       alt="Logo"
/>
        </div>
          <Link to="/" className="h1">
            <b>Mk</b>
            <span>Portal</span>
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">{t('recover.forgotYourPassword')}</p>
          <Form onFinish={handleSubmit}>
            <Form.Item
              name="email"
              validateStatus={touched.email && errors.email ? 'error' : ''}
              help={touched.email && errors.email ? errors.email : ''}
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
            </Form.Item>
            <div className="row">
              <div className="col-12">
                <Button htmlType="submit" block>
                  {/* @ts-ignore */}
                  {t('recover.requestNewPassword')}
                </Button>
              </div>
            </div>
          </Form>
          <p className="mt-3 mb-1">
            <Link to="/login">{t('login.button.signIn.label')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
