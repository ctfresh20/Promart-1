import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import hometopcaro1 from "./homeimg/hometopcaro1.avif"
import hometopcaro2 from "./homeimg/hometopcaro2.avif"
import hometopcaro3 from "./homeimg/hometopcaro3.avif"
import hometopcaro4 from "./homeimg/hometopcaro4.avif"
import hometopcaro5 from "./homeimg/hometopcaro5.avif"
import hometopcaro6 from "./homeimg/hometopcaro6.avif"
import hometopcaro7 from "./homeimg/hometopcaro7.avif"

import homebanner1 from "./homeimg/homebanner1.png"
import homebanner2 from "./homeimg/homebanner2.png"
import homebanner3 from "./homeimg/homebanner3.png"
import homebanner4 from "./homeimg/homebanner4.png"
import homebanner5 from "./homeimg/homebanner5.png"
import homebanner6 from "./homeimg/homebanner6.png"



function HomeTopCarousel() {
    return (
        <>

            <Carousel style={{ width: "100%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={homebanner1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={homebanner2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homebanner3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={homebanner4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={homebanner5}
                        alt="fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homebanner6}
                        alt="sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hometopcaro7}
                        alt="sixth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>

    )
}

export default HomeTopCarousel