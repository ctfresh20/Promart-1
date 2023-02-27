import React from "react";
import FashionSidebar from "../fashion sidebar/fashionsidebar";
import GroceryTopCarouesl from "./grocerytopcarousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

import grocerytopbanner from "./groceryImg/grocerytopbanner.avif"

import grocercategorybanner from "./groceryImg/grocercategorybanner.avif"
import grocerycategory1 from "./groceryImg/grocerycategory1.png"
import grocerycategory2 from "./groceryImg/grocerycategory2.png"
import grocerycategory3 from "./groceryImg/grocerycategory3.png"
import grocerycategory4 from "./groceryImg/grocerycategory4.png"
import grocerycategory5 from "./groceryImg/grocerycategory5.png"
import grocerycategory6 from "./groceryImg/grocerycategory6.png"
import grocerycategory7 from "./groceryImg/grocerycategory7.png"
import grocerycategory8 from "./groceryImg/grocerycategory8.png"
import grocerycategory9 from "./groceryImg/grocerycategory9.png"


export default function Grocery() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        <>
            <GroceryTopCarouesl />


            <img style={{ width: "98%", marginLeft: "1%", marginTop: "1%" }} src={grocerytopbanner}></img>


            <img style={{ width: "100%", marginTop: "2%" }} src={grocercategorybanner}></img>

            <Row style={{ width: "100%" }}>
                <Carousel style={{}} responsive={responsive2}>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory1}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Beverage</p></a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory2}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Breakfast Food</p></a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory3}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Packed Food</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory4}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Cooking Essential</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory5}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Household</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory6}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Laundry</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory7}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Personal care</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory8}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Pet supplies</p>
                    </a></Col>
                    <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={grocerycategory9}></img>
                        <p style={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>Snack Food</p>
                    </a></Col>

                </Carousel>
            </Row>



        </>
    )
}