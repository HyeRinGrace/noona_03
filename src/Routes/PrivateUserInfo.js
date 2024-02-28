import React from 'react'
import {Navigate} from 'react-router-dom'
import ProductDetail from '../Pages/ProductDetail'

const PrivateUserInfo = ({authority}) => {

  return authority==true?<ProductDetail/>:<Navigate to = '/login'></Navigate>
}

export default PrivateUserInfo
