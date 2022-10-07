import axios from "axios";
import React from "react";

export default function Create(){

    // function
    const handleSubmit = (event)=>{
        event.preventDefault()

        const title = event.target.title.value
        const slug = event.target.slug.value
        const body = event.target.body.value
        const banner = event.target.banner.value

        // validator
        if(!title || !slug || !body || !banner){
            return alert("silahkan lengkapi data anda !")
        }

        // push data ke server be
        axios.post("http://localhost:3000/blogs", { title, slug, body, banner} )
        .then((res)=>{
            alert("Banner Berhasil ditambahkan")
            window.location.href = "/"
        })
        .catch((err)=>{
            alert("Terjadi Kesalahan")
            console.error(err)
        })

    }


    return (
        <div className="container">

            <section className="wrapper">
                <h1>Create Blog Form</h1>
                
                <form className="blog-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input type="text" id="title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="slug">slug</label>
                        <input type="text" id="slug" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="banner">banner</label>
                        <input type="text" id="banner" />
                    </div>

                    <div className="form-group fg-textArea">
                        <label htmlFor="body">body</label>
                        <textarea type="text" id="body" ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </section>

        </div>
    )
}