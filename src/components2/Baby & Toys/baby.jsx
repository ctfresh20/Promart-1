import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';


import BabyTopCarousel from "./babytopcarousel";
import babycircle1 from "./babyImg/babycircle1.png"
import babycircle2 from "./babyImg/babycircle2.png"
import babycircle3 from "./babyImg/babycircle3.png"
import babycircle4 from "./babyImg/babycircle4.png"
import babycircle5 from "./babyImg/babycircle5.png"
import babycircle6 from "./babyImg/babycircle6.png"
import babycircle7 from "./babyImg/babycircle7.png"
import babycircle8 from "./babyImg/babycircle8.png"
import babycircle9 from "./babyImg/babycircle9.png"
import babycircle10 from "./babyImg/babycircle10.png"
import babycircle11 from "./babyImg/babycircle11.png"
import babycircle12 from "./babyImg/babycircle12.png"


import biddeal1 from "./babyImg/biddeal1.avif"
import biddeal2 from "./babyImg/biddeal2.avif"
import biddeal3 from "./babyImg/biddeal3.avif"
import biddeal4 from "./babyImg/biddeal4.avif"
import biddeal5 from "./babyImg/biddeal5.avif"
import biddeal6 from "./babyImg/biddeal6.avif"

import toydealbanner from "./babyImg/toydealbanner.avif"

import trendingtoys1 from "./babyImg/trendingtoys1.avif"
import trendingtoys2 from "./babyImg/trendingtoys2.avif"
import trendingtoys3 from "./babyImg/trendingtoys3.avif"
import trendingtoys4 from "./babyImg/trendingtoys4.avif"
import trendingtoys5 from "./babyImg/trendingtoys5.avif"
import trendingtoys6 from "./babyImg/trendingtoys6.avif"

import babybrandbanner from "./babyImg/babybrandbanner.avif"
import babybrandcard1 from "./babyImg/babybrandcard1.png"
import babybrandcard2 from "./babyImg/babybrandcard2.png"
import babybrandcard3 from "./babyImg/babybrandcard3.png"
import babybrandcard4 from "./babyImg/babybrandcard4.png"
import babybrandcard5 from "./babyImg/babybrandcard5.png"
import babybrandcard6 from "./babyImg/babybrandcard6.png"


import babynew1 from "./babyImg/babynew1.avif"
import babynew2 from "./babyImg/babynew2.avif"
import babynew3 from "./babyImg/babynew3.avif"
import babynew4 from "./babyImg/babynew4.avif"
import babynew5 from "./babyImg/babynew5.avif"
import babynew6 from "./babyImg/babynew6.avif"

import babygenderbanner from "./babyImg/babygenderbanner.png"
import babygendercard1 from "./babyImg/babygendercard1.png"
import babygendercard2 from "./babyImg/babygendercard2.png"

import babyagebanner from "./babyImg/babyagebanner.avif"
import babyagecard1 from "./babyImg/babyagecard1.png"
import babyagecard2 from "./babyImg/babyagecard2.png"
import babyagecard3 from "./babyImg/babyagecard3.png"
import babyagecard4 from "./babyImg/babyagecard4.png"
import babyagecard5 from "./babyImg/babyagecard5.png"

import babycategorybanner from "./babyImg/babycategorybanner.avif"
import learningbanner from "./babyImg/learningbanner.png"
import learningcard1 from "./babyImg/learningcard1.png"
import learningcard2 from "./babyImg/learningcard2.png"
import learningcard3 from "./babyImg/learningcard3.png"
import learningcard4 from "./babyImg/learningcard4.png"
import learningcard5 from "./babyImg/learningcard5.png"
import learningcard6 from "./babyImg/learningcard6.png"

import inspirationbanner from "./babyImg/inspirationbanner.png"
import inspirationcard1 from "./babyImg/inspirationcard1.png"
import inspirationcard2 from "./babyImg/inspirationcard2.png"
import inspirationcard3 from "./babyImg/inspirationcard3.png"
import inspirationcard4 from "./babyImg/inspirationcard4.png"
import inspirationcard5 from "./babyImg/inspirationcard5.png"
import inspirationcard6 from "./babyImg/inspirationcard6.png"

import funbanner from "./babyImg/funbanner.png"
import funcard1 from "./babyImg/funcard1.png"
import funcard2 from "./babyImg/funcard2.png"
import funcard3 from "./babyImg/funcard3.png"
import funcard4 from "./babyImg/funcard4.png"
import funcard5 from "./babyImg/funcard5.png"
import funcard6 from "./babyImg/funcard6.png"

import babyoutdoorbanner from "./babyImg/babyoutdoorbanner.png"
import babyoutdoorcard1 from "./babyImg/babyoutdoorcard1.png"
import babyoutdoorcard2 from "./babyImg/babyoutdoorcard2.png"
import babyoutdoorcard3 from "./babyImg/babyoutdoorcard3.png"
import babyoutdoorcard4 from "./babyImg/babyoutdoorcard4.png"
import babyoutdoorcard5 from "./babyImg/babyoutdoorcard5.png"
import babyoutdoorcard6 from "./babyImg/babyoutdoorcard6.png"

import babydetail from "./babydetail";
import Entry from "../home/entry";







function createEntry(showmore) {
    return (
        <Entry
            key={showmore.id}
            img={showmore.img}
            name={showmore.name}
            description={showmore.meaning}
            express={showmore.express}
            rating={showmore.rating}
        />
    );
}




function BabyAndToys() {

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
            items: 10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };





    return (
        <>
            <BabyTopCarousel />





            <Row style={{ width: "100%", marginTop: "2%" }}>
                <Carousel  responsive={responsive2}>
                    
                    <Col style={{marginLeft:"10px"}}><a type="submit" style={{ width: "75%" }}><img style={{ width: "110%" }} src={babycircle1}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Baby & Toys</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle2}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Baby Transport</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle3}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Bathing & Skincare</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle4}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Boardgame & Card</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle5}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Diapering</p></a>
                    </Col>
                    {/* <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle6}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Outdoor Play</p></a>
                    </Col> */}
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle7}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Outdoor Play</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle8}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Pretend Play</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle9}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Preterned Play</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle10}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Rockers & Walkers</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={babycircle11}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Kids Essentials</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%",textAlign:"center" }} src={babycircle12}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Tricycles & Scooters</p></a>
                    </Col>

                </Carousel> </Row>






            <h3 style={{ margin: "2%" }}>Big Deal Sale on toys</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal1} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal2} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal5} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={biddeal4} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>





            {/* <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={toydealbanner}></img></a>
            <div>
                <Row style={{ width: "98%", marginLeft: "1%" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={toydealcard1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={toydealcard2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={toydealcard3}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={toydealcard4}></img></a></Col>
                </Row>
               
            </div> */}






            <h3 style={{ margin: "2%" }}>Top trending toys</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys2} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys4} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys1} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={trendingtoys1} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>






            <div style={{ backgroundColor: "rgb(255, 209, 106)", paddingBottom: "20px" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={babybrandbanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", rowGap: "10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard6}></img></a></Col>
                        {/* <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard7}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard8}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babybrandcard9}></img></a></Col> */}

                    </Row>

                </div>
            </div>







            <h3 style={{ margin: "2%" }}>New arrivals in toys</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew2} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew3} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew1} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={babynew5} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>






            <div style={{ marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={babygenderbanner}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babygendercard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babygendercard2}></img></a></Col>


                    </Row>

                </div>
            </div>



            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%", rowGap: "10px" }} src={babyagebanner}></img></a>
                <div>
                    <Row style={{ width: "70%", marginLeft: "15%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyagecard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyagecard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyagecard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyagecard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyagecard5}></img></a></Col>
                    </Row>

                </div>
            </div>





            <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={babycategorybanner}></img></a>

            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={learningbanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", rowGap: "10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard6}></img></a></Col>
                        {/* <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={learningcard7}></img></a></Col> */}
                    </Row>

                </div>
            </div>





            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={inspirationbanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", rowGap: "10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard6}></img></a></Col>
                        {/* <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={inspirationcard7}></img></a></Col> */}
                    </Row>

                </div>
            </div>






            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={funbanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", rowGap: "10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard6}></img></a></Col>
                        {/* <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={funcard7}></img></a></Col> */}
                    </Row>

                </div>
            </div>




            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={babyoutdoorbanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", rowGap: "10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard6}></img></a></Col>
                        {/* <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={babyoutdoorcard7}></img></a></Col> */}
                    </Row>

                </div>
            </div>



            <div style={{ backgroundColor: "rgb(247, 241, 229)", marginTop: "2%" }}>
                <h1 style={{ textAlign: "center" }}>
                    <span>Explore More</span>
                </h1>
                <dl className="dictionary">{babydetail.map(createEntry)}</dl>


                <button style={{}}>show more</button>

            </div>


        </>
    )
}

export default BabyAndToys