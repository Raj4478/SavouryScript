import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';


const Category = () => {

const [input,useInput] = useState()

const[id,useId] = useState(null);

let url;

if(id === null){

     url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast`
}
else{

    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
}


   

console.log(id);



  const handleSubmit = async() => {


console.log(id);

  
  console.log(input);

  
    const values = await fetch(url);
    const data = await values.json()
    useInput(data.meals);
    console.log(data.meals);
    console.log(input);
    
    
  }

  useEffect(()=> {

    handleSubmit()
  },[id])
  return input? (
    <> 

    <div  className=' bg-var1'>
      <ul className='flex justify-between'>
      <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("chicken")
        }}>
          Chicken
        </li >
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Goat")
        }} >
          Goat
        </li >
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Lamb")
          }} >Lamb</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Miscellaneous")
          }}>Miscellaneous</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Pasta")
      }}>Pasta</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Pork")
          }}>Pork</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("seafood")
        }}>Seafood</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Side")
          }}>Side</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Starter")
        }}>Starter</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Vegan")
          }}>Vegan</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Vegetarian")
          }}>Vegetarian</li>
      </ul>
    </div>

<div className='grid grid-cols-3'>
{input.map((select)=>{
console.log(select);

return <Card key={select.idMeal}data={select} img = {select.strMealThumb} id={select.idMeal} title = {select.strMeal} category={select.strCategory} area = {select.strArea} />
})}
</div>



    </>
  ):null
}

export default Category