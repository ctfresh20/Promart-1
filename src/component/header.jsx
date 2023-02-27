// import React from "react";
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import * as Icons from "react-icons/fa";


import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import Iphone from '../product/iphone';

import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from "react-bootstrap/ButtonGroup"

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import gif from "./images/gif.png"
import logo from "./images/promart.webp"
import electronicdropdown from "./images/electronicdropdown.jpg"
import electronicdropdown2 from "./images/electronicdropdown2.jpg"

import navhome1 from "./images/navhome1.jpg"
import navhome2 from "./images/navhome2.jpg"
import mencategories1 from "./images/mencategories1.png"
import mencategories2 from "./images/mencategories2.jpg"
import womencategory1 from "./images/womencategory1.png"
import womencategory2 from "./images/womencategory2.jpg"
import babycategory1 from "./images/babycategory1.png"
import babycategory2 from "./images/babycategory2.png"
import sportscategory1 from "./images/sportscategory1.png"
import sportscategory2 from "./images/sportscategory2.png"
import beautycategory1 from "./images/beautycategory1.png"
import beautycategory2 from "./images/beautycategory2.png"

import hp from "./images/hp.png"
import samsung from "./images/samsung.png"
import sony from "./images/sony.png"
import bose from "./images/bose.png"
import lenovo from "./images/lenovo.png"
import huawei from "./images/huawei.png"
import xiaomi from "./images/xiaomi.png"
import philips from "./images/philips.png"




import NoPage from './Nopage';
import Electronics from '../components2/electronics/electronics';
import Home from '../components2/home/home';
import Footer from './footer';
import Body from './body';
import BeautyFragnance from '../components2/Beauty and Fragnance/beatyFragnance';
import LoginForm from './signin';
import BabyAndToys from '../components2/Baby & Toys/baby';
import Sports from '../components2/sports/sports';
import Grocery from '../components2/Grocery/grocery';
import Men from '../components2/men fashion/menfashion';
import Womenfashion from '../components2/women fashion/womenfashion';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

import menn1 from "./images/menn1.png"
import menn2 from "./images/menn2.png"

import beautyy1 from "./images/beautyy1.png"
import beautyy2 from "./images/beautyy2.png"

import womend from "./images/womend.png"

import sportss1 from "./images/sportss1.png"
import sportss2 from "./images/sportss2.png"



import menlogo1 from "./images/menlogo1.png"
import menlogo2 from "./images/menlogo2.png"
import menlogo3 from "./images/menlogo3.png"
import menlogo4 from "./images/menlogo4.png"
import menlogo5 from "./images/menlogo5.png"
import menlogo6 from "./images/menlogo6.png"
import menlogo7 from "./images/menlogo7.png"
import menlogo8 from "./images/menlogo8.png"
import menlogo9 from "./images/menlogo9.png"

import homelogo1 from "./images/homelogo1.png"
import homelogo2 from "./images/homelogo2.png"
import homelogo3 from "./images/homelogo3.png"
import homelogo4 from "./images/homelogo4.png"
import homelogo5 from "./images/homelogo5.png"
import homelogo6 from "./images/homelogo6.png"
import homelogo7 from "./images/homelogo7.png"
import homelogo8 from "./images/homelogo8.png"
import homelogo9 from "./images/homelogo9.png"

import beautylogo1 from "./images/beautylogo1.png"
import beautylogo2 from "./images/beautylogo2.png"
import beautylogo3 from "./images/beautylogo3.png"
import beautylogo4 from "./images/beautylogo4.png"
import beautylogo5 from "./images/beautylogo5.png"
import beautylogo6 from "./images/beautylogo6.png"
import beautylogo7 from "./images/beautylogo7.png"
import beautylogo8 from "./images/beautylogo8.png"
import beautylogo9 from "./images/beautylogo9.png"

import babaylogo1 from "./images/babaylogo1.png"
import babaylogo2 from "./images/babaylogo2.png"
import babaylogo3 from "./images/babaylogo3.png"
import babaylogo4 from "./images/babaylogo4.png"
import babaylogo5 from "./images/babaylogo5.png"
import babaylogo6 from "./images/babaylogo6.png"
import babaylogo7 from "./images/babaylogo7.png"
import babaylogo8 from "./images/babaylogo8.png"
import babaylogo9 from "./images/babaylogo9.png"

import sportslogo1 from "./images/sportslogo1.png"
import sportslogo2 from "./images/sportslogo2.png"
import sportslogo3 from "./images/sportslogo3.png"
import sportslogo4 from "./images/sportslogo4.png"
import sportslogo5 from "./images/sportslogo5.png"
import sportslogo6 from "./images/sportslogo6.png"
import sportslogo7 from "./images/sportslogo7.png"
import sportslogo8 from "./images/sportslogo8.png"
import sportslogo9 from "./images/sportslogo9.png"

import grocerylogo1 from "./images/grocerylogo1.png"
import grocerylogo2 from "./images/grocerylogo2.png"
import grocerylogo3 from "./images/grocerylogo3.png"
import grocerylogo4 from "./images/gricerylogo4.png"
import grocerylogo5 from "./images/grocerylogo5.jpg"
import grocerylogo6 from "./images/grocerylogo6.jpg"
import grocerylogo7 from "./images/grocerylogo7.png"
import grocerylogo8 from "./images/grocerylogo8.jpg"
import grocerylogo9 from "./images/grocerylogo9.jpg"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
 
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}








function Header() {



 


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


    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(<LoginForm />);
    }





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
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


    // for tab
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


  
    return (


        <Router>


            <div className='header'>




                <Navbar className='navbar' variant="light">
                    <Container fluid style={{ display: "flex" }}>
                        <Link to="/"><img className='navbrand' style={{ width: "8rem" }} src={logo}></img></Link>
                        <input style={{ marginLeft: "10%", width: "45rem", padding: "7px 20px", border: "0px", borderRadius: "5px" }} className="topinput" placeholder="What are you looking for?"></input>
                        <Nav style={{ color: "red", fontSize: "15px", fontWeight: "700" }} className="me-auto">
                            <Nav.Link style={{ width: "max-content", borderLeft: "1px solid rgb(188, 186, 186)", borderRight: "1px solid rgb(188, 186, 186)", paddingTop: "0px", padding: "2px", marginLeft: "25px" }} className='navlink1'><LoginForm /></Nav.Link>
                            <Nav.Link style={{ width: "max-content", borderRight: "1px solid rgb(188, 186, 186)", paddingTop: "0px", padding: "2px" }} className='navlink' href="/Your cart">Cart <span> <Icons.FaShoppingBag/></span></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>




                <Navbar className="Navbar2" variant="light">
                    <Container fluid style={{ display: "flex", width: "100%" }} className="caro">
                        <div className="main1" >

                            <div id="buttton" style={{}} >
                                <div className="Dropdown" id='all'>

                                    <button style={{ fontSize: "13px", fontWeight: "700", color: "blue", margin: "0px" }} className="category-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        ALL CATEGORIES
                                    </button>

                                    <div className='Dropdown-content' id='cont' style={{ width: "auto" }} >
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                <Link to="/Beauty-and-Fragnance" class="dropdown-item">Beauty & Fragrances</Link>
                                                <Link to="/Men" class="dropdown-item">Fashion</Link>
                                                <Link to="/Home" class="dropdown-item">Home & Kitchen</Link>
                                                <Link to="/Sports" class="dropdown-item">Sports & Outdoors</Link>
                                                <Link to="" class="dropdown-item">Toys & Games</Link>
                                                <Link to="" class="dropdown-item">Baby Products</Link>
                                                <Link to="" class="dropdown-item">Health & Nutrition</Link>
                                                <Link to="/Grocery" class="dropdown-item">Grocery</Link>
                                                <Link to="" class="dropdown-item">Automotive</Link>
                                                <Link to="Home" class="dropdown-item">Tools & Home Improvement</Link>
                                                <Link to="" class="dropdown-item">Books</Link>
                                                <Link to="" class="dropdown-item">Pet Supplies</Link>
                                                <Link to="" class="dropdown-item">Stationaery & Office Supplies</Link>
                                                <Link to="" class="dropdown-item">Music, Movies & TV Shows</Link>
                                                {/* <Link to="" class="dropdown-item">Mahali</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to="/Electronics" style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black", width: "max-content" }} className="btn"  id="buttton" >
                                    ELECTRONICS & MOBILES
                                    </Link>
                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                {/* <ul style={{ width: "max-content", overflow: "visible" }} className="dropdown-menu" aria-labelledby="dropdownMenuButton2"> */}
                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link t0="" class="dropdown-item">Mobile & Accessories</Link>
                                                        <Link t0="" class="dropdown-item">Laptops & Accessories</Link>
                                                        <Link t0="" class="dropdown-item">Video Games</Link>
                                                        <Link t0="" class="dropdown-item">Television</Link>
                                                        <Link t0="" class="dropdown-item">Home Appliances</Link>
                                                        <Link t0="" class="dropdown-item">Speakers</Link>
                                                        <Link t0="" class="dropdown-item">Headphones & Earphones</Link>
                                                        <Link t0="" class="dropdown-item">Power Bamkes</Link>
                                                        <Link t0="" class="dropdown-item">Wearable Devices</Link>
                                                        <Link t0="" class="dropdown-item">Camera, Photo & Video</Link>
                                                        <Link t0="" class="dropdown-item">Tables & Accessories</Link>
                                                    </Col>
                                                    <Col><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}>
                                                                    <Link to=""><img style={{ width: "80%" }} src={hp}></img>
                                                                    </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={samsung}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sony}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={bose}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={lenovo}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={huawei}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={xiaomi}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={philips}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col  >
                                                                {/* <Card style={{width:"100%"}}><Link to="/Laptop"><img style={{width:"80%" }} src={sony}></img>
                                                                </Link>
                                                                </Card> */}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to="/Laptop"><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={electronicdropdown}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={electronicdropdown2}></img></Link>

                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* home */}
                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to='/Home' style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black" }} className="btn" type="button" id="buttton" >
                                        HOME
                                    </Link>

                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>


                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Bedding</Link>
                                                        <Link to="" class="dropdown-item">Bath</Link>
                                                        <Link to="" class="dropdown-item">Home Decor</Link>
                                                        <Link to="" class="dropdown-item">Kitchen & Dining</Link>
                                                        <Link to="" class="dropdown-item">Home Appliances</Link>
                                                        <Link to="" class="dropdown-item">Large Appliances</Link>
                                                        <Link to="" class="dropdown-item">Tools & Home Improvement</Link>
                                                        <Link to="" class="dropdown-item">Furniture</Link>
                                                        <Link to="" class="dropdown-item">Home Storage & Organisation</Link>

                                                    </Col>
                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={homelogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to="/Laptop"><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={navhome1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={navhome2}></img></Link>

                                                        </div>
                                                    </Col>


                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* grocery */}
                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to='/Grocery' style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black" }} className="btn" type="button" id="buttton" >
                                        GROCERY
                                    </Link>
                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                <Row style={{ marginRight: "0px" }}x>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Beverages</Link>
                                                        <Link to="" class="dropdown-item">Canned, Dry & Packages Food</Link>
                                                        <Link to="" class="dropdown-item">Snack Food</Link>
                                                        <Link to="" class="dropdown-item">Breakfast Food</Link>
                                                        <Link to="" class="dropdown-item">Cooking Essential</Link>
                                                        <Link to="" class="dropdown-item">Pet Supplies</Link>
                                                        <Link to="" class="dropdown-item">Household supplies</Link>
                                                        <Link to="" class="dropdown-item">Personal care</Link>
                                                        <Link to="" class="dropdown-item">Laundry</Link>
                                                    </Col>
                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "90%" }} src={grocerylogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "70%" }} src={grocerylogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={grocerylogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={navhome1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={navhome2}></img></Link>

                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* baby and toyse */}
                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to="/Baby-And-Toys" style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black", width: "max-content" }} className="btn" type="button" id="buttton" >
                                        BABY & TOYS
                                    </Link>
                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                {/* <ul style={{ width: "max-content", overflow: "visible" }} className="dropdown-menu" aria-labelledby="dropdownMenuButton2"> */}
                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Diapering</Link>
                                                        <Link to="" class="dropdown-item">Bathing & skincare</Link>
                                                        <Link to="" class="dropdown-item">Nursing & feeding</Link>
                                                        <Link to="" class="dropdown-item">Baby & kid's Feeding</Link>
                                                        <Link to="" class="dropdown-item">Baby transport</Link>
                                                        <Link to="" class="dropdown-item">Baby toys</Link>
                                                        <Link to="" class="dropdown-item">Tricycles & scooter</Link>
                                                        <Link to="" class="dropdown-item">Board games & cars</Link>
                                                        <Link to="" class="dropdown-item">Outdoor play</Link>
                                                        <Link to="" class="dropdown-item">Pretend play</Link>
                                                        <Link to="" class="dropdown-item">Baby & kids' essential</Link>
                                                        <Link to="" class="dropdown-item">Shop all toys & games</Link>
                                                    </Col>

                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={babaylogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={babycategory1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={babycategory2}></img></Link>

                                                        </div>
                                                    </Col>


                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* beauty and fragrance */}
                            <div id="buttton">
                                <div class="Dropdown">
                                    <Link to='/Beauty-and-Fragnance' style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black", width: "max-content" }} class="btn" type="button" id="dropdownMenuButton2" >
                                        BEAUTY & FRAGRANCE
                                    </Link>

                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>


                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Makeup</Link>
                                                        <Link to="" class="dropdown-item">Fragrance</Link>
                                                        <Link to="" class="dropdown-item">Skin Care</Link>
                                                        <Link to="" class="dropdown-item">Treatment & Serums</Link>
                                                        <Link to="" class="dropdown-item">Hair Care</Link>
                                                        <Link to="" class="dropdown-item">Styling & Grooming</Link>
                                                        <Link to="" class="dropdown-item">Bath & Body</Link>
                                                        <Link to="" class="dropdown-item">Electronic Beauty Tools</Link>
                                                        <Link to="" class="dropdown-item">Men's Groming</Link>
                                                        <Link to="" class="dropdown-item">Personal Care</Link>

                                                    </Col>
                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to="/Laptop"><img style={{ width: "80%" }} src={beautylogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={beautylogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={beautyy1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={beautyy2}></img></Link>

                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to='/Men' style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black", width: "max-content" }} className="btn" type="button" id="buttton" >
                                        MEN'S FASHION
                                    </Link>

                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>



                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item" >Men's Fashion</Link>
                                                        <Link to="" class="dropdown-item" >Autumn/Winter</Link>
                                                        <Link to="" class="dropdown-item" >Clothing</Link>
                                                        <Link to="" class="dropdown-item" >Footwear</Link>
                                                        <Link to="" class="dropdown-item" >Watches</Link>
                                                        <Link to="" class="dropdown-item" >Jewellery</Link>
                                                        <Link to="" class="dropdown-item" >Eyewear</Link>
                                                        <Link to="" class="dropdown-item" >Backpacks</Link>
                                                        <Link to="" class="dropdown-item" >Luggage</Link>
                                                        <Link to="" class="dropdown-item" >Kid's Fashion</Link>
                                                    </Col>

                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={menn1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={menn2}></img></Link>

                                                        </div>
                                                    </Col>



                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>









                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to="/Womens's fashion" style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black", width: "max-content" }} className="btn" type="button" id="buttton" >
                                        WOMEN'S FASHION
                                    </Link>
                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                {/* <ul style={{ width: "max-content", overflow: "visible" }} className="dropdown-menu" aria-labelledby="dropdownMenuButton2"> */}
                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Women's Fashion</Link>
                                                        <Link to="" class="dropdown-item">Autumn/Winter</Link>
                                                        <Link to="" class="dropdown-item">Clothing</Link>
                                                        <Link to="" class="dropdown-item">Footwear</Link>
                                                        <Link to="" class="dropdown-item">Watches</Link>
                                                        <Link to="" class="dropdown-item">Jewellery</Link>
                                                        <Link to="" class="dropdown-item">Eyewear</Link>
                                                        <Link to="" class="dropdown-item">Handbags</Link>
                                                        <Link to="" class="dropdown-item">Kid's Fashion</Link>
                                                    </Col>


                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={menlogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={womend}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={womencategory2}></img></Link>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>












                            <div id="buttton">
                                <div className="Dropdown">
                                    <Link to='/Sports' style={{ fontSize: "12px", fontWeight: "700", padding: "7px 10px", color: "black" }} className="btn" type="button" id="buttton" >
                                        SPORTS
                                    </Link>
                                    <div className='Dropdown-content'>
                                        <div className='dropdown-Row'>
                                            <div className='dropdown-Col'>
                                                {/* <ul style={{ width: "max-content", overflow: "visible" }} className="dropdown-menu" aria-labelledby="dropdownMenuButton2"> */}
                                                <Row style={{ marginRight: "0px" }}>
                                                    <Col style={{}} md="auto">
                                                        <p style={{ fontWeight: "700" }} class="dropdown-item" href="#">CATEGORIES</p>
                                                        <Link to="" class="dropdown-item">Camping & Hiking</Link>
                                                        <Link to="" class="dropdown-item">Cycling</Link>
                                                        <Link to="" class="dropdown-item">Scooters & Accessories</Link>
                                                        <Link to="" class="dropdown-item">Strength Training</Link>
                                                        <Link to="" class="dropdown-item">Cardio Training</Link>
                                                        <Link to="" class="dropdown-item">Yoga</Link>
                                                        <Link to="" class="dropdown-item">Exercise Accessories</Link>
                                                        <Link to="" class="dropdown-item">Combat Sports</Link>
                                                        <Link to="" class="dropdown-item">Team Sports</Link>
                                                        <Link to="" class="dropdown-item">Racquet Sports</Link>
                                                        <Link to="" class="dropdown-item">Water Sports</Link>
                                                        <Link to="" class="dropdown-item">Sports Nutrition</Link>
                                                    </Col>

                                                    <Col ><h5>Top Brands</h5>
                                                        <Row xs={3} md={3} lg={3} style={{ marginTop: "10px" }} >
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo1}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo2}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }}  >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo3}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo4}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo5}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo6}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>


                                                        <Row xs={3} lg={3} style={{ marginTop: "20px" }}>
                                                            <Col style={{ width: "30%" }}>
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo7}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo8}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                            <Col style={{ width: "30%" }} >
                                                                <Card style={{ width: "100%" }}><Link to=""><img style={{ width: "80%" }} src={sportslogo9}></img>
                                                                </Link>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col style={{ width: "auto" }}>
                                                        <div style={{ display: "flex" }}>

                                                            <Link to=""><img style={{ width: "22rem", height: "19rem" }} className="eimg1" src={sportss1}></img>
                                                            </Link>


                                                            <Link to=""><img style={{ width: "10rem", height: "19rem" }} className="eimg" src={sportss2}></img></Link>

                                                        </div>
                                                    </Col>


                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <img className='gifimg' style={{ width: "7rem", height: "1.5rem" }} src={gif}></img>
                    </Container>
                </Navbar>
            </div>


            {/* Routing */}

            <Routes>

                <Route path='/Electronics' element={<Electronics />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/*' element={<NoPage />}></Route>
                <Route path='/' element={<Body />}></Route>
                <Route path='/Beauty-and-Fragnance' element={<BeautyFragnance />} />
                <Route path="/iphone" element={<Iphone />} />
                <Route path="/sign-in" element={<LoginForm />} />
                <Route path="/Baby-And-Toys" element={<BabyAndToys />} />
                <Route path="/Sports" element={<Sports />} />
                <Route path="/Grocery" element={<Grocery />} />
                <Route path="/Men" element={<Men />} />
                <Route path="Womens's fashion" element={<Womenfashion />} />





            </Routes>


            <Footer />



        </Router>

    );
}

export default Header