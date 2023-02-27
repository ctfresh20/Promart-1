import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import Mobilefooter from "./mobilefooter";


function Footer() {
    return (
        <>




            <div style={{ backgroundColor: "rgb(228, 227, 227)" }}>
                <hr style={{ marginTop: "4%" }} />

                <Row xs={2} md={3} lg={3} style={{ width: "100%" }}>
                    <Col xs="8" style={{ width: "100%", textAlign: "center" }}>
                        <h6 style={{ fontSize: "22px", fontWeight: "700" }}>we're Always here To Help</h6>
                        <p>Reach out to us through any of these support channels</p>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center", width: "100%" }}>
                    <Col >
                        <a type="submit">
                            <span >HELP CENTER</span> <br /><span style={{ fontSize: "22px", fontWeight: "600" }}>Promart@helpcenter.com</span></a>

                    </Col>
                    <Col>
                        <a type="submit"><span>EMAIL SUPPORT</span><br /><span style={{ fontSize: "22px", fontWeight: "600" }}>Promart@support.com</span></a>
                    </Col>

                </Row>
                <hr />
            </div>


            <div className="mobilecategory">            
            <Mobilefooter />
            </div>



            <Row className="desktopcategory" style={{ width: "100%", marginTop: "30px", rowGap: "20px" }}>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>Electronics</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Tablets</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Laptops</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Mobiles</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Home Appliances</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Camera & photo</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Televisions</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Headphones</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Video Games</a><br />
                    </div>
                </Col>


                <Col style={{ marginLeft: "15px" }}>
                    <h5>Fashion</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Women's Fashion</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Men's Fashion</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Girl's Fashion</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Boy's Fashion</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Watches</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Jewellery</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Women's Handbags</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Men's Eyewear</a><br />
                    </div>
                </Col>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>HOME</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Bath</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Home Decor</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">kitchen & Dining</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Tools Improvement</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Audio & Video</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Furniture</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Patio, Lawn</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Pet Supples</a><br />
                    </div>
                </Col>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>BEAUTY</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Fragrances</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Make-Up</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Haircare</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Skincare</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Bath & Body</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Electronic Beauty Tool</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Men's Grooming</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Health Care Essential</a><br />
                    </div>
                </Col>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>BABY & TOYS</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Diapering</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Baby Transport</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Nursing & Feeding</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Kids Fashion</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Toddles Toys</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Tricycles & Scooters</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Board Games &Card</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Outdoor Play</a><br />
                    </div>
                </Col>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>TOP BRANDS</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Pampers</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Apple</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Nike</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Samsung</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Tefal</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">L'Oreal Paris</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Skechers</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">BLACK+DECKER</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Golazo</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Friday Sale Offers</a><br />
                    </div>
                </Col>
                <Col style={{ marginLeft: "15px" }}>
                    <h5>DAILY GROCERIES</h5>
                    <div style={{ fontSize: "14px" }}>
                        <a style={{ marginTop: "8px" }} type="submit">Fesh Produce</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Daily & Eggs</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Bread & Bakery</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Meat & Seafood</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Breakfast Food</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Pantry Staples</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Household Supplies</a><br />
                        <a style={{ marginTop: "8px" }} type="submit">Personal Carousel</a><br />
                    </div>
                </Col>
            </Row>


            <Row xs={1} md={2} lg="2" style={{ marginTop: "5%", width: "100%", rowGap: "20px" }}>


                <Col>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ margin: "0px", fontWeight: "600" }}>SHOP ON THE GO</p>
                        <button style={{ width: "auto", padding: "2px 5px", backgroundColor: "black", color: "white", borderColor: "grey", borderRadius: "5px" }}>
                            <span style={{ fontSize: "20px", color: "white" }}><Icons.FaApple /></span>
                            <span style={{}}>AppStore </span>
                        </button>


                        <button style={{ width: "auto", padding: "2px 5px", backgroundColor: "black", color: "white", borderColor: "grey", marginLeft: "10px", borderRadius: "5px" }}>
                            <span style={{ fontSize: "20px" }}><Icons.FaGooglePlay /></span>
                            <span style={{}}>GooglePlay</span>
                        </button>
                    </div>
                </Col>




                <Col >
                    <div style={{ textAlign: "center" }}>
                        <p style={{ margin: "0px", fontWeight: "600" }}>CONNECT WITH US</p>
                        {/* <Row style={{ textAlign: "center" }}> */}
                        <Link to=""><span style={{ backgroundColor: "yellow", fontSize: "25px", padding: "0px 7px 8px 8px", borderRadius: "50%" }}><Icons.FaFacebook /></span></Link>
                        <Link to="" style={{ marginLeft: "25px" }}><span style={{ backgroundColor: "yellow", fontSize: "25px", padding: "0px 7px 8px 8px", borderRadius: "50%" }}><Icons.FaTwitter /></span></Link>
                        <Link to="" style={{ marginLeft: "25px" }}><span style={{ backgroundColor: "yellow", fontSize: "25px", padding: "0px 7px 8px 8px", borderRadius: "50%" }}><Icons.FaInstagram /></span></Link>
                        <Link to="" style={{ marginLeft: "25px" }}><span style={{ backgroundColor: "yellow", fontSize: "25px", padding: "0px 7px 8px 8px", borderRadius: "50%" }}><Icons.FaLinkedinIn /></span></Link>
                        {/* </Row> */}
                    </div>
                </Col>
            </Row>












            <hr />
            <Row xs={1} md={2} lg="2" style={{ width: "100%" }}>
                <Col>
                    <p style={{ fontSize: "12px", marginLeft: "30px" }}>© 2023 Promart. All Rights Reserved</p>
                </Col>
                <Col>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">careers</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">warrent policy</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">sell with us</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">Terms of use</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">Terms of sale</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">Privacy policy</a>
                    <a style={{ marginLeft: "8px", fontSize: "14px" }} type="submit">Consumer Rights</a>
                </Col>
            </Row>
        </>
    )
}

export default Footer