import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import LoginUser from '../assets/LoginIcon.svg';
import '../App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Components/Navbar.css';
import Nav from 'react-bootstrap/Nav';

const Navbar = ({ authority, setAuthority }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', "Sale", "지속가능성"];

    const [isMenuOpen, setMenuOpen] = useState(false); 

    const nav = useNavigate();

    const goToLoginPage = () => {
        nav('/login');
    };

    const goHomePage = () => {
        nav('/');
    };

    const searchItem = (event) => {
        if (event.key === 'Enter') {
            let searchText = event.target.value;
            nav(`/?q=${searchText}`);
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
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
                    <div className="mobileMenu" onClick={handleMenuToggle}>
                        <FontAwesomeIcon icon={faBars} />
                
                    </div>
                
                    {authority === true ? (
                        <div className='Log'>
                            <img src={LoginUser} style={{ width: '24px', padding: '5px' }} />
                            <div className='loginText' onClick={LogoutCheck}>로그아웃</div>
                        </div>
                    ) : (
                        <div className='Log'>
                            <FontAwesomeIcon icon={faUser} />
                            <div className='loginText' onClick={LoginCheck}>로그인</div>
                        </div>
                    )}
                    
                    
                </div>
            </div>
            <div className='logo' onClick={goHomePage}>
                <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png' />
            </div>
            <div className='MenuSearchContainer'>
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
