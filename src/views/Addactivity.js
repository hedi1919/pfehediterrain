import { useState } from "react"
import { Footer } from "../layouts/Footer"
import { Navbar } from "../layouts/Navbar"
import axiosApi from "../config/axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const AddActivity = () => { 
    
  const navigate=useNavigate()

    const [name , setname]=useState("")

    const addactivity=()=>{
        let data={
            name:name
        }
        axiosApi.post("http://localhost:4000/activities" , data).then((res)=>{
            console.log(res, "res and cate");
            if (res.status == 201)
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/listactivities")

        }).catch((err)=>{
            console.log(err);
        })


    }
    
    
    
    
    return (
        <>
            <Navbar />
            <div>

                <section className="contact_area section_gap mt-5">
                    <div className="container">
                        <div className=" text-center">
                            <h2 className="">Add Activity</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row contact_form"  >
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                            placeholder="Enter name"
                                            onChange={(e)=>setname(e.target.value)}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12 text-right">
                                        <button
                                        onClick={addactivity}
                                        type="submit" value="submit" className="btn theme_btn button_hover">Add Activity</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
