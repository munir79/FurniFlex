
import { Link, useNavigate } from 'react-router-dom';

import logopic from '../assets/Logo/FurniFlex.png'
import logo from '../assets/Logo/icon.png'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import UseCarts from '../Hooks/UseCarts';
import { TbShoppingBag } from "react-icons/tb";
const NavBar = () => {
  const {user,Logout}=useContext(AuthContext);
  const NaviGate=useNavigate();
  const [cart]=UseCarts();

  const handleLogout=()=>{
    Logout()
    .then(()=>{
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      NaviGate('/');
    })
    .catch(error=>{
      console.log(error);
    })
  }
    return (
        <div className="navbar bg-base-100">

 <div className="navbar-start flex-1 gap-1">
    <img src={logo} alt="" />
    <img src={logopic} alt="" />

    
  </div>
 



{/* navbar center  */}



<div className="navbar-center    lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Link to='/'> <li><a>Home </a></li></Link>
     
      <Link to='/product'><li><a>Product</a></li></Link>
      <Link to='/categorey'><li><a>Categorey</a></li></Link>
      <Link to='/custom'><li><a>Custom</a></li></Link>
      <Link to='/blog'><li><a>Blog</a></li></Link>
      <p> {user&& user.email} </p>
    </ul>
  </div>



{/* navBar End */}


  <div className=" navbar-end flex-none">
    <div className="dropdown dropdown-end">
      <div >
      <Link to='/shoap'>
      <div className="indicator">
        <TbShoppingBag className='font-medium text-3xl' />
          <span className="badge mt-5 badge-sm indicator-item">{cart.length}</span>
        </div>
      </Link>
      </div>
      {/* <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold"> {cart.length} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div> */}
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn ml-3 btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to='/signup'><li>SignUp</li></Link>
        <Link to='/login'><li><a>Login</a></li></Link>
        <Link onClick={()=> handleLogout()} to='/logout'>LogOut</Link>
      </ul>
    </div>
  </div>
</div>
    );
};

export default NavBar;