import React, { useState, useEffect } from "react";
import { Navbar } from "../layouts/Navbar";
import Select from "react-select";

import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";
export const UpdateTerrain = () => {
  const { id } = useParams();

  const [oneterrain, setoneterrain] = useState();

  useEffect(() => {
    axiosApi.get("http://localhost:4000/terrains/" + id)
      .then((res) => {
        console.log(res, "reponseee");
        setoneterrain(res.data.data);
      })
      .catch((err) => {
        console.log(err, "errooorrr get");
      });
  }, []);

    //********activity lil select ********************* */

  const [listActivities, setlistActivities] = useState([]);

  const findAllActivities = () => {
    axiosApi
      .get("http://localhost:4000/activities")
      .then((res) => {
        console.log(res, "resssssss");
        setlistActivities(res.data.data);
      })
      .catch((err) => {
        console.log(err, "erreur");
      });
  };
  useEffect(() => {
    findAllActivities();
  }, []);

  const [filtredactivities, setfiltredactivities] = useState([]);
  useEffect(() => {
    setfiltredactivities(
      listActivities.map((res) => {
        return {
          label: res.name,
          value: res._id,
        };
      })
    );
  }, [listActivities]);

  //********governorat lil select********************* */
  const [listgovernorat, setlistgovernorat] = useState([]);

  const findAllGovernorats = () => {
    axiosApi
      .get("http://localhost:4000/gouvernorats")
      .then((res) => {
        console.log(res, "suuuuuuuu");
        setlistgovernorat(res.data.data);
      })
      .catch((err) => {
        console.log(err, "erreur");
      });
  };
  useEffect(() => {
    findAllGovernorats();
  }, []);

  const [filtredgovernorat, setfiltredgovernorat] = useState([]);
  useEffect(() => {
    setfiltredgovernorat(
      listgovernorat.map((res) => {
        return {
          label: res.name,
          value: res._id,
        };
      })
    );
  }, [listgovernorat]);

  const [images, setimages] = useState([]);
  const onChangeHandlerImage = (e) => {
    e.preventDefault();
    setimages(e.target.files);
  };

  const navigate = useNavigate();

  const updateTerrain = (e) => {
    const data = new FormData();
    e.preventDefault();
    data.append("title", oneterrain.title);
    data.append("description", oneterrain.description);
    data.append("price", oneterrain.price);
    data.append("duration", oneterrain.duration);
    data.append("adress", oneterrain.adress);
    data.append("participants", oneterrain.participants);
    data.append("status", oneterrain.status);
    data.append("lattitude", oneterrain.lattitude);
    data.append("longitude", oneterrain.longitude);
    data.append("surface", oneterrain.surface);
    data.append("activity", oneterrain.activity);
    data.append("gouvernorat", oneterrain.gouvernorat);

    for (let i = 0; i < images.length; i++) {
      data.append("files", images[i]);
    }
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosApi
          .patch("http://localhost:4000/terrains/" + id, data)
          .then((res) => {
            console.log(res);
            setoneterrain(res.data.data);
            if (res.status === 200) {
              navigate("/listterrains");
            }
          })
          .catch((err) => console.log(err, "errrooor"));
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container mt-3">
          <section className="contact_area section_gap">
            <div className="container">
              <div className="text-center">
                <h2>Update Terrain</h2>
              </div>
              <div className="row ">
                <div className="col-md-12">
                  <section className="contact_area section_gap">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <label htmlFor="files">files</label>
                            <input
                              type="file"
                              className="form-control"
                              id="files"
                              name="files"
                              placeholder="Enter your File"
                              multiple
                              onChange={onChangeHandlerImage}
                            />
                          </div>
                        </div>
                        {/* ..title...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="title">title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              name="title"
                              value={oneterrain?.title}
                              placeholder="Enter your Title"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  title: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..DESCRIPTION...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="description">description</label>
                            <input
                              type="text"
                              className="form-control"
                              id="description"
                              name="description"
                              value={oneterrain?.description}
                              placeholder="Enter your Description"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  description: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..PRICE...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="price">price</label>
                            <input
                              type="text"
                              className="form-control"
                              id="price"
                              name="price"
                              value={oneterrain?.price}
                              placeholder="Enter your price"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  price: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..DURATION...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="duration">duration</label>
                            <input
                              type="text"
                              className="form-control"
                              id="duration"
                              name="duration"
                              value={oneterrain?.duration}
                              placeholder="Enter your duration"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  duration: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..ADRESS...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="adress">adress</label>
                            <input
                              type="text"
                              className="form-control"
                              id="adress"
                              name="adress"
                              value={oneterrain?.adress}
                              placeholder="Enter your adress"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  adress: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..SURFACE...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="surface">surface</label>
                            <input
                              type="text"
                              className="form-control"
                              id="surface"
                              name="surface"
                              value={oneterrain?.surface}
                              placeholder="Enter  surface"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  surface: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        {/* ...STATUS..  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="status">status</label>
                            <input
                              type="text"
                              className="form-control"
                              id="status"
                              name="status"
                              value={oneterrain?.status}
                              placeholder="Enter your Status"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  status: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..PARTICIPANTS...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="participants">participants</label>
                            <input
                              type="text"
                              className="form-control"
                              id="participants"
                              name="participants"
                              value={oneterrain?.participants}
                              placeholder="Enter  Participants"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  participants: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ..LATTITUDE...  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="latitude">latitude</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lattitude"
                              name="lattitude"
                              value={oneterrain?.lattitude}
                              placeholder="Enter your Lattitude"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  lattitude: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ...LONGITUDE..  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="longitude">longitude</label>
                            <input
                              type="text"
                              className="form-control"
                              id="longitude"
                              name="longitude"
                              value={oneterrain?.longitude}
                              placeholder="Enter  Longitude"
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  longitude: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ...ACTIVITY..  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="gouvernorat">gouvernorat</label>
                            <Select
                              options={filtredgovernorat}
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  gouvernorat: e?.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        {/* ...GOVERNORAT..  */}
                        <div className="col-md-6">
                          <div className="form-group">
                          <label htmlFor="activity">activity</label>
                            <Select
                              options={filtredactivities}
                              onChange={(e) =>
                                setoneterrain({
                                  ...oneterrain,
                                  activity: e?.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-left">
                          <button
                            value="submit"
                            className="btn theme_btn button_hover"
                            onClick={updateTerrain}
                          >
                            Update Terrain
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
