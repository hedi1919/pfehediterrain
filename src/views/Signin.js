import { useState } from "react";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
   
   const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        let data = { email: email, password: password };
        axiosApi.post("http://localhost:4000/auth/signin", data)
            .then((res) => {
                console.log(res, "sign in response");
                if (res.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/")
                    localStorage.setItem("user" , JSON.stringify(res.data))
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
                  <h2 className="mb-4">Sign In</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="contact_form">
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
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group text-center">
                        <button
                          onClick={signIn}
                          type="submit"
                          className="btn  btn-block"
                          style={{ backgroundColor: "#f3c300", color: "white" }}
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="form-group text-center">
                      <p>Forgot your password? <Link to="/resetpassword">Reset it here.</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      );
      
    };      