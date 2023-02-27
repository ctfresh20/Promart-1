import React from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



// import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';

// import top1 from "./electronicsImg/top1.avif"
// import top2 from "./electronicsImg/top2.avif"
// import top3 from "./electronicsImg/top3.avif"
// import top4 from "./electronicsImg/top4.avif"
// import top5 from "./electronicsImg/top5.avif"
// import top6 from "./electronicsImg/top6.avif"

import mega1 from "./electronicsImg/mega1.webp"
import mega2 from "./electronicsImg/mega2.webp"
import mega3 from "./electronicsImg/mega3.webp"
import mega4 from "./electronicsImg/mega4.webp"


import topbanner from "./electronicsImg/topbanner.png"
import Category from "../../component/category";

// import bestseller1 from "./electronicsImg/bestseller1.avif"
// import bestseller2 from "./electronicsImg/bestseller2.avif"
// import bestseller3 from "./electronicsImg/bestseller3.avif"
// import bestseller4 from "./electronicsImg/bestseller4.avif"
// import bestseller5 from "./electronicsImg/bestseller5.avif"
// import bestseller6 from "./electronicsImg/bestseller6.avif"
// import bestseller7 from "./electronicsImg/bestseller7.avif"
// import bestseller8 from "./electronicsImg/bestseller8.avif"
import Trending from "../../component/trending";
import Clearance from "../../component/clearance";

import interestbanner from "./electronicsImg/interestbanner.avif"
import electronicsmegadealbanner from "./electronicsImg/electronicsmegadealbanner.avif"

import mobiles1 from "./electronicsImg/mobiles1.png"
import mobiles2 from "./electronicsImg/mobiles2.png"
import mobiles3 from "./electronicsImg/mobiles3.png"
import mobiles4 from "./electronicsImg/mobiles4.png"
import mobiles5 from "./electronicsImg/mobiles5.png"
import mobiles6 from "./electronicsImg/mobiles6.png"
import mobiles7 from "./electronicsImg/mobiles7.avif"

import laptops1 from "./electronicsImg/laptops1.png"
import laptops2 from "./electronicsImg/laptops2.png"
import laptops3 from "./electronicsImg/laptops3.png"
import laptops4 from "./electronicsImg/laptops4.png"
import laptops5 from "./electronicsImg/laptops5.png"
import laptops6 from "./electronicsImg/laptops6.png"
// import laptops7 from "./electronicsImg/laptop7.png"

import gaming from "./electronicsImg/Gaming.avif"
import lgaming1 from "./electronicsImg/gaming1.png"
import lgaming2 from "./electronicsImg/gaming2.png"
import lgaming3 from "./electronicsImg/gaming3.png"
import lgaming4 from "./electronicsImg/gaming4.png"
import lgaming5 from "./electronicsImg/gaming5.png"
import lgaming6 from "./electronicsImg/gaming6.png"
// import lgaming7 from "./electronicsImg/gaming7.avif"

import audio from "./electronicsImg/audio.avif"
import audio1 from "./electronicsImg/audio1.png"
import audio2 from "./electronicsImg/audio2.png"
import audio3 from "./electronicsImg/audio3.png"
import audio4 from "./electronicsImg/audio4.png"
import audio5 from "./electronicsImg/audio5.png"
import audio6 from "./electronicsImg/audio6.png"
import audio7 from "./electronicsImg/audio7.avif"

import camera from "./electronicsImg/camera.avif"
import camera1 from "./electronicsImg/camera1.png"
import camera2 from "./electronicsImg/camera2.png"
import camera3 from "./electronicsImg/camera3.png"
import camera4 from "./electronicsImg/camera4.png"
import camera5 from "./electronicsImg/camera5.png"
import camera6 from "./electronicsImg/camera6.png"
import camera7 from "./electronicsImg/camera7.avif"
import { Link } from "react-router-dom";
import Electronicstopcarousel from "./electronicstopcarousel";

import electronicscategory from "./electronicsImg/electronicscategory.png"
import electronicscategory2 from "./electronicsImg/electronicscategory2.png"
import electronicscategory3 from "./electronicsImg/electronicscategory3.png"
import electronicscategory4 from "./electronicsImg/electronicscategory4.png"
import electronicscategory5 from "./electronicsImg/electronicscategory5.png"
import electronicscategory6 from "./electronicsImg/electronicscategory6.png"
import electronicscategory7 from "./electronicsImg/electronicscategory7.png"
import electronicscategory8 from "./electronicsImg/electronicscategory8.png"
import electronicscategory9 from "./electronicsImg/electronicscategory9.png"
import electronicscategory10 from "./electronicsImg/electronicscategory10.png"
import electronicscategory11 from "./electronicsImg/electronicscategory11.png"
import eslider7 from "./electronicsImg/eslider7.png"

import eslider from "./electronicsImg/eslider.png"

import apple1 from "./electronicsImg/apple1.avif"
import airpod1 from "./electronicsImg/airpod1.avif"
import airpod2 from "./electronicsImg/airpod2.avif"
import airpod3 from "./electronicsImg/airpod3.avif"
import watch from "./electronicsImg/watch1.avif"
import nord from "./electronicsImg/nord.avif"

function Electronics() {



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
            items: 4
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




    return (<>

        <Electronicstopcarousel />


        <img style={{ width: "98%", marginLeft: "1%", marginTop: "1%" }} src={topbanner}></img>



        <div style={{ marginTop: "2%" }}>
            <Carousel style={{ width: "10%", marginTop: "50px" }} responsive={responsive2}>
                <Col style={{ marginLeft: "10px" }}><a type="submit" style={{ width: "75%" }}><img style={{ width: "110%" }} src={electronicscategory}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Camera</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory2}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Headphones</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory3}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Home Appliances</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory4}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Laptop & Computer</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory5}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Power Bank</p></a>
                </Col>
                {/* <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle6}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Outdoor Play</p></a>
                    </Col> */}
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory6}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Speakers</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory7}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Tablets & Accessories</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory8}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Television</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory9}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Video Games</p></a>
                </Col>
                <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={electronicscategory10}></img>
                    <p style={{ fontSize: "13px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Wearable Devies</p></a>
                </Col>
            </Carousel>

        </div>




        <hr style={{ width: "4%", marginLeft: "48%", height: "4px", backgroundColor: "black", borderRadius: "75px", opacity: "5" }}></hr>

        <a type="submit"> <img style={{ width: "100%" }} src={electronicsmegadealbanner}></img></a>
        <Row xs={2} md={4} lg={4} style={{ width: "100%", backgroundColor: "rgb(245, 244, 244)", padding: "20px", marginLeft: "0px", rowGap: "20px" }}>
            <Col style={{ textAlign: "center" }}>
                <Link to="/samsung">
                    <Card type="submit" style={{ width: "96%", height: "20rem", border: "0px" }}>
                        <Card.Img style={{ width: "90%", height: "15rem", marginLeft: "4%" }} variant="top" src={mega1} />
                        <Card.Body style={{}}><p1>Samsung 64" Crystall UHD</p1>
                            <s style={{ fontWeight: "700" }}>3999</s><span style={{ fontSize: "20px", fontWeight: "700", marginleft: "30px" }}>1849 INR</span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>

            <Col>
                <Link to="/tv">
                    <Card href="/iphone" type="submit" style={{ width: "96%", height: "20rem", marginLeft: "2%", border: "0px" }}>
                        <Card.Img style={{ width: "90%", height: "15rem", marginLeft: "4%" }} variant="top" src={mega2} />
                        <Card.Body style={{}}><p1>JVC 55" edgeless Android TV</p1>
                            <s style={{ fontWeight: "700" }}>1799</s><span style={{ fontSize: "20px", fontWeight: "700", marginleft: "30px" }}>1099 INR</span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>


            <Col>
                <Link to="/drone">
                    <Card href="/iphone" type="submit" style={{ width: "96%", height: "20rem", marginLeft: "2%", border: "0px" }}>
                        <Card.Img style={{ width: "90%", height: "15rem", marginLeft: "4%" }} variant="top" src={mega3} />
                        <Card.Body style={{ textAlign: "center" }}><p1>DJI Avata pro-view Combo Drone</p1>
                            <s style={{ fontWeight: "700" }}>6999</s><span style={{ fontSize: "20px", fontWeight: "700", marginleft: "30px" }}>5099 INR</span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            <Col>
                <Link to="/camera">
                    <Card href="/iphone" type="submit" style={{ width: "96%", height: "20rem", marginLeft: "2%", border: "0px" }}>
                        <Card.Img style={{ width: "90%", height: "15rem", marginLeft: "4%" }} variant="top" src={mega4} />
                        <Card.Body style={{ textAlign: "center" }} ><p1>Sony Alpha 7 III Mirrorless Camera</p1>
                            <s style={{ fontWeight: "700" }}>9990</s><span style={{ fontSize: "20px", fontWeight: "700" }}>6899 INR</span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>



        {/* Bestsellers */}
        <h1 style={{ fontSize: "22px", marginTop: "2%", marginBottom: "1%", marginLeft: "2%" }}>Bestsellers</h1>

        <Carousel responsive={responsive}>

            <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                <Link to="/iphone">
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}>
                        <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                    </Card.Body>
                    <Card.Text>
                        <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>5199.00</span>
                    </Card.Text>
                    <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                    <span style={{ float: "right" }}>4.0⭐</span>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone">
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod1} />
                    <Card.Body style={{ padding: "0px" }}>
                        <p1>Apple Airpod 2nd Gen With Charging..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>389.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.6⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod2} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple Airpod Pro(2nd generation)..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>809.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={watch} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple Watch Series 8 GPS 45mm ALuminium..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>1586.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.7⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={nord} />
                    <Card.Body style={{ padding: "0px" }}><p1>Oneplus Nord ce 2 dual sim Bahama blue 8GB..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>977.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.7⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod3} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple Airpods pro with megsafe charging case</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>699.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.6⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.6⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>


            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>

            <Card style={{ width: "90%", border: "0px" }}>
                <Link href="/iphone" style={{}}>
                    <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
                    <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
                        </Card.Text>
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.5⭐</span>
                    </Card.Body>
                </Link>
            </Card>
        </Carousel>


        <h1 style={{ fontSize: "22px", marginTop: "2%", marginBottom: "1%", marginLeft: "2%" }}>Price Drops</h1>
        <Carousel responsive={responsive}>

<Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
    <Link to="/iphone">
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
        </Card.Body>
        <Card.Text>
            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>5199.00</span>
        </Card.Text>
        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
        <span style={{ float: "right" }}>4.0⭐</span>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone">
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple Airpod 2nd Gen With Charging..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>389.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod2} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpod Pro(2nd generation)..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>809.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={watch} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Watch Series 8 GPS 45mm ALuminium..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>1586.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={nord} />
        <Card.Body style={{ padding: "0px" }}><p1>Oneplus Nord ce 2 dual sim Bahama blue 8GB..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>977.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod3} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpods pro with megsafe charging case</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>699.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>


<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>
</Carousel>
        <img style={{ width: "100%", height: "250px", marginTop: "20px" }} src={eslider}></img>



        <h2 style={{ margin: "10px", marginTop: "30px" }}>Mobile & Accessories</h2>
        <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap: "10px" }}>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles1}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles2}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles3}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles4}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles5}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={mobiles6}></img></a></Col>
            {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={mobiles7}></img></a></Col> */}
        </Row>

        <h1 style={{ fontSize: "22px", marginTop: "2%", marginBottom: "1%", marginLeft: "2%" }}>New Arrivals</h1>
        <Carousel responsive={responsive}>

<Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
    <Link to="/iphone">
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
        </Card.Body>
        <Card.Text>
            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>5199.00</span>
        </Card.Text>
        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
        <span style={{ float: "right" }}>4.0⭐</span>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone">
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple Airpod 2nd Gen With Charging..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>389.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod2} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpod Pro(2nd generation)..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>809.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={watch} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Watch Series 8 GPS 45mm ALuminium..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>1586.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={nord} />
        <Card.Body style={{ padding: "0px" }}><p1>Oneplus Nord ce 2 dual sim Bahama blue 8GB..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>977.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={airpod3} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpods pro with megsafe charging case</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>699.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>


<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "100%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>
</Carousel>

        <h2 style={{ margin: "10px", marginTop: "30px" }}>Laptops & Accessories</h2>
        <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap: "10px" }}>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops1}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops2}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops3}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops4}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops5}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={laptops6}></img></a></Col>
            {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={laptops7}></img></a></Col> */}
        </Row>

        <img style={{ width: "100%", marginTop: "4%" }} src={gaming}></img>
        <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap: "10px" }}>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming1}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming2}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming3}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming4}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming5}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={lgaming6}></img></a></Col>
            {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={lgaming7}></img></a></Col> */}
        </Row>

        <img style={{ width: "100%", marginTop: "4%" }} src={audio}></img>
        <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap: "10px" }}>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio1}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio2}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio3}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio4}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio5}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%" }}><img style={{ width: "100%" }} src={audio6}></img></a></Col>
            {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={audio7}></img></a></Col> */}
        </Row>


        <img style={{ width: "100%", marginTop: "4%" }} src={camera}></img>
        <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap: "10px" }}>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera1}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera2}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera3}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera4}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera5}></img></a></Col>
            <Col style={{ textAlign: "center" }}><a type="submit" style={{ width: "80%", textAlign: "center" }}><img style={{ width: "100%" }} src={camera6}></img></a></Col>
            {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={camera7}></img></a></Col> */}
        </Row>




        {/* <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs> */}
    </>
    )
}

export default Electronics