import React from 'react'
import "./Gallary.css"
import img1 from "../Images/g1.png";
import img2 from "../Images/g2.png";
import img3 from "../Images/g3.png";
import img4 from "../Images/g4.png";
import img5 from "../Images/g5.png";
import img6 from "../Images/g6.png";



const Gallary = () => {
  return (
    <section className="gallary" id="gallary">
        <div className="container">
            <div className="main-text">
                <h1><span>G</span>allary</h1>
            </div>


            <div className="row" >
                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img1} alt="" />
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img2} alt="" />
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img3} alt="" />
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img4} alt="" />
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img5} alt="" />
                    </div>
                </div>

                <div className="col-md-4 py-3 py-md0">
                    <div className="card">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallary