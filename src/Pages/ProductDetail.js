import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../Redux/Slicers/reducer';
import BuyPage from '../Pages/BuyPage';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.products.productDetailItem);

  console.log(productDetail);

  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
  };

  const selectSize = (event) => {
    setSelectedProduct(event.target.value);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const moveToBuyPage = () => {
    navigate(`/BuyPage`);
  };

  return (
    <div>
      <div className='itemDetailContainer'>
        <Row>
          <Col>
            <img className='itemDetailImg' src={productDetail.img} alt={productDetail.title} />
          </Col>
          <Col>
            <div className='itemDetailTitle'>{productDetail.title}</div>
            <div className='itemDetailPrice'>{productDetail.price}</div>
            <div className='itemDetailNew'>{productDetail.new ? 'New' : ''}</div>
            <div className='Selector' style={{ paddingTop: '20px' }}>
              <select onChange={(event) => selectSize(event)}>
                {productDetail.size &&
                  productDetail.size.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </div>
            <div className='boxContainer'>
              <button onClick={moveToBuyPage}>Buy</button>
              <button>Cart</button>
            </div>
          </Col>
        </Row>
      </div>
      {selectedProduct && <BuyPage selectedProduct={selectedProduct} />}
    </div>
  );
};

export default ProductDetail;
