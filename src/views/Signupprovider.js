import { useState } from "react";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const SignupProvider = () => { // Changement du nom du composant
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
            role:"Provider" // Changer le rôle en "Provider"
        };
        axiosApi.post("http://localhost:4000/users", data)
            .then((res) => {
                console.log(res, "sign up provider response");
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      navigate("/signin")
                    }
                  });
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
        <h2 className="">Sign Up Provider</h2>
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
