import { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {
  const[user,setUser]=useState([]);

  useEffect(() => {
  
const userList=async()=>{
  try{
    const {user: response} = await axios.get("https://randomuser.me/api/");
    setUser(response);
  }catch(error){
    console.error(error.message);
  }}
  userList();
 }, []);


  return (
    <div className="userCard">
      {user.map((item,index)=> (
      <div key={index} className='container'>
        <div className='profileHeader'>
          <img src={item.picture.medium} alt="" />
          <h2>{item.name}</h2>
        </div>
        <div className='email'>
          <img src="./assets/email.svg" alt="" />
          <h3>{item.email}</h3>
        </div>
        <div className='phone'>
          <img src="./assets/phone.svg" alt="" />
          <h3>{item.phone}</h3>
        </div>
        <div className='location'>
        <img src="./assets/location.svg" alt="" />
          <h3>{item.location}</h3>
        </div>
        <div className='age'><h3>Age: {item.dob.age}</h3></div>
        <div className='register'><h3>Register Date: {item.registered.date.substr(0, 10)}</h3></div>
      </div>))}
      <button onClick={user}>Random User</button>
    </div>
  )
}

export default App