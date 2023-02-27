import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

import apple1 from "./images/apple1.avif"
import airpod1 from "./images/airpod1.avif"
import airpod2 from "./images/airpod2.avif"
import airpod3 from "./images/airpod3.avif"
import watch from "./images/watch1.avif"
import nord from "./images/nord.avif"
import { Link } from "react-router-dom";


function Trending() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <>
            <Carousel responsive={responsive}>

<Card style={{ width: "90%", border: "0px", marginLeft: "2%" }}>
    <Link to="/iphone">
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple iphone 14 pro Max Physical Dual... </p1>
        </Card.Body>
        <Card.Text>
            <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>5199.00</span>
        </Card.Text>
        <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
        <span style={{ float: "right" }}>4.0⭐</span>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone">
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={airpod1} />
        <Card.Body style={{ padding: "0px" }}>
            <p1>Apple Airpod 2nd Gen With Charging..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>389.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={airpod2} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpod Pro(2nd generation)..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>809.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={watch} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Watch Series 8 GPS 45mm ALuminium..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>1586.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={nord} />
        <Card.Body style={{ padding: "0px" }}><p1>Oneplus Nord ce 2 dual sim Bahama blue 8GB..</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>977.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.7⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={airpod3} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple Airpods pro with megsafe charging case</p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>699.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.6⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>


<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>

<Card style={{ width: "90%", border: "0px" }}>
    <Link href="/iphone" style={{}}>
        <Card.Img style={{ width: "90%", height: "14rem" }} variant="top" src={apple1} />
        <Card.Body style={{ padding: "0px" }}><p1>Apple iphone 14 128GB Deep purple5G... </p1>
            <Card.Text style={{ marginTop: "5px" }}>
                <span style={{ fontWeight: "400" }}>INR </span><span style={{ fontWeight: "700" }}>4530.00</span><br />
            </Card.Text>
            <p1 style={{ backgroundColor: "yellow", padding: "0px 15px 2px 5px", borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "90px", fontWeight: "700", fontSize: "14px" }}>express</p1>
            <span style={{ float: "right" }}>4.5⭐</span>
        </Card.Body>
    </Link>
</Card>
</Carousel>
        </>
    )

}

export default Trending