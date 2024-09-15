import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../Card';
import { useId } from 'react';
import { useSelector } from 'react-redux';
import { motion,useScroll } from 'framer-motion';

const Home = () => {

  
const input= useSelector((state) =>state.auth.search)
console.log(input);

const { scrollYProgress } = useScroll();
const[select,setSelect] = useState(null)

let url;


useEffect(()=>{

    Submit()
},[input])

const Submit = async() => {
 
  if(input === null || input === undefined){
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
    }
    else{
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    }
     
    const res =  await fetch(url);
    const data = await res.json();
setSelect(data.meals)
console.log(input);

   
   console.log(data.meals);

    console.log(select);
    

}



  return select? (

<>
<motion.h1  style={{ scaleX: scrollYProgress }} />  
<motion.h1 initial={{opacity:[0,0,0,0],x:70}} animate={{opacity:[0,0.2,0.6,1],x:0}} transition={{duration:1}} className='text-center text-4xl py-4 bg-var1 text-var2 font-new '>Simple Recipe made for <motion.span initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:1}} className='font-brush1 text-sky-300'>real, actual, everyday life</motion.span></motion.h1>
<div className='grid pt-4 grid-cols-4'>


{select.map((select) => {
  return  <Card key={select.idMeal}data={select} img = {select.strMealThumb} id={select.idMeal} title = {select.strMeal} category={select.strCategory} area = {select.strArea} />
 
})}

</div>
</>
  ):null
  

}

export default Home