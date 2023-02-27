import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";


import autumn from "./menImg/autumn.png"
import Backpacks from "./menImg/Backpacks.png"
import Clothing from "./menImg/Clothing.png"
import Eyewear from "./menImg/Eyewear.png"
import Footwear from "./menImg/Footwear.png"
import Jewellery from "./menImg/Jewellery.png"
import Kid from "./menImg/Kid.png"
import Luggage from "./menImg/Luggage.png"
import Watches from "./menImg/Watches.png"

function Menscategory() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };
    return (
        <div style={{ marginTop: "2%" }}>
            <Carousel style={{  marginTop: "50px",columnGap:"30px",display:"none" }} responsive={responsive}>
            <a type="submit"><img style={{ width: "95%"}} src={autumn}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Backpacks}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Clothing}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Eyewear}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Footwear}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Jewellery}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Kid}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Luggage}></img></a>
                            <a type="submit"><img style={{ width: "95%" }} src={Watches}></img></a>
            </Carousel>

        </div>
    )
}

export default Menscategory