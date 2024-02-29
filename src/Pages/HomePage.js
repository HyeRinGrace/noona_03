import React, { useEffect,useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ProductThunk } from '../Redux/thunk/ProductThunk';
import {useDispatch,useSelector} from 'react-redux';

const HomePage = () => {
  const ProductList = useSelector((state)=>state.ProductList);
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () =>{
    let searchQuery = query.get('q')||" ";
    dispatch(ProductThunk.getProducts(searchQuery));
  }

  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {ProductList?.map((menu)=> (
              <Col key={menu.id} lg={3}><ProductCard item ={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default HomePage
