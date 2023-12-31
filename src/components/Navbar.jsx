import React, { useRef } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import '../components/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Home from '../Pages/Home';
import FruitDetial from '../Pages/FruitDetial';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Cart from './Cart';


const Navbar = () => {

  

  return (
    <BrowserRouter>
    <div className="container-fluid">
    <div className="row">
    <nav className="navbar navbar-expand-md navbar-light shadow ">
      <div className="container-fluid">
      <h1 id='topic' className='logo'>Big<span className='text-success'>Fruitz</span></h1>  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
        <div className="collapse navbar-collapse me-5 text-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-4">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item me-4">
              <Link to='/shop'>Shop</Link>
            </li>
            <li className="nav-item me-4">
              <Link to='/about'>About</Link>
            </li>
            <li className="nav-item me-4">
            <Link to='/cart'>Blog</Link>
            </li>
            <li className="nav-item me-4">
              <Link to='/cart'>Cart</Link>
            </li>  
          </ul>
        </div>
        </nav>
      
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/FruitDetial/:id' element={<FruitDetial/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </div>

     
      </BrowserRouter>

 
  );
}

export default Navbar;
// import React, { useRef, useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { HiMenu, HiX } from 'react-icons/hi';
// import { RxCross2 } from 'react-icons/rx';
// import '../components/navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const navRef = useRef(null);

//   const show = () => {
//     setIsNavVisible(true);
//   };

//   const hide = () => {
//     setIsNavVisible(false);
//   };

//   return (
//     <div>
//       <div classNameNameName="container-fluid" id="cont">
//         <div classNameNameName="row d-flex justify-content-between" id="cont">
//           <div classNameNameName="col-lg-3 col-md-3 col-sm-3">
//             <h1 classNameNameName="logo">
//               Big<span classNameNameName="text-success">Fruitz</span>
//             </h1>
//           </div>
//           <div classNameNameName="col-lg-9 col-md-9 col-sm-9" id="navbar">
//             <nav>
//               <HiMenu id="bars" onClick={show} />
//               <ul
//                 ref={navRef}
//                 classNameNameName={`gap-5 justify-content-end mt-3 ${
//                   isNavVisible ? 'visible' : 'hidden'
//                 }`}
//               >
//                 <RxCross2 id="cross" onClick={hide} />
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">Shop</a>
//                 </li>
//                 <li>
//                   <a href="#">About</a>
//                 </li>
//                 <li>
//                   <a href="#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <FaShoppingCart />
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
