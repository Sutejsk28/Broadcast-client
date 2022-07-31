import React, { useState } from 'react'
import Dropdown from '../components/Util/Dropdown'
import axios from 'axios'

const CreatePost = ({subcasts}) => {
    
 
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [url, setUrl] = useState()
    const [subcast, setSubcast] = useState()
    const [post, setPost] = useState()

    function titleChangeHandler(event){
        setTitle(event.target.value)
        console.log(title);
    }

    function descriptionChangeHandler(event){
        setDescription(event.target.value)
        console.log(description);
    }

    function urlChangeHandler(event){
        setUrl(event.target.value)
        console.log(url);
    }

    function subcastHandler(selected){
        setSubcast(selected)
        console.log(subcast);
    }
    
    async function createPostHandler(){
        setPost({
            postName: title,
            description: description,
            subcastName: subcast.name,
            url: url
        })
        const response = await axios.post('http://localhost:8080/api/posts', post)
        console.log(response);
    }

    return (
        <div className='center++ flex justify-center' >
            <div className="p-4 m-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                <h1 className='text-2xl mb-4' >Create Post</h1>
                <form className="space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Title Post</label>
                        <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                            placeholder="name"
                            onChange={titleChangeHandler} 
                            value={title}
                            required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Post Description</label>
                        <textarea 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
                            placeholder="description" 
                            onChange={descriptionChangeHandler}
                            value={description}
                            required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Url</label>
                        <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                            placeholder="url"
                            onChange={urlChangeHandler} 
                            value={url}
                            required />
                    </div>
                    <Dropdown subcasts={subcasts} selectedHandler={subcastHandler} />
                    <button type="submit" onClick={createPostHandler} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                </form>
            </div>
        </div>
    )

}

export default CreatePost

export async function getServerSideProps(context) {
    
    const response = await fetch('http://localhost:8080/api/subcast')
    const subcasts = await response.json()

    return {
        props: {
         subcasts: subcasts
       }
    }

}