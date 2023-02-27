import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

import { Link } from "react-router-dom";

import apple1 from "./images/apple1.avif"

import Add from "./Add";
import * as Icons from "react-icons/fa";


function Recommended() {





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
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    const [count1, setCount1] = useState("Add to cart");
    function increase1() {
        setCount1(<Add />);
    }
    return (
        <>
            {/* <Card className='card-head' >
        <p className="card-p">Browse by brand</p> */}

            <Carousel responsive={responsive}>
                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>

                <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px",marginLeft:"2%" }}>
                            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
                        </Card.Body>
                        <Card.Text>
                        <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span>
                        </Card.Text>
                        <p1 style={{ backgroundColor: "rgb(250, 154, 9)", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>Promart</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                </Card>


                {/* <Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
                    <Link to="/iphone">
                    <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }} ><p1>Apple iphone 14 pro 128GB Deep purple5G... </p1>
                        </Card.Body>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>

                       
                        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
                        <span style={{ float: "right" }}>4.0⭐</span>
                    </Link>
                    
                    </Card>

                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 pro 256GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5330.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    <div style={{ textAlign: "center", paddingTop: "7px" }}>
                        
                    </div>
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 pro 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4589.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>

                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />5199.00</span><br />
                            </Card.Text>

                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4589.00</span><br />
                            </Card.Text>

                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4790.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    
                </div>
                <div>
                    <Link to="/iphone" >
                        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
                        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
                            <Card.Text style={{ marginTop: "5px" }}>
                                <span style={{ fontWeight: "900" }}><Icons.FaRupeeSign />4530.00</span><br />
                            </Card.Text>
                        </Card.Body>
                    </Link>
                   
                </div> */}
            </Carousel>
        </>
    )
}

export default Recommended


{/* <div style={{ textAlign: "center", paddingTop: "7px" }}>
<Add />
</div> */}