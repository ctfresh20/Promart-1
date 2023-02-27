import Card from "react-bootstrap/esm/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
// import Footer from "../component/footer";
// import Header from "../component/header";

import iphone from "./productImg/blueiphone.avif"
import bigiphone2 from "./productImg/bigiphone2.avif"
import bigiphone3 from "./productImg/bigiphone3.avif"

import smalliphone1 from "./productImg/smalliphone1.avif"
import smalliphone2 from "./productImg/smalliphone2.avif"
import smalliphone3 from "./productImg/smalliphone3.avif"

import nanonoon from "./productImg/nanonoon.svg"
import emi from "./productImg/emi.svg"
import strike from "./productImg/strike.svg"
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';






function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}








function Iphone() {















    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };





    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        if (count <= 0) {
            setCount = 0;
        }
        else {
            setCount(count - 1)
        }
    }


    const [count1, setCount1] = useState("Middle East Version")

    function onClick1() {
        setCount1("Physical Dual Sim Version")
    }
    function onClick2() {
        setCount1("USA Version")
    }
    function onClick4() {
        setCount1("Middle East Version")
    }

    function onClick3() {
        setCount1("International Version")
    }

    const [count2, setCount2] = useState("256 GB")

    function Memory1() {
        setCount2("256 GB")
    }
    function Memory2() {
        setCount2("512 GB")
    }
    function Memory3() {
        setCount2("1 TB")
    }

    function Memory4() {
        setCount2("128 GB")
    }

    const [countImg, setCountImg] = useState(iphone);

    function countImg1() {
        setCountImg(iphone);
    }
    function countImg2() {
        setCountImg(bigiphone2);
    }
    function countImg3() {
        setCountImg(bigiphone3);
    }
    // function countImg4() {
    //     setCount(smalliphone3);
    // }



    return (<>




        <Row xs={1} md={2} lg={3} style={{ marginTop: "10px", width: "100%" }}>
            <Col>
                {/* <Row style={{ marginLeft: "10px" }}> */}

                <img style={{ width: "90%", marginLeft: "5%", height: "25rem" }} src={countImg}></img>
                <div style={{}} className="scrolling">
                    <button style={{ border: "0px" }} onClick={countImg1}><img src={smalliphone1}></img>  </button>
                    <button style={{ border: "0px" }} onClick={countImg2}><img src={smalliphone2}></img> </button>
                    <button style={{ border: "0px" }} onClick={countImg3}><img src={smalliphone3}></img></button>
                    <button style={{ border: "0px" }} onClick={countImg1}><img src={smalliphone1}></img>  </button>
                    <button style={{ border: "0px" }} onClick={countImg2}><img src={smalliphone2}></img> </button>
                    <button style={{ border: "0px" }} onClick={countImg3}> <img src={smalliphone3}></img></button>
                </div>

                {/* </Row> */}
            </Col>




            <Col className="detail">
                <p style={{ backgroundColor: "black", color: "white", width: "75px", paddingLeft: "5px", borderRadius: "70px", fontSize: "14px", marginTop: "30px" }}>Best Seller</p>
                <Link ><span style={{ color: "grey", fontSize: "16px" }}>Apple</span></Link>
                <p style={{ fontSize: "20px", fontWeight: "700", margin: "0px" }}>iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime</p>

                <Row>
                    <Col xs="9" >
                        <p style={{ color: "grey", fontSize: "14px" }}>Model Number : MQ8A3CH/A / MQ8A3ZA/A</p>
                    </Col>
                    <Col><span>4.6⭐</span></Col>
                </Row>
                <p style={{ margin: "0px" }} ><span style={{ fontSize: "13px" }}>Now:</span><span style={{ fontSize: "16px", fontWeight: "700" }}> ₹110000.00</span><span style={{ fontSize: "13px" }}> (Inclusive of VAT)</span></p>


                <Card style={{ marginTop: "15px", backgroundColor: "rgb(247, 247, 247)" }}>
                    <p style={{ margin: "10px", backgroundColor: "black", color: "white", width: "110px", padding: "1px 5px", borderRadius: "70px", fontSize: "14px" }}>Trade-in & save</p>
                    <h4 style={{ marginLeft: "10px" }}>Buy a new device & turn your current phone into extra savings 💰</h4>
                    <p style={{ marginLeft: "10px" }}>With noon Trade-in, get an evaluation of your phone & find out how much it’s worth</p>
                    <button style={{ width: "35%", padding: "10px", fontSize: "13px", fontWeight: "700", border: "1px solid gray", backgroundColor: "white", margin: "10px " }}>TRADE-IN NOW</button>
                </Card>

                <Row style={{ marginTop: "4%", backgroundColor: "rgb(255, 248, 236)", borderRadius: "8px", width: "99.5%", marginLeft: ".25%" }}>
                    {/* <Col xs={1}><img src={nanonoon}></img></Col> */}
                    <Col>
                        <p style={{ fontSize: "14px" }}>
                            Earn AED 259 cashback with the Mashreq Noon VIP Credit Card. <a type="submit"><span style={{ color: "blue", textDecoration: "underline", fontWeight: "600" }}> Apply Now</span></a>
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginTop: "4%", backgroundColor: "rgb(255, 248, 236)", borderRadius: "8px", width: "99.5%", marginLeft: ".25%" }}>
                    <Col xs={1}><img src={emi}></img></Col>
                    <Col>
                        <p style={{ fontSize: "14px" }}>
                            Monthly payment plans from AED 216    <a type="submit"><span style={{ color: "blue", textDecoration: "underline", fontWeight: "600" }}> View More details</span></a>
                        </p>
                    </Col>
                </Row>


                <Card style={{ marginTop: "15px", backgroundColor: "rgb(247, 247, 247)" }}>
                    <Row>
                        <Col>
                            <p style={{ marginTop: "10px", marginLeft: "10px" }}>Order in 17 hrs 0 mins <br />
                                <span style={{ textDecoration: "underline", fontSize: "15px", fontWeight: "600" }}>
                                    FREE Two Days Delivery.
                                </span></p>
                        </Col>
                        <Col><express style={{ marginLeft: "80px", marginTop: "20px", backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express></Col>
                    </Row>
                    <Card style={{ width: "90%", marginLeft: "5%", marginBottom: "5%", border: "0px", backgroundColor: "white" }}>
                        <Row >
                            <Col xs={1}>
                                <img style={{ width: "" }} src={strike}></img>
                            </Col>
                            <Col>
                                <p style={{ fontSize: "13px" }}>Want it tomorrow? Select <span style={{ fontSize: "13px", fontWeight: "700" }}>Get It Tomorrow </span>on checkout within the next <span style={{ fontSize: "13px", fontWeight: "700" }}>8 hours 0 minutes.</span></p></Col>
                        </Row>
                    </Card>
                </Card>
                <p style={{ marginTop: "20px", marginBottom: "0px" }}>Quantity</p>
                <Row >
                    <Col style={{ border: "", width: "40%", padding: "5px" }}>
                        <button style={{ border: "0", backgroundColor: "rgb(237, 240, 243)", fontSize: "25px", fontWeight: "bolder", width: "30px", padding: "0px", color: "black" }} onClick={decrease} className="bttn" >-</button>
                        <button style={{ border: "0px", backgroundColor: "white", fontSize: "20px", color: "black" }} className="Add-btn">{count}</button>
                        <button style={{ border: "0px", backgroundColor: "rgb(237, 240, 243)", fontSize: "25px", fontWeight: "bolder", width: "30px", padding: "0px", color: "black" }} onClick={increase} className="bttn" >+</button>
                    </Col>

                    <Col style={{ padding: "5px" }}>
                        <button style={{ padding: "5px 20px", borderColor: "blue", backgroundColor: "white", color: "blue", width: "130px" }}>TRADE-IN</button>
                    </Col>
                    <Col style={{ padding: "5px" }}>
                        <button style={{ padding: "5px 10px", borderColor: "blue", backgroundColor: "blue", color: "white", width: "130px" }}>ADD TO CART</button>
                    </Col>
                </Row>
                <div style={{ marginTop: "10px" }}>
                    <p style={{ color: "grey", fontSize: "14px" }}>Version:<span style={{ color: "black", fontSize: "14px", fontWeight: "500" }}>{count1}</span></p>
                    <Row xs={2} md={2} lg={2}    >
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "7px 20px", backgroundColor: "white" }} onClick={onClick1}>Physical Dual...</button><br />
                        </Col>
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "7px 20px", backgroundColor: "white" }} onClick={onClick4}>Middle East...</button><br />
                        </Col>
                    </Row>
                    <Row xs={2} md={2} lg={2} style={{ marginTop: "10px" }}>
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "7px 30px", backgroundColor: "white" }} onClick={onClick2}>USA Version</button><br />
                        </Col>
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "7px 10px", backgroundColor: "white" }} onClick={onClick3}>International V...</button><br />
                        </Col>
                    </Row>
                </div>


                <div style={{ marginTop: "10px" }}>
                    <p style={{ color: "grey", fontSize: "14px" }}>Internal Memory:<span style={{ color: "black", fontSize: "14px", fontWeight: "500" }}>{count2}</span></p>
                    <Row >
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "5px 9px", backgroundColor: "white" }} onClick={Memory1}>256 GB</button><br />
                        </Col>
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "5px 9px", backgroundColor: "white" }} onClick={Memory2}>512 GB</button><br />
                        </Col>


                        <Col>
                            <button style={{ border: "1px solid grey", padding: "5px 10px", backgroundColor: "white" }} onClick={Memory3}>1 TB</button><br />
                        </Col>
                        <Col>
                            <button style={{ border: "1px solid grey", padding: "5px 9px", backgroundColor: "white" }} onClick={Memory4}>128 GB</button><br />
                        </Col>
                    </Row>
                </div>


                <div style={{ backgroundColor: "aliceblue", marginTop: "20px", padding: "15px", width: "100%" }}>
                    <p style={{ marginLeft: "2%" }}>Frequently Bought Together</p>
                    <Card style={{ width: "96%", marginLeft: "2%",paddingBottom:"10px" }}>
                        <Carousel responsive={responsive}>

                            <a type="submit" style={{ width: "70%", marginLeft: "8px", border: "0px" }}>
                                <input style={{ float: "top" }} type="checkbox"></input>
                                <Card.Img type="checkbox" style={{ width: "80%", height: "8rem", }} src={smalliphone1} />
                                <Card.Text style={{ marginTop: "5px" }}>
                                    <span style={{ fontWeight: "200", fontSize: "14px" }}>AED </span><span style={{ fontWeight: "600", fontSize: "14px" }}>5199.00</span><br />
                                    <p1 style={{ fontSize: "10px" }}>Apple iphone 14 128GB Deep purple5G... </p1>
                                </Card.Text>
                                <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                                <span style={{ float: "right" }}>4.5⭐</span>

                            </a>
                            <a type="submit" style={{ width: "70%", marginLeft: "8px", border: "0px" }}>
                                <input style={{ float: "top" }} type="checkbox"></input>
                                <Card.Img style={{ width: "80%", height: "8rem", }} variant="top" src={smalliphone1} />

                                <Card.Text style={{ marginTop: "5px" }}>
                                    <span style={{ fontWeight: "200", fontSize: "14px" }}>AED </span><span style={{ fontWeight: "600", fontSize: "14px" }}>5199.00</span><br />
                                    <p1 style={{ fontSize: "10px" }}>Apple iphone 14 128GB Deep purple5G... </p1>
                                </Card.Text>
                                <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                                <span style={{ float: "right" }}>4.0⭐</span>
                            </a>

                            <a type="submit" style={{ width: "70%", marginLeft: "8px", border: "0px" }}>
                                <input style={{ float: "top" }} type="checkbox"></input>

                                <Card.Img style={{ width: "80%", height: "8rem", }} variant="top" src={smalliphone1} />

                                <Card.Text style={{ marginTop: "5px" }}>
                                    <span style={{ fontWeight: "200", fontSize: "14px" }}>AED </span><span style={{ fontWeight: "600", fontSize: "14px" }}>5199.00</span><br />
                                    <p1 style={{ fontSize: "10px" }}>Apple iphone 14 128GB Deep purple5G... </p1>
                                </Card.Text>
                                <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                                <span style={{ float: "right" }}>4.0⭐</span>
                            </a>

                            <a type="submit" style={{ width: "70%", marginLeft: "8px", border: "0px" }}>
                                <input style={{ float: "top" }} type="checkbox"></input>

                                <Card.Img style={{ width: "80%", height: "8rem", }} variant="top" src={smalliphone1} />

                                <Card.Text style={{ marginTop: "5px" }}>
                                    <span style={{ fontWeight: "200", fontSize: "14px" }}>AED </span><span style={{ fontWeight: "600", fontSize: "14px" }}>5199.00</span><br />
                                    <p1 style={{ fontSize: "10px" }}>Apple iphone 14 128GB Deep purple5G... </p1>
                                </Card.Text>
                                <express style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</express>
                                <span style={{ float: "right" }}>4.0⭐</span>
                            </a>



                        </Carousel>
                    </Card>
                </div>

            </Col>






            <Col><h1>hello</h1></Col>
        </Row>

        {/* <Tabs>
            <TabList>
                <Tab></Tab>
                <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs> */}


        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="overview" {...a11yProps(0)} />
                    <Tab label="specification" {...a11yProps(1)} />
                    <Tab label="reviews" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <span style={{ fontWeight: "700" }}>Overview</span><br />
                <p style={{ width: "85%", fontSize: "15px", color: "grey" }}>"The iPhone 14 Pro models are much more feature rich than the iPhone 14 models, offering camera technology improvements, better display capabilities,
                    a faster A16 chip, and more. The 6.7 iPhone 14 Pro models features flat edges, stainless steel enclosure, a textured matte glass back, IP68 water resistance,
                    and a Ceramic Shield-protected display. The 48-megapixel lens also enables a 2x Telephoto mode that uses the middle 12 megapixels for full-resolution photos
                    with no digital zoom. This joins the existing 3x zoom enabled by the dedicated Telephoto lens, which has also been improved. The iPhone 14 Pro models
                    support 5G connectivity and uses a new Qualcomm X65 modem"</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <span style={{ fontWeight: "700" }}>specification</span><br />

                <Row>
                    <Col>
                        <div>
                            <table>

                                <tr>
                                    <td>Audio Jack</td>
                                    <td>Lightning Port</td>
                                </tr>
                                <tr>
                                    <td>Battery Size</td>
                                    <td>4323 mAh</td>
                                </tr>
                                <tr>
                                    <td>Battery Type</td>
                                    <td>Lithium Ion</td>
                                </tr>
                                <tr>
                                    <td>Camera Type</td>
                                    <td>Primary Camera + Secondary Camera</td>
                                </tr>
                                <tr>
                                    <td>Charging Type	</td>
                                    <td>Lightning Port</td>
                                </tr>
                                <tr>
                                    <td>Colour Name</td>
                                    <td>Deep Purple</td>
                                </tr>
                                <tr>
                                    <td>Connection Type</td>
                                    <td>Wifi+Cellular</td>
                                </tr>
                                <tr>
                                    <td>Network</td>
                                    <td>5G</td>
                                </tr>
                                <tr>
                                    <td>Battery Type</td>
                                    <td>Lithium Ion</td>
                                </tr>
                                <tr>
                                    <td>Expandable Memory Type</td>
                                    <td>No Expandable Memory</td>
                                </tr>
                                <tr>
                                    <td>Fast Charging	</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Flash</td>
                                    <td>Dual Tone flash</td>
                                </tr>
                                <tr>
                                    <td>Internal Memory</td>
                                    <td>256 GB</td>
                                </tr>
                                <tr>
                                    <td>Model Name</td>
                                    <td>iPhone 14 Pro Max</td>
                                </tr>
                                <tr>
                                    <td>Model Number</td>
                                    <td>MQ9X3AA/A, MQ9E3AH/A</td>
                                </tr>
                                <tr>
                                    <td>Model Year</td>
                                    <td>2022</td>
                                </tr>
                            </table>
                        </div>
                    </Col>




                    <Col>
                        <table>

                            <tr>
                                <td>Audio Jack</td>
                                <td>Lightning Port</td>
                            </tr>
                            <tr>
                                <td>Battery Size</td>
                                <td>4323 mAh</td>
                            </tr>
                            <tr>
                                <td>Battery Type</td>
                                <td>Lithium Ion</td>
                            </tr>
                            <tr>
                                <td>Camera Type</td>
                                <td>Primary Camera + Secondary Camera</td>
                            </tr>
                            <tr>
                                <td>Charging Type	</td>
                                <td>Lightning Port</td>
                            </tr>
                            <tr>
                                <td>Colour Name</td>
                                <td>Deep Purple</td>
                            </tr>
                            <tr>
                                <td>Connection Type</td>
                                <td>Wifi+Cellular</td>
                            </tr>
                            <tr>
                                <td>Network</td>
                                <td>5G</td>
                            </tr>
                            <tr>
                                <td>Battery Type</td>
                                <td>Lithium Ion</td>
                            </tr>
                            <tr>
                                <td>Expandable Memory Type</td>
                                <td>No Expandable Memory</td>
                            </tr>
                            <tr>
                                <td>Fast Charging	</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Flash</td>
                                <td>Dual Tone flash</td>
                            </tr>
                            <tr>
                                <td>Internal Memory</td>
                                <td>256 GB</td>
                            </tr>
                            <tr>
                                <td>Model Name</td>
                                <td>iPhone 14 Pro Max</td>
                            </tr>
                            <tr>
                                <td>Model Number</td>
                                <td>MQ9X3AA/A, MQ9E3AH/A</td>
                            </tr>
                            <tr>
                                <td>Model Year</td>
                                <td>2022</td>
                            </tr>
                        </table>



                    </Col>
                </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
                reviews here
            </TabPanel>
        </Box>
    </>
    )
}




export default Iphone
