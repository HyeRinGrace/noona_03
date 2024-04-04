import React, { useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Slicers/reducer';

const HomePage = () => {
  const productList = useSelector((state) => state.products.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchQuery = query.get('q') || '';
    dispatch(fetchProducts(searchQuery));
  }, [query, dispatch]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col key={menu.id} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
