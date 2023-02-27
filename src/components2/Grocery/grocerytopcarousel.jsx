import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import slider1 from "./groceryImg/silder1.jpg"
import slider2 from "./groceryImg/silder2.jpg"
import slider3 from "./groceryImg/silder3.jpg"
import slider4 from "./groceryImg/silder4.jpg"
import slider5 from "./groceryImg/silder5.jpg"
import slider6 from "./groceryImg/silder6.jpg"
import slider7 from "./groceryImg/silder7.jpg"


export default function GroceryTopCarouesl(){
    return(
        <>
            <Carousel style={{ width: "100%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="fourth slide"
                    />

                </Carousel.Item><Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider6}
                        alt="fourth slide"
                    />

                </Carousel.Item><Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider7}
                        alt="fourth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    )
}