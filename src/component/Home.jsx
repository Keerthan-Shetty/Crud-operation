import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import Heading from './Common/Heading';


function Home() {
const [data,setData]= useState([]);

useEffect(()=>{
    axios.get('http://localhost:3000/user')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

 //const navigate= useNavigate();
 //const location = useLocation();
const handleDelete = (id) =>{
    const confirm = window.confirm("Do yo want to delete?");
    if(confirm){
    axios.delete(`http://localhost:3000/user/${id}`)
    .then(res => {
      console.log(res); 
      //navigate('/')
     //location.reload();
     setData(prevData => prevData.filter(item => item.id !== id));
     alert('User Deleted')
    })
    .catch(err => console.log(err))
  }
}
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <Heading/>
      <br/>
      <div className='w-75 bg-white rounded border shadow p-4'>
        <div className='d-flex justify-content-between align-items-center' >
        <h2>List of Members</h2>
          <Link to='/create' className='btn btn-success'>Add+</Link>
        </div>
        <br/>
        <table className='table table-striped '>
          <thead><tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>PHONE</th>
            <th>EMAIL</th>
          </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td className='d-flex justify-content-center'>
                    <Link to={`/read/${d.id}`} className='btn btn-info me-5'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-success me-5'>Edit</Link>
                    <button onClick={() => handleDelete(d.id)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> 
      </div>
    </div>
  )
}

export default Home
