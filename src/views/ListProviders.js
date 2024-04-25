import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Navbar } from '../layouts/Navbar';
import axiosApi from '../config/axios';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';

export const ListProviders = () => {
 
    const [allProviders, setAllProviders] = useState([])

    const findAllProviders = () => {
        axiosApi.get("http://localhost:4000/users/role?role=Provider").then((res) => {
            console.log(res, "all providers");
            setAllProviders(res.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        findAllProviders()
    }, [])
  
    const deleteProvider = (id) => {
        axiosApi.delete("http://localhost:4000/users/" + id).then((res) => {
            console.log(res , "res delete");
            let arr = [...allProviders]
            setAllProviders(arr.filter(p => p._id !== id))
        }).catch((err) => {
            console.log(err, "err");
        })
    }

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullname',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (text, record) => (
                <Button danger shape="round" icon={<DeleteOutlined />}
                    onClick={() => {
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
                                deleteProvider(record._id)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        });
                    }}
                />
            ),
        },
    ];

    return (
        <>
            <Navbar />
            <section className="contact_area section_gap">
                <div className="container">
                    <div className='text-center'>
                        <h2>List Providers</h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 col-lg-12">
                            <Table dataSource={allProviders} columns={columns} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
