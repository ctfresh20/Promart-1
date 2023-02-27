import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import top1 from "./electronicsImg/top1.avif"
import top2 from "./electronicsImg/top2.avif"
import top3 from "./electronicsImg/top3.avif"
import top4 from "./electronicsImg/top4.avif"
import top5 from "./electronicsImg/top5.avif"
import top6 from "./electronicsImg/top6.avif"

import electronicsslider1 from "./electronicsImg/electronicsslider1.png"
import electronicsslider2 from "./electronicsImg/electronicsslider2.png"
import electronicsslider3 from "./electronicsImg/electronicsslider3.png"
import electronicsslider4 from "./electronicsImg/electronicsslider4.png"

import eslider from "./electronicsImg/eslider.png"
import eslider2 from "./electronicsImg/eslider2.png"
import eslider3 from "./electronicsImg/eslider3.png"
import eslider4 from "./electronicsImg/eslider4.png"
import eslider5 from "./electronicsImg/eslider5.png"
import eslider6 from "./electronicsImg/eslider6.png"
import eslider7 from "./electronicsImg/eslider7.png"

export default function Electronicstopcarousel() {
  return (
    <div>
      <Carousel style={{ width: "100%" }}>
            {/* <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={eslider}
                    alt="First slide"
                />

            </Carousel.Item> */}
            <Carousel.Item interval={500}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider3}
                    alt="Third slide"
                />

            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider4}
                    alt="fourth slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider5}
                    alt="fifth slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider6}
                    alt="sixth slide"
                />

            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                // style={{height:"260px"}}
                    className="d-block w-100"
                    src={eslider7}
                    alt="seventh slide"
                />

            </Carousel.Item>
        </Carousel>
    </div>
  )
}
