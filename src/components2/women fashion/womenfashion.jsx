import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Womenfashiontopcarousel from './womenfashiontopcarousel'
import Carousel from 'react-multi-carousel'

import women1 from "../../component/images/women1.png"
import women2 from "../../component/images/women2.png"
import women3 from "../../component/images/women3.png"
import women4 from "../../component/images/women4.png"
import women5 from "../../component/images/women5.png"
import women6 from "../../component/images/women6.png"


import womencategorybanner from "./womenImg/womencategorybanner.avif"
import { Link } from 'react-router-dom'

import womencategory1 from "./womenImg/womencategory1.png"
import womencategory2 from "./womenImg/womencategory2.png"
import womencategory3 from "./womenImg/womencategory3.png"
import womencategory4 from "./womenImg/womencategory4.png"
import womencategory5 from "./womenImg/womencategory5.png"
import womencategory6 from "./womenImg/womencategory6.png"
import womencategory7 from "./womenImg/womencategory7.png"
import womencategory8 from "./womenImg/womencategory8.png"
import womencategory9 from "./womenImg/womencategory9.png"

import womenstylebanner from "./womenImg/womenstylebanner.avif"
import womenstylecard1 from "./womenImg/womenstylecard1.png"
import womenstylecard2 from "./womenImg/womenstylecard2.png"
import womenstylecard3 from "./womenImg/womenstylecard3.png"
import womenstylecard4 from "./womenImg/womenstylecard14.png"

import womentrendingbanner from "./womenImg/womentrendingbanner.avif"
import womentrendingcard1 from "./womenImg/womentrendingcard1.png"
import womentrendingcard2 from "./womenImg/womentrendingcard2.png"
import womentrendingcard3 from "./womenImg/womentrendingcard3.png"
import womentrendingcard4 from "./womenImg/womentrendingcard4.png"
import womentrendingcard5 from "./womenImg/womentrendingcard5.png"
import womentrendingcard6 from "./womenImg/womentrendingcard6.png"
import womentrendingcard7 from "./womenImg/womentrendingcard7.png"

import womenbrandbanner from "./womenImg/womenbrandbanner.avif"
import womenbrandcard1 from "./womenImg/womenbrandcard1.png"
import womenbrandcard2 from "./womenImg/womenbrandcard2.png"
import womenbrandcard3 from "./womenImg/womenbrandcard3.png"
import womenbrandcard4 from "./womenImg/womenbrandcard4.png"
import womenbrandcard5 from "./womenImg/womenbrandcard5.png"
import womenbrandcard6 from "./womenImg/womenbrandcard6.png"
import womenbrandcard7 from "./womenImg/womenbrandcard7.png"

import womentrendbanner from "./womenImg/womentrendbanner.avif"
import womentrendcard1 from "./womenImg/womentrendcard1.png"
import womentrendcard2 from "./womenImg/womentrendcard2.png"
import womentrendcard3 from "./womenImg/womentrendcard3.png"
import womentrendcard4 from "./womenImg/womentrendcard4.png"
import womentrendcard5 from "./womenImg/womentrendcard5.png"
import womentrendcard6 from "./womenImg/womentrendcard6.png"
import meraj from "./womenImg/meraj.png"
import meraj2 from "./womenImg/meraj2.jpg"


import FashionEntry from '../men fashion/mensentry'
import mensdetail from '../men fashion/mensdetail'
import womensdetail from './Womensdetail'



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











function Womenfashion() {
    const responsive = {
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
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };




    return (
        <div>



            <Womenfashiontopcarousel />





            <h1 style={{ fontWeight: "800", backgroundColor: "black", color: "yellow", marginTop: "30px" }}>40-70%OFF</h1>
            <h2 style={{ margin: "10px", marginTop: "5px", fontWeight: "700" }}>WOMEN'S FASHION</h2>
            <Row xs={3} md={4} lg={6} style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women6}></img></a></Col>
                {/* <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={women7}></img></a></Col> */}
            </Row>


            <Link to=""><img src={womencategorybanner} style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }}></img></Link>

            <Row style={{ width: "100%" }}>
                <Carousel responsive={responsive}>
                    
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory1}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Bags</p></a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory2}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Clothing</p></a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory3}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Eyewear</p></a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory4}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Footwear</p>
                    </a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory5}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Jewelery</p>
                    </a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory6}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Kid's Fashion</p>
                    </a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory7}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Watches</p>
                    </a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory8}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Trends Fashion</p>
                    </a></Col>
                    <Col><a type="submit" style={{ width: "90%" }}><img style={{ width: "85%", marginLeft: "15px" }} src={womencategory9}></img>
                        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>Womens Fashion</p>
                    </a></Col>

                </Carousel>
            </Row>


            <Link to=""><img src={womenstylebanner} style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }}></img></Link>
            <Row xs={2} md={2} lg={2} style={{ width: "100%" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenstylecard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenstylecard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenstylecard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenstylecard4}></img></a></Col>

            </Row>



            {/* women trending */}
            <Link to=""><img src={womentrendingbanner} style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }}></img></Link>
            <Row xs={3} md={5} lg={6} style={{ width: "100%", rowGap: "10px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard6}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendingcard7}></img></a></Col>
            </Row>

            {/* shop top brand */}

            <Link to=""><img src={womenbrandbanner} style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }}></img></Link>
            <Row xs={3} md={5} lg={6} style={{ width: "100%", rowGap: "10px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard6}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womenbrandcard7}></img></a></Col>

            </Row>

            {/* trend for less */}

            <Link to=""><img src={womentrendbanner} style={{ width: "98%", marginLeft: "1%", marginTop: "2%" }}></img></Link>
            <Row xs={3} md={5} lg={6} style={{ width: "100%", rowGap: "10px" }}>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard1}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard2}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard3}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard4}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard5}></img></a></Col>
                <Col><a type="submit"><img style={{ width: "95%", marginLeft: "15px" }} src={womentrendcard6}></img></a></Col>
            </Row>



            <div style={{ backgroundColor: "rgb(247, 241, 229)", marginTop: "2%" }}>
                <h1 style={{ textAlign: "center" }}>
                    <span>More</span>
                </h1>
                <dl className="dictionary">{womensdetail.map(createEntry)}</dl>


                {/* <button style={{}}>show more</button> */}

            </div>







        </div>
    )
}

export default Womenfashion
