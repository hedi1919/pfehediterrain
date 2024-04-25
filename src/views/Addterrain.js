import React, { useEffect, useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/Footer';
import Select from 'react-select'
import axios from 'axios';
import axiosApi from '../config/axios';
import '../styles/style.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Addterrain = () => {
    const [activities, setactivities] = useState("")
    const [listactivities, setlistactivities] = useState([])
    useEffect(() => {
        axiosApi.get("http://localhost:4000/activities").then((res) => {
            console.log(res);
            setlistactivities(res.data.data)

        }).catch((err) => {
            console.log(err);
        })

    }, [])

    const [filtrageactivities, setfiltrageactivities] = useState([])


    useEffect(() => {
        setfiltrageactivities(
            listactivities.map((res) => {
                return {
                    label: res.name,
                    value: res._id
                }
            })
        )
    }, [listactivities])

    

    const [listgouvernorats, setlistGouvernorats] = useState([]);

    useEffect(() => {
        axiosApi.get("http://localhost:4000/gouvernorats").then((res) => {
            console.log(res);
            setlistGouvernorats(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const [filtragegouvernorats, setfiltrageGouvernorats] = useState([]);

    useEffect(() => {
        setfiltrageGouvernorats(
            listgouvernorats.map((res) => {
                return {
                    label: res.name,
                    value: res._id
                };
            })
        );
    }, [listgouvernorats]);

    const [gouvernorats, setgouvernorats] = useState("");

    const InformationStep = () => {

        const [information, setinformation] = useState({
            title:"",
            description:"",
            price:"",
            duration:""
        })

        const handleChange=(e)=>{
            const {value , name}=e.target
            setinformation((prev)=>({...prev , [name]:value}))
            localStorage.setItem("informations", JSON.stringify({...information , [name]:value}))
        }

        return (

            <>
                <div className="row contact_form"  >
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter title" name="title" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter description"  name="description" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter price"  name="price" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter duration"  name="duration" onChange={handleChange}
                            />
                        </div>
                    </div>


                </div>

            </>
        )
    }

    const [images, setimages] = useState([])
    const handlePictures = (e) => {
        let imgs = []
        const { files } = e.target
    
        let j = [...images].length + 1
    
        for (let i = 0; i < files.length; i++) {
          imgs.push({
            id: j + 1,
            thumb: URL.createObjectURL(files[i]),
            file: files[i]
          })
    
          j += 1
        }
        setimages((prevIm) => prevIm.concat(imgs))
        e.target = null
        console.log(imgs, "phootttttooooooo");
      }
    const ImageStep = () => {
        return (
            <>
                <div className="row "  >
                <div className="col-md-12">
                        <div className="">
                            <Select
                                options={filtrageactivities}
                                onChange={(e) => setactivities(e?.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="file" className="form-control"
                                placeholder="Enter name"
                                hidden
                                multiple
                                id='files'
                                onChange={handlePictures}
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className='uploadinput m-5' onClick={()=> document.getElementById('files').click()} >
                     <i className="las la-image" />


                        </div>
                    </div>
                   
                    <div className="col-md-12">
                        <div className="">
                            <Select
                             options={filtragegouvernorats}
                             onChange={(e) => setgouvernorats(e?.value)}
                            />
                        </div>
                    </div>



                </div>



            </>
        )

    }

    const DetailsStep = () => {
        const [detail, setdetail] = useState({
            adress:"",
            participants:"",
            status:"",
            surface:"",
            latitude:"",
            longitude:"",

        })
        
        const handleChange=(e)=>{
            const {value , name}=e.target
            setdetail((prev)=>({...prev , [name]:value}))
            localStorage.setItem("details", JSON.stringify({...detail , [name]:value}))
        }

        return (
            <>
                <div className="row contact_form"  >
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter adress"  name="adress" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter participants"  name="participants" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter status"  name="status" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter surface"  name="surface" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter latitude"  name="latitude" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter longitude "  name="longitude" onChange={handleChange}
                            />
                        </div>
                    </div>



                </div>



            </>
        )
    }
    const steps = [
        {
            title: 'First',
            content: <InformationStep />,
        },
        {
            title: 'Second',
            content: <ImageStep />,
        },
        {
            title: 'Last',
            content: <DetailsStep />,
        },
    ];
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {

        marginTop: 16,
    };

   

const navigate=useNavigate()

const addTerrain=()=>{
    const data=new FormData()
    for(let item of images){
        data.append("files", item.file)
    }
    const infor=JSON.parse(localStorage.getItem("informations"))
    data.append('title', infor.title)
    data.append('description', infor.description)
    data.append('price', infor.price)
    data.append('duration', infor.duration)

    const det=JSON.parse(localStorage.getItem("details"))
    data.append('adress', det.adress)
    data.append('participants', det.participants)
    data.append('status', det.status)
    data.append('surface', det.surface)
    data.append('latitude', det.latitude)
    data.append('longitude', det.longitude)


    data.append('activity',activities)

    data.append('gouvernorat', gouvernorats)
    




    axiosApi.post("http://localhost:4000/terrains" , data).then((res)=>{
        console.log(res, "res and cate");
        localStorage.removeItem("informations")
        localStorage.removeItem("details")
        setCurrent(0)
        setimages([])
        if (res.status === 201) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/listterrains")

        }
        
        }).catch((err)=>{
            console.log(err);
})
}



    return (
        <>
            <Navbar />

            <section className=" section_gap mt-5">
                <div className="container">
                    <div className=" text-center">
                        <h2 className="">Add terrain</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Steps current={current} items={items} />
                            <div style={contentStyle}>{steps[current].content}</div>
                            <div
                                style={{
                                    marginTop: 24,
                                }}
                            >
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => addTerrain()}>
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button
                                        style={{
                                            margin: '0 8px',
                                        }}
                                        onClick={() => prev()}
                                    >
                                        Previous
                                    </Button>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </section>











            <Footer />




        </>
    )
}

