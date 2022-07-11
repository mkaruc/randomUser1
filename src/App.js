import { useEffect, useState } from 'react';
import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/phone.svg";
import locationIcon from "./assets/location.svg";
import "./App.css";

const App = () => {
  const[user,setUser]=useState();

  useEffect(() => {
    userList();
  }, []);
  
const userList=()=>{
  fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
        console.log(data.results);
      });
  };


  return (
    <div className="userCard">
      {user?.map((item,index)=> (
      <div key={index} className='container'>
        <div className='profileHeader'>
          <img src={item.picture.medium} alt="" className='pp'/>
          <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
        </div>
        <div className='email'>
          <img src={emailIcon} alt="" className="icon"/>
          <h3>{item.email}</h3>
        </div>
        <div className='phone'>
          <img src={phoneIcon} alt="" className="icon"/>
          <h3>{item.cell}</h3>
        </div>
        <div className='location'>
        <img src={locationIcon} alt="" className="icon"/>
          <h3>{item.location.city} - {item.location.country}</h3>
        </div>
        <div className='age'><h3>Age: {item.dob.age}</h3></div>
        <div className='register'><h3>Register Date: {item.registered.date.substr(0, 10)}</h3></div>
      </div>))}
      <button onClick={userList}>Random User</button>
    </div>
  )
}

export default App