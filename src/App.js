import './App.css';
import React,{useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
// import ProductDetail from './Pages/ProductDetail';
import Navbar from './Components/Navbar';
import PrivateUserInfo from './Routes/PrivateUserInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
// 1. 로그인, 전체 상품페이지, 상품 상세페이지
// 1-1. 네비게이션 바 만들어주기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다. 
// 3. 로그인 버튼을 누르면, 로그인 페이지가 나온다. 
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있는 경우에 로그인페이지로 리다이렉팅 한다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다. 
// 6. 로그인이 되어있느 경우 로그아웃으로 변동된다.(로그아웃 버튼을 클릭하면 로그아웃이 된다.)
// 7. 로그아웃이 되면 다시 상품상세페이지를 볼 수 없다. 
// 8. 상품 검색이 가능하다. 
function App() {
  let [authority, setAuthority] = useState(false);

  useEffect(()=>{},[authority]);

  return (
    <div>
      <Navbar authority = {authority}/>
      <Routes>
        <Route path='/' element ={<HomePage authority = {authority}/>}/>
        <Route path='/login' element ={<LoginPage setAuthority = {setAuthority}/>}/>
        <Route path='/products/:id' element ={<PrivateUserInfo authority = {authority}/>}/>
      </Routes>
    </div>
  );
}

export default App;
