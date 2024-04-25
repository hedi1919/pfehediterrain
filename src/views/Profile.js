import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import { useState, useEffect } from 'react';


export const Profile = () => {
  
   const [auth , setauth] = useState({})
   useEffect(() => {
    setauth(JSON.parse(localStorage.getItem("user")))
   }, [])
   



  
  
  
  
    return (
    <>
    <Navbar/>
  <section style={{backgroundColor: '#eee'}}>
  <div className="container py-5 mt-5">
    <div className="row mt-5">
      <div className="col mt-5">
       <h4>Profile</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
            <h5 className="my-3">{auth?.user?.fullName}</h5>
            <p className="text-muted mb-1">{auth?.user?.UserName}</p>
            <p className="text-muted mb-4">{auth?.user?.role}</p>
            <div className="d-flex justify-content-center mb-2">
            <Link to={`/updateprofile/${auth?.user?._id}`} className="btn btn-primary">
      Update Profile
    </Link>
            </div>
  
          </div>
        </div>
     
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
              <p>{auth?.user?.fullName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">User Name</p>
              </div>
              <div className="col-sm-9">
              <p>{auth?.user?.userName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
              <p>{auth?.user?.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
              <p>{auth?.user?.phone}</p>
              </div>
            </div>
            <hr />
      
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>

    
    
    
    
    </>
  )
}
