import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LoginThunk } from '../Redux/Action/LoginThunk';
import { useNavigate } from 'react-router-dom';

const email = "test@naver.com";
const password = '1234';

const LoginPage = ({ setAuthority }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [loginError, setLoginError] = useState(false); // 로그인 정보 체크 상태 함수
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginAction = async (event) => {
    event.preventDefault();
    dispatch(LoginThunk.loginCheck(email, password));
    if (inputEmail === email && inputPw === password) {
      setAuthority(true);
      navigate('/');
    } else {
      setLoginError(true); 
    }
  }

  const CheckEmail = (event) => {
    setInputEmail(event.target.value);
    setLoginError(false); 
  }

  const CheckPw = (event) => {
    setInputPw(event.target.value);
    setLoginError(false); 
  }

  return (
    <div className='LoginContainer'>
      <Form onSubmit={(event) => LoginAction(event)}>
        <h1 className='LoginHeader'>Login</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="test@naver.com" onChange={(event) => CheckEmail(event)} value={inputEmail} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="1234" onChange={(event) => CheckPw(event)} value={inputPw} />
        </Form.Group>
        {loginError && <p className="text-danger">존재하지 않는 유저입니다.</p>}
        <button className='LoginBtn' type='submit'>Enter</button>
      </Form>
    </div>
  )
}

export default LoginPage;
