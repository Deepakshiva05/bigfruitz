import React from 'react';
import '../Pages/benefits.css';
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiFruitBowl } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const Benefits = () => {
  return (
    <div>
        <section>
      <div className="container mt-5">
        <h1 className='text-center mb-5' id="topic">Our Quality Services</h1>
            <div className="row mt-5">
                <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
                    <div className="card" data-aos="fade-up"  data-aos-duration="1000" style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4">
                                <LiaShippingFastSolid style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>FREE SHIPPING</b></h5>
                            <p>ON ORDER OVER $100</p>
                        </div>
                    </div>
                    <div className="card"  data-aos="fade-up" data-aos-duration="1000" style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4">
                                <GiFruitBowl style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>ALWAYS FRESH</b></h5>
                            <p>PRODUCT WELL PACKED</p>
                        </div>
                    </div>
                    <div className="card"  data-aos="fade-up" data-aos-duration="1000"  style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4">
                                <FaAward style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>SUPERIOR QUALITY</b></h5>
                            <p>QUALITY PRODUCTS</p>
                        </div>
                    </div>
                    <div className="card"  data-aos="fade-up" data-aos-duration="1000"  style={{width:'14rem'}}>
                        <div className="card-img-top">
                            <div className="rounded rounded-5 mt-4">
                                <MdSupportAgent style={{fontSize:'80px'}} id='truck'/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5><b>SUPPORT</b></h5>
                            <p>ANYTIME 24/7 SUPPORT</p>
                        </div>
                    </div>
                </div>    
            </div>  
      </div>
      </section>
    </div>
    
  );
}

export default Benefits;
