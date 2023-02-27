import Carousel from 'react-bootstrap/Carousel';


import beautycarousel1 from "./beautyFragnanceimg/beautycarousel1.avif"
import beautycarousel2 from "./beautyFragnanceimg/beautycarousel2.avif"
// import beautycarousel3 from "./beautyFragnanceimg/beautycarousel3.avif"
import beautycarousel4 from "./beautyFragnanceimg/beautycarousel4.avif"
import beauty from "./beautyFragnanceimg/beauty.png"
import beauty1 from "./beautyFragnanceimg/beauty1.png"
import beauty2 from "./beautyFragnanceimg/beauty2.png"
import beauty3 from "./beautyFragnanceimg/beauty3.png"
import beauty4 from "./beautyFragnanceimg/beauty4.png"

export default function BeautyTopCarousel() {
    return (
        <>
            <Carousel style={{ width: "100%" }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={beauty}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={beauty1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={beauty2}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={beauty3}
                        alt="fourth slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={beauty4}
                        alt="fourth slide"
                    />

                </Carousel.Item>
            </Carousel>





        </>
    )
}