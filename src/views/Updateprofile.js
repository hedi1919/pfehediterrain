import React, { useEffect, useState } from "react";
import { Navbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";

export const UpdateProfile = () => {
  const { id } = useParams();
 
  console.log(id, "iiiidddddddd");

  const [oneProfile, setOneProfile] = useState({});

  useEffect(() => {
    axiosApi.get("http://localhost:4000/users/" + id).then((res) => {
      console.log(res, "responnnnseeeee");
      setOneProfile(res.data.data);
    }).catch((err) => {
      console.log(err, "error");
    })
  }, [])

  const navigate = useNavigate();
  const updateProfile = () => {
    let data = {
      fullName: oneProfile?.fullName,
      userName: oneProfile?.userName, 
      email: oneProfile?.email,
      phone: oneProfile?.phone, 
    };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        axiosApi
        .patch("http://localhost:4000/auth/updateprofile/" + id,data)
        .then((res) => {
         console.log(res, "resss");
          if(res.status ===200){
            localStorage.setItem("user" , JSON.stringify(res.data))
            navigate("/profile");
          }
        })
        .catch((err) => {
          console.log(err, "error");
        });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <section className="contact_area section_gap">
          <div className="container">
            <div className="text-center">
              <h2>Update Profile</h2>
            </div>

            <div className="col-md-12">
              <div className="row contact_form">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="fullName" // Modifier l'ID pour refléter le changement
                      name="fullName" // Modifier le nom pour refléter le changement
                      type="text"
                      placeholder="Enter your Full Name" // Modifier le placeholder pour refléter le changement
                      value={oneProfile?.fullName}
                      onChange={(e) =>
                        setOneProfile({ ...oneProfile,  fullName: e.target.value }) // Modifier le nom de la variable pour refléter le changement
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="userName" // Modifier l'ID pour refléter le changement
                      name="userName" // Modifier le nom pour refléter le changement
                      type="text"
                      placeholder="Enter your User Name" // Modifier le placeholder pour refléter le changement
                      value={oneProfile?.userName}
                      onChange={(e) =>
                        setOneProfile({ ...oneProfile, userName: e.target.value }) // Modifier le nom de la variable pour refléter le changement
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email" // Modifier l'ID pour refléter le changement
                      name="email" // Modifier le nom pour refléter le changement
                      type="email" // Utiliser le type "email" pour les adresses email
                      placeholder="Enter your Email" // Modifier le placeholder pour refléter le changement
                      value={oneProfile?.email}
                      onChange={(e) =>
                        setOneProfile({ ...oneProfile, email: e.target.value }) // Modifier le nom de la variable pour refléter le changement
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="phone" // Modifier l'ID pour refléter le changement
                      name="phone" // Modifier le nom pour refléter le changement
                      type="tel" // Utiliser le type "tel" pour les numéros de téléphone
                      placeholder="Enter your Phone" // Modifier le placeholder pour refléter le changement
                      value={oneProfile?.phone}
                      onChange={(e) =>
                        setOneProfile({ ...oneProfile, phone: e.target.value }) // Modifier le nom de la variable pour refléter le changement
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12 text-left">
                  <button value="submit" className="btn theme_btn button_hover" onClick={updateProfile}>
                    Update Profile
                  </button>
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
