import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import womentopcarousel from "./womenImg/womentopcarousel1.png"
import womentopcarousel2 from "./womenImg/womentopcarousel2.png"
import womentopcarousel3 from "./womenImg/womentopcarousel3.png"
import womentopcarousel4 from "./womenImg/womentopcarousel4.png"
import womentopcarousel5 from "./womenImg/womentopcarousel5.png"
import womentopcarousel6 from "./womenImg/womentopcarousel6.png"
import womentopcarousel7 from "./womenImg/womentopcarousel7.png"



function Womenfashiontopcarousel() {
  return (
    <div>
      <Carousel style={{ width: "98%",marginLeft:"1%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel3}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel5}
                        alt="fifth slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel6}
                        alt="fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={womentopcarousel7}
                        alt="fifth slide"
                    />
                </Carousel.Item>

            </Carousel>
    </div>
  )
}

export default Womenfashiontopcarousel
