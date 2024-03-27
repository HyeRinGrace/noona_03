import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Card } from 'react-bootstrap';

const CartPage = () => {
    const productDetail = useSelector(state => state.productDetail.ProductDetailItem);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (productDetail) {
            if (!cartItems.find(item => item.id === productDetail.id)) {
                setCartItems(prevCartItems => [...prevCartItems, productDetail]);
            }
        }
    }, [productDetail, cartItems]);


    return (
        <div className="container">
            <h3 className="mt-4 mb-4">구매하기</h3>
            {cartItems.map((item, index) => (
                <Card key={index} className="Card">
                    <Row className="align-items-center">
                        <Col xs={3} md={2}>
                            <Card.Img src={item.img} alt={item.title} style={{ width: '60%' }} />
                        </Col>
                        <Col xs={9} md={10}>
                            <Card.Body>
                                <Card.Title style={{color:'red'}}>{item.new ? 'new':''}</Card.Title>
                                <Card.Title>{item.title}
                                </Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Row className="justify-content-between align-items-end">
                                    <Col xs={12} md={6}>
                                        <p className="price">가격: {item.price}</p>
                                    </Col>
                                    <Col xs={10} md={5} style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Row style={{
                paddingTop:'100px',
                display:'fex',
                justifyContent:'center'
                }}>
                <Button className="justify-content-center"variant='danger' style={{ width:'200px',padding:'10px',}}>구매하러 가기</Button> 
            </Row>           
        </div>
    );
};

export default CartPage;
