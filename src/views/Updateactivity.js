import React, { useEffect, useState } from "react";
import { Navbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";

export const Updateactivity = () => {
  const { id } = useParams();
 
  console.log(id, "iiiidddddddd");

  const [oneactivity, setoneactivity] = useState({});

  useEffect(() => {
    axiosApi.get("http://localhost:4000/activities/" + id).then((res) => {
      console.log(res, "responnnnseeeee");
      setoneactivity(res.data.data);
    });
  }, []);

  const navigate = useNavigate();
  const updateActivity = () => {
    let data = {
      name: oneactivity?.name,
    };
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosApi
        .patch("http://localhost:4000/activities/" + id,data)
        .then((res) => {
          setoneactivity(res.data.data);
          if(res.status ===200){
            navigate("/listactivities");
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
              <h2>Update Activity</h2>
            </div>

            <div className="col-md-12">
              <div className="row contact_form">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="texte"
                      placeholder="Enter your Activity"
                      value={oneactivity?.name}
                      onChange={(e) =>
                        setoneactivity({ ...oneactivity, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-md-12 text-left">
                  <button value="submit" className="btn theme_btn button_hover" onClick={updateActivity}>
                    Update Activity
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
