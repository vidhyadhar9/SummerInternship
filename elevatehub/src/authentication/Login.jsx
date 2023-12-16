import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import CreateCourses from '../admin/CreateCourses';

function Login() {
//   const [data,setData]=useState("");


//   let {register,handleSubmit}=useForm();

//   let navigate=useNavigate();
// let Submitfun = async(userdata)=>{


//   console.log('User Data is:'+userdata.password);

//   axios.post("http://localhost:3500/user/login",userdata)
//   .then((res)=>{
//    if(res.data==='no user found'){
//     setData(" * eneter vaild pw");
//    }
//    else{
//     navigate('/')
//    }
//   })
//   .catch(err=>console.log("err at posting :",err.message));

// }
  return (
    <div>
        {/* <div className='container'>
      <form action="" className=' border border-solid' onSubmit={handleSubmit(Submitfun)}>
            <div className='form d-block w-25 m-auto border bg-secondary '>
            <h1 className=''> Login </h1>
            <div className='m-3'> 
                <input type="email" name="email" id="email" placeholder='email' {...register('email',{required:true})}/>
            </div>
           <div className='m-3'>
           <input type="password" name="" id="" placeholder='password' {...register('password',{required:true})}/>
           </div>
           <h4 className=''>{data}</h4>
         <button className='btn btn-success p-2 ' type='Submit'>submit</button>
            </div>
        </form>
       
      
    </div> */}
    <CreateCourses/>
    </div>
  )
}

export default Login