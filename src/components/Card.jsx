import React from 'react'
import { useId } from 'react'
import CardDetails from './CardDetails'
import { useDispatch } from 'react-redux'
import { input } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const Card = ({title,category,area,img,id }) => {
   
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
  return (
    
    <motion.div initial={{opacity:1}}   
      animate={{ opacity: [0, 0.2, 0.8, 1] }}
      transition={{ ease: "easeInOut", duration: 3, times: [0, 0.5, 0.8, 1] }}  className='p-3 m-4 border hover:scale-110  duration-500 border-amber-300  overflow-hidden rounded-md'>
        <div className=''>
            <motion.img whileHover={{scale:1.1,duration:1}} src={img} alt="" className=' '/>
        </div>
        <div className='text-xl text-center text-rose-400 font-new pt-2'>
            {title}
        </div>

<div className='flex justify-between font-medium font-cin py-2 pb-2'>
{category?<div className=' text-left pl-2 '>
        Category :    {category}
        </div>:null}
        
        {area?<div className='text-right pr-2 '>
         Area :    {area}
        </div>:null}
</div>

<div className='text-center font-amita   duration-500    p-2'>
<motion.button whileTap={{scale:1.2}}  className="px-4 py-2 rounded-md border border-amber-400 bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(240,163,10)] transition duration-200  " onClick={()=>{
   dispatch(input({id:id}))
    navigate('/cardDetails')
}} >
  Read More
</motion.button>
</div>
        
    </motion.div>
  )
}

export default Card