import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export const Home = () => {

  const [backendDataGpt1, setBackendDataGpt1] = useState()
  const [backendDataUdemyCourses, setBackendDataUdemyCourses] = useState([])
  const [url, setUrl] = useState()


  const getTranscript= async()=>{
    try{
      console.log(url)
      // const {data} = await axios.post('http://localhost:4567/api/gpt', url)
      axios.post('http://localhost:4567/api/gpt', {inp: url})
      .then((response)=>{
        setBackendDataGpt1(response.data.output)
        const obj = JSON.parse(backendDataGpt1)
        console.log(backendDataGpt1)
        console.log(obj)
      })
    } catch(error){
      //console.log(error.response.data)
      console.log(error.response)
    }
}

const getUdemyCourses= async()=>{
  try{
    console.log(url)
    
    axios.post('http://localhost:4567/api/udemy', {inp: "javascript"})
    .then((response)=>{
      setBackendDataUdemyCourses(response.data)
      console.log(backendDataUdemyCourses)
    })
  } catch(error){
    //console.log(error.response.data)
    console.log(error.response)
  }
}


  // useEffect(()=>{

  //     fetch("/api").then(
  //       response => response.json()
  //     ).then(
  //       data => {
  //         setBackendDataGpt1(data)
  //       }
  //     )

  //     }, [])


  return (
    <div>
      <textarea placeholder='hello...' onChange={(e)=>{setUrl(e.target.value)}}></textarea>
      <button onClick={getTranscript}>get career options</button>
      
      {backendDataGpt1? <p>{backendDataGpt1}</p>:<p>bruh</p>}

      <button onClick={getUdemyCourses}>udemy</button>
      
      {backendDataUdemyCourses? <p>{backendDataUdemyCourses.title}</p>:<p>uwu</p>}
      {backendDataUdemyCourses? <p>{backendDataUdemyCourses.url}</p>:<p>uwu</p>}
<Link to="/Quizes">
    
          <button>Take the Quiz</button>
    
</Link>
    </div>
  )
}

export default Home;
