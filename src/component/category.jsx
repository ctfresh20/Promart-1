import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import electronicscategory from "./images/electronicscategory.png"
import electronicscategory2 from "./images/electronicscategory2.png"
import electronicscategory3 from "./images/electronicscategory3.png"
import electronicscategory4 from "./images/electronicscategory4.png"
import electronicscategory5 from "./images/electronicscategory5.png"
import electronicscategory6 from "./images/electronicscategory6.png"
import electronicscategory7 from "./images/electronicscategory7.png"
import electronicscategory8 from "./images/electronicscategory8.png"
import electronicscategory9 from "./images/electronicscategory9.png"
import electronicscategory10 from "./images/electronicscategory10.png"
// import electronicscategory11 from "./images/electronicscategory11.png"

import homecircle1 from "./images/homecircle1.png"
import homecircle2 from "./images/homecircle2.png"
import homecircle3 from "./images/homecircle3.png"
import homecircle4 from "./images/homecircle4.png"
import homecircle5 from "./images/homecircle5.png"
import homecircle6 from "./images/homecircle6.png"
import homecircle7 from "./images/homecircle7.png"
import homecircle8 from "./images/homecircle8.png"
import homecircle9 from "./images/homecircle9.png"

import grocerycategory1 from "./images/grocerycategory1.png"
import grocerycategory2 from "./images/grocerycategory2.png"
import grocerycategory3 from "./images/grocerycategory3.png"
import grocerycategory4 from "./images/grocerycategory4.png"
import grocerycategory5 from "./images/grocerycategory5.png"
import grocerycategory6 from "./images/grocerycategory6.png"
import grocerycategory7 from "./images/grocerycategory7.png"
import grocerycategory8 from "./images/grocerycategory8.png"
import grocerycategory9 from "./images/grocerycategory9.png"


import babycircle1 from "./images/babycircle1.png"
import babycircle2 from "./images/babycircle2.png"
import babycircle3 from "./images/babycircle3.png"
import babycircle4 from "./images/babycircle4.png"
import babycircle5 from "./images/babycircle5.png"
import babycircle6 from "./images/babycircle6.png"
import babycircle7 from "./images/babycircle7.png"
import babycircle8 from "./images/babycircle8.png"
import babycircle9 from "./images/babycircle9.png"
import babycircle10 from "./images/babycircle10.png"
import babycircle11 from "./images/babycircle11.png"
import babycircle12 from "./images/babycircle12.png"

import beautycategory1 from "./images/beautycategory1.png"
import beautycategory2 from "./images/beautycategory2.png"
import beautycategory3 from "./images/beautycategory3.png"
import beautycategory4 from "./images/beautycategory4.png"
import beautycategory5 from "./images/beautycategory5.png"
import beautycategory6 from "./images/beautycategory6.png"
import beautycategory7 from "./images/beautycategory7.png"
import beautycategory8 from "./images/beautycategory8.png"
import beautycategory9 from "./images/beautycategory9.png"
import beautycategory10 from "./images/beautycategory10.png"

import menscategory1 from "./images/menscategory1.png"
import menscategory2 from "./images/menscategory2.png"
import menscategory3 from "./images/menscategory3.png"
import menscategory4 from "./images/menscategory4.png"
import menscategory5 from "./images/menscategory5.png"
import menscategory6 from "./images/menscategory6.png"

import womencategory1 from "./images/womencategory1.png"
import womencategory2 from "./images/womencategory2.png"
import womencategory3 from "./images/womencategory3.png"
import womencategory4 from "./images/womencategory4.png"
import womencategory5 from "./images/womencategory5.png"
import womencategory6 from "./images/womencategory6.png"
import womencategory7 from "./images/womencategory7.png"
import womencategory8 from "./images/womencategory8.png"
import womencategory9 from "./images/womencategory9.png"

import sportscategory1 from "./images/sportscategory1.png"
import sportscategory2 from "./images/sportscategory2.png"
import sportscategory3 from "./images/sportscategory3.png"
import sportscategory4 from "./images/sportscategory4.png"
import sportscategory5 from "./images/sportscategory5.png"
import sportscategory6 from "./images/sportscategory6.png"
import sportscategory7 from "./images/sportscategory7.png"
import sportscategory8 from "./images/sportscategory8.png"
import sportscategory9 from "./images/sportscategory9.png"
import sportscategory10 from "./images/sportscategory10.png"
import sportscategory11 from "./images/sportscategory11.png"



import Watch1 from "./images/Watch1.png"


function Category() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 11
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };
    return (
        <div style={{ marginTop: "10px"}}>
            <Carousel  style={{ width: "100%", marginTop: "50px" }} responsive={responsive}>
                {/* electronicscategory */}
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Camera</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Earphones</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Home Appliances</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Laptop & Computer</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Power Bank</p></a>
                </Col>

                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Speakers</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Tablets & Accessories</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Television</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Video Games</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={electronicscategory10}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Wearable Devies</p></a>
                </Col>


                {/* homecategory */}
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle1}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Home Tools</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle2}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Bedding</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle3}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Furniture</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle4}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Home Appliances</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle5}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Home Decor</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle6}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Home Storage</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle7}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Bathing</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle8}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Large Appliances</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={homecircle9}></img>
                    <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Home Improvement</p></a>
                </Col>


                {/* grocerycategory */}
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory1}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Beverage</p></a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Breakfast Food</p></a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Packed Food</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Cooking Essential</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Household</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Laundry</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Personal care</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Pet supplies</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={grocerycategory9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Snack Food</p>
                </a></Col>

                {/* Baby & Toys */}
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle1}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Baby & Toys</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Baby Transport</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Bathing & Skincare</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Boardgame & Card</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Diapering</p></a>
                </Col>
                {/* <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle6}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Outdoor Play</p></a>
                    </Col> */}
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Outdoor Play</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Pretend Play</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Preterned Play</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle10}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Rockers & Walkers</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={babycircle11}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Kids Essentials</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%", textAlign: "center" }} src={babycircle12}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Tricycles & Scooters</p></a>
                </Col>



                {/* beauty & Fragrance */}

                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory1}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Bath & Body</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Electronics Beauty Tools</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Fragrance</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Hair Care</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Makeup</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Men's Grooming</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Personal Care</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Skin Care</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Styling & Grooming</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={beautycategory10}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Treatment & Serums</p></a>
                </Col>



                {/* Mens fashion */}


                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory1}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Autumn & Winter</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Bagpack</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Eyewear</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Footwear</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Jewellery</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={menscategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Luggage</p></a>
                </Col>
                {/* <Col><a type="submit"><img style={{ width: "95%" }} src={Clothing}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Luggage</p></a>
                        </Col> */}


                {/* Womens fashion */}

                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory1}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Bags</p></a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Clothing</p></a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Eyewear</p></a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Footwear</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Jewelery</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Kid's Fashion</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Watches</p>
                </a></Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Trends Fashion</p>
                </a>
                </Col>
                <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={womencategory9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Womens Fashion</p>
                </a></Col>



                {/* Sports */}
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory1}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Cardio</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory2}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Gym Pack</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory3}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Gym Machine</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory4}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Cycling</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory5}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Racket sport</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory6}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Running</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory7}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Sports medicine</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory8}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Strength Training</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory9}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Scooter</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory10}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Water Sports</p></a>
                </Col>
                <Col style={{ textAlign: "center" }}>
                    <a type="submit" style={{ width: "80%" }} ><img style={{ width: "100%" }} src={sportscategory11}></img>
                        <p style={{ fontSize: "13px", fontWeight: "650", textAlign: "center", marginTop: "10px" }}>Yoga</p></a>
                </Col>
            </Carousel>

        </div>
    )
}

export default Category