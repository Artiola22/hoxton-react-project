import { Link } from "react-router-dom";

function NavBar() {
  return (
      
    <div className="navbar">
      

         <nav>
           <input type="checkbox" id="check" />
           <label htmlFor="check" className="checkbtn">
             {/* <img className="hamburger-menu" src="./src/assets/hamburger-menu.jpg" alt="" width="30px" /> */}
           {/* <i className="fa-solid fa-bars"></i> */}
           <i className="fas fa-bars"></i>
           
           </label>
           <label className="logo">
             <Link to="/products">buyClarins</Link></label>
           <ul>
             <li><Link to="/products" className="active" >Home</Link></li>
             <li><Link to="/categories">Categories</Link></li>
             <li><Link to="/basket">Basket</Link></li>
             <li><Link to="signin">Sign In</Link></li>
             <li><Link to="signup">Sign Up</Link></li>
             <li><Link to="search">Search</Link></li>
             <li><Link to="contactus">Contact Us</Link></li>
             </ul>
         </nav>
         <section></section>

         
    </div>
  );
}
export default NavBar;
