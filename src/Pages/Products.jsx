import React, { useState } from 'react';
import '../Pages/products.css';
import img from '../assets/login.jpg';
import prodata from '../components/Product';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Products = () => {
  

  return (
    <Router>
    <div>
      <section>
        <div className="container text-center">
            <h5 className='text-success mt-5'>Featured Products</h5>
            <h1 id='topic' >Our Products</h1>
            <p id='des' className='mb-5'>Get your Organic and tasty Products from BigFruitz</p>
            <div className="cards d-flex justify-content-evenly flex-wrap gap-5">
                {prodata.map(item=>{
                    return(
                    <Link to = {`/FruitDetial/${item.id}`}>
                    <div  className="card" key={item.id} id="prod-card" data-aos="fade-up" data-aos-duration="1000" >
                    <div className="card-img-top">
                    <img src={item.imgsrc} className='img-fluid'></img>
                    </div>
                    <div className="card-body">
                        <h5>{item.name}</h5>
                        <p id='price'>Rs.{item.price}/Kg</p>
                        <button className='btn btn-sucess'>Add to Cart</button>
                    </div>
                </div>
                </Link>)
                })}
                
                 
            </div>
        </div>
      </section>
    </div>
    </Router>
  );
}

export default Products;
