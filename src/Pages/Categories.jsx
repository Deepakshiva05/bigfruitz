import React from 'react';
import '../Pages/categories.css';
import img from '../assets/main.jpg';
import dry from '../assets/dryfruits.jpg';
import juice from '../assets/juice.jpg';
import juice2 from '../assets/juice2.jpg';
import juice3 from '../assets/juice3.jpg';
import vegi from '../assets/vegi.jpg';
import '../App.css';


const Categories = () => {
  return (
    <div>
      <section>
        <div className="container">
        <h1 className='text-center mb-5 mt-5' id="topic">Our Wide Categories</h1>
            <div className="cards d-flex justify-content-evenly flex-wrap gap-5" >
                <div className="card shadow" id="cat-cards"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-img-top">
                        <img src={img} className='img-fluid'></img>
                    </div>
                    <div cclassName="card-body">
                        <h5 className='mb-4 text-center'>Fruits</h5>
                    </div>
                </div>
                <div className="card shadow" id="cat-cards"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="con">
                   <h5 id="cardmid">"Protect the Health Of Every Home"</h5> 
                   <button className='btn btn-success' id="btn">ShopNow</button>
                </div>
                </div>
                <div className="card shadow"id="cat-cards"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-img-top">
                        <img src={vegi} className='img-fluid' ></img>
                    </div>
                    <div cclassName="card-body">
                        <h5 className='mb-4 text-center'>Vegetables</h5>
                    </div>
                </div>
                <div className="card shadow" id="cat-cards" data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-img-top">
                        <img src={dry} className='img-fluid'></img>
                    </div>
                    <div cclassName="card-body">
                        <h5 className='mb-4 text-center'>Dry Fruits</h5>
                    </div>
                </div>
                <div className="card shadow"  id="cat-cards"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-img-top">
                        <img src={juice3} className='img-fluid' ></img>
                    </div>
                    <div cclassName="card-body">
                        <h5 className='mb-4 text-center'>Fresh Juices</h5>
                    </div>
                </div>
                <div className="card shadow" id="cat-cards"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="card-img-top">
                        <img src={juice} className='img-fluid'></img>
                    </div>
                    <div cclassName="card-body">
                        <h5 className='mb-4 text-center'>Fruits</h5>
                    </div>
                </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
