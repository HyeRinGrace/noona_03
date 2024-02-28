import React,{useState} from 'react'
import '../App.css';
import {useNavigate} from 'react-router-dom'


const ProductCard = ({item}) => {

    let nav = useNavigate();
    const gotoProductDetailPage = () =>{
        nav(`/products/${item.id}`);
    }
    

  return (
    <>
    <div className='itemContainer' onClick={gotoProductDetailPage}>
        <img className='itemImg' src={item?.img}></img>
        <div className='itemTitle'>{item?.title}</div>
        <div className='itemPrice'>{item?.price}</div>
        <div className='itemNew'>{item?.new == true?'new':''}</div>
    </div>            
    </>
  )
}

export default ProductCard
