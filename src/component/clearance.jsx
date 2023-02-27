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

import clearance1 from "./images/clearance1.avif"
import clearance2 from "./images/clearance2.avif"
import clearance3 from "./images/clearance3.avif"
import clearance4 from "./images/clearance4.avif"
import clearance5 from "./images/clearance5.avif"
import clearance6 from "./images/clearance6.avif"
import clearance7 from "./images/clearance7.avif"
import { Link } from "react-router-dom";


function Clearance(){
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
    return(
<>
<Carousel responsive={responsive}>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance1} />
    <Card.Body ><p1>Dynamic Sports 650-ET Kids Electric Scooter</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>349.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>2.4⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance2} />
    <Card.Body ><p1>Dynamic Sports 650-ET Kids Electric Scooter</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>349.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>2.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance3} />
    <Card.Body ><p1>ebb & flow sofa Luxurious-Reddish Couch..</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>809.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.0⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance4} />
    <Card.Body ><p1>Dynamic Sports 650-ET Kids Electric Scooter</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>349.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>2.2⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance5} />
    <Card.Body ><p1>Dynamic Sports 650-ET Kids Electric Scooter</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>349.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>2.0⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance6} />
    <Card.Body ><p1>ebb & flow Recliner Sofa Luxurious Grey Uphols..</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>699.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>3.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={clearance7} />
    <Card.Body ><p1>Xiangjun Billibard Pool Table Game Set..</p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>49.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={apple1} />
    <Card.Body ><p1>Apple iphone 14 128GB Deep purple5G... </p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>4530.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={apple1} />
    <Card.Body ><p1>Apple iphone 14 128GB Deep purple5G... </p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>4530.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={apple1} />
    <Card.Body ><p1>Apple iphone 14 128GB Deep purple5G... </p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>4530.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={apple1} />
    <Card.Body ><p1>Apple iphone 14 128GB Deep purple5G... </p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>4530.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

<Link to="/iphone" type="submit" style={{ width: "90%",marginLeft:"8px",border:"0px" }}>
    <Card.Img style={{ width: "90%", height: "14rem", marginLeft: "5%" }} variant="top" src={apple1} />
    <Card.Body ><p1>Apple iphone 14 128GB Deep purple5G... </p1>
        <Card.Text style={{marginTop:"5px"}}>
        <span  style={{fontWeight:"400"}}>INR </span><span style={{fontWeight:"700"}}>4530.00</span><br/>
        </Card.Text>
        <express style={{backgroundColor:"yellow",padding:"0px 15px 2px 5px",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"90px",fontWeight:"700",fontSize:"14px"}}>express</express>
    <span style={{float:"right"}}>4.5⭐</span>
    </Card.Body>
</Link>

</Carousel>
</>
    )

}

export default Clearance