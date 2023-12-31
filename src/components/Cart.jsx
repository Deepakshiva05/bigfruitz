import React from 'react';
import { useCart } from 'react-use-cart';
import { ImBin2 } from 'react-icons/im';
import '../App.css';

const Cart = () => {
  const { items, isEmpty, totalUniqueItems, updateItemQuantity, totalItems, cartTotal, removeItem, emptyCart } = useCart();

  if (isEmpty)
    return <h1 className='text-center'>Cart is Empty</h1>;
  else
    return (
      <section>
        <div className="container mt-5">
          <h3>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h3>
          <button className='btn btn-danger' onClick={() => { emptyCart() }}>Empty Cart</button>

          <div className="table-responsive">
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Update</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}<br/>
                    <ImBin2 className="text-danger" onClick={() => removeItem(item.id)} /></td>
                    <td><img src={item.imgsrc} style={{ width: '2.5cm' }} alt={item.name} /></td>
                    <td>{item.quantity}</td>
                    <td>
                      <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, Math.max(item.quantity - 1, 0))}>-</button>
                      <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, Math.max(item.quantity + 1, 0))}>+</button>
                    </td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center">
            <h4>Total Price: Rs {cartTotal}</h4>
            <h6>Delivery Price: Rs 40</h6>
            <h3>Amount to be paid: Rs {cartTotal + 40}</h3>
          </div>
        </div>
      </section>
    );
}

export default Cart;

// import React from 'react';
// import { useCart } from 'react-use-cart';
// import { ImBin2 } from "react-icons/im";
// import '../App.css';


// // ... (other imports and code)

// const Cart = () => {
//   const { items, isEmpty, totalUniqueItems, updateItemQuantity, totalItems, cartTotal, removeItem, emptyCart } = useCart();

//   if (isEmpty)
//     return <h1 className='text-center'>Cart is Empty</h1>;
//   else
//     return (
//       <section>
//         <div className="container-fluid" style={{width:'100%',overflow:'hidden'}}>
//           <h3>Cart({totalUniqueItems}) Total Items:({totalItems})</h3>
//           <button className='btn btn-danger' onClick={() => { emptyCart() }}>Empty Cart</button>

//           <table className='table table-striped'>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Image</th>
//                 <th>Quantity</th>
//                 <th>Update</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td><img src={item.imgsrc} style={{ width: '2.5cm' }} alt={item.name} /></td>
//                   <td>{item.quantity}</td>
//                   <td>
//                     <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, Math.max(item.quantity - 1, 0))}>-</button>
//                     <button className='btn btn-outline-dark' onClick={() => updateItemQuantity(item.id, Math.max(item.quantity + 1, 0))}>+</button>
//                   </td>
//                   <td>{item.price}</td>
//                   <td><ImBin2 className="text-danger" onClick={() => removeItem(item.id)} /></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h4 className='text-center'>The Total Price : Rs {cartTotal}</h4>
//           <h6 className='text-center'>Delivery Price: Rs 40</h6>
//           <h3 className='text-center'>Amount to be paid : Rs {cartTotal + 40}</h3>
//         </div>
//       </section>
//     );
// }

// export default Cart;


























// import React from 'react';
// import straw from '../assets/strawberry.jpg';
// import lychi from '../assets/lychi.jpg';
// import {useState} from 'react';
// import { ImBin2 } from "react-icons/im";
//  const[count,setCount]=useState(0);

// const Cart = () => {

 

//   function incre(){
//     setCount(count+1);
//   }
//   function decre(){
//     setCount(count-1);
//   }

//   return (
//     <div>
//      <section>
//       <div className="container overflow-hidden">
//         <h1 id='topic' className='text-center'>Cart Items</h1>
//         <div className="row">
//           {/* <div className="col-lg-12 bg-success text-center"> */}
            // <table className='table table-dark'>
            //   <tbody>
            //     <tr>
            //       <td>S.NO</td>
            //       <td>Name</td>
            //       <td>Image</td>
            //       <td>Quantity</td>
            //       <td>Delete</td>
            //     </tr>
            //     <tr>
            //     <td>1</td>
            //       <td>Lychii</td>
            //       <td><img src={lychi} style={{width:'2.5cm'}}></img></td>
            //       <td><button  style={{height:'.7cm',width:'.7cm'}} onClick={decre}>-</button>1<button  style={{height:'.7cm',width:'.7cm'}} onClick={incre}>+</button></td>
            //       <td><ImBin2/></td>
            //     </tr>
            //   </tbody>
            // </table>
//           {/* </div>
//            */}
//         </div>
//       </div>
//      </section>
//     </div>
//   );
// }

// export default Cart;
