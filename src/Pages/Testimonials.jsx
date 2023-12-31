import React from 'react';
import loki from '../assets/loki.jpg'
import '../Pages/testimonial.css';
const Testimonials = () => {
  return (
    <div>
      <section>
        <div className="container text-center">
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
      </section>
    </div>
  );
}

export default Testimonials;
