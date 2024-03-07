import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Heading from './Common/Heading';
import { Link, useParams } from 'react-router-dom';


function Read() {
  const [data,setData]= useState([]);
  const {id}=useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [id])
  return (
    <div className='d-flex  flex-column justify-content-center align-items-center bg-light w-100 vh-100'>
       <Heading/>
       <br/>
      <div className='w-50  border shadow rounded px-5 pt-3 pb-5 '>
        <h2>User Data</h2>
        <div className='mb2'>
          Name : {data.name}
        </div>
        <div className='mb2'>
          Age : {data.age}
        </div>
        <div className='mb2'>
          Phone : {data.phone}
        </div>
        <div className='mb2'>
          Email : {data.email}
        </div>
        <br/>
        <Link to={`/update/${id}`} className='btn btn-success me-4'>Edit</Link>
        <Link to="/" className='btn btn-primary' >Back</Link>
      </div>
    </div>
  )
}

export default Read
