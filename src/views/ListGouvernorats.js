import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import { Navbar } from '../layouts/Navbar';
import axios from 'axios';
import axiosApi from '../config/axios';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const ListGouvernorats = () => {
    const [listgouvernorats, setlistgouvernorats] = useState([]) /* usestateschipt*/
    const allgouvernorats=()=>{
        axiosApi.get("http://localhost:4000/gouvernorats").then((res)=>{
            console.log(res, "all data");
            setlistgouvernorats(res.data.data)

        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=> {
      allgouvernorats()

}  ,[])
    
    
const deleteGouvernorat=(id)=>{
  axiosApi.delete("http://localhost:4000/gouvernorats/"+id).then((res)=>{
    console.log(res , "res delete");
    let arr=[...listgouvernorats]
    setlistgouvernorats(arr.filter(c=>c._id !==id ))
  }).catch((err)=>{
    console.log(err, "err");
  })
}

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Update',
          dataIndex: 'update',
          key: 'update',
          render:(text, record)=>
        <Link to={`/updategouvernorat/${record._id}`} >
          <Button style={{color:"#0BA02E"}} shape="round" icon={<EditOutlined /> }/>
        </Link>
          
        },
        
        {
          title: 'Delete',
          key: 'delete',
          render:(text, record)=>
          <Button danger shape="round" icon={<DeleteOutlined /> }
          onClick={()=>{
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                deleteGouvernorat(record._id)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
          }}
          
          
          />
        },
       
      ];
     
      
    return (
    <>
    <Navbar/>
    <section className="contact_area section_gap">
    <div className="container">
      <div className='text-center'>
        <h2>List Guovernorats</h2>
      </div>
      <div className="row mt-5">
         <div className="col-md-12 col-lg-12">
          <Table dataSource={listgouvernorats} columns={columns} />;
          </div>
      </div>
    </div>
  </section>

    
    </>
  )
}
