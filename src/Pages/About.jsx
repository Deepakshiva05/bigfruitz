import React from 'react';
import './testimonial.css';
import loki from '../assets/loki.jpg'
import swiggy from '../assets/swiggy.png';
import zomato from '../assets/zomato.png';
import uber from '../assets/uber.png';
import bb from '../assets/bb.png';
import rolls from '../assets/rolls.jpg'
import{ useRef }from 'react';
import './about.css';

const About = () => {

    const data1 = useRef('');
const data2 = useRef('');
const data3 = useRef('');
const data4 = useRef('');

function showtest(){
    data1.current.style.display="contents"
    data2.current.style.display="none"
    data3.current.style.display="none"
    data4.current.style.display="none"
}

function showpart(){
    data1.current.style.display="none"
    data2.current.style.display="contents"
    data3.current.style.display="none"
    data4.current.style.display="none"
}

function showmission(){
    data1.current.style.display="none"
    data2.current.style.display="none"
    data3.current.style.display="contents"
    data4.current.style.display="none"
}

function showfoun(){
    data1.current.style.display="none"
    data2.current.style.display="none"
    data3.current.style.display="none"
    data4.current.style.display="contents"
}

  return (
    <section>
        <div className="container text-center" style={{height:'100vh',gap:'3cm'}}>
        <h1 className='text-center mb-5'>About Us</h1>
        <div className="buttons d-flex justify-content-evenly" style={{marginBottom:'3cm'}}>
                <button onClick={showmission}className='btn btn-outline-success'>Our Mission</button>
                <button onClick={showfoun}className='btn btn-outline-success'>Founders</button>
                <button  onClick={showpart}className='btn btn-outline-success'>Partners</button>
                <button onClick={showtest}className='btn btn-outline-success'>Testimonials</button>
            </div>

            {/* data 1 */}
            <div className="data1 text-center mt-3" ref={data1} style={{marginTop:'2cm'}} id="d1">
            <h5 className='text-success'>Testimony</h5>
        <h1 id='topic' className='mb-3'>Our Satisfied Customers Says</h1>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="cards d-flex justify-content-evenly flex-wrap gap-4">
            <div className="card shadow" id="test-card"  data-aos="fade-up" data-aos-duration="1000">
                <div className="card-img-top">
                    <img src={loki} className='img-fluid'></img>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta veritatis excepturi autem quibusdam dolor?</p>
                    <br/>
                    <h4>Arun Kumar</h4>
                    <h6>Python Developer</h6>
                </div>
            </div>
            <div className="card shadow" id="test-card"  data-aos="fade-up" data-aos-duration="1000">
                <div className="card-img-top">
                    <img src={loki} className='img-fluid'></img>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta veritatis excepturi autem quibusdam dolor?</p>
                    <br/>
                    <h4>Shree Visshnu</h4>
                    <h6>Hardware Designer</h6>
                </div>
            </div>
            <div className="card shadow" id="test-card"  data-aos="fade-up" data-aos-duration="1000">
                <div className="card-img-top">
                    <img src={loki} className='img-fluid'></img>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta veritatis excepturi autem quibusdam dolor?</p>
                    <br/>
                    <h4>Akash</h4>
                    <h6>Java Developer</h6>
                </div>
            </div>
        </div>
            </div>
            {/* data 2 */}
           <div className="data2 mt-3" ref={data2} style={{marginTop:'2cm'}} id="d2">
           <h1  id="topic">Our Proud partners</h1>
        <p  className='mb-5'>With our Full support and Trust</p>
        <div className="partners d-flex justify-content-evenly flex-wrap gap-5" id="partners">
            <img src={uber}  data-aos="fade-up" data-aos-duration="1000" className='img-fluid shadow'></img>
            <img src={bb}  data-aos="fade-up" data-aos-duration="1000"className='img-fluid shadow'></img>
            <img src={swiggy}  data-aos="fade-up" data-aos-duration="1000" className='img-fluid shadow'></img>
            <img src={zomato}  data-aos="fade-up" data-aos-duration="1000"className='img-fluid shadow'></img>
        </div>
           </div>
           {/* data 3 */}
           <div className="data3 mt-3" ref={data3} style={{marginTop:'2cm'}} id="d3">
           <h1  id="topic">Our Mission</h1>
           <p>To provide a organic & Healthy Food to All</p>
           <br />
           <br />
           <p>At our organic e-commerce platform, we are on a mission to bring the best of nature to your doorstep. We prioritize health and sustainability by offering a curated selection of premium organic fruits and vegetables. Committed to fostering well-being and supporting eco-friendly practices, our mission is to provide customers with a seamless and delightful shopping experience. From farm to table, we promote transparency, quality, and ethical sourcing, ensuring you receive the freshest produce while contributing to a healthier planet. Join us in cultivating a lifestyle that celebrates nutritious choices and supports sustainable agriculture for a greener, healthier future.</p>
           <p>we passionately strive to deliver nature's goodness to your home. Through a commitment to health, sustainability, and a seamless shopping experience, we aim to promote a wholesome lifestyle while supporting ethical practices and environmental well-being.</p>


           </div>
           {/* data 4 */}
           <div className="data4" ref={data4} style={{marginTop:'2cm'}} id="d4">
            <h1 id='topic'>Our Founders</h1>
            <p>Our Prestigious Leaders of the Organisation.</p>
            <div className="cards gap-5 d-flex justify-content-evenly flex-wrap">
                <div className="card shadow" style={{width:'23rem'}}>
                    <div className="card-img-top">
                    <img src={rolls} className='img-fluid'></img>
                    </div>
                    <div className="card-body">
                        <h5>Tony Stark</h5>
                       <p>CO-FOUNDER STARK INDUSTRIES</p>
                       <p>At our organic e-commerce venture, we passionately strive to deliver nature's goodness to your home. Through a commitment to health, sustainability, and a seamless shopping experience</p> 

                       <p><b>OTHER POST</b></p>
                       <p>Bigfruitz CEO</p>
                    </div>
                </div>
                <div className="card shadow" style={{width:'23rem'}}>
                    <div className="card-img-top">
                    <img src={loki} className='img-fluid'></img>
                    </div>
                    <div className="card-body">
                        <h5>Loki Laufeyson</h5>
                       <p>CO-FOUNDER TVA</p>
                       <p>At our organic e-commerce venture, we passionately strive to deliver nature's goodness to your home. Through a commitment to health, sustainability, and a seamless shopping experience</p> 

                       <p><b>OTHER POST</b></p>
                       <p>Bigfruitz CEO</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  );
}

export default About;
