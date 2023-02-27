import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';




function FashionEntry(props) {
    return (<>
        <div type="submit" className="term">
            <dt>
                <span className="emoji" role="img">
                <span>{props.img1}</span>

                    {/* <Carousel style={{ width: "100%" }}>
                        <Carousel.Item interval={1000}>
                            <span>{props.img1}</span>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <span>{props.img2}</span>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <span>{props.img3}</span>
                        </Carousel.Item>

                        <Carousel.Item interval={500}>
                            <span>{props.img4}</span>
                        </Carousel.Item>
                    </Carousel> */}
                </span>


                <span>{props.name}</span>
            </dt>
            <dd>{props.description}
            </dd>
            <dd style={{ display: "flex" }}>
                <Col><dd>{props.express}</dd></Col>
                <Col><dd>{props.rating}</dd></Col>
            </dd>
        </div>

    </>
    );
}

export default FashionEntry;