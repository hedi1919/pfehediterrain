import React from 'react'
import { Footer } from '../layouts/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosApi from '../config/axios';
import { Formik } from 'formik'
import * as Yup from "yup"
import { Navbar } from '../layouts/Navbar';
export const UpdatePass = () => {
    const UpdatePasswordSchema = Yup.object().shape({
        password: Yup.string().min(5, "Password must be 5 character minimum").required("password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"),"password must match"]),});
      const { id } = useParams();
      const navigate = useNavigate();
      
      const Updatepass = (data, { resetForm }) => {
        axiosApi
          .patch("http://localhost:4000/auth/updatepass/" + id, {
            password: data.password,
          })
          .then((res) => {
            console.log(res, "res update");
            if (res.status === 200) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              resetForm();
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(err, "error");
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: err.message,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };
  return (
   <>
     <Navbar />
      <div className="container mt-5">
        <section className="contact_area section_gap">
          <div className="container">
            <div className="text-center">
              <h2>UPDATE PASSWORD</h2>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
               
                <Formik
                  initialValues={{
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={UpdatePasswordSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    Updatepass(values, { resetForm });
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-5">
                        <div className="col-12 mt-5">
                          <h2 className="contact-title">Update Password </h2>
                        </div>
                        <div className="col-lg-12 mt-5">
                          <div className="form-contact contact_form">
                            <div className="row">
                              <div className="col-sm-12">
                              <div className="form-group">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              className="form-control"
                              name="password"
                              id="password"
                              type="password"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Enter Name'"
                              placeholder="Enter Password"
                            />
                            {errors.password && touched.password ? (
                              <span className="error-message">
                                {errors.password}
                              </span>
                            ) : null}
                          </div>
                              </div>
                              <div className="col-12">
                              <div className="form-group">
                            <input
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.confirmPassword}
                              className="form-control"
                              name="confirmPassword"
                              id="confirmPassword"
                              type="password"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Enter Name'"
                              placeholder="Enter Confirm Password"
                            />
                            {errors.confirmPassword &&
                            touched.confirmPassword ? (
                              <span className="error-message">
                                {errors.confirmPassword}
                              </span>
                            ) : null}
                          </div>
                              </div>
                            </div>
                            <div className="form-group mt-3">
                              <button
                                type="submit"
                                className="btn theme_btn button_hover"
                              >
                                Update password
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
   
   </>
  )
}
