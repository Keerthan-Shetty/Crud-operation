import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Heading from './Common/Heading'

function Create() {
  const[values,setValues] = useState({name:'',
  age:'',
  phone:'',
  email:''
})
  
 const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/user',values)
    .then(res => {
      alert('New user created')
      console.log(res.data); 
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light w-100 vh-100'>
       <Heading/>
       <br/>
      <div className='w-50  border shadow rounded px-5 pt-3 pb-5 '>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type="text" className='form-control' name='name' placeholder='Enter Your Name' onChange={e => setValues({...values, name: e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input type="number" className='form-control' name='age' placeholder='Enter Your age' onChange={e =>setValues({...values,age:e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone</label>
            <input type="tel" className='form-control' name='phone' placeholder='Enter Your phone' onChange={e =>setValues({...values,phone:e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type="email" className='form-control' name='email' placeholder='Enter Your Email' onChange={e =>setValues({...values,email:e.target.value})} required/>
          </div>
          <br/>
          <button className='btn btn-success me-4'>Submit</button>
          <Link to="/" className='btn btn-primary' >Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
