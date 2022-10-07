import React, { useState, useEffect }from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Home(){
    // state
    const [ blogData, setBlogData ] = useState([])
    // did mount
    useEffect(()=>{
        // hit ke api json server localhost
        axios.get('http://localhost:3000/blogs')
        .then((res)=>{
            // console.info(res.data)
            setBlogData(res.data)
        })
        .catch((err)=>{
            console.err(err)
        })
    }, [])

    return (
        <div className="container">

            <section className="wrapper">
                <h1>Home Page</h1>

                <div className="blog-wrapper">
                    {blogData.map((e)=>{
                        return(
                            <div  key={e.id} className="blog-card">
                                <h3>{e.title}</h3>
                                <img src={e.banner} alt={e.title}/>
                                <p>
                                    {e.body}
                                </p>

                              <Link to={`/blog/detail/${e.id}/${e.slug}`}>Detail</Link>
                            </div>
                        )
                    })}

                </div>
            </section>

        </div>
    )
}