import React from 'react';
import swiggy from '../assets/swiggy.png';
import zomato from '../assets/zomato.png';
import uber from '../assets/uber.png';
import bb from '../assets/bb.png';

const Partners = () => {
  return (
    <div>
    <section>
      <div className="container mt-5 text-center">
        <h1  id="topic">Our Proud partners</h1>
        <p  className='mb-5'>With our Full support and Trust</p>
        <div className="partners d-flex justify-content-evenly flex-wrap gap-5" id="partners">
            <img src={uber}  data-aos="fade-up" data-aos-duration="1000" className='img-fluid shadow'></img>
            <img src={bb}  data-aos="fade-up" data-aos-duration="1000"className='img-fluid shadow'></img>
            <img src={swiggy}  data-aos="fade-up" data-aos-duration="1000" className='img-fluid shadow'></img>
            <img src={zomato}  data-aos="fade-up" data-aos-duration="1000"className='img-fluid shadow'></img>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Partners;
