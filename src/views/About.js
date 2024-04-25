import { Link } from "react-router-dom"
import { Footer } from "../layouts/Footer"
import { Navbar } from "../layouts/Navbar"
import sport from '../assets/sport4.jpg'
import sporttt from '../assets/sporttt.avif'
import { string } from "yup"


export const About = () => {
    return (
        <>
            <Navbar />
            <div>
        
    <section className="breadcrumb_area" style={{ backgroundImage: `url(${sporttt})`, backgroundRepeat: "no-repeat" }}> 

  <div className="container">
    <div className="page-cover text-center">
      <h2 className="page-cover-tittle">About Us</h2>
      <ol className="breadcrumb">
      <li className="nav-item"><Link className="nav-link*" to="/">Home</Link></li>
         
        <li className="active">About</li>
      </ol>
    </div>
  </div>
</section>



                <section className="about_history_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d_flex align-items-center">
                                <div className="about_content ">
                                    <h2 className="title title_color">About Us <br />Our History<br />Mission &amp; Vision</h2>
                                    <p>We are a sports field management application committed to providing the best facilities and services for sports enthusiasts. Our history is marked by our dedication to promoting a healthy and active lifestyle throughout the community. Our mission is to make access to high-quality sports fields easy and to create memorable experiences for our users. Our vision is to become the top choice for sports enthusiasts when it comes to finding and booking sports fields, while fostering a culture of fair play and respect.</p>
                                    <a href="#" className="button_hover theme_btn_two">Request Custom Price</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="img-fluid" src={`${sport}`} alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ About History Area  =================*/}
                {/*================ Facilities Area  =================*/}
                <section className="facilities_area section_gap">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset={0} data-background>
                    </div>
                    <div className="container">
                        <div className="section_title text-center">
                            <h2 className="title_w">Royal Facilities</h2>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                        <div className="row mb_30">
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                <h4 className="sec_h4"><i className="fas fa-futbol" />Football</h4> {/* Utilisation de l'icône de football */}                                  <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-hand" />Handball</h4> {/* Modification ici */}
                                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                    <h4 className="sec_h4"><i className="lnr lnr-shirt" />Swimming </h4>
                                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-basketball" />Basketball</h4> {/* Modification ici */}
                                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-racquet" />Tennis</h4> {/* Modification ici */}
                                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-volleyball" />Volleyball</h4> {/* Modification ici */}
                                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ Facilities Area  =================*/}
                {/*================ Testimonial Area  =================*/}
                <section className="testimonial_area section_gap">
                    <div className="container">
                        <div className="section_title text-center">
                            <h2 className="title_color">Testimonial from our Clients</h2>
                            <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from </p>
                        </div>
                        <div className="testimonial_slider owl-carousel">
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src="image/testtimonial-1.jpg" alt />
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                    <div className="star">
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star-half-o" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src="image/testtimonial-1.jpg" alt />
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                    <div className="star">
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star-half-o" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src="image/testtimonial-1.jpg" alt />
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                    <div className="star">
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star-half-o" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="media testimonial_item">
                                <img className="rounded-circle" src="image/testtimonial-1.jpg" alt />
                                <div className="media-body">
                                    <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                    <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                                    <div className="star">
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star" /></a>
                                        <a href="#"><i className="fa fa-star-half-o" /></a>
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
