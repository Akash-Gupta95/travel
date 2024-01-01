import React from 'react';
import Img1 from "../Images/uk.png";
import Img2 from "../Images/france.png";
import Img3 from "../Images/pakistan.png"
import Img4 from "../Images/italy.png"
import Img5 from "../Images/india.png"
import Img6 from "../Images/us.png"


import "./SectionPackages.css"

const SectionPackages = () => {
  return (
    <section className="packages" id='packages'>
        <div className="container">
            <div className="main-text">
                <h1><span>P</span>ackages</h1>

            </div>
            <div className="row">
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img1} alt="" />
                        <div className="card-body">
                            <h3>United Kingdom</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img2} alt="" />
                        <div className="card-body">
                            <h3>France</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img3} alt="" />
                        <div className="card-body">
                            <h3>Pakistan</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
           
            <div className="row">
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img4} alt="" />
                        <div className="card-body">
                            <h3>italy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img5} alt="" />
                        <div className="card-body">
                            <h3>India</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md-0">
                    <div className="card">
                        <img src={Img6} alt="" />
                        <div className="card-body">
                            <h3>United State</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="star">
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star checked'></i>
                                <i className='fa-solid fa-star '></i>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <h6>Price: <strong>&#8377; 55,000</strong></h6>
                            <a href="#book">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionPackages