import { useState } from "react";
import { Footer } from "../layouts/Footer";
import { Navbar } from "../layouts/Navbar";
import axiosApi from "../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AddGouvernorat = () => {
    
    const navigate=useNavigate()

    const [name, setName] = useState("");

    const addgouvernorat = () => {
        let data = { name: name };
        axiosApi.post("http://localhost:4000/gouvernorats", data)
            .then((res) => {
                console.log(res, "res and cate");
                if (res.status == 201)
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        navigate("/listgouvernorats")

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
                            <h2 className="">Add Gouvernorat</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row contact_form">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12 text-right">
                                        <button
                                            onClick={addgouvernorat}
                                            type="submit"
                                            value="submit"
                                            className="btn theme_btn button_hover"
                                        >
                                            Add Gouvernorat
                                        </button>
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
