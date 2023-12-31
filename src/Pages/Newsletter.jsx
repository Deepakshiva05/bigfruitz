import React from 'react';

const Newsletter = () => {
  return (
    <div>
        <section>
      <div className="container mt-5" style={{paddingTop:'3cm',paddingLeft:'1cm',backgroundColor:'#ffdcc2',height:'8.5cm'}}>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <h4 id='topic' className='text-success'>Subscribe to our NewsLetter</h4>
                <p>Get e-mail updates about our latest shops and Special offers</p>
            </div>
            <div className="col-lg-6 mb-3 col-md-6">
                <input type='text' placeholder='Enter your Email' className='form-control'></input><button className='btn btn-success mt-2'>Subscribe</button>
            </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Newsletter;
