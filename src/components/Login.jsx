import React from 'react'
import { useForm } from 'react-hook-form'
import myImg from "../assets/pic2.jpg"
import { Link } from 'react-router-dom'
import authService from './appwrite/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logged } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Login = () => {

  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const current = async() => {

  const user = await authService.getCurrentUser()
  console.log(user);
  

  }

  const {register,handleSubmit,watch,formState:{errors}  }  = useForm()

  const loggedin = () => toast('🦄 Successfully Logged In', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme:"dark",
    progress: undefined,
    
    
    });


    const error1 = (einput) =>toast.error(einput, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });;
  const onSubmit = async (data)=>
    {console.log(data);
  



 try {
  const values =  await authService.login({...data})
  if(values){

   
    dispatch(logged({loggedin:true}))
    console.log("success");
    loggedin()
    window.localStorage.setItem("loggedIn",true);
     navigate('/')
    
   }
 } catch (error) {


  console.log(error.message);
  error1(error.message)
  
  
 }
 

 
  }
  const log = () => {

    return authService.logout()
   
    }
  return (

    <>
    

<motion.div initial={{x:-70}} animate={{x:0}} transition={{delay:0.5,duration:1}} className=' min-[900px]:grid min-[900px]:grid-cols-2 h-screen'>



   <form onSubmit={handleSubmit(onSubmit)} className='grid justify-center   max-[900px]:h-screen   items-center grid-flow-row'>


<div className='grid grid-flow-row  p-16   py-40   ' >


<h3 className='font-great text-red-400 text-3xl'>
    Savoury <span className='text-amber-400'>Script</span> 
  </h3>
  <h5 className='mt-3  font-mono text-lg'>
    Log in.
  </h5>

  <p className='mt-3'>
  Hello again. You've been missed, we're glad you're back.
  </p>
<div className='grid grid-flow-row  mt-6  '>
<label htmlFor="UserName" className='font-new'>Email</label>
    <input {...register("Email",{required:true,minLength:{value:3,message:"Min Length is 3"},maxLength:{value:30,message:"Max value reached"}})} className=' border pl-1 border-black  py-2 ' />
    {errors.Email && <div className='mt-2 font-semibold text-slate-600'>{errors.Email.message}</div>}
</div>

<div className='grid grid-flow-row pt-8'>
<label htmlFor="Password" className='font-new'>Password</label>
<input type='password' {...register("Password",{required:true,minLength:{value:8,message:"Min Length is 8"},maxLength:{value:20,message:"Max value reached"}})} className=' border pl-1  border-black py-2 bg-transparent backdrop-blur-xl' />
{errors.Password &&<div className='mt-2 font-semibold text-slate-600'>{errors.Password.message}</div> }
</div>

<p className='mt-10 p-2'>New here? <Link to="/signup" className='text-red-300 border-b border-white duration-500 hover:border-red-300'>Create an account</Link></p>
     <input type="submit"  className=' text-2xl font-new bg-red-300 text-white duration-500 hover:text-red-300 hover:bg-white rounded-md py-2  border'/>
     </div>
     

   </form>
   <motion.div initial={{y:-100}} animate={{y:0}} transition={{delay:0.5,duration:1}} className='bg-pic1 border-4  bg-cover bg-no-repeat'>
   </motion.div>
   </motion.div>
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
theme="dark"
draggable
pauseOnHover


/>

   </>
  )
}

export default Login