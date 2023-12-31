import React from 'react';
import dragon from '../assets/dragon.png';

const Dealofday = () => {
  return (
    <div>
      <section>
        <div className="container" style={{backgroundColor:'#e1f0f9'}}>
            <div className="row">
                <div className="col-lg-6">
                        <img src={dragon} className='img img-fluid'></img>
                </div>
                <div className="col-lg-6 mt-5">
                    <h5 className='text-success'>Best Price For You</h5>
                    <h1 id='topic'className='mb-4'>Deal of the Day</h1>
                    <p>Dragon fruit, vibrant and exotic, boasts a sweet, mildly tangy taste with a crunchy texture and nutritious profile.</p>
                    <h3 id="fruit" className='mb-5'>Dragon Fruit</h3>
                    <h5 id='fruit'><strike>Rs 978</strike> now  <span className='text-success'>Rs 699 only</span></h5>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Dealofday;
