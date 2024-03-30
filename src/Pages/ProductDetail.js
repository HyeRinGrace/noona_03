// ProductDetail.js
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { ProductDetailThunk } from '../Redux/thunk/ProductDetailThunk';
import {useDispatch,useSelector} from 'react-redux';
import BuyPage from '../Pages/BuyPage';

const ProductDetail = () => {
  const ProductID = useSelector((state)=>state.productDetail.ProductDetailItem);

  let { id } = useParams();
  let [detailItem, setDetailItem] = useState({});
  let [selectedProduct, setSelectedProduct] =useState({});
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let ref = useRef('');

  let size = [];
  size = detailItem.size;

  const getProductDetailURL = () =>{
    dispatch(ProductDetailThunk.getID(id));
  }

  const Select = (event)=>{
    const selectValue = event.target.value;
    setSelectedProduct(selectValue);
  }


  useEffect(() => {
    getProductDetailURL();
  }, [id]);

  const MoveToBuyPage = () => {
    navigate(`/BuyPage`);
  };

  return (
    <div>
      <div className='itemDetailContainer'>
        <Row>
          <Col>
            <img className='itemDetailImg' src={ProductID?.img} alt={ProductID?.title}></img>
          </Col>
          <Col>
            <div className='itemDetailTitle'>{ProductID?.title}</div>
            <div className='itemDetailPrice'>{ProductID?.price}</div>
            <div className='itemDetailNew'>{ProductID?.new ? 'New' : ''}</div>
            <div className='Selector' style={{ paddingTop: '20px' }}>
              <select onChange={(event) => Select(event)}>
                {ProductID.size?.map((item, index) => (
                  <option key={index} value={item}>{item}
                  </option>
                ))}
              </select>
            </div>
            <div className='boxContainer'>
              <button onClick={MoveToBuyPage}>Buy</button>
              <button>Cart</button>
            </div>
          </Col>
        </Row>
      </div>
      {selectedProduct && <BuyPage  selectedProduct = {selectedProduct}/>}
    </div>
    
  );
};

export default ProductDetail;
