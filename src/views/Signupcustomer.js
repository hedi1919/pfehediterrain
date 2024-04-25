import { useState } from "react";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const SignupCustomer = () => {
    const [fullname, setFullname] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState("");

    const navigate=useNavigate

    const signUp = () => {
        let data = { 
            fullName: fullname,
            userName: userName,
            email: email,
            phone: phone,
            password: password,
            role:"Customer" 
        };
        axiosApi.post("http://localhost:4000/users", data)
            .then((res) => {
                console.log(res, "sign up customer response");
                if (res.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/signin")
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
       <Navbar />
<div>
  <section className="contact_area section_gap mt-5">
    <div className="container">
      <div className="text-center">
        <h2 className="">Sign Up Customer</h2>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <form className="contact_form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group text-center">
              <button
                onClick={signUp}
                type="submit"
                className="btn  btn-block"
                style={{ backgroundColor: "#f3c300", color: "white" }}
              >
                Sign Up
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
    );
};
