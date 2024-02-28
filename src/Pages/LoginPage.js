import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import '../App.css';

const email = 'kdjsanh@naver.com';
const password = '1234';

const LoginPage = ({setAuthority}) => {
  const [inputEmail,setInputEmail] = useState('');
  const [inputPw,setInputPw] = useState('');


  const LoginAction = (event)=>{ 
    event.preventDefault();
    if(inputEmail == email && inputPw == password){
      setAuthority(true);
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
