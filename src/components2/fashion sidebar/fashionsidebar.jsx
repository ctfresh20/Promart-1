
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';

import logo from "./promart.webp"


function FashionSidebar() {

  const [open1, setOpen1] = useState(false);

  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);
  const [open8, setOpen8] = useState(true);
  const [open9, setOpen9] = useState(true);







  const [plus, minus] = useState("+")


  function onClick1() {
    minus = ("-")
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      {/* <button style={{ float: "right", backgroundColor: "transparent", color: "blue", border: "1.5px solid blue", margin: "10px 50px 10px 0px",fontSize:"20px",fontWeight:"600",padding:"2px 20px" }} onClick={handleShow}>
        Filter
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img className='navbrand' style={{ width: "10rem" }} src={logo}></img></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> */}






          <Row>
            <button
              style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", color: "black" }}
              onClick={() => setOpen1(!open1)}
              aria-controls="collapse-text"
              aria-expanded={open1}
              className="dropdown-toggle"
            >
              Fulfillment
            </button>
          </Row>
          <Collapse in={open1}>
            <div id="collapse-text">
              <Container className='footer-container'>
                <input type="checkbox"></input><label style={{ fonstSize: "20px", fontWeight: "500", marginLeft: "20px"}}>Promart assured</label>
              </Container>
            </div>
          </Collapse>



          <Row>
            <button
              style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "20px" }}
              onClick={() => setOpen2(!open2)}
              aria-controls="collapse-text"
              aria-expanded={open2}

              className="product-btn2"
            >
              Category
            </button>
          </Row>
          <Collapse in={open2} >
            <div id="collapse-text">
              <Container>

                {/* subcatgory */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen3(!open3)}
                    aria-controls="collapse-text"
                    aria-expanded={open3}

                  >
                    Fashion
                  </button>
                </Row>
                <Collapse in={open3} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="/Men" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Men</Link><br />
                      <Link to="/Womens's fashion" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Women</Link>

                    </Container>
                  </div>
                </Collapse>






                {/* Beauty & Fragrance */}

                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen4(!open4)}
                    aria-controls="collapse-text"
                    aria-expanded={open4}

                  >
                    Beauty & Health
                  </button>
                </Row>
                <Collapse in={open4} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="/Beauty & Fragrance" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Beauty & Fragrance</Link><br />
                      <Link to="/Health" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Health</Link>

                    </Container>
                  </div>
                </Collapse>




                {/* Home & kirchen */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen5(!open5)}
                    aria-controls="collapse-text"
                    aria-expanded={open5}

                  >
                    Home & Kitchen
                  </button>
                </Row>
                <Collapse in={open5} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="/Home" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Home Decor</Link><br />
                      {/* <Link to="/Health" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Health</Link> */}

                    </Container>
                  </div>
                </Collapse>

                {/* Electronics & mobile */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen6(!open6)}
                    aria-controls="collapse-text"
                    aria-expanded={open6}

                  >
                    Electronics & mobile
                  </button>
                </Row>
                <Collapse in={open6} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="/Home" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Computers & Accessories</Link><br />
                      <Link to="/Home" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Wearables</Link>

                    </Container>
                  </div>
                </Collapse>





                {/* Sports fitness & Outdoor */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen7(!open7)}
                    aria-controls="collapse-text"
                    aria-expanded={open7}

                  >
                    Sports fitness & Outdoor
                  </button>
                </Row>
                <Collapse in={open7} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="/Beauty & Fragrance" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Sports Protective Gear</Link><br />
                      <Link to="/Health" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Outdoor Recreation</Link>

                    </Container>
                  </div>
                </Collapse>






                {/* Baby & toys */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen8(!open8)}
                    aria-controls="collapse-text"
                    aria-expanded={open8}

                  >
                    Baby & Toys
                  </button>
                </Row>
                <Collapse in={open8} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Diapering</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Bathing & Skincare</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Baby transport</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Nursing & fedding</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Rockers & Walkers</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Baby & Toys</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Tricycles & Scooters</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Outdoor play</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Board Games & Card</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Pretend play</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Shop all baby & kids' essential</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Shop all toys & games</Link><br />

                    </Container>
                  </div>
                </Collapse>






                {/* Grocery */}
                <Row>
                  <button
                    style={{ border: "0px", backgroundColor: "transparent", width: "auto", marginLeft: "5%", fontWeight: "600", marginTop: "10px" }}
                    onClick={() => setOpen9(!open9)}
                    aria-controls="collapse-text"
                    aria-expanded={open9}

                  >
                    Grocery
                  </button>
                </Row>
                <Collapse in={open9} >
                  <div id="collapse-text">
                    <Container className='footer-container'>
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Beverages</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Canned, Dry & Packaged Food</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Snack Food</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Breakfast Food</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Cooking Essential</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Pet Supplies</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Household supplies</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Personal care</Link><br />
                      <Link to="" style={{ fonstSize: "20px", fontWeight: "400", marginLeft: "10px" }}>Laundry</Link><br />
                      

                    </Container>
                  </div>
                </Collapse>














              </Container>
            </div>
          </Collapse>



         









{/* 
        </Offcanvas.Body>
      </Offcanvas> */}



    </>
  );
}

export default FashionSidebar

















