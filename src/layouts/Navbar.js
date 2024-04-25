

//rafc
import { Link } from "react-router-dom";
import sport from "../assets/sport.png";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [auth , setauth] = useState({})
  useEffect(() => {
   setauth(JSON.parse(localStorage.getItem("user")))
  }, [])
  return (
    <>

      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand logo_h" to="/">
              <img src={`${sport}`} width="40%" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/terrain">Terrains</Link></li>

                <li className="nav-item submenu dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dashboard</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link className="nav-link" to="/addactivity">Add activity</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/listactivities">List Activities</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/addgouvernorat">Add gouvernorat</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/listgouvernorats">List gouvernorats</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/addterrain">Add terrain</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/listterrains">List terrains</Link></li>

                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" >Contact</a></li>
                <li className="nav-item submenu dropdown"><a className="nav-link dropdown-toggle" data-toggle="dropdown"  >Profile</a>
                <ul className="dropdown-menu">
                    <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                    <li className="nav-item"><Link className="nav-link" to={`/updatepassword/${auth?.user?._id}`} >Update Password</Link></li>
                    <li className="nav-item"><Link className="nav-link" >logout</Link></li>
                    

                  </ul>
                
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signupcustomer">

                    <div type="submit" value="submit"   style={{ backgroundColor: "#f3c300", color: "white" }}
                    className="btn button_hover">Sign up</div>

                  </Link></li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/signupprovider">
                  <div type="submit" value="submit"  style={{ backgroundColor: "#f3c300", color: "white" }} 
                  className="btn  button_hover">Become a partner</div>
                   </Link>
                </li>
              

              </ul>
            </div>
          </nav>
        </div>
      </header>

    </>
  )
}
