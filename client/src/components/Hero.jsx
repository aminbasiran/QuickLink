import React, {useState} from 'react'
import axios from "axios"

const Hero = () => {

    const [longURL,setLongURL] = useState("")
    const [response,setResponse] = useState("")



    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:3000/api/v1/url/create",{longURL})
        if(response){
            setResponse(response.data)
        }

        else{
            console.log(response.error)

        }
    }


    const handleRedirectUser = async (urlID) => {
        await axios.get(`http://localhost:3000/api/v1/url/${urlID}`)
    }


    return (
        <>
            <div className=''>
                <h1 className='text-5xl font-bold'>Minify links in a matter of seconds. <span className='text-indigo-600'> Hassle-free!</span> </h1>
                <p className='text-2xl font-semibold'>easy-to-use and superfast.</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-row gap-4 justify-center m-5'>
                        <input className='text-sm p-3  rounded-md' type="text" name="longURL" value={longURL}  onChange={(e)=>setLongURL(e.target.value)} placeholder='Enter link'/>
                        <button className="rounded-md p-3 bg-indigo-600 hover:bg-indigo-900 transition-all duration-500 ease-in-out" type='submit'>Minify</button>
                    </div>
                </form>
                {response && <h1 className='text-3xl font-semibold cursor-pointer' onClick={()=>handleRedirectUser(response.urlID)}>{response?.shortURL ? response.shortURL: response}</h1>}
            </div>
        </>
    )
}

export default Hero
