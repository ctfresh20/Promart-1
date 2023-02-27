import React from "react";
import Category from "../../component/category";
import BeautyTopCarousel from "./beautytopcarousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

import beautytopbanner from "./beautyFragnanceimg/beautytopbanner.png"

import beautybestseller1 from "./beautyFragnanceimg/beautybestseller1.avif"
import beautybestseller2 from "./beautyFragnanceimg/beautybestseller2.avif"
import beautybestseller3 from "./beautyFragnanceimg/beautybestseller3.avif"
import beautybestseller4 from "./beautyFragnanceimg/beautybestseller4.avif"
import beautybestseller5 from "./beautyFragnanceimg/beautybestseller5.avif"
import beautybestseller6 from "./beautyFragnanceimg/beautybestseller6.avif"
import beautybestseller7 from "./beautyFragnanceimg/beautybestseller7.avif"
import beautybestseller8 from "./beautyFragnanceimg/beautybestseller8.avif"
import beautybestseller9 from "./beautyFragnanceimg/beautybestseller9.avif"
import beautybestseller10 from "./beautyFragnanceimg/beautybestseller10.avif"

import beautytrending from "./beautyFragnanceimg/beautytrending.avif"
import beautytrending1 from "./beautyFragnanceimg/beautytrending1.png"
import beautytrending2 from "./beautyFragnanceimg/beautytrending2.png"

import bbw1 from "./beautyFragnanceimg/bbw1.avif"
import bbw2 from "./beautyFragnanceimg/bbw2.avif"
import bbw3 from "./beautyFragnanceimg/bbw3.avif"
import bbw4 from "./beautyFragnanceimg/bbw4.avif"
import bbw5 from "./beautyFragnanceimg/bbw5.avif"
import bbw6 from "./beautyFragnanceimg/bbw6.avif"
import bbw7 from "./beautyFragnanceimg/bbw7.avif"
import bbw8 from "./beautyFragnanceimg/bbw8.avif"
import bbw9 from "./beautyFragnanceimg/bbw9.avif"
import bbw10 from "./beautyFragnanceimg/bbw10.avif"

import beautycard1 from "./beautyFragnanceimg/beautycard1.png"
import beautycard2 from "./beautyFragnanceimg/beautycard2.png"
import beautycard3 from "./beautyFragnanceimg/beautycard3.avif"
import beautycard4 from "./beautyFragnanceimg/beautycard4.avif"

import premiumbeauty from "./beautyFragnanceimg/premiumbeauty.avif"
import premiumbeauty1 from "./beautyFragnanceimg/premiumbeauty1.png"
import premiumbeauty2 from "./beautyFragnanceimg/premiumbeauty2.png"
import premiumbeauty3 from "./beautyFragnanceimg/premiumbeauty3.png"
import premiumbeauty4 from "./beautyFragnanceimg/premiumbeauty4.png"
import premiumbeauty5 from "./beautyFragnanceimg/premiumbeauty5.png"
import premiumbeauty6 from "./beautyFragnanceimg/premiumbeauty6.png"
import premiumbeauty7 from "./beautyFragnanceimg/premiumbeauty7.png"

import Clearance from "../../component/clearance";

import noonbeautybrands from "./beautyFragnanceimg/noonbeautybrands.avif"
import noonbeautybrandsbanner from "./beautyFragnanceimg/noonbeautybrandsbanner.avif"
import noonbeautybrands1 from "./beautyFragnanceimg/noonbeautybrands1.png"
import noonbeautybrands2 from "./beautyFragnanceimg/noonbeautybrands2.png"
import noonbeautybrands3 from "./beautyFragnanceimg/noonbeautybrands3.png"

import beautydealsbanner from "./beautyFragnanceimg/beautydealsbanner.avif"
import beautydeals1 from "./beautyFragnanceimg/noonbeautybrands4.png"
import beautydeals2 from "./beautyFragnanceimg/noonbeautybrands5.png"
import beautydeals3 from "./beautyFragnanceimg/noonbeautybrands6.png"

import noonbrands1 from "./beautyFragnanceimg/noonbrands1.avif"
import noonbrands2 from "./beautyFragnanceimg/noonbrands2.avif"
import noonbrands3 from "./beautyFragnanceimg/noonbrands3.avif"
import noonbrands4 from "./beautyFragnanceimg/noonbrands4.avif"
import noonbrands5 from "./beautyFragnanceimg/noonbrands5.avif"
import noonbrands6 from "./beautyFragnanceimg/noonbrands6.avif"

import makeupbanner from "./beautyFragnanceimg/makeupbanner.avif"
import makeupcard1 from "./beautyFragnanceimg/makeupcard1.png"
import makeupcard2 from "./beautyFragnanceimg/makeupcard2.png"
import makeupcard3 from "./beautyFragnanceimg/makeupcard3.png"
import makeupcard4 from "./beautyFragnanceimg/makeupcard4.png"
import makeupcard5 from "./beautyFragnanceimg/makeupcard5.png"
import makeupcard6 from "./beautyFragnanceimg/makeupcard6.png"
import makeupcard7 from "./beautyFragnanceimg/makeupcard7.png"
import makeupcard8 from "./beautyFragnanceimg/makeupcard8.png"
import makeupcard9 from "./beautyFragnanceimg/makeupcard9.png"
import makeupcard10 from "./beautyFragnanceimg/makeupcard10.png"
import makeupcard11 from "./beautyFragnanceimg/makeupcard11.png"
import makeupcard12 from "./beautyFragnanceimg/makeupcard12.png"
import makeupcard13 from "./beautyFragnanceimg/makeupcard13.png"
import makeupcard14 from "./beautyFragnanceimg/makeupcard14.png"
import makeupcard15 from "./beautyFragnanceimg/makeupcard15.png"
import makeupcard16 from "./beautyFragnanceimg/makeupcard16.png"

import makeupmustcardbanner from "./beautyFragnanceimg/makeupmustbanner.avif"
import makeupmustcard1 from "./beautyFragnanceimg/makeupmustcard1.png"
import makeupmustcard2 from "./beautyFragnanceimg/makeupmustcard2.png"
import makeupmustcard3 from "./beautyFragnanceimg/makeupmustcard3.png"

import makeupbestseller1 from "./beautyFragnanceimg/makeupbestseller1.avif"
import makeupbestseller2 from "./beautyFragnanceimg/makeupbestseller2.avif"
import makeupbestseller3 from "./beautyFragnanceimg/makeupbestseller3.avif"
import makeupbestseller4 from "./beautyFragnanceimg/makeupbestseller4.avif"
import makeupbestseller5 from "./beautyFragnanceimg/makeupbestseller5.avif"
import makeupbestseller6 from "./beautyFragnanceimg/makeupbestseller6.avif"

import skincarebanner from "./beautyFragnanceimg/skincarebanner.avif"
import skincare1 from "./beautyFragnanceimg/skincare1.png"
import skincare2 from "./beautyFragnanceimg/skincare2.png"
import skincare3 from "./beautyFragnanceimg/skincare3.png"
import skincare4 from "./beautyFragnanceimg/skincare4.png"
import skincare5 from "./beautyFragnanceimg/skincare5.png"
import skincare6 from "./beautyFragnanceimg/skincare6.png"

import skincarebestseller1 from "./beautyFragnanceimg/skincarebestseller1.avif"
import skincarebestseller2 from "./beautyFragnanceimg/skincarebestseller2.avif"
import skincarebestseller3 from "./beautyFragnanceimg/skincarebestseller3.avif"
import skincarebestseller4 from "./beautyFragnanceimg/skincarebestseller4.avif"
import skincarebestseller5 from "./beautyFragnanceimg/skincarebestseller5.avif"
import skincarebestseller6 from "./beautyFragnanceimg/skincarebestseller6.avif"

import fragnancebanner from "./beautyFragnanceimg/fragnancebanner.avif"
import fragnancecard1 from "./beautyFragnanceimg/fragnancecard1.png"
import fragnancecard2 from "./beautyFragnanceimg/fragnancecard2.png"
import fragnancecard3 from "./beautyFragnanceimg/fragnancecard3.png"
import fragnancecard4 from "./beautyFragnanceimg/fragnancecard4.png"

import fragnancebestseller1 from "./beautyFragnanceimg/fragnancebestseller1.avif"
import fragnancebestseller2 from "./beautyFragnanceimg/fragnancebestseller2.avif"
import fragnancebestseller3 from "./beautyFragnanceimg/fragnancebestseller3.avif"
import fragnancebestseller4 from "./beautyFragnanceimg/fragnancebestseller4.avif"
import fragnancebestseller5 from "./beautyFragnanceimg/fragnancebestseller5.avif"
import fragnancebestseller6 from "./beautyFragnanceimg/fragnancebestseller6.avif"

import hairbanner from "./beautyFragnanceimg/hairbanner.avif"
import haircard1 from "./beautyFragnanceimg/haircard1.png"
import haircard2 from "./beautyFragnanceimg/haircard2.png"
import haircard3 from "./beautyFragnanceimg/haircard3.png"
import haircard4 from "./beautyFragnanceimg/haircard4.png"

import hairbestseller1 from "./beautyFragnanceimg/hairbestseller1.avif"
import hairbestseller2 from "./beautyFragnanceimg/hairbestseller2.avif"
import hairbestseller3 from "./beautyFragnanceimg/hairbestseller3.avif"
import hairbestseller4 from "./beautyFragnanceimg/hairbestseller4.avif"
import hairbestseller5 from "./beautyFragnanceimg/hairbestseller5.avif"
import hairbestseller6 from "./beautyFragnanceimg/hairbestseller6.avif"

import hairgoalbanner from "./beautyFragnanceimg/hairgoalbanner.avif"
import hairgoalcard1 from "./beautyFragnanceimg/hairgoalcard1.png"
import hairgoalcard2 from "./beautyFragnanceimg/hairgoalcard2.png"
import hairgoalcard3 from "./beautyFragnanceimg/hairgoalcard3.png"
import hairgoalcard4 from "./beautyFragnanceimg/hairgoalcard4.png"

import beautyessentialbanner1 from "./beautyFragnanceimg/beautyessentialbanner1.png"
import beautyessentialbanner2 from "./beautyFragnanceimg/beautyessentialbanner2.png"

import beautycategory1 from "./beautyFragnanceimg/beautycategory1.png"
import beautycategory2 from "./beautyFragnanceimg/beautycategory2.png"
import beautycategory3 from "./beautyFragnanceimg/beautycategory3.png"
import beautycategory4 from "./beautyFragnanceimg/beautycategory4.png"
import beautycategory5 from "./beautyFragnanceimg/beautycategory5.png"
import beautycategory6 from "./beautyFragnanceimg/beautycategory6.png"
import beautycategory7 from "./beautyFragnanceimg/beautycategory7.png"
import beautycategory8 from "./beautyFragnanceimg/beautycategory8.png"
import beautycategory9 from "./beautyFragnanceimg/beautycategory9.png"
import beautycategory10 from "./beautyFragnanceimg/beautycategory10.png"





function BeautyFragnance() {
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
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };




    return (
        <>
            <BeautyTopCarousel />


            <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={beautytopbanner}></img></a>
 




            {/* Circle IMAGES */}
            {/* <Category /> */}
            <Row style={{ width: "100%", marginTop: "2%" }}>
                <Carousel  responsive={responsive2}>   
                    <Col style={{marginLeft:"10px"}}><a type="submit" style={{ width: "75%" }}><img style={{ width: "110%" }} src={beautycategory1}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Bath & Body</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory2}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Electronics Beauty Tools</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory3}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Fragrance</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory4}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Hair Care</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory5}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Makeup</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory6}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Men's Grooming</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory7}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Personal Care</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory8}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Skin Care</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory9}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Styling & Grooming</p></a>
                    </Col>
                    <Col><a type="submit" style={{ width: "75%" }}><img style={{ width: "100%" }} src={beautycategory10}></img>
                    <p style={{ fontSize: "13px",marginTop:"10px", fontWeight: "650", textAlign: "center" }}>Treatment & Serums</p></a>
                    </Col>
                    
                    

                </Carousel> 
                </Row>


{/* <img style={{width:"98%",marginLeft:"1%"}} src={beautytopbanner}> </img> */}

            {/* beauty best seller */}
            <h3 style={{ margin: "2%" }}>Bestsellers</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>



            {/* Beauty Trending banner and card */}
            <div style={{ backgroundColor: "rgb(210, 222, 226)", paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={beautytrending}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautytrending1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautytrending2}></img></a></Col>
                    </Row>

                </div>
            </div>




            {/* BBW up to 75% off */}

            <h3 style={{ margin: "2%" }}>BBW up to 75% off</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>




            {/* Beauty Trending banner and card */}
            <div style={{ backgroundColor: "rgb(247, 241, 229)", paddingBottom: "20px", paddingTop: "20px", marginTop: "1%" }}>
                <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautycard1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautycard2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautycard3}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautycard4}></img></a></Col>

                </Row>
            </div>



            {/* New Arrivals */}
            <h3 style={{ margin: "2%" }}>New Arrivals</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bbw10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>




            {/* premium beauty banner and card */}
            <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={premiumbeauty}></img></a>
            <div>
                <Row style={{ width: "98%", marginLeft: "1%" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty3}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty4}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty5}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty6}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={premiumbeauty7}></img></a></Col>
                </Row>

            </div>




            {/* clearance deal */}
            <h3 style={{ margin: "2%" }}>Clearance deals</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>






            {/* new beauty brands card and banner */}

            <a type="submit"><img style={{ width: "98%", marginTop: "2%", marginLeft: "1%" }} src={noonbeautybrands}></img></a>
            <div style={{ backgroundColor: "rgb(252, 232, 232)", paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={noonbeautybrandsbanner}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={noonbeautybrands1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={noonbeautybrands2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={noonbeautybrands3}></img></a></Col>

                    </Row>

                </div>
            </div>



            <div style={{ backgroundColor: "rgb(255, 230, 213)" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "0%", marginLeft: "1%" }} src={beautydealsbanner}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautydeals1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautydeals2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautydeals3}></img></a></Col>

                    </Row>
                </div>
            </div>




            {/* noon brands */}


            <h3 style={{ margin: "2%" }}>noon brands</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={noonbrands6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>











            <div style={{ paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={makeupbanner}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard2}></img></a></Col>
                    </Row>
                    <Row style={{ width: "98%", marginLeft: "1%", marginTop: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard6}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard7}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard8}></img></a></Col>

                    </Row>

                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard9}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard10}></img></a></Col>
                    </Row>
                    <Row style={{ width: "98%", marginLeft: "1%", marginTop: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard11}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard12}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard13}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard14}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard15}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupcard16}></img></a></Col>

                    </Row>

                </div>
            </div>




            <div style={{ backgroundColor: "rgb(255, 230, 213)" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "0%", marginLeft: "1%" }} src={makeupmustcardbanner}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupmustcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupmustcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={makeupmustcard3}></img></a></Col>

                    </Row>
                </div>
            </div>





            {/* BestSeller in Makeup */}

            <h3 style={{ margin: "2%" }}>BestSeller in Makeup</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={makeupbestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>










            <div style={{ paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={skincarebanner}></img></a>
                <div>
                    <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare4}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare5}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={skincare6}></img></a></Col>
                    </Row>

                </div>
            </div>




            <h3 style={{ margin: "2%" }}>BestSeller in skincare</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>







            {/* fragnance */}

            <div style={{ paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={fragnancebanner}></img></a>
                <div>
                    <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={fragnancecard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={fragnancecard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={fragnancecard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={fragnancecard4}></img></a></Col>

                    </Row>

                </div>
            </div>


            <h3 style={{ margin: "2%" }}>BestSeller in fragnance</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={skincarebestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller1} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller2} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller3} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller4} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller5} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller6} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>








            <div style={{ paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={hairbanner}></img></a>
                <div>
                    <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={haircard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={haircard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={haircard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={haircard4}></img></a></Col>
                       
                    </Row>

                </div>
            </div>



            <h3 style={{ margin: "2%" }}>BestSeller in haircare</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={hairbestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={fragnancebestseller6} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={beautybestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>









            <div style={{backgroundColor:"rgb(242, 230, 225)", paddingBottom: "20px", marginTop: "1%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={hairgoalbanner}></img></a>
                <div>
                    <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={hairgoalcard1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={hairgoalcard2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={hairgoalcard3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={hairgoalcard4}></img></a></Col>
                       
                    </Row>

                </div>
            </div>





            <div>
                    <Row xs={1} md={4} lg={2} style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautyessentialbanner1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={beautyessentialbanner2}></img></a></Col>
                        
                       
                    </Row>

                </div>



        </>
    )
}

export default BeautyFragnance