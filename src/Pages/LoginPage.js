import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import '../App.css';
import {useDispatch,useSelector} from 'react-redux'
import { LoginThunk } from '../Redux/thunk/LoginThunk';
import {useNavigate} from 'react-router-dom'

const email = 'kdjsanh@naver.com';
const password = '1234';

const LoginPage = ({setAuthority}) => {
  const [inputEmail,setInputEmail] = useState('');
  const [inputPw,setInputPw] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const LoginAction = async(event)=>{ 
    event.preventDefault();
    dispatch(LoginThunk.loginCheck(email,password));
    if(inputEmail == email && inputPw == password){
      setAuthority(true);
      navigate('/');
    }else{
      setAuthority(false);
    }
  }

  //email 확인하는 영역
  const CheckEmail = (event) =>{
    setInputEmail(event.target.value);
  }

  //password 확인하는 영역
  const CheckPw = (event) => {
    setInputPw(event.target.value);
  }
  
  return (
    <div className='LoginContainer'>
        <Form onSubmit={(event)=>LoginAction(event)}>
          <h1 className='LoginHeader'>Login</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => CheckEmail(event)} value={inputEmail}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event)=> CheckPw(event)} value={inputPw}/>
          </Form.Group>
          <button className='LoginBtn' type='submit'>Enter</button>
        </Form>
    </div>
  )
}

export default LoginPage
