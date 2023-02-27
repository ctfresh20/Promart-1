import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';


import SportsTopCarousel from "./sportstopcarousel";

import sportstopbanner from "./sportsImg/sportstopbanner.png"

import sportscategory from "./sportsImg/sportscategory.avif"
import sportscategory1 from "./sportsImg/sportscategory1.png"
import sportscategory2 from "./sportsImg/sportscategory2.png"
import sportscategory3 from "./sportsImg/sportscategory3.png"
import sportscategory4 from "./sportsImg/sportscategory4.png"
import sportscategory5 from "./sportsImg/sportscategory5.png"
import sportscategory6 from "./sportsImg/sportscategory6.png"
import sportscategory7 from "./sportsImg/sportscategory7.png"
import sportscategory8 from "./sportsImg/sportscategory8.png"
import sportscategory9 from "./sportsImg/sportscategory9.png"
import sportscategory10 from "./sportsImg/sportscategory10.png"
import sportscategory11 from "./sportsImg/sportscategory11.png"
import sportscategory12 from "./sportsImg/sportscategory12.avif"

import sportsbestseller1 from "./sportsImg/sportsbestseller1.avif"
import sportsbestseller2 from "./sportsImg/sportsbestseller2.avif"
import sportsbestseller3 from "./sportsImg/sportsbestseller3.avif"
import sportsbestseller4 from "./sportsImg/sportsbestseller4.avif"
import sportsbestseller5 from "./sportsImg/sportsbestseller5.avif"
import sportsbestseller6 from "./sportsImg/sportsbestseller6.avif"
import sportsbestseller7 from "./sportsImg/sportsbestseller7.avif"
import sportsbestseller8 from "./sportsImg/sportsbestseller8.avif"

import sportsbrand from "./sportsImg/sportsbrand.avif"
import sportsbrand1 from "./sportsImg/sportsbrand1.png"
import sportsbrand2 from "./sportsImg/sportsbrand2.png"
import sportsbrand3 from "./sportsImg/sportsbrand3.png"
import sportsbrand4 from "./sportsImg/sportsbrand4.png"
import sportsbrand5 from "./sportsImg/sportsbrand5.png"
import sportsbrand6 from "./sportsImg/sportsbrand6.png"

import sportsclearance1 from "./sportsImg/sportsclearance1.avif"
import sportsclearance2 from "./sportsImg/sportsclearance2.avif"
import sportsclearance3 from "./sportsImg/sportsclearance3.avif"
import sportsclearance4 from "./sportsImg/sportsclearance4.avif"
import sportsclearance5 from "./sportsImg/sportsclearance5.avif"
import sportsclearance6 from "./sportsImg/sportsclearance6.avif"
import sportsclearance7 from "./sportsImg/sportsclearance7.avif"
import sportsclearance8 from "./sportsImg/sportsclearance8.avif"

import sportstoprated1 from "./sportsImg/sportstoprated1.avif"
import sportstoprated2 from "./sportsImg/sportstoprated2.avif"
import sportstoprated3 from "./sportsImg/sportstoprated3.avif"
import sportstoprated4 from "./sportsImg/sportstoprated4.avif"
import sportstoprated5 from "./sportsImg/sportstoprated5.avif"
import sportstoprated6 from "./sportsImg/sportstoprated6.avif"
import sportstoprated7 from "./sportsImg/sportstoprated7.avif"
import sportstoprated8 from "./sportsImg/sportstoprated8.avif"

import sportscampingbanner from "./sportsImg/sportscampingbanner.png"
import sportscampingcard1 from "./sportsImg/sportscampingcard1.png"
import sportscampingcard2 from "./sportsImg/sportscampingcard2.png"
import sportscampingcard3 from "./sportsImg/sportscampingcard3.png"

import sportscamping1 from "./sportsImg/sportscamping1.avif"
import sportscamping2 from "./sportsImg/sportscamping2.avif"
import sportscamping3 from "./sportsImg/sportscamping3.avif"
import sportscamping4 from "./sportsImg/sportscamping4.avif"
import sportscamping5 from "./sportsImg/sportscamping5.avif"
import sportscamping6 from "./sportsImg/sportscamping6.avif"
import sportscamping7 from "./sportsImg/sportscamping7.avif"
import sportscamping8 from "./sportsImg/sportscamping8.avif"

import cyclingbanner from "./sportsImg/cyclingbanner.png"
import cyclingcard1 from "./sportsImg/cyclingcard1.png"
import cyclingcard2 from "./sportsImg/cyclingcard2.png"
import cyclingcard3 from "./sportsImg/cyclingcard3.png"

import sportscycling1 from "./sportsImg/sportscycling1.avif"
import sportscycling2 from "./sportsImg/sportscycling2.avif"
import sportscycling3 from "./sportsImg/sportscycling3.avif"
import sportscycling4 from "./sportsImg/sportscycling4.avif"
import sportscycling5 from "./sportsImg/sportscycling5.avif"
import sportscycling6 from "./sportsImg/sportscycling6.avif"
import sportscycling7 from "./sportsImg/sportscycling7.avif"
import sportscycling8 from "./sportsImg/sportscycling8.avif"

import sportsindoorbanner from "./sportsImg/sportsindoorbanner.png"
import sportsindoorcard1 from "./sportsImg/sportsindoorcard1.png"
import sportsindoorcard2 from "./sportsImg/sportsindoorcard2.png"
import sportsindoorcard3 from "./sportsImg/sportsindoorcard3.png"

import sportsgym1 from "./sportsImg/sportsgym1.avif"
import sportsgym2 from "./sportsImg/sportsgym2.avif"
import sportsgym3 from "./sportsImg/sportsgym3.avif"
import sportsgym4 from "./sportsImg/sportsgym4.avif"
import sportsgym5 from "./sportsImg/sportsgym5.avif"
import sportsgym6 from "./sportsImg/sportsgym6.avif"
import sportsgym7 from "./sportsImg/sportsgym7.avif"
import sportsgym8 from "./sportsImg/sportsgym8.avif"

import sportsmatbanner from "./sportsImg/sportsmatbanner.png"
import sportsmatcard1 from "./sportsImg/sportsmatcard1.avif"
import sportsmatcard2 from "./sportsImg/sportsmatcard2.avif"
import sportsmatcard3 from "./sportsImg/sportsmatcard3.avif"
import sportsmatcard4 from "./sportsImg/sportsmatcard4.avif"

import sportsyoga1 from "./sportsImg/sportsyoga1.avif"
import sportsyoga2 from "./sportsImg/sportsyoga2.avif"
import sportsyoga3 from "./sportsImg/sportsyoga3.avif"
import sportsyoga4 from "./sportsImg/sportsyoga4.avif"
import sportsyoga5 from "./sportsImg/sportsyoga5.avif"
import sportsyoga6 from "./sportsImg/sportsyoga6.avif"
import sportsyoga7 from "./sportsImg/sportsyoga7.avif"
import sportsyoga8 from "./sportsImg/sportsyoga8.avif"

import sportsskatebanner from "./sportsImg/sportsskatebanner.png"
import sportsskatecard1 from "./sportsImg/sportsskatecard1.png"
import sportsskatecard2 from "./sportsImg/sportsskatecard2.png"
import sportsskatecard3 from "./sportsImg/sportsskatecard3.png"

import sportsscooter1 from "./sportsImg/sportsscooter1.avif"
import sportsscooter2 from "./sportsImg/sportsscooter2.avif"
import sportsscooter3 from "./sportsImg/sportsscooter3.avif"
import sportsscooter4 from "./sportsImg/sportsscooter4.avif"
import sportsscooter5 from "./sportsImg/sportsscooter5.avif"
import sportsscooter6 from "./sportsImg/sportsscooter6.avif"
import sportsscooter7 from "./sportsImg/sportsscooter7.avif"
import sportsscooter8 from "./sportsImg/sportsscooter8.avif"

import sportswaterbanner from "./sportsImg/sportswaterbanner.png"
import sportswatercard1 from "./sportsImg/sportswatercard1.png"
import sportswatercard2 from "./sportsImg/sportswatercard2.png"
import sportswatercard3 from "./sportsImg/sportswatercard3.png"
import sportswatercard4 from "./sportsImg/sportswatercard4.png"

import sportswater1 from "./sportsImg/sportswater1.avif"
import sportswater2 from "./sportsImg/sportswater2.avif"
import sportswater3 from "./sportsImg/sportswater3.avif"
import sportswater4 from "./sportsImg/sportswater4.avif"
import sportswater5 from "./sportsImg/sportswater5.avif"
import sportswater6 from "./sportsImg/sportswater6.avif"
import sportswater7 from "./sportsImg/sportswater7.avif"
import sportswater8 from "./sportsImg/sportswater8.avif"

import sportscard1 from "./sportsImg/sportscard1.png"
import sportscard2 from "./sportsImg/sportscard2.png"
import sportscard3 from "./sportsImg/sportscard3.png"
import sportscard4 from "./sportsImg/sportscard4.png"

import sportsactivewearbanner from "./sportsImg/sportsactivewearbanner.avif"
import sportsactivewearcard1 from "./sportsImg/sportsactivewearcard1.avif"
import sportsactivewearcard2 from "./sportsImg/sportsactivewearcard2.avif"
import sportsactivewearcard3 from "./sportsImg/sportsactivewearcard3.avif"

import sportstrackbanner from "./sportsImg/sportstrackbanner.png"
import sportstrackcard1 from "./sportsImg/sportstrackcard11.png"
import sportstrackcard2 from "./sportsImg/sportstrackcard2.png"







function Sports() {

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
            items: 12
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9
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





    return (<>
        <SportsTopCarousel />
        <Link to=""><img style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }} src={sportstopbanner} /></Link>


        <Link to=""><img style={{ width: "98%", marginLeft: "", marginTop: "2%" }} src={sportscategory} /></Link>

        {/* <Row xs={3} md={4} lg={6} style={{ width: "100%" }}> */}
        <Carousel style={{}} responsive={responsive2}>

        
        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory1}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Cardio</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory2}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Gym Pack</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory3}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Gym Machine</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory4}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Cycling</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory5}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Racket sport</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory6}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Running</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory7}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Sports medicine</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory8}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Strength Training</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory9}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Scooter</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory10}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Water Sports</p></a>

        <a type="submit" style={{width:"90%"}} ><img style={{ width: "90%" }} src={sportscategory11}></img>
        <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Yoga</p></a>

            </Carousel>

        {/* </Row> */}



        <h3 style={{ margin: "2%" }}>Sports & outdoors bestsellers</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsbestseller5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>







        <Link to=""><img style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }} src={sportsbrand} /></Link>
        <Row xs={3} md={4} lg={6} style={{ width: "100%",rowGap:"10px" }}>
            <Col><a type="submit"><img style={{ width: "85%", marginLeft: "5%" }} src={sportsbrand1}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "85%" }} src={sportsbrand2}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "85%" }} src={sportsbrand3}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "85%" }} src={sportsbrand4}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "85%" }} src={sportsbrand5}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "85%" }} src={sportsbrand6}></img></a></Col>

        </Row>





        <h3 style={{ margin: "2%" }}>Sports & outdoors clearance deals</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsclearance5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>








        <h3 style={{ margin: "2%" }}>Sports & outdoors clearance deals</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportstoprated5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>




        <div style={{ marginTop: "2%", backgroundColor: 'black' }}>
            <Link to=""><img style={{ width: "100%",marginTop:"1%",marginBottom:"1%" }} src={sportscampingbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportscampingcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportscampingcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportscampingcard3}></img></a></Col>
            </Row>
        </div>





        <h3 style={{ margin: "2%" }}>Camping & hiking essentials</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscamping5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>





        <div style={{ marginTop: "2%", backgroundColor: 'black' }}>
            <Link to=""><img style={{ width: "98%", margin: "1% auto 1% 1%",borderRadius:"25px" }} src={cyclingbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={cyclingcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={cyclingcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={cyclingcard3}></img></a></Col>
            </Row>
        </div>









        <h3 style={{ margin: "2%" }}>Ride on with cycling essentials</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportscycling5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>





        <div style={{ marginTop: "2%", backgroundColor: 'black' }}>
            <Link to=""><img style={{ width: "100%" }} src={sportsindoorbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportsindoorcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsindoorcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsindoorcard3}></img></a></Col>
            </Row>
        </div>






        <h3 style={{ margin: "2%" }}>Find cardio training must-haves</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsgym5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>






        <div style={{ marginTop: "2%", backgroundColor: 'black' }}>
            <Link to=""><img style={{ width: "100%",marginBottom:"1%" }} src={sportsmatbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportsmatcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsmatcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsmatcard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsmatcard4}></img></a></Col>

            </Row>
        </div>





        <h3 style={{ margin: "2%" }}>All your yoga essentials</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsyoga5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>





        <div style={{ marginTop: "2%", backgroundColor: 'rgb(222, 231, 255)' }}>
            <Link to=""><img style={{ width: "100%", marginTop: "1%",marginBottom: "1%" }} src={sportsskatebanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportsskatecard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsskatecard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsskatecard3}></img></a></Col>
            </Row>
        </div>






        <h3 style={{ margin: "2%" }}>Sports & outdoors bestsellers</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportsscooter5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>






        <div style={{ marginTop: "2%", backgroundColor: 'rgb(222, 231, 255)' }}>
            <Link to=""><img style={{ width: "100%", marginTop: "1%", marginBottom: "1%" }} src={sportswaterbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportswatercard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportswatercard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportswatercard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportswatercard4}></img></a></Col>
            </Row>
        </div>





        <h3 style={{ margin: "2%" }}>Sports & outdoors bestsellers</h3>
        <Carousel style={{}} responsive={responsive}>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater1} />
                <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater2} />
                <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater3} />
                <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater4} />
                <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater5} />
                <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater6} />
                <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater7} />
                <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater8} />
                <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater3} />
                <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                </Card.Body>
            </Card>

            <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={sportswater5} />
                <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                    <Card.Text style={{ marginTop: "5px" }}>
                        <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                    </Card.Text>
                    <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                    <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                </Card.Body>
            </Card>
        </Carousel>







        <Row style={{ width: "100%",marginTop:"2%"}}>
            <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportscard1}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "95%" }} src={sportscard2}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "95%" }} src={sportscard3}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "95%" }} src={sportscard4}></img></a></Col>
        </Row>






        <div style={{ marginTop: "1%", backgroundColor: 'black',paddingBottom:"1%" }}>
            <Link to=""><img style={{ width: "100%" }} src={sportsactivewearbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportsactivewearcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsactivewearcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportsactivewearcard3}></img></a></Col>
            </Row>
        </div>






        <div style={{ backgroundColor: 'rgb(222, 231, 255)',paddingBottom:"10px" }}>
            <Link to=""><img style={{ width: "100%", marginTop: "1%", paddingBottom: "1%" }} src={sportstrackbanner} /></Link>

            <Row style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={sportstrackcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%" }} src={sportstrackcard2}></img></a></Col>
               
            </Row>
        </div>









    </>

    )
}

export default Sports