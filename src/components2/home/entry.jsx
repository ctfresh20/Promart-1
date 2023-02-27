import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Link} from "react-router-dom";
function Entry(props) {
    return (<>
        <Link to={props.url} type="submit" className="term">
            <dt>
                <span className="emoji" role="img">
                    {props.img}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>{props.description}
            </dd>
            <dd style={{display:"flex"}}>
                <Col><dd>{props.express}</dd></Col>
                <Col><dd>{props.rating}</dd></Col>
            </dd>
        </Link>
        
        </>
    );
}

export default Entry;