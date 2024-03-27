import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import LoginUser from '../assets/LoginIcon.svg';
import '../App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authority, setAuthority }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', "Sale", "지속가능성"];

    // login 페이지로 이동되는 useNavigate 사용
    const nav = useNavigate();
    const goToLoginPage = () => {
        nav('/login');
    };

    // 홈으로 이동
    const goHomePage = () => {
        nav('/');
    };

    const searchItem = (event) => {
        if (event.key === 'Enter') {
            let searchText = event.target.value;
            nav(`/?q=${searchText}`);
        }
    };

    const LoginCheck = () => {
        if (authority === true) {
            console.log('aa');
        }
    };

    const LogoutCheck = () => {
        setAuthority(false);
    };

    return (
        <>
            <div className='NavContainer'>
                <div className='loginBtn' onClick={goToLoginPage}>
                    {authority === true ? (
                        <>
                            <img src={LoginUser} style={{ width: '24px', padding: '5px' }} />
                            <div className='loginText' onClick={LogoutCheck}>로그아웃</div>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faUser} />
                            <div className='loginText' onClick={LoginCheck}>로그인</div>
                        </>
                    )}
                </div>
            </div>
            <div className='logo' onClick={goHomePage}>
                <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png' />
            </div>
            <div>
                <div className='menuContainer'>
                    <ul className='menuList'>
                        {menuList.map((item, index) =>
                            <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className='searchInput'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='Search Item' onKeyPress={(event) => searchItem(event)}></input>
                </div>
            </div>
        </>
    );
};

export default Navbar;
