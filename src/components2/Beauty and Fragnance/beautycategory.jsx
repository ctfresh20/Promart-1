import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function beautycategory() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12
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
            <Carousel style={{ width: "100%", marginTop: "50px" }} responsive={responsive}>
                <a> <img className="a" src={homecircle}></img></a>
                <a> <img className="a" src={Autumn}></img></a>
                <a> <img className="a" src={trend}></img></a>


                <a> <img className="a" src={Watch1}></img></a>
                <a> <img className="a" src={deals}></img></a>
                <a> <img className="a" src={mobiles}></img></a>
                <a> <img className="a" src={beautycircle}></img></a>
                <a> <img className="a" src={menscircle}></img></a>
                <a> <img className="a" src={womens}></img></a>
                <a> <img className="a" src={baby}></img></a>
                <a> <img className="a" src={appliances}></img></a>
                <a> <img className="a" src={laptop}></img></a>


                <a> <img className="a" src={sports}></img></a>
                <a> <img className="a" src={fragrances}></img></a>
                <a> <img className="a" src={tv}></img></a>
                <a> <img className="a" src={gaming}></img></a>
                <a> <img className="a" src={electronics}></img></a>
                <a> <img className="a" src={health}></img></a>
                <a> <img className="a" src={wearable}></img></a>
                <a> <img className="a" src={kids}></img></a>
                <a> <img className="a" src={headphones}></img></a>
                <a> <img className="a" src={luggage}></img></a>
                <a> <img className="a" src={furniture}></img></a>
                <a> <img className="a" src={stationary}></img></a>


                <a> <img className="a" src={homedecor}></img></a>
                <a> <img className="a" src={shoes}></img></a>
                <a> <img className="a" src={watches}></img></a>
                <a> <img className="a" src={eyewear}></img></a>
                <a> <img className="a" src={bestseller}></img></a>
                <a> <img className="a" src={newarrival}></img></a>
                {/* <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div> */}
            </Carousel>

        </div>
    )

}

export default beautycategory