import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import {Col,Row} from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  let [detailItem, setDetailItem] = useState({}); // 초기 상태를 빈 객체로 설정

  const getProductDetailURL = async () => {
    let url = `https://my-json-server.typicode.com/HyeRinGrace/noona_03/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setDetailItem(data);
  };

  useEffect(() => {
    getProductDetailURL();
  }, []); // id가 변경될 때마다 useEffect가 다시 실행되도록 설정
  

  return (
    <div>
      <div className='itemDetailContainer'>
        <Row>
          <Col>
            <img className="itemDetailImg"src={detailItem?.img}></img>
          </Col>
          <Col>
          <div className='itemDetailTitle'>{detailItem?.title}</div>
          <div className='itemDetailPrice'>{detailItem?.price}</div>
          <div className='itemDetailNew'>{detailItem?.new == true?'New':''}</div>
          {/* <select id="size" name ="size">
            <option value = 's'>{detailItem?.size[0]}</option>
            <option value = 'm'>{detailItem?.size[1]}</option>
            <option value = 'l'>{detailItem?.size[2]}</option>
          </select> */}
          <div className='boxContainer'>
            <button>Buy</button>
            <button>Cart</button>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;