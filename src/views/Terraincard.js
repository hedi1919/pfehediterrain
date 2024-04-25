import React, { useEffect, useState } from 'react'
import { Navbar } from '../layouts/Navbar'
import { Footer } from '../layouts/Footer'
import axiosApi from '../config/axios'
import { Link } from 'react-router-dom'

export const Terraincard = () => {

    const [listterrains, setlistterrains] = useState([]) /* usestateschipt*/
    const allterrains=()=>{
        axiosApi.get("http://localhost:4000/terrains").then((res)=>{
            console.log(res, "all data");
            setlistterrains(res.data.data)

        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=> {
      allterrains()

}  ,[])
  return (
    <>
    <Navbar/>
<div>
  <section className="accomodation_area section_gap">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_color">Our Terrain</h2>
        <p>We all play in an era dominated by sports enthusiasts. Life speeding up on the playing fields.</p>
      </div>
      <div className="row mb_30">
        {
            listterrains?.map((t)=>{
                return(
                    <div className="col-lg-6 col-sm-6">
                    <div className="accomodation_item text-center">
                      <div className="hotel_img">
                        <img src={"http://localhost:4000/file/terrains/"+t?.files[0]} alt  width="180%" height="180%" />
                        <Link  to={`/detailterrain/${t?._id}`}className="btn theme_btn button_hover">More details</Link>
                      </div>
                      <Link  to={`/detailterrain/${t?._id}`}><h4 className="sec_h4">{t?.title}</h4></Link>
                      <h5>{t?.price}<small>dt</small></h5>
                    </div>
                  </div>


                )
            })
        }
       
     
      
      </div>
    </div>
  </section>

</div>
<Footer/>
    </>
  )
}
