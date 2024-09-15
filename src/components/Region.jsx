import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';


const Region = () => {

const [input,useInput] = useState()

const[id,useId] = useState(null);

let url;

if(id === null){

     url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Russian`
}
else{

    url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
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
          useId("American")
        }}>
          American
        </li >
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("British")
        }} >
          British
        </li >
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Canadian")
          }} >Canadian</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Chinese")
          }}>Chinese</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Indian")
      }}>Indian</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Turkish")
          }}>Turkish</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Thai")
        }}>Thai</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500' onClick={()=>
        {
          useId("Japanese")
          }}>Japanese</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Mexican")
        }}>Mexican</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("Italian")
          }}>Italian</li>
        <li className='text-xl font-new border-var1  p-4 border rounded-full hover:bg-white duration-300 hover:text-slate-500'onClick={()=>
        {
          useId("French")
          }}>French</li>
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

export default Region