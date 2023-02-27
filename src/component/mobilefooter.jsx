import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Icons from "react-icons/fa";


import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';



export default function Mobilefooter() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);






    return (
        <div style={{}}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Electronics & Mobiles</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Tablests</a>
                            <a>Laptops</a>
                            <a>mobiles</a>
                            <a>Home Appliances</a>
                            <a>Camera & photo</a>
                            <a>Televisions</a>
                            <a>Headphones</a>
                            <a>Video Games</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>Fashion</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Women's fashion</a>
                            <a>Men's Fashion</a>
                            <a>Girl's Fashion</a>
                            <a>Boy's Fashion</a>
                            <a>Watches</a>
                            <a>Jewelery</a>
                            <a>Women's Handbags</a>
                            <a>Men's Eyewear</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>




                <Accordion.Item eventKey="2">
                    <Accordion.Header>Home & Kitchen</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Bath</a>
                            <a>Home Decor</a>
                            <a>Kitchen & Dining</a>
                            <a>Tools & Improvement</a>
                            <a>Audio & Video</a>
                            <a>Furniture</a>
                            <a>Patio, Lawn</a>
                            <a>Pet Supplies</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                <Accordion.Header>Beauty & Fragrances</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Fragrances</a>
                            <a>Make-up</a>
                            <a>Haircare</a>
                            <a>Skincare</a>
                            <a>Bath & Body</a>
                            <a>Electronic Beauty Tool</a>
                            <a>Men's Grooming</a>
                            <a>Health Care Essential</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="4">
                <Accordion.Header>Baby & Toys</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Diapering</a>
                            <a>Baby Transport</a>
                            <a>Nursing & Feeding</a>
                            <a>Kids Fashion</a>
                            <a>Toddles Toys</a>
                            <a>Tricycles & Scooters</a>
                            <a>Board Games &Card</a>
                            <a>Outdoor Play</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>




                <Accordion.Item eventKey="5">
                    <Accordion.Header>Home & Kitchen</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Bath</a>
                            <a>Home Decor</a>
                            <a>Kitchen & Dining</a>
                            <a>Tools & Improvement</a>
                            <a>Audio & Video</a>
                            <a>Furniture</a>
                            <a>Patio, Lawn</a>
                            <a>Pet Supplies</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                <Accordion.Header>Grocery</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <a>Grocery1</a>
                            <a>Grocery2</a>
                            <a>Grocery3</a>
                            <a>Grocery4</a>
                            <a>Grocery5</a>
                            <a>Grocery6</a>
                            <a>Grocery7</a>
                            <a>Grocery8</a>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="7">
                <Accordion.Header>Sports</Accordion.Header>
                    <Accordion.Body>
                        <Row style={{textDecoration:"underline"}} >
                            <Link to="">Camping & Hiking</Link>
                            <Link to="">Cycling</Link>
                            <Link to="">Scooters & Accessories</Link>
                            <Link to="">Strength Training</Link>
                            <Link to="">Yoga</Link>
                            <Link to="">Exercise Accessories</Link>
                            <Link to="">Combat Sports</Link>
                            <Link to="">Team Sports</Link>
                            <Link to="">Racquet Sports</Link>
                            <Link to="">Water Sports</Link>
                            <Link to="">Sports Nutrition</Link>
                        
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>






            </Accordion>
        </div>
    )
}
