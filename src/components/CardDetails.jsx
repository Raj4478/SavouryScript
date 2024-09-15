import React from 'react'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import service from './appwrite/conf';
import authService from './appwrite/auth';
import { ToastContainer,toast } from 'react-toastify';
import { motion } from 'framer-motion';

const CardDetails = () => {

    const[meal,useMeal] = useState();
    const[persist,getPersist] = useState()

    const CartData = async() => {

        const user = await authService.getCurrentUser()

        console.log(user.$id);
        toast.success('🦄 Added To Cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });

        return await service.createPost({id:user.$id,meal_Id:window.localStorage.getItem("myId")})
        
        
    }

    
    let loggedIn;
    if(window.localStorage.getItem("loggedIn") === "true"){
    
      console.log(true);
      
      loggedIn = true
    
    }
    else{
    
      console.log(false);
      
      loggedIn = null
    }
const select = useSelector((state)=>state.auth.id)


console.log(loggedIn);



console.log(persist);


    

    const values =async () => {

          let y;
          if(select === null){

          
            y = window.localStorage.getItem("myId")
           // console.log(y)
            
        }
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${select?select:y}`

       
        
        //console.log(persist);
        const input = await fetch(url)
        const data = await input.json()
        console.log(data.meals[0])
        useMeal(data.meals[0])
        

      
        
        

    }

    useEffect(()=>{

        if(select !== null){
            window.localStorage.setItem("myId",select);
             
             
            }

            if(loggedIn !== null){

                getPersist(window.localStorage.getItem("loggedIn"))
            }
            
        values()
    },[])

  return meal? (
   <>
<div className=' '>
<motion.div initial={{x:-70}} animate={{x:0}} transition={{duration:0.5}} className='text-center pt-8 text-white bg-red-300   font-new text-5xl  p-4'>
        {meal.strMeal}
    </motion.div>

    <div className=' flex justify-center m-4 '>
     <motion.img initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} src={meal.strMealThumb} alt="" className='rounded-md ' />   
    </div>
    <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className='text-center flex  justify-center'>
       { persist?<button className='text-center p-3 rounded-lg font-new text-lg mb-4 hover:text-white hover:bg-red-300 text-red-300 border-red-300 flex border-2 items-center justify-center' onClick={CartData} >BookMark</button>:null}
</motion.div>
    <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className='pt-6 px-60 py-8 bg-slate-100 text-justify rounded-lg   '>
        <h1 className='pl-4 border-b pb-4 border-slate-500 text-4xl text-red-400 font-semi-bold font-great'>
            Directions
        </h1>
        <p className=' text-lg pt-4 tracking-widest'>
        {meal.strInstructions}
            </p>
    </motion.div>
   

    
</div>

<motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className='text-3xl border-slate-500  pt-12 font-great font-semi-bold border-b  pl-6  mx-52 text-red-400 pb-6'>
        <h1>
            Ingredients
        </h1>
    </motion.div>
<motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className=' text-center border-b mx-20  grid grid-cols-2  pt-6  font-semi-bold text-neutral-600 font-great text-2xl'>

   
        <div className='pb-4 '>
            <h2>
            {meal.strIngredient1?`➤  ${meal.strIngredient1} -> ${meal.strMeasure1}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient2?`➤  ${meal.strIngredient2} -> ${meal.strMeasure2}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient3?`➤  ${meal.strIngredient3} -> ${meal.strMeasure3}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient4?`➤  ${meal.strIngredient4} -> ${meal.strMeasure4}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient5?`➤  ${meal.strIngredient5} -> ${meal.strMeasure5}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient6?`➤  ${meal.strIngredient6} -> ${meal.strMeasure6}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient7?`➤  ${meal.strIngredient7} -> ${meal.strMeasure7}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
            {meal.strIngredient8?`➤  ${meal.strIngredient8} -> ${meal.strMeasure8}`:null}
            </h2>
        </div>
       
        <div className='pb-4'>
            <h2>
                {meal.strIngredient9?`➤  ${meal.strIngredient9} -> ${meal.strMeasure9}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient10?`➤  ${meal.strIngredient10} -> ${meal.strMeasure10}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient11?`➤ ${meal.strIngredient11} -> ${meal.strMeasure11}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient12?`➤  ${meal.strIngredient12} -> ${meal.strMeasure12}`:null}
            </h2>
        </div>
        <div className='pb-4'> 
            <h2>
                {meal.strIngredient13?`➤ ${meal.strIngredient13} -> ${meal.strMeasure13}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient14?`➤  ${meal.strIngredient14} -> ${meal.strMeasure14}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient15?`➤ ${meal.strIngredient15} -> ${meal.strMeasure15}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient16?`➤ ${meal.strIngredient16} -> ${meal.strMeasure16}`:null}
            </h2>
        </div>
        <div className='pb-4'>
            <h2>
                {meal.strIngredient17?`➤  ${meal.strIngredient17} -> ${meal.strMeasure17}`:null}
            </h2>
        </div>
        
     
    </motion.div>

    <motion.div  initial={{x:-100}} whileInView={{x:0}} transition={{duration:1}} className=' font-great text-3xl pt-8 bg-neutral-100 font-semi-bold pb-10'>

    <h1 className='pb-2 border-b border-slate-700 mx-52  text-red-400'>
        Watch How To Make It
       </h1>
     <div className='flex justify-center pt-8 '>
     <ReactPlayer url={meal.strYoutube}/>
     </div>
          
        </motion.div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  ):null
}

export default CardDetails