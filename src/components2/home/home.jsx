import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

import hometopbanner from "./homeimg/hometopbanner.png"

import homecircle1 from "./homeimg/homecircle1.png"
import homecircle2 from "./homeimg/homecircle2.png"
import homecircle3 from "./homeimg/homecircle3.png"
import homecircle4 from "./homeimg/homecircle4.png"
import homecircle5 from "./homeimg/homecircle5.png"
import homecircle6 from "./homeimg/homecircle6.png"
import homecircle7 from "./homeimg/homecircle7.png"
import homecircle8 from "./homeimg/homecircle8.png"
import homecircle9 from "./homeimg/homecircle9.png"

import HomeTopCarousel from "./hometopcarousel";

import homebestseller1 from "./homeimg/homebestseller1.avif"
import homebestseller2 from "./homeimg/homebestseller2.avif"
import homebestseller3 from "./homeimg/homebestseller3.avif"
import homebestseller4 from "./homeimg/homebestseller4.avif"
import homebestseller5 from "./homeimg/homebestseller5.avif"
import homebestseller6 from "./homeimg/homebestseller6.avif"
import homebestseller7 from "./homeimg/homebestseller7.avif"
import homebestseller8 from "./homeimg/homebestseller8.avif"
import homebestseller9 from "./homeimg/homebestseller9.avif"
import homebestseller10 from "./homeimg/homebestseller10.avif"

import winteressentialbanner from "./homeimg/winteressentialbanner.avif"
import winteressentialbanner2 from "./homeimg/winteressentialbanner2.png"
import winteressentialbanner3 from "./homeimg/winteressentialbanner3.png"
import winteressentialbanner4 from "./homeimg/winteressentialbanner4.png"
import winteressentialbanner5 from "./homeimg/winteressentialbanner5.png"
import winteressentialbanner6 from "./homeimg/winteressentialbanner6.png"
import winteressentialbanner1 from "./homeimg/winteressentialbanner1.png"

import coolest1 from "./homeimg/coolest1.avif"
import coolest2 from "./homeimg/coolest2.avif"
import coolest3 from "./homeimg/coolest3.avif"
import coolest4 from "./homeimg/coolest4.avif"
import coolest5 from "./homeimg/coolest5.avif"
import coolest6 from "./homeimg/coolest6.avif"
import coolest7 from "./homeimg/coolest7.avif"
import coolest8 from "./homeimg/coolest8.avif"
import coolest9 from "./homeimg/coolest9.avif"
import coolest10 from "./homeimg/coolest10.avif"

import newarrival1 from "./homeimg/newarrival1.avif"
import newarrival2 from "./homeimg/newarrival2.avif"
import newarrival3 from "./homeimg/newarrival3.avif"
import newarrival4 from "./homeimg/newarrival4.avif"
import newarrival5 from "./homeimg/newarrival5.avif"
import newarrival6 from "./homeimg/newarrival6.avif"
import newarrival7 from "./homeimg/newarrival11.avif"
import newarrival8 from "./homeimg/newarrival8.avif"
import newarrival9 from "./homeimg/newarrival9.avif"
import newarrival10 from "./homeimg/newarrival10.avif"

import shopbybrand from "./homeimg/shopbrandbanner.avif"
import shopbrand1 from "./homeimg/shopbrand1.png"
import shopbrand2 from "./homeimg/shopbrand2.png"
import shopbrand3 from "./homeimg/shopbrand3.png"
import shopbrand4 from "./homeimg/shopbrand4.png"
import shopbrand5 from "./homeimg/shopbrand5.png"
import shopbrand6 from "./homeimg/shopbrand6.png"
import shopbrand7 from "./homeimg/shopbrand7.png"
import shopbrand8 from "./homeimg/shopbrand8.png"
import shopbrand9 from "./homeimg/shopbrand9.png"
import shopbrand10 from "./homeimg/shopbrand10.png"
import shopbrand11 from "./homeimg/shopbrand11.png"
import shopbrand12 from "./homeimg/shopbrand12.png"

import toprated1 from "./homeimg/toprated1.avif"
import toprated2 from "./homeimg/toprated2.avif"
import toprated3 from "./homeimg/toprated3.avif"
import toprated4 from "./homeimg/toprated4.avif"
import toprated5 from "./homeimg/toprated5.avif"
import toprated6 from "./homeimg/toprated6.avif"
import toprated7 from "./homeimg/toprated7.avif"
import toprated8 from "./homeimg/toprated8.avif"
import toprated9 from "./homeimg/toprated9.avif"
import toprated10 from "./homeimg/toprated10.avif"

import kitchendining from "./homeimg/kitchendining.avif"
import kitchendining1 from "./homeimg/kitchendining1.png"
import kitchendining2 from "./homeimg/kitchendining2.png"
import kitchendining3 from "./homeimg/kitchendining3.png"
import kitchendining4 from "./homeimg/kitchendining4.png"

import brwosekitchen1 from "./homeimg/browsekitchen1.avif"
import brwosekitchen2 from "./homeimg/browsekitchen2.avif"
import brwosekitchen3 from "./homeimg/browsekitchen3.avif"
import brwosekitchen4 from "./homeimg/browsekitchen4.avif"
import brwosekitchen5 from "./homeimg/browsekitchen5.avif"
import brwosekitchen6 from "./homeimg/browsekitchen6.avif"
import brwosekitchen7 from "./homeimg/browsekitchen7.avif"
import brwosekitchen8 from "./homeimg/browsekitchen8.avif"
import brwosekitchen9 from "./homeimg/browsekitchen9.avif"
import brwosekitchen10 from "./homeimg/browsekitchen10.avif"

import homedecor from "./homeimg/homedecor.avif"
import homedecor1 from "./homeimg/homedecor1.png"
import homedecor2 from "./homeimg/homedecor2.png"
import homedecor3 from "./homeimg/homedecor3.png"

import deckit1 from "./homeimg/deckit1.avif"
import deckit2 from "./homeimg/deckit2.avif"
import deckit3 from "./homeimg/deckit3.avif"
import deckit4 from "./homeimg/deckit4.avif"
import deckit5 from "./homeimg/deckit5.avif"
import deckit6 from "./homeimg/deckit6.avif"

import homeimprovement from "./homeimg/homeimprovement.avif"
import homeimprovement1 from "./homeimg/homeimprovement1.png"
import homeimprovement2 from "./homeimg/homeimprovement2.png"
import homeimprovement3 from "./homeimg/homeimprovement3.png"

import solutions1 from "./homeimg/solutions1.avif"
import solutions2 from "./homeimg/solutions2.avif"
import solutions3 from "./homeimg/solutions3.avif"
import solutions4 from "./homeimg/solutions4.avif"
import solutions5 from "./homeimg/solutions5.avif"
import solutions6 from "./homeimg/solutions6.avif"

import bathbedding from "./homeimg/bathbedding.avif"
import bathbedding1 from "./homeimg/bathbedding1.png"
import bathbedding2 from "./homeimg/bathbedding2.png"

import bathessential from "./homeimg/bathessential.avif"
import bathessential2 from "./homeimg/bathessential2.avif"
import bathessential3 from "./homeimg/bathessential3.avif"
import bathessential4 from "./homeimg/bathessential4.avif"
import bathessential5 from "./homeimg/bathessential5.avif"
import bathessential6 from "./homeimg/bathessential6.avif"

import furniture from "./homeimg/furniture.avif"
import furniture1 from "./homeimg/furniture1.avif"
import furniture2 from "./homeimg/furniture2.avif"
import furniture3 from "./homeimg/furniture3.avif"
import furniture4 from "./homeimg/furniture4.avif"

import bestfurniture1 from "./homeimg/bestfurniture1.avif"
import bestfurniture2 from "./homeimg/bestfurniture2.avif"
import bestfurniture3 from "./homeimg/bestfurniture3.avif"
import bestfurniture4 from "./homeimg/bestfurniture4.avif"
import bestfurniture5 from "./homeimg/bestfurniture5.avif"
import bestfurniture6 from "./homeimg/bestfurniture6.avif"

import appliances from "./homeimg/appliances.avif"
import appliances1 from "./homeimg/appliances1.avif"
import appliances2 from "./homeimg/appliances2.avif"

import homeappliances1 from "./homeimg/homeappliances1.avif"
import homeappliances2 from "./homeimg/homeappliances2.avif"
import homeappliances3 from "./homeimg/homeappliances3.avif"
import homeappliances4 from "./homeimg/homeappliances4.avif"
import homeappliances5 from "./homeimg/homeappliances5.avif"
import homeappliances6 from "./homeimg/homeappliances6.avif"

import shopmore1 from "./homeimg/shopmore1.avif"
import shopmore2 from "./homeimg/shopmore2.avif"
import shopmore3 from "./homeimg/shopmore3.avif"
import shopmore4 from "./homeimg/shopmore4.avif"
import shopmore5 from "./homeimg/shopmore5.avif"
import shopmore6 from "./homeimg/shopmore6.avif"
import shopmore7 from "./homeimg/shopmore7.avif"
import shopmore8 from "./homeimg/shopmore8.avif"
import shopmore9 from "./homeimg/shopmore9.avif"
import shopmore10 from "./homeimg/shopmore10.avif"
import shopmore11 from "./homeimg/shopmore11.avif"


import homedetail from "./detail.jsx";
import Entry from "./entry.jsx";


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








function Home() {

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
            items: 8
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
            <HomeTopCarousel />

            <img style={{ width: "98%", marginLeft: "1%", marginTop: "1%" }} src={hometopbanner}></img>

{/* <img src={require("./homeimg/hometopbanner.png")} alt="images"></img> */}


            <Row style={{ width: "100%", marginTop: "1%" }}>
                <Carousel style={{}} responsive={responsive2}>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle1}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Home Tools</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle2}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Bedding</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle3}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Furniture</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle4}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Home Appliances</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle5}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Home Decor</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle6}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Home Storage</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle7}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Bathing</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle8}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Large Appliances</p></a>
                    </Col>
                    <Col style={{textAlign:"center"}}><a type="submit" style={{width:"80%"}}><img style={{ width: "100%" }} src={homecircle9}></img>
                            <p style={{ fontSize: "15px", fontWeight: "650", textAlign: "center",marginTop:"10px" }}>Home Improvement</p></a>
                    </Col>
                    
                </Carousel>
            </Row>


            <h3 style={{ margin: "2%" }}>Home & Kitchen bestsellers</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery Set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 Shelves With Stainles..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>25.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller3} />
                    <Card.Body ><p1>Sunhome 24-piesce Stainles Steel Cultery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller4} />
                    <Card.Body ><p1>Falpro Multi-Functional Metal Coat Rack White..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>40.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.6⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller5} />
                    <Card.Body ><p1>Regal In House 2 pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>33.50</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller7} />
                    <Card.Body ><p1>noon east 5 pieces Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>35.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller8} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Coat An...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>53.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller9} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duavet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homebestseller10} />
                    <Card.Body ><p1>Amal Comforter Set-Bed Linen With Conforter..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>


            <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={winteressentialbanner}></img></a>
            <div>
                <Row style={{ width: "98%", marginLeft: "1%" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner3}></img></a></Col>
                </Row>
                <Row style={{ width: "98%", marginLeft: "1%" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner4}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner5}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={winteressentialbanner6}></img></a></Col>
                </Row>
            </div>



            {/* Cooles Lunch Boxes & Bottles */}



            <h3 style={{ margin: "2%" }}>Cooles Lunch Boxes & Bottles</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest1} />
                    <Card.Body ><p1>CYTHERIA Insulated Canvas Tote Lunch Bag...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest2} />
                    <Card.Body ><p1>DBLEW LED Temperature Display Vacuum</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest3} />
                    <Card.Body ><p1>Infinity Water Bottle,Lifestyle,Gym,1L/...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest4} />
                    <Card.Body ><p1>BEAR Bear portable Electric Lunch Box Food..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest5} />
                    <Card.Body ><p1>AIWANTO 3 Compartment Bo..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest6} />
                    <Card.Body ><p1>Blu Handlheld Shower Filter For Skin..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest7} />
                    <Card.Body ><p1>XIUWOO Intelligent Temperature Display...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest8} />
                    <Card.Body ><p1>SMILEE Bento Lunch Box With Divider Blue......</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest9} />
                    <Card.Body ><p1>CYTHERIA Thermal Insulated Lunch Bag...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={coolest10} />
                    <Card.Body ><p1>Royalford BRS Glass Water Bottle Black/...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>



            {/* new arrival in home & kitchen */}
            <h3 style={{ margin: "2%" }}>New arrival in home & kitchen</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival1} />
                    <Card.Body ><p1>Hometown Hometown H1 Storage Basket pack...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival2} />
                    <Card.Body ><p1>Harden Harden-Alloy Steel G Clamp-3...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival3} />
                    <Card.Body ><p1>Harden Harden-Alloy Steel G Clamp-4inch...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival4} />
                    <Card.Body ><p1>Harden Pressure Sprayer Botter Home And...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival5} />
                    <Card.Body ><p1>Hometown fitted Sheet Set Made From 100%...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival6} />
                    <Card.Body ><p1>LUNA Home 6-piece Queen size without..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival7} />
                    <Card.Body ><p1>impex Impex CB 2285 Rechargeable Battery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival8} />
                    <Card.Body ><p1>Hometown Storage Cubes Blue...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival9} />
                    <Card.Body ><p1>AIWANTO wall-mounted hair dryer rack(Black)...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={newarrival10} />
                    <Card.Body ><p1>Hometown Comforter  Set Cotton Dark Green King...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>



            {/* Shop by brands */}
            <a type="submit"><img style={{ width: "98%", marginTop: "1%", marginLeft: "1%" }} src={shopbybrand} /></a>
            <div>
                <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand3}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand4}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand5}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand6}></img></a></Col>
                </Row>
                <Row xs={3} md={4} lg={6} style={{ width: "98%", marginLeft: "1%", marginTop: "2%",rowGap:"10px" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand7}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand8}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand9}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand10}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand11}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={shopbrand12}></img></a></Col>
                </Row>
            </div>



            {/* Top Rated Products */}
            <h3 style={{ margin: "2%" }}>Top rated products</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated1} />
                    <Card.Body ><p1>noon east 12-piece LR6 AA Alkaline Battery set...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated2} />
                    <Card.Body ><p1>noon east Foldable Charcoal BBQ Grill...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated3} />
                    <Card.Body ><p1>Sunshine 24-piece Stainless Steel Cutlery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated4} />
                    <Card.Body ><p1>noon east 5 piece Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated5} />
                    <Card.Body ><p1>Rahalife Soft Solid King Size Duvet Microfiber...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated6} />
                    <Card.Body ><p1>noon east 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated7} />
                    <Card.Body ><p1>noon east light Blanket...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated8} />
                    <Card.Body ><p1>noon east 12-piece LR03 AAA Alkaline Battery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated9} />
                    <Card.Body ><p1>Cool Baby 10-piece 3D Brick Pattern Decorative...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={toprated10} />
                    <Card.Body ><p1>Amal Bathrobe-225 GSM Microplus Fleece...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>




            {/* kitchen And Dining */}


            <a type="submit"><img style={{ width: "98%", marginTop: "2%", marginLeft: "1%" }} src={kitchendining}></img></a>
            <div>
                <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={kitchendining1}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={kitchendining2}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={kitchendining3}></img></a></Col>
                    <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={kitchendining4}></img></a></Col>
                </Row>
            </div>



            {/* Browse Kitchen & dining must-haves */}


            <h3 style={{ margin: "2%" }}>Browse Kitchen & dining must-haves</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen1} />
                    <Card.Body ><p1>noon east Foldable Charcoal BBQ Grill...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen2} />
                    <Card.Body ><p1>Sunhome 24-oiece Stainless Steel Culteryl...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen3} />
                    <Card.Body ><p1>noon east 5 piece Glass Food Storage Container...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen4} />
                    <Card.Body ><p1>noon east 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen5} />
                    <Card.Body ><p1>noon east Portable Charcoal BBQ Grill...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen6} />
                    <Card.Body ><p1>CRISTAL 2-piece Double Wall Glass Cup Set...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen7} />
                    <Card.Body ><p1>noon east 6 piece Coolware Set-Aluminiu...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen8} />
                    <Card.Body ><p1>noon east 18 piece Porcelain Dinner set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen9} />
                    <Card.Body ><p1>noon 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={brwosekitchen10} />
                    <Card.Body ><p1>Hario Kava noir V60 Barista Kit multicolour...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>



            {/* Home Decor */}
            <div style={{ backgroundColor: "rgb(247, 241, 229)", marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "10px", marginLeft: "1%" }} src={homedecor}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homedecor1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homedecor2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homedecor3}></img></a></Col>
                    </Row>
                </div>
            </div>




            {/* Deck it up with home decor */}

            <h3 style={{ margin: "2%" }}>Deck it up with home decor</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit1} />
                    <Card.Body ><p1>Cool baby 10-pieces 3D Brick Pattern Decorative...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit2} />
                    <Card.Body ><p1>Buckhoor New Style USB Type-C power Rechar...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit3} />
                    <Card.Body ><p1>Rock pow 360 Degree Windproof Flameless...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit4} />
                    <Card.Body ><p1>Eworld 6 pack clear Acrylic Display Riser...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit5} />
                    <Card.Body ><p1>Captaintech Multipurpose Window Privacy Film...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit6} />
                    <Card.Body ><p1>fashionhome Floor Full Length Mirror...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit1} />
                    <Card.Body ><p1>noon east 6 piece Coolware Set-Aluminiu...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit2} />
                    <Card.Body ><p1>noon east 18 piece Porcelain Dinner set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit3} />
                    <Card.Body ><p1>noon 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={deckit4} />
                    <Card.Body ><p1>Hario Kava noir V60 Barista Kit multicolour...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>


            {/* Home Improvement */}

            <div style={{ marginTop: "2%" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "10px", marginLeft: "1%" }} src={homeimprovement}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homeimprovement1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homeimprovement2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={homeimprovement3}></img></a></Col>
                    </Row>
                </div>
            </div>


            {/* Solution For home improvement */}

            <h3 style={{ margin: "2%" }}>Solution For home improvement</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions1} />
                    <Card.Body ><p1>noon east 12-piece LR6AA Alkalyne battery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions2} />
                    <Card.Body ><p1>ALMUFARREJ Shoe Rack 5 shelves With Stain...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions3} />
                    <Card.Body ><p1>Xiaomi mi 360 1080P Camera</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions4} />
                    <Card.Body ><p1>fashionhome 5-tier Stainless Steel...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions5} />
                    <Card.Body ><p1>EZVIZ C6N wi-fi 2MP 1080 Smart Home...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions6} />
                    <Card.Body ><p1>noon east 12-piece LR03 AAA Alkalyne battery...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions1} />
                    <Card.Body ><p1>noon east 6 piece Coolware Set-Aluminiu...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions2} />
                    <Card.Body ><p1>noon east 18 piece Porcelain Dinner set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions3} />
                    <Card.Body ><p1>noon 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={solutions4} />
                    <Card.Body ><p1>Hario Kava noir V60 Barista Kit multicolour...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>





            {/* bath bedding */}

            <div style={{ marginTop: "2%", backgroundColor: "rgb(247, 241, 229)" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "10px", marginLeft: "1%" }} src={bathbedding}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={bathbedding1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={bathbedding2}></img></a></Col>
                    </Row>
                </div>
            </div>

            {/* your bath & bedding essential  */}

            <h3 style={{ margin: "2%" }}>your bath & bedding essential</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential} />
                    <Card.Body ><p1>REGAl IN HOUSE 2 Pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential2} />
                    <Card.Body ><p1>Blu Handed Shower filter for skin And ...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential3} />
                    <Card.Body ><p1>Rahalifa Soft Solid king Size DUvet</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential4} />
                    <Card.Body ><p1>Amal Comforter Set-bed Linen With Comforter...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential5} />
                    <Card.Body ><p1>Rahalife set of 2 Lavish Ultra Soft Reactangula...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential6} />
                    <Card.Body ><p1>noon east light Blanket 150...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential} />
                    <Card.Body ><p1>noon east 6 piece Coolware Set-Aluminiu...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential2} />
                    <Card.Body ><p1>noon east 18 piece Porcelain Dinner set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential3} />
                    <Card.Body ><p1>noon 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bathessential4} />
                    <Card.Body ><p1>Hario Kava noir V60 Barista Kit multicolour...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>





            {/* furniture */}

            <div style={{ marginTop: "2%", backgroundColor: "rgb(247, 241, 229)" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "10px", marginLeft: "1%" }} src={furniture}></img></a>
                <div>
                    <Row xs={2} md={4} lg={4} style={{ width: "98%", marginLeft: "1%",rowGap:"10px" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={furniture1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={furniture2}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={furniture3}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={furniture4}></img></a></Col>
                    </Row>
                </div>
            </div>



            {/* bring home best furniture */}

            <h3 style={{ margin: "2%" }}>Bring home the best furniture</h3>
            <Carousel style={{}} responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture1} />
                    <Card.Body ><p1>REGAl IN HOUSE 2 Pieces Hotel Pillow...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>14.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.1⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture2} />
                    <Card.Body ><p1>Blu Handed Shower filter for skin And ...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture3} />
                    <Card.Body ><p1>Rahalifa Soft Solid king Size DUvet</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture4} />
                    <Card.Body ><p1>Amal Comforter Set-bed Linen With Comforter...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture5} />
                    <Card.Body ><p1>Rahalife set of 2 Lavish Ultra Soft Reactangula...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture6} />
                    <Card.Body ><p1>noon east light Blanket 150...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture1} />
                    <Card.Body ><p1>noon east 6 piece Coolware Set-Aluminiu...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.2⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture2} />
                    <Card.Body ><p1>noon east 18 piece Porcelain Dinner set..</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>48.40</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.7⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture3} />
                    <Card.Body ><p1>noon 3 piece Borosilicate Glass Food...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>55.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={bestfurniture4} />
                    <Card.Body ><p1>Hario Kava noir V60 Barista Kit multicolour...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>9.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.6⭐</span>
                    </Card.Body>
                </Card>
            </Carousel>


            {/* Appliances */}

            <div style={{ marginTop: "2%", backgroundColor: "rgb(247, 241, 229)" }}>
                <a type="submit"><img style={{ width: "98%", marginTop: "10px", marginLeft: "1%" }} src={appliances}></img></a>
                <div>
                    <Row style={{ width: "98%", marginLeft: "1%" }}>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={appliances1}></img></a></Col>
                        <Col><a type="submit" href="wimtersell"><img style={{ width: "100%" }} src={appliances2}></img></a></Col>

                    </Row>
                </div>
            </div>





            {/* must grab the home appliances */}

            <h3 style={{ marginTop: "2%", marginLeft: "2%" }}>Must grab the home appliances</h3>
            <Carousel responsive={responsive}>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances1} />
                    <Card.Body ><p1>GEEPAS Disgital Air Fryer With 3.5L Total...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>169.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances2} />
                    <Card.Body ><p1>GEEPAS microwave Oven 20L, Re-Heating...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances3} />
                    <Card.Body ><p1>SUPER GENERAL Front Load Washing m...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances4} />
                    <Card.Body ><p1>Hisense Free Standing Front Loading Washi...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances5} />
                    <Card.Body ><p1>Deerma Portable Handheld Vacuum...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>27.35</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.8⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "90%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances6} />
                    <Card.Body ><p1>noon east Mechanical Air Fryer...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>12.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.0⭐</span>
                    </Card.Body>
                </Card>
                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances1} />
                    <Card.Body ><p1>GEEPAS Disgital Air Fryer With 3.5L Total...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>169.70</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances2} />
                    <Card.Body ><p1>GEEPAS microwave Oven 20L, Re-Heating...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>21.80</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>3.5⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances3} />
                    <Card.Body ><p1>SUPER GENERAL Front Load Washing m...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>38.20</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}>4.4⭐</span>
                    </Card.Body>
                </Card>

                <Card href="/#" type="submit" style={{ width: "95%", marginLeft: "8px", border: "0px" }}>
                    <Card.Img style={{ width: "85%", height: "13rem", marginLeft: "5%" }} variant="top" src={homeappliances4} />
                    <Card.Body ><p1>Hisense Free Standing Front Loading Washi...</p1>
                        <Card.Text style={{ marginTop: "5px" }}>
                            <span style={{ fontWeight: "400", fontSize: "13px" }}>INR </span><span style={{ fontWeight: "700" }}>106.00</span><br />
                        </Card.Text>
                        <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                        <span style={{ float: "right", backgroundColor: " rgb(17, 99, 17)", color: "white", fontWeight: "700", fontSize: "12px", borderRadius: "10px", padding: "2px 3px" }}></span>
                    </Card.Body>
                </Card>
            </Carousel>


            {/* Shop More Categories */}

            <Row style={{ width: "100%", marginTop: "2%" }}>
            <Carousel style={{}} responsive={responsive}>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore6}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore7}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore8}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore9}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore10}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "75%", marginLeft: "15px" }} src={shopmore11}></img></a></Col>
                </Carousel>
                 </Row>



            <div style={{ backgroundColor: "rgb(247, 241, 229)", marginTop: "2%" }}>
                <h1 style={{ textAlign: "center" }}>
                    <span>Explore More</span>
                </h1>
                <dl className="dictionary">{homedetail.map(createEntry)}</dl>


                {/* <button style={{}}>show more</button> */}

            </div>
        </>
    )
}

export default Home