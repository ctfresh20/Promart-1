import React from "react";

import Carousel from 'react-bootstrap/Carousel';


import sportstopcarousel1 from "./sportsImg/sportstopcarousel1.png"
import sportstopcarousel2 from "./sportsImg/sportstopcarousel2.png"
import sportstopcarousel3 from "./sportsImg/sportstopcarousel3.png"
import sportstopcarousel4 from "./sportsImg/sportstopcarousel4.png"
import sportstopcarousel5 from "./sportsImg/sportstopcarousel5.png"
import sportstopcarousel6 from "./sportsImg/sportstopcarousel6.png"


function SportsTopCarousel(){
    return(<>
        <Carousel style={{ width: "100%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel5}
                        alt="fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sportstopcarousel6}
                        alt="sixth slide"
                    />
                </Carousel.Item>
               
            </Carousel>
    </>)
}

export default SportsTopCarousel