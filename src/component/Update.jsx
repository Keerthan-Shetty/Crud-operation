import React, {useEffect,useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Heading from './Common/Heading'

function Update() {

  const[values,setValues] = useState({name:'',
  age:'',
  phone:'',
  email:''
})
const {id}=useParams()

  useEffect(()=>{
    axios.get('http://localhost:3000/user/' + id)
    .then(res => {
      setValues(res.data)
    })
    .catch(err => console.log(err))
  }, [id])
  
 const navigate = useNavigate()

  const handleUpdate = (e) =>{
    e.preventDefault();
    axios.put('http://localhost:3000/user/' + id,values)
    .then(res => {
      alert('Updated Successfully...')
      console.log(res); 
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-light w-100 vh-100'>
      <Heading/>
      <br/>
      <div className='w-50  border shadow rounded px-5 pt-3 pb-5 '>
        <h2>Add User</h2>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type="text" className='form-control' name='name' placeholder='Enter Your Name' value={values.name} onChange={e => setValues({...values, name: e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input type="number" className='form-control' name='age' placeholder='Enter Your age'value={values.age} onChange={e =>setValues({...values,age:e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='phone'>Phone</label>
            <input type="tel" className='form-control' name='phone' placeholder='Enter Your phone' value={values.phone} onChange={e =>setValues({...values,phone:e.target.value})} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type="email" className='form-control' name='email' placeholder='Enter Your Email' value={values.email} onChange={e =>setValues({...values,email:e.target.value})} required/>
          </div>
          <br/>
          <button className='btn btn-success me-4'>Update</button>
          <Link to="/" className='btn btn-primary' >Back</Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
