import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import baby1 from "./babyImg/baby1.png"
import baby2 from "./babyImg/baby2.png"
import baby3 from "./babyImg/baby3.png"
import baby4 from "./babyImg/baby4.png"
import baby5 from "./babyImg/baby5.png"
import baby6 from "./babyImg/baby6.png"


function BabyTopCarousel(){
    return(
        <>
            <Carousel style={{ width: "100%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={baby2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={baby1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={baby3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={baby4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={baby5}
                        alt="fifth slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={baby6}
                        alt="fifth slide"
                    />
                </Carousel.Item>
                
            </Carousel>
        </>
    )
}

export default BabyTopCarousel