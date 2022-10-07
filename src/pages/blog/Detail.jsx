import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(){
    // menangkap parameter id dari url
    const { id } = useParams()
    // state
    const [ detailBlog, setDetailBlog ] = useState()
    // com did mount
    useEffect(()=>{
        axios.get(`http://localhost:3000/blogs/${id}`)
        .then((res)=>{
            console.info(res.data)
            setDetailBlog(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    }, [])
    // jika data belum selesai loading 
    if(!detailBlog){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="container">

            <section className="wrapper wrapper-detail">
                <h1>{detailBlog.title}</h1>
                <img src={detailBlog.banner} alt={detailBlog.title} />
                <p>
                    {detailBlog.body}
                </p>
            </section>

        </div>
    )
}