import React, { useState } from 'react';
import './Grid.css';
import img from './product/p_icon/washing-machine.png';
import p1 from './product/p1.jpg';
import p2 from './product/p2.JPG';
import p3 from './product/p3.JPG';
import p4 from './product/p4.JPG';
import p5 from './product/p5.JPG';
import p6 from './product/p6.JPG';
import p7 from './product/p7.JPG';
import p8 from './product/p8.JPG';
import p9 from './product/p9.JPG';
import fire from './product/homepage-hot-offers.svg';
import white from './product/homepage-hot-offers white.svg';
import { Link } from 'react-router-dom';
import sideimg2 from './product/add/2.JPG';
import Pulse from 'react-reveal/Pulse';
const GridSoftwareVisibility = () => {
  const [imgsrc, setsrc] = useState(fire);
  const MouseOver = () => {
    setsrc(white);
  };
  const MouseOut = () => {
    setsrc(fire);
  };
  return (
    <Pulse>
      <section class="product-sec">
        <div class="container-fluid">
          <div class="row row-new">
            <div className=" ">
              <div className="row">
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p1} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    {/* <div className="pro_heading">
                      {/* <h3>Business Solution</h3> */}
                    </div>

                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/business"
                        className="btn btn-v_pro w-100 bg-secondary"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p2} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>E-Commerce</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p3} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>Education</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                {/*hot offer*/}
                <div className="col-md-3">
                  <div className="product_wala">
                    <Link
                      to="/hotdeals"
                      style={{ textDecoration: 'none' }}
                      className="img-space"
                      onMouseOver={MouseOver}
                      onMouseOut={MouseOut}
                    >
                      <img
                        src={imgsrc}
                        className="img-fluid"
                        alt=""
                        width="25%"
                      />

                      <p>Hot Offers</p>
                      <div align="centre">
                        <p className="subtxt">Check out our weekly hot deals</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: '2em' }}>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p4} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>Healthcare</h3>
                    </div> */}
                    </div>

                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#!" className="btn btn-v_pro w-100 bg-secondary">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p5} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>Human Resource</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p6} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>News & Blogs</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                {/*hot offer*/}
                <div className="col-md-3">
                  <div className="product_wala">
                    <img
                      src={sideimg2}
                      className="img-fluid"
                      alt=""
                      width="100%"
                      style={{ height: '400px' }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: '-11.5em' }}>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p7} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>Online Reservation</h3>
                    </div> */}
                    </div>

                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#!" className="btn btn-v_pro w-100 bg-secondary">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p8} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>Hotel Reservation</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product_wala">
                    <div className="pro_box">
                      <img src={p9} className="img-fluid" alt="" />
                      {/* <div className="head_design"></div>
                    <div className="pro_heading">
                      <h3>OTT Platform</h3>
                    </div> */}
                    </div>
                    <div className="pro-items">
                      <div className="row m-0">
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Tooltip on top"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="pro_info">
                            <a
                              href="!#"
                              className=""
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Tooltip on right"
                            >
                              <img src={img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#!"
                        className="btn btn-v_pro w-100 bg-secondary"
                        style={{ zIndex: '999' }}
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div class="col-md-2 pro_add">*/}
          {/*  <div*/}
          {/*    className="img-space"*/}
          {/*    onMouseOver={MouseOver}*/}
          {/*    onMouseOut={MouseOut}*/}
          {/*  >*/}
          {/*    <img src={imgsrc} class="img-fluid" alt="" width="25%" />*/}

          {/*    <p>Hot Offers</p>*/}
          {/*    <div align="centre">*/}
          {/*      <p className="subtxt">Check out our weekly hot deals</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <img src={sideimg2} class="img-fluid" alt="" />*/}
          {/*  <img src={sideimg3} class="img-fluid" alt="" />*/}
          {/*</div>*/}
        </div>
      </section>
    </Pulse>
  );
};

export default GridSoftwareVisibility;
