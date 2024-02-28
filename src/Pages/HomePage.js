import React, { useEffect,useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [productList,setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();

  const getProducts = async () =>{
    let searchQuery = query.get('q')||" ";
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  }

  useEffect(()=>{
    getProducts();
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=> (
              <Col key={menu.id} lg={3}><ProductCard item ={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default HomePage
