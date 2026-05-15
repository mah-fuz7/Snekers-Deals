import Mylink from "./Mylink";


const Navbar = () => {
    return (
     <div className="navbar  shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      </div>
     
    </div>
    <a className="btn btn-ghost text-3xl font-bold ">Snekers<span className="text-purple-700 text-3xl">Deals</span></a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
     
     
      <Mylink to={'/'}>Home</Mylink>
     <Mylink to={'/allproducts'}>All Products</Mylink>
 <div className="dropdown">
  <div tabIndex={0} role="button" className="btn border-none active:bg-purple-700 lg:hidden">Others</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
<Mylink to={'/myproducts'}>My Products</Mylink>
      <Mylink to={'/mybids'}>My Bids</Mylink>
      <Mylink to={'/addproduct'}>Create Product</Mylink>
  </ul>
</div>

  

      <ul className=" hidden lg:flex gap-2">
     
      <Mylink to={'/myproducts'}>My Products</Mylink>
      <Mylink to={'/mybids'}>My Bids</Mylink>
      <Mylink to={'/addproduct'}>Create Product</Mylink>

     


      </ul>

    </ul>
  </div>
  <div className="navbar-end gap-2">
      <Mylink to={'/signin'}  >Sign in</Mylink>
      <Mylink to={'/login'}>Log in</Mylink>
  </div>
</div>
    );
};

export default Navbar;