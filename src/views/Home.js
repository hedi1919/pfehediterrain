import { Navbar } from "../layouts/Navbar"
import swim from "../assets/swimingpool.jpg.jpg";
import img01 from "../assets/img-01_002.jpg";
import basketball from "../assets/basketbaall.avif";
import handball from "../assets/hand.jpg";




export const Home = () => {
  return (
    <>

<div>
        <Navbar />
        <section className="banner_area">
          <div className="booking_table d_flex align-items-center">
            <div
              className="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset={0}
              data-background
            />
            <div className="container">
              <div className="banner_content text-center">
                <h6>Away from monotonous life</h6>
                <h2>
                  Relax Your Mind And <br /> Relieve Your Stress
                </h2>
                <p>
                  Welcome to our reservation platform for sports fields, where
                  passion meets simplicity. Easily book your sports field or
                  court in just a few clicks. No more endless calls and waiting,
                  with us, play quickly and simply. Join us today and discover a
                  world of limitless sporting possibilities at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="hotel_booking_area position">
            <div className="container">
              <div className="hotel_booking_table">
                <div className="col-md-3">
                  <h2>
                    Book Your
                    <br /> Sports Field
                  </h2>
                </div>
                <div className="col-md-9">
                  <div className="boking_table">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="book_tabel_item">
                          <div className="form-group">
                            <div className="input-group " id="Governorats">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Governorats"
                              />
                              <span className="input-group-addon"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="book_tabel_item">
                          <div className="form-group">
                            <div className="input-group " id="Activities">
                              <input
                                type="test"
                                className="form-control"
                                placeholder="Activities"
                              />
                              <span className="input-group-addon"></span>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group date" id="date">
                              <input
                                type="date"
                                className="form-control" /* style={{cursor:'pointer'}} */
                              />
                              {/*    <i className="las la-calendar"/> */}
                              <span className="input-group-addon"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="book_tabel_item">
                          <a className="book_now_btn button_hover" href="#">
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Banner Area =================*/}
        {/*================ Accomodation Area  =================*/}
        <section className="accomodation_area section_gap">
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title_color">Field Accomodation</h2>
              <p>
                Our sports facilities offer top-notch amenities, including
                modern locker rooms, comfortable rest areas, and spectator
                stands. Designed to enhance the overall sports experience, our
                accommodations ensure both athletes and spectators enjoy
                convenience and comfort throughout their visit. Whether you're
                competing or cheering from the sidelines, we've got you covered
                with facilities tailored to your needs.
              </p>
            </div>
            <div className="row mb_30">
              <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                  <div className="hotel_img">
                    <img src={`${img01}`} width="100%" height="100%" alt="" />
                    <a href="#" className="btn theme_btn button_hover">
                      Reserve Now
                    </a>
                  </div>
                  <a href="#">
                    <h4 className="sec_h4">Football</h4>
                  </a>
                  <h5>
                    $50<small>/hour</small>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                  <div className="hotel_img">
                    <img src={`${basketball}`} width="100%" height="100%" alt="" />
                    <a href="#" className="btn theme_btn button_hover">
                    Reserve Now
                    </a>
                  </div>
                  <a href="#">
                    <h4 className="sec_h4">BasketBall</h4>
                  </a>
                  <h5>
                    $40<small>/hour</small>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                  <div className="hotel_img">
                    <img src={`${handball}`} width="100%" height="100%" alt="" />
                    <a href="#" className="btn theme_btn button_hover">
                      Reserve Now
                    </a>
                  </div>
                  <a href="#">
                    <h4 className="sec_h4">Handball</h4>
                  </a>
                  <h5>
                    $40<small>/hour</small>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="accomodation_item text-center">
                  <div className="hotel_img">
                    <img src={`${swim}`} width="100%" height="100%" alt="" />
                    <a href="#" className="btn theme_btn button_hover">
                      Reserve Now
                    </a>
                  </div>
                  <a href="#">
                    <h4 className="sec_h4">Swimming</h4>
                  </a>
                  <h5>
                    $30<small>/night</small>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ Accomodation Area  =================*/}
        {/*================ Facilities Area  =================*/}
        <section className="facilities_area section_gap">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.8"
            data-stellar-vertical-offset={0}
            data-background
          ></div>
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title_w">Royal Facilities</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="row mb_30">
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i class="lar la-futbol"></i>
                    Football
                  </h4>
                  <p>
                  Football unites people,
                   teaches valuable values like teamwork and perseverance, especially to youth, and drives economic growth and cultural exchange.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i className="lnr lnr-hand" />
                    Handball
                  </h4>
                  <p>
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i class="lnr lnr-shirt"></i>
                    Swimming 
                  </h4>
                  <p>
                  Swimming offers vital life skills, promotes health,
                   and builds resilience and camaraderie, both recreationally and competitively.

                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i class="las la-basketball-ball"></i>
                    BasketBall
                  </h4>
                  <p>
                  Basketball promotes teamwork, fitness, and strategy, fostering camaraderie and personal 
                  growth through recreational and competitive play.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i class="las la-table-tennis"></i>
                    Tennis
                  </h4>
                  <p>
                    
                  Tennis emphasizes agility, precision, and mental focus, 
                  offering both individual skill development and opportunities for social interaction.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="facilities_item">
                  <h4 className="sec_h4">
                    <i class="las la-football-ball"></i>
                    Volleyball
                  </h4>
                  <p>
                  Handball is a fast-paced sport that emphasizes teamwork, agility, 
                  and strategic thinking, providing both physical and mental challenges for players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ Facilities Area  =================*/}
        {/*================ About History Area  =================*/}
        <section className="about_history_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d_flex align-items-center">
                <div className="about_content ">
                  <h2 className="title title_color">
                    About Us <br />
                    Our History
                    <br />
                    Mission &amp; Vision
                  </h2>
                  <p>
                  We are a sports field management application committed to providing the best facilities and services for sports enthusiasts. Our history is marked by our dedication to promoting a healthy and active lifestyle throughout the community. Our mission is to make access to high-quality sports fields easy and to create memorable experiences for our users. Our vision is to become the top choice for sports enthusiasts when it comes to finding and booking sports fields, while fostering a culture of fair play and respect.
                  </p>
                  <a href="#" className="button_hover theme_btn_two">
                    Request Custom Price
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="image/about_bg.jpg" alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="latest_blog_area section_gap">
          <div className="container">
            <div className="section_title text-center">
              <h2 className="title_color">latest posts from blog</h2>
              <p>
                The French Revolution constituted for the conscience of the
                dominant aristocratic class a fall from{" "}
              </p>
            </div>
            <div className="row mb_30">
              <div className="col-lg-4 col-md-6">
                <div className="single-recent-blog-post">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="image/blog/blog-1.jpg"
                      alt="post"
                    />
                  </div>
                  <div className="details">
                    <div className="tags">
                      <a href="#" className="button_hover tag_btn">
                        Travel
                      </a>
                      <a href="#" className="button_hover tag_btn">
                        Life Style
                      </a>
                    </div>
                    <a href="#">
                      <h4 className="sec_h4">Low Cost Advertising</h4>
                    </a>
                    <p>
                      Acres of Diamonds… you’ve read the famous story, or at
                      least had it related to you. A farmer.
                    </p>
                    <h6 className="date title_color">31st January,2018</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-recent-blog-post">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="image/blog/blog-2.jpg"
                      alt="post"
                    />
                  </div>
                  <div className="details">
                    <div className="tags">
                      <a href="#" className="button_hover tag_btn">
                        Travel
                      </a>
                      <a href="#" className="button_hover tag_btn">
                        Life Style
                      </a>
                    </div>
                    <a href="#">
                      <h4 className="sec_h4">Creative Outdoor Ads</h4>
                    </a>
                    <p>
                      Self-doubt and fear interfere with our ability to achieve
                      or set goals. Self-doubt and fear are
                    </p>
                    <h6 className="date title_color">31st January,2018</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-recent-blog-post">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="image/blog/blog-3.jpg"
                      alt="post"
                    />
                  </div>
                  <div className="details">
                    <div className="tags">
                      <a href="#" className="button_hover tag_btn">
                        Travel
                      </a>
                      <a href="#" className="button_hover tag_btn">
                        Life Style
                      </a>
                    </div>
                    <a href="#">
                      <h4 className="sec_h4">
                        It S Classified How To Utilize Free
                      </h4>
                    </a>
                    <p>
                      Why do you want to motivate yourself? Actually, just
                      answering that question fully can{" "}
                    </p>
                    <h6 className="date title_color">31st January,2018</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </div>
  


    
    </>
  )
}
