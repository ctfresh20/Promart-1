import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import mentopcarousel1 from "./menImg/mentopcarousel1.avif"
import mentopcarousel2 from "./menImg/mentopcarousel2.avif"
import mentopcarousel3 from "./menImg/mentopcarousel3.avif"
import mentopcarousel4 from "./menImg/mentopcarousel4.avif"
import mentopcarousel5 from "./menImg/mentopcarousel5.avif"

import menslider0 from "./menImg/menslider0.png"
import menslider1 from "./menImg/menslider1.png"
import menslider2 from "./menImg/menslider2.png"
import menslider3 from "./menImg/menslider3.png"
import menslider4 from "./menImg/menslider4.png"
import menslider5 from "./menImg/menslider5.png"



export default function MenTopCarousel() {
    return (
        <>
            <Carousel style={{ }}>
            <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={menslider0}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={menslider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={menslider2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={menslider3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={menslider4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={menslider5}
                        alt="fifth slide"
                    />
                </Carousel.Item>

            </Carousel>
        </>
    )
}