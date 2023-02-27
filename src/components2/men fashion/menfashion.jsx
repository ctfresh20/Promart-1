import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FashionSidebar from "../fashion sidebar/fashionsidebar";
import MenTopCarousel from "./mentopcarousel";

import mensfashionbanner from "./menImg/mensfashionbanner.png"
import { Link } from "react-router-dom";

import menfashionbrand1 from "../../component/images/men1.png"
import menfashionbrand2 from "../../component/images/men2.png"
import menfashionbrand3 from "../../component/images/men3.png"
import menfashionbrand4 from "../../component/images/men4.png"
import menfashionbrand5 from "../../component/images/men5.png"
import menfashionbrand6 from "../../component/images/men6.png"

// import menfashionbrand2 from "./menImg/menfashionbrand2.avif"
// import menfashionbrand3 from "./menImg/menfashionbrand3.avif"
// import menfashionbrand4 from "./menImg/menfashionbrand4.avif"
// import menfashionbrand5 from "./menImg/menfashionbrand5.avif"
// import menfashionbrand6 from "./menImg/menfashionbrand6.avif"

import mencategory from "./menImg/mencategory.avif"
import menscategory1 from "./menImg/menscategory1.png"
import menscategory2 from "./menImg/menscategory2.png"
import menscategory3 from "./menImg/menscategory3.png"
import menscategory4 from "./menImg/menscategory4.png"
import menscategory5 from "./menImg/menscategory5.png"
import menscategory6 from "./menImg/menscategory6.png"


import Clothing from "./menImg/Clothing.png"



import mentrending from "./menImg/mentrending.avif"
import mentrending1 from "./menImg/mentrending1.png"
import mentrending2 from "./menImg/mentrending2.png"
import mentrending3 from "./menImg/mentrending3.png"
import mentrending4 from "./menImg/mentrending4.png"
import mentrending5 from "./menImg/mentrending5.png"
import mentrending6 from "./menImg/mentrending6.png"
// import mentrending7 from "./menImg/mentrending7.avif"

import menstyle1 from "./menImg/menstyle1.avif"
import menstyle2 from "./menImg/menstyle2.png"
import menstyle3 from "./menImg/menstyle3.png"
import menstyle4 from "./menImg/menstyle4.png"
import menstyle5 from "./menImg/menstyle5.png"

import menbrandbanner from "./menImg/menbrandbanner.avif"
import menbrand1 from "./menImg/menbrand1.png"
import menbrand2 from "./menImg/menbrand2.png"
import menbrand3 from "./menImg/menbrand3.png"
import menbrand4 from "./menImg/menbrand4.png"
import menbrand5 from "./menImg/menbrand5.png"
import menbrand6 from "./menImg/menbrand6.png"

import mendiscountbanner from "./menImg/mendiscountbanner.avif"
import mendiscount1 from "./menImg/mendiscount1.png"
import mendiscount2 from "./menImg/mendiscount2.png"
import mendiscount3 from "./menImg/mendiscount3.png"
import mendiscount4 from "./menImg/mendiscount4.png"
import mendiscount5 from "./menImg/mendiscount5.png"
import mendiscount6 from "./menImg/mendiscount6.png"

import menbanner from "./menImg/menbanner.png"

import FashionEntry from "./mensentry";
import mensdetail from "./mensdetail";


function createEntry(showmore) {
    return (
        <FashionEntry
            key={showmore.id}
            img1={showmore.img1}
            name={showmore.name}
            description={showmore.meaning}
            express={showmore.express}
            rating={showmore.rating}
        />
    );
}






export default function Men() {
    return (
        <>
            <Row style={{ marginTop: "5%", width: "100%" }}>



                <Col xs={3}>
                    <FashionSidebar />
                </Col>
                <Col>
                    {/* <div style={{ marginBottom: "50px" }}>
                <FashionSidebar /></div> */}

                    <MenTopCarousel />

                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={mensfashionbanner}></img></Link>

                    <Row xs={3} md={4} lg={6} style={{ width: "100%", rowGap:"10px" }}>
                        <Col><a type="submit"><img style={{ width: "95%", marginLeft: "5%" }} src={menfashionbrand1}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menfashionbrand2}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menfashionbrand3}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menfashionbrand4}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menfashionbrand5}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menfashionbrand6}></img></a></Col>
                        {/* <Col><a type="submit"><img style={{ width: "85%" }} src={menfashionbrand7}></img></a></Col> */}
                    </Row>

                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={mencategory}></img></Link>
                    <Row xs={3} md={4} lg={6} style={{ width: "100%", marginTop: "1%", rowGap: "20px" }}>
                        {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "3%" }} src={menscategory1}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Autumn/Winter</p></a>
                        </Col> */}
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory1}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Autumn & Winter</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory2}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Bagpack</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory3}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Eyewear</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory4}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Footwear</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory5}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Jewellery</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={menscategory6}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Kids</p></a>
                        </Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={Clothing}></img>
                            <p style={{ fontSize: "18px", marginTop: "10px", fontWeight: "650", textAlign: "center" }}>Luggage</p></a>
                        </Col>


                    </Row>

                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={mentrending}></img></Link>
                    <Row xs={3} md={4} lg={6} style={{ width: "100%", marginTop: "1%", rowGap: "20px" }}>
                        <Col><a type="submit"><img style={{ width: "95%", marginLeft: "3%" }} src={mentrending1}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending2}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending3}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending4}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending5}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending6}></img></a></Col>

                    </Row>


                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={menstyle1}></img></Link>
                    <Row xs={2} md={4} lg={2} style={{ width: "100%", marginTop: "1%" }}>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menstyle2}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menstyle3}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menstyle4}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menstyle5}></img></a></Col>
                        {/* <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending5}></img></a></Col>
            <Col><a type="submit"><img style={{ width: "95%" }} src={mentrending6}></img></a></Col>
             */}
                    </Row>


                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={menbanner}></img></Link>


                    {/* menbrand */}
                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={menbrandbanner}></img></Link>
                    <Row xs={3} md={4} lg={6} style={{ width: "100%", marginTop: "1%", rowGap: "20px" }}>
                        <Col><a type="submit"><img style={{ width: "100%", marginLeft: "3%" }} src={menbrand1}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menbrand2}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menbrand3}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menbrand4}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menbrand5}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={menbrand6}></img></a></Col>

                    </Row>




                    {/* trends for less */}
                    <Link to=""><img style={{ width: "100%", marginTop: "2%" }} src={mendiscountbanner}></img></Link>
                    <Row xs={3} md={4} lg={6} style={{ width: "100%", marginTop: "1%", rowGap: "20px" }}>
                        <Col><a type="submit"><img style={{ width: "100%", marginLeft: "3%" }} src={mendiscount1}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={mendiscount2}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={mendiscount3}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={mendiscount4}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={mendiscount5}></img></a></Col>
                        <Col><a type="submit"><img style={{ width: "100%" }} src={mendiscount6}></img></a></Col>

                    </Row>
                    {/* </Col>
            </Row> */}


                    <div style={{ backgroundColor: "rgb(247, 241, 229)", marginTop: "2%" }}>
                        <h1 style={{ textAlign: "center" }}>
                            <span>More</span>
                        </h1>
                        <dl className="dictionary">{mensdetail.map(createEntry)}</dl>


                        {/* <button style={{}}>show more</button> */}

                    </div>

                </Col>
            </Row>



        </>
    )
}