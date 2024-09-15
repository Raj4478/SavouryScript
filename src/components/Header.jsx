import React, { useEffect,useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import myImg from "./Designer.png"
import { useSelector } from 'react-redux'
import authService from './appwrite/auth'
import CartData from './pages/CartData'
import { useNavigate } from 'react-router-dom'
import { motion, spring } from 'framer-motion'

const Header = () => {

let select = useSelector((state)=>state.auth.loggedin)

const navigate = useNavigate()


let loggedIn;
if(window.localStorage.getItem("loggedIn") === "true"){


  
  loggedIn = true

}
else{

  console.log(false);
  
  loggedIn = null
}




const[persist,setPersist] = useState(null)




useEffect(()=>{

  if(select != null){
  



  }

  setPersist(window.localStorage.getItem("loggedIn"))
 
 

},[])



const logout = async() => {

  window.localStorage.setItem("loggedIn",false)
  select = null

  
   await authService.logout()

   window.location.reload()


 
 
  }

 


 

  return (
    <>
   
    <motion.div initial={{y:-120}} animate={{y:0}} transition={{type:'spring',stiffness:120}} className='sticky z-10 items-center  align-middle top-0 bg-white flex justify-between  border-b py-6 border-amber-400'>
   
    
<div className='text-3xl flex  justify-start text-red-400 mx-4  font-great'>
 
<div className=' w-16'>
<img src={myImg} alt=""  className=' border-2 '/> 
</div>

   <motion.div whileHover={{scale:1.2}} className='pl-6 flex items-center align-middle'>
   <Link to="/">Savoury <span className='text-yellow-400'>Script</span></Link>
    </motion.div> 

</div>
<div className='flex align-middle justify-evenly'>
<motion.ul    className='flex align-middle  text-amber-400 font-new text-xl'>


            <motion.li className='px-4 border-b-2 border-white  duration-300  hover:border-amber-400'><Link to="/region">Region</Link></motion.li>
            <motion.li  className='px-4 border-b-2 border-white  duration-300  hover:border-amber-400' ><Link to="/category">Category</Link></motion.li>
        
       {loggedIn?<li><button onClick={logout} className='font-new text-amber-400 duration-500 px-2 border-amber-400 mx-4 hover:text-white hover:bg-amber-400 border-2'>Logout</button></li>:null}
            { !loggedIn?<li whileHover={{scale:1.2}} transition={{duration:300}}  className='px-4 border-b-2 border-white  duration-300  hover:border-amber-400'><Link whileHover={{scale:1.2}} transition={{duration:300}}  to="/login">Login</Link></li>:null}
           { !loggedIn? <li className='mr-6 border-b-2 border-white  duration-300  hover:border-amber-400'><Link to="signup">SignUp</Link></li>:null}
         <li className="mr-6"><Search/></li> 
            {loggedIn? <li className=' cursor-pointer  ' onClick={()=>navigate('cart')} >📑</li>:null}
        </motion.ul>
</div>
       
    </motion.div>
    </>
  )
}

export default Header