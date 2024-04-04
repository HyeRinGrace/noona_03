// LoginPage 컴포넌트 수정
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../Redux/Slicers/LoginReducer'; // 수정: 올바른 리듀서 파일을 가져옴
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setAuthority }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = "test@naver.com";
  const password = '1234';

  const LoginAction = async (event) => {
    event.preventDefault();
    if (inputEmail === email && inputPw === password) {
      dispatch(loginSuccess({ email, password }));
      setAuthority(true);
      navigate('/');
    } else {
      dispatch(loginFailure());
    }
  }

  const CheckEmail = (event) => {
    setInputEmail(event.target.value);
  }

  const CheckPw = (event) => {
    setInputPw(event.target.value);
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
        {loginFailure ? '' : <p className="text-danger">존재하지 않는 유저입니다.</p>}
        <button className='LoginBtn' type='submit'>Enter</button>
      </Form>
    </div>
  )
}

export default LoginPage;
