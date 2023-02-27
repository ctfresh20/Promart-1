import React from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';

import slider1 from "./images/slider1.jpg"
import slider2 from "./images/slider2.jpg"
import slider3 from "./images/slider3.jpg"
import slider4 from "./images/slider4.jpg"
import slider5 from "./images/slider5.jpg"
import slider6 from "./images/slider6.jpg"
import slider7 from "./images/slider7.jpg"


// import merge from "./images/merge.png"
// import codephone from "./images/codephone.png"
import Category from "./category";



import reason1 from "./images/reason1.png"
import reason2 from "./images/reason2.png"
import reason3 from "./images/reason3.png"
import reason4 from "./images/reason4.png"

import deals1 from "./images/deals1.png"
import deals2 from "./images/deals2.png"
import deals3 from "./images/deals3.png"
import deals4 from "./images/deals4.png"

import focus1 from "./images/focus1.png"
import focus2 from "./images/focus2.png"
import Recommended from "./recommended";

import carousel1 from "./images/carousel1.png"
import carousel2 from "./images/carousel2.png"

import giftbanner from "./images/giftbanner.jpg"
import Trending from "./trending";
import homebanner from "./images/homebanner.png"
import Clearance from "./clearance";

import women1 from "./images/women1.png"
import women2 from "./images/women2.png"
import women3 from "./images/women3.png"
import women4 from "./images/women4.png"
import women5 from "./images/women5.png"
import women6 from "./images/women6.png"

import men1 from "./images/men1.png"
import men2 from "./images/men2.png"
import men3 from "./images/men3.png"
import men4 from "./images/men4.png"
import men5 from "./images/men5.png"
import men6 from "./images/men6.png"

import kids1 from "./images/kids1.png"
import kids2 from "./images/kids2.png"
import kids3 from "./images/kids3.png"
import kids4 from "./images/kids4.png"
import kids5 from "./images/kids5.png"
import kids6 from "./images/kids6.png"


// import transportbanner from "./images/transportbanner.avif"



import electronics1 from "./images/electronics1.png"
import electronics2 from "./images/electronics2.png"
import electronics3 from "./images/electronics3.png"
import electronics4 from "./images/electronics4.png"
import electronics5 from "./images/electronics5.png"
import electronics6 from "./images/electronics6.png"

import mobile1 from "./images/mobile1.png"
import mobile2 from "./images/mobile2.png"
import mobile3 from "./images/mobile3.png"
import mobile4 from "./images/mobile4.png"
import mobile5 from "./images/mobile5.png"
import mobile6 from "./images/mobile6.png"

import laptop1 from "./images/laptop1.png"
import laptop2 from "./images/laptop2.png"
import laptop3 from "./images/laptop3.png"
import laptop4 from "./images/laptop4.png"
import laptop5 from "./images/laptop5.png"
import laptop6 from "./images/laptop6.png"

// import vipbanner from "./images/vipbanner.png"

import beauty1 from "./images/beauty1.png"
import beauty2 from "./images/beauty2.png"
import beauty3 from "./images/beauty3.png"
import beauty4 from "./images/beauty4.png"
import beauty5 from "./images/beauty5.png"
import beauty6 from "./images/beauty6.png"

import fragrances1 from "./images/fragrances1.png"
import fragrances2 from "./images/fragrances2.png"
import fragrances3 from "./images/fragrances3.png"
import fragrances4 from "./images/fragrances4.png"
import fragrances5 from "./images/fragrances5.png"
import fragrances6 from "./images/fragrances6.png"

import home1 from "./images/home1.png"
import home2 from "./images/home2.png"
import home3 from "./images/home3.png"
import home4 from "./images/home4.png"
import home5 from "./images/home5.png"
import home6 from "./images/home6.png"

import baby1 from "./images/baby1.png"
import baby2 from "./images/baby2.png"
import baby3 from "./images/baby3.png"
import baby4 from "./images/baby4.png"
import baby5 from "./images/baby5.png"
import baby6 from "./images/baby6.png"

import toy1 from "./images/toy1.png"
import toy2 from "./images/toy2.png"
import toy3 from "./images/toy3.png"
import toy4 from "./images/toy4.png"
import toy5 from "./images/toy5.png"
import toy6 from "./images/toy6.png"

import sports1 from "./images/sports1.png"
import sports2 from "./images/sports2.png"
import sports3 from "./images/sports3.png"
import sports4 from "./images/sports4.png"
import sports5 from "./images/sports5.png"
import sports6 from "./images/sports6.png"

import brand1 from "./images/brand1.png"
import brand2 from "./images/brand2.png"
import brand3 from "./images/brand3.png"
import brand4 from "./images/brand4.png"
import brand5 from "./images/brand5.png"
import brand6 from "./images/brand6.png"

import watches1 from "./images/watches1.png"
import watches2 from "./images/watches2.png"
import watches3 from "./images/watches3.png"
import watches4 from "./images/watches4.png"
import watches5 from "./images/watches5.png"
import watches6 from "./images/watches6.png"

import eyewear1 from "./images/eyewear1.png"
import eyewear2 from "./images/eyewear2.png"
import eyewear3 from "./images/eyewear3.png"
import eyewear4 from "./images/eyewear4.png"
import eyewear5 from "./images/eyewear5.png"
import eyewear6 from "./images/eyewear6.png"

import health1 from "./images/health1.png"
import health2 from "./images/health2.png"
import health3 from "./images/health3.png"
import health4 from "./images/health4.png"
import health5 from "./images/health5.png"
import health6 from "./images/health6.png"

import furniture1 from "./images/furniture1.png"
import furniture2 from "./images/furniture2.png"
import furniture3 from "./images/furniture3.png"
import furniture4 from "./images/furniture4.png"
import furniture5 from "./images/furniture5.png"
import furniture6 from "./images/furniture6.png"

import office1 from "./images/office1.png"
import office2 from "./images/office2.png"
import office3 from "./images/office3.png"
import office4 from "./images/office4.png"
import office5 from "./images/office5.png"
import office6 from "./images/office6.png"

import slimbanner from "./images/slimbanner.png"
import newcode from "./images/newcode.png"

import lastbanner from "./images/lastbanner.png"

import tvbanner from "./images/tvbanner.png"
import electronicsbanner from "./images/electronicsbanner.png"
import beautybanner from "./images/beautybanner.jpg"
import eyewearbanner from  "./images/eyewearbanner.png"
import { Link } from "react-router-dom";



function Body() {


    return (
        <>
            <img style={{ width: "100%" }} src={slimbanner}></img>



            <Row style={{ width: "100%" }}>
                <Col className="ban" xs={8}>
                    <Carousel style={{ width: "100%" }}>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={slider2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider3}
                                alt="Third slide"
                            />

                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={slider4}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={slider5}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider6}
                                alt="Third slide"
                            />

                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={slider7}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        {/* <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={caro8}
                                alt="Second slide"
                            />

                        </Carousel.Item> */}

                    </Carousel>
                </Col>
                <Col className="ban">
                    <img style={{ width: "102.5%", height: "83.4%", marginLeft: "1.5px" }} src={newcode} />
                </Col>
            </Row>
            {/* circle category carousel */}
            <Category />


            {/* reasons and deals to buy and focus */}

            <Row xs={1} md={2} lg={3} style={{ marginTop: "10px", width: "98%",marginLeft:"1%" }}>
                <Col>
                    <Card style={{ border: "0px" }}>
                        <h5 style={{ margin: "8px ",fontWeight:"700",fontSize:"25px" }}>More reasons to shop</h5>
                        <Row>

                            <Col>
                                <Link to="/Electronics" style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={reason1} />
                                </Link>
                            </Col>
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={reason2} />
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                            <Col >
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={reason3} />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={reason4} />

                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>


                <Col>
                    <Card style={{ border: "0px" }}>
                        <h5 style={{ margin: "8px ",fontWeight:"700",fontSize:"25px" }}>More reasons to shop <span style={{ color: "red", fontSize: "14px" }}></span></h5>
                        <Row >
                            {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={deals1} />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={deals2} />
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img variant="top" src={deals3} />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: "0px" }} s>
                                    <Card.Img variant="top" src={deals4} />

                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ border: "0px" }}>
                        <h5 style={{ margin: "8px " }}>In focus</h5>
                        <Row>

                            <Col>
                                <Card style={{ border: "0px", RowGap: "0px" }}>
                                    <Card.Img className="focusimg" style={{ width: "100%", height: "11.5rem" }} variant="top" src={focus1} />
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                            <Col>
                                <Card style={{ border: "0px" }}>
                                    <Card.Img className="focusimg" style={{ width: "100%", height: "11.5rem" }} variant="top" src={focus2} />
                                </Card>
                            </Col>

                        </Row>
                    </Card>
                </Col>

            </Row>




            <h2 style={{ margin: "10px" }}>Recommended for you</h2>
            <Recommended />



            {/*2nd-carousel */}

            <Carousel style={{ width: "100%", marginTop: "20px" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>


            {/* gift banner     */}
            <img style={{ marginTop: "20px", width: "100%" }} src={tvbanner}></img>


            {/* Trnding deals in electronics */}
            <h2 style={{ margin: "10px", marginTop: "10px" }}>Trending deals in electronics</h2>
            <Trending />
            <img style={{ marginTop: "20px", width: "96%", marginLeft: "2%" }} src={homebanner}></img>


            {/* Clearance deals */}
            <Clearance />


            <h1 style={{ fontWeight: "800", backgroundColor: "black", color: "yellow", marginTop: "30px" }}>40-70%OFF</h1>
            <h2 style={{ margin: "10px", marginTop: "5px", fontWeight: "700" }}>WOMEN'S FASHION</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women7}></img></a></Col> */}
            </Row>


            <h1 style={{ fontWeight: "800", backgroundColor: "black", color: "yellow", marginTop: "30px" }}>40-70%OFF</h1>
            <h2 style={{ margin: "10px", marginTop: "5px", fontWeight: "700" }}>MEN'S FASHION</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={men7}></img></a></Col> */}
            </Row>


            <h1 style={{ fontWeight: "800", backgroundColor: "black", color: "yellow", marginTop: "30px" }}>40-70%OFF</h1>
            <h2 style={{ margin: "10px", marginTop: "5px", fontWeight: "700" }}>KIDS'S FASHION</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"25px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={kids7}></img></a></Col> */}
            </Row>



            <img style={{ marginTop: "20px", width: "96%", marginLeft: "2%" }} src={electronicsbanner}></img>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Electronics</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={electronics7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Mobile & Accessories</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobile7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Laptop Accessories</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptop7}></img></a></Col> */}
            </Row>

            <img style={{ width: "100%", marginTop: "20px" }} src={beautybanner}></img>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Beauty</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={beauty7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Fragrances</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={fragrances7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Home appliances</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%" ,rowGap:"15px"}}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={home7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Baby must-haves</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={baby7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Toys</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={toy7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Sports & outdoor essentials</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={sports7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Promart brand favourites</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={brand7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Watches</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={watches7}></img></a></Col> */}
            </Row>


            <img style={{ marginTop: "20px", width: "96%", marginLeft: "2%" }} src={eyewearbanner}></img>

            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Eyewear</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={eyewear7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px" ,fontWeight:"700"}}>Health</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={health7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px",fontWeight:"700" }}>Furniture</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={furniture7}></img></a></Col> */}
            </Row>


            <h2 style={{ margin: "10px", marginTop: "30px" ,fontWeight:"700"}}>Stationaery & office supplies</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"15px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={office7}></img></a></Col> */}
            </Row>

            <img style={{ width: "96%", marginLeft: "2%", marginTop: "30px" }} src={lastbanner}></img>


        </>
    )
}

export default Body;