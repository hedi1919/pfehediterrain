import React, { useState } from 'react'
import { Navbar } from '../layouts/Navbar'
import { Footer } from '../layouts/Footer'
import { useNavigate } from 'react-router-dom'
import axiosApi from '../config/axios'
import Swal from 'sweetalert2'

export const ResetPassword = () => {

    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const resetpassword = () => {
      let data = {
        email: email,
      }
      axiosApi.post("http://localhost:4000/auth/resetpassword" ,  data).then((res) => {
        console.log("res, res and cate");
        if (res.status === 201) {
          Swal.fire({
            position: "centre",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem("user" , JSON.stringify(res.data))
          navigate("/")

        }
      })
    }

    return (
    <>
    <Navbar />
<div>
  <section className="contact_area section_gap mt-5">
    <div className="container">
      <div className="text-center">
        <h2 className="mb-4">Reset Password</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="contact_form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group text-center">
              <button
                onClick={resetpassword}
                type="submit"
                className="btn btn-primary btn-block"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
<Footer />

    
    
    </>
  )
}
