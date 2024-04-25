import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import { Navbar } from '../layouts/Navbar';
import axios from 'axios';
import axiosApi from '../config/axios';
import { EditOutlined , DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export const ListTerrains = () => {
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
    

const deleteTerrain=(id)=>{
  axiosApi.delete("http://localhost:4000/terrains/"+id).then((res)=>{
    console.log(res , "res delete");
    let arr=[...listterrains]
    setlistterrains(arr.filter(c=>c._id !==id ))
  }).catch((err)=>{
    console.log(err, "err");
  })
}
    
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Adress',
            dataIndex: 'adress',
            key: 'adress',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Participants',
            dataIndex: 'participants',
            key: 'participants',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Surface',
            dataIndex: 'surface',
            key: 'surface',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Files',
            dataIndex: 'files',
            key: 'files',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Acitvity',
            dataIndex: 'activity',
            key: 'activity',
            render: (text , record) =>{
            return <>{record?.activity?.name }</>
         }
        },
        {
            title: 'Gouvernorat',
            dataIndex: 'gouvernorat',
            key: 'gouvernorat',
            render: (text , record) =>{
              return <>{record?.gouvernorat?.name }</>}
          
        },
        {
          title: 'Update',
          dataIndex: 'update',
          key: 'update',
          render:(text, record)=>
          <Link to={`/updateterrain/${record._id}`} >
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
                deleteTerrain(record._id)
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
        <h2>List Terrains</h2>
      </div>
      <div className="row mt-5">
         <div className="col-md-12 col-lg-12">
          <Table dataSource={listterrains} columns={columns} />;
          </div>
      </div>
    </div>
  </section>

    
    </>
  )
}

