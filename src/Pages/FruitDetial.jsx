import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import prodata from '../components/Product'; 
import Cart from '../components/Cart';
import {useCart} from 'react-use-cart';

// import {useContext,createContext} from 'react';

// export const ShopContext =createContext(null);


const FruitDetial = () => {

    const {id} = useParams();

    const data = prodata.find((item)=>
        item.id === parseInt(id)
    )

    const{addItem}=useCart();
    
  //   const[cartdata,setCartdata]=useState([]);

  // function addtoCart(data){
  //   setCartdata([...cartdata,data]);
  // }

  function handleClick(data){
    addItem(data);
    alert("Product Added to cart Successfully")
  }


  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={data.imgsrc} style={{height:'11cm',width:'12cm'}} className='img-fluid'></img>
            </div>
            <div className="col-lg-6 mb-4">
                <h1 className='mb-2'>{data.name}</h1>
                <p>{data.des}</p>
                <h4 className='mb-2'>Rs. {data.price}/Kg</h4><button className='btn btn-success' onClick={()=>handleClick(data)}> Add to Cart</button>
                <br />
                <h5 className='mt-3 mb-3'>Nutrient Facts</h5>
                <table className='table table-striped'>
                  <tbody>
                  <tr>
                    <td>Protien</td>
                    <td>{data.fibre} g</td>
                  </tr>
                  <tr>
                    <td>Fibre</td>
                    <td>{data.fibre} g</td>
                  </tr>
                  <tr>
                    <td>Fat</td>
                    <td>{data.fat} g</td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td>{data.calories} kcal</td>
                  </tr>
                  </tbody>
                </table>
            </div>
          </div>
        
        </div>
      
      </section>
    </div>
  );
}

export default FruitDetial;
