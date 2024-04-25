import React, { useEffect, useState } from 'react'
import { Navbar } from '../layouts/Navbar'
import { Footer } from '../layouts/Footer'
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../config/axios';
import Swal from 'sweetalert2';

export const Detailterrain = () => {

  
  const { id } = useParams();

console.log(id, "iiiidddddddd");

const [oneTerrain, setOneTerrain] = useState({});

useEffect(() => {
  axiosApi.get("http://localhost:4000/terrains/" + id).then((res) => {
    console.log(res, "responnnnseeeee");
    setOneTerrain(res.data.data);
  });
}, []);

const navigate = useNavigate();

  


  return (
    <>
     <Navbar/>
   <section className="blog_area single-post-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 posts-list">
        <div className="single-post row">
          <div className="col-lg-12">
            <div className="feature-img">
              {
                oneTerrain?.files?.[0] && (
                  <img className="img-fluid" src={"http://localhost:4000/file/terrains/"+oneTerrain?.files[0]} alt />
                )
              }
           
            </div>									
          </div>
         
          <div className="col-lg-9 col-md-9 blog_details">
            <h2>{oneTerrain?.title}</h2>
          
          </div>
          <div className="col-lg-12">
            <div className="quotes">
             {oneTerrain?.description}
            </div>
            <div className="row"> 
             {
                  oneTerrain?.files?.map((f)=>{
                    return (
                      <div className="col-6">
              
                      <img className="img-fluid" src={`http://localhost:4000/file/terrains/${f}`} alt />
                    </div>
                    )
                  })
                }
            
             
            								
            </div>
          </div>
        </div>
      
        <div className="comments-area">
          <h4>05 Comments</h4>
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src="image/blog/c1.jpg" alt />
                </div>
                <div className="desc">
                  <h5><a href="#">Emilly Blunt</a></h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href className="btn-reply text-uppercase">reply</a> 
              </div>
            </div>
          </div>	
          <div className="comment-list left-padding">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src="image/blog/c2.jpg" alt />
                </div>
                <div className="desc">
                  <h5><a href="#">Elsie Cunningham</a></h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href className="btn-reply text-uppercase">reply</a> 
              </div>
            </div>
          </div>	
          <div className="comment-list left-padding">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src="image/blog/c3.jpg" alt />
                </div>
                <div className="desc">
                  <h5><a href="#">Annie Stephens</a></h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href className="btn-reply text-uppercase">reply</a> 
              </div>
            </div>
          </div>	
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src="image/blog/c4.jpg" alt />
                </div>
                <div className="desc">
                  <h5><a href="#">Maria Luna</a></h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href className="btn-reply text-uppercase">reply</a> 
              </div>
            </div>
          </div>	
          <div className="comment-list">
            <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                <div className="thumb">
                  <img src="image/blog/c5.jpg" alt />
                </div>
                <div className="desc">
                  <h5><a href="#">Ina Hayes</a></h5>
                  <p className="date">December 4, 2017 at 3:12 pm </p>
                  <p className="comment">
                    Never say goodbye till the end comes!
                  </p>
                </div>
              </div>
              <div className="reply-btn">
                <a href className="btn-reply text-uppercase">reply</a> 
              </div>
            </div>
          </div>	                                             				
        </div>
        <div className="comment-form">
          <h4>Leave a Reply</h4>
          <form>
            <div className="form-group form-inline">
              <div className="form-group col-lg-6 col-md-6 name">
                <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
              </div>
              <div className="form-group col-lg-6 col-md-6 email">
                <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
              </div>										
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
            </div>
            <div className="form-group">
              <textarea className="form-control mb-10" rows={5} name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required defaultValue={""} />
            </div>
            <a href="#" className="primary-btn button_hover">Post Comment</a>	
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog_right_sidebar">
       
          <aside className="single_sidebar_widget post_category_widget">
            <h4 className="widget_title">Post Catgories</h4>
            <ul className="list_style cat-list">
              <li>
                <a  className="d-flex justify-content-between">
                  <p>Price</p>
                  <p>{oneTerrain?.price}</p>
                </a>
              </li>
              <li>
                <a  className="d-flex justify-content-between">
                  <p>Duration</p>
                  <p>{oneTerrain?.duration}</p>
                </a>
              </li>
              <li>
                <a  className="d-flex justify-content-between">
                  <p>Adress</p>
                  <p>{oneTerrain?.adress}</p>
                </a>
              </li>
              <li>
                <a  className="d-flex justify-content-between">
                  <p>Participants</p>
                  <p>{oneTerrain?.participants}</p>
                </a>
              </li>
              <li>
                <a  className="d-flex justify-content-between">
                  <p>Status</p>
                  <p>{oneTerrain?.status}</p>
                </a>
              </li>
              <li>
                <a className="d-flex justify-content-between">
                  <p>Surface</p>
                  <p>{oneTerrain?.surface}</p>
                </a>
              </li>
              <li>
                <a className="d-flex justify-content-between">
                  <p>Activity</p>
                  <p>{oneTerrain.activity?.name}</p>
                </a>
              </li>
              <li>
                <a className="d-flex justify-content-between">
                  <p>Gouvernorat</p>
                  <p>{oneTerrain.gouvernorat?.name}</p>
                </a>
              </li>

            </ul>
            <div className="br" />
          </aside>
          
        </div>
      </div>
    </div>
  </div>
</section>

    
<Footer/>
    </>
  )
}
