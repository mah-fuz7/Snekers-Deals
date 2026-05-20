import { useContext } from "react";
import Mylink from "./Mylink";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";


const Navbar = () => {
  const {user,deleteUserFunc,signOutFunc
}=useContext(AuthContext)
  // console.log(user)

  // handle Delete User Func
  const handleDelete = async() => {
try {
  await deleteUserFunc()
  toast.success("User Delete Successfully")
} catch (error) {
  toast.error(error.message)
}
console.log("btn click")
  }
  // HANDLE SIGN OUT FUNC
  const handleSignOut = async() =>{

    try {
     await signOutFunc()

      toast.success("SignOut Successfully")
    } catch (error) {
      toast.error(error.message)
    }
  }
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
  {
    user?(<>
  {/* Open Modal Button */}
  <label
    htmlFor="my_modal_7"
    className=" text-white border-none"
  >
    <img src={user.photoURL}  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"></img>
  <p className="text-black font-semibold mt-0">   {user?.displayName}</p>
  </label>

  {/* Modal */}
  <input type="checkbox" id="my_modal_7" className="modal-toggle" />

  <div className="modal" role="dialog">
    <div className="modal-box bg-white text-black rounded-3xl p-6 relative">

      {/* Theme Toggle */}
      <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-purple-500 object-cover"
        />

        {/* User Name */}
        <h2 className="mt-4 text-2xl font-bold">
        {user?.displayName}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
         <p className="ml-8">  {user?.email}</p>
          {user?.metadata?.creationTime}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">
        <button onClick={handleSignOut} className="btn flex-1 bg-red-500 hover:bg-red-600 border-none text-white">
          Sign Out
        </button>

        <button onClick={handleDelete} className="btn flex-1 bg-black hover:bg-gray-800 border-none text-white">
          Delete Account
        </button>
      </div>
    </div>

    {/* Backdrop */}
    <label
      className="modal-backdrop"
      htmlFor="my_modal_7"
    >
      Close
    </label>
  </div>
</>)
    :( <><Mylink to={'/signin'}  >Sign in</Mylink>
      <Mylink to={'/login'}>Log in</Mylink></>)
  }
     
   
  </div>
</div>
    );
};

export default Navbar;