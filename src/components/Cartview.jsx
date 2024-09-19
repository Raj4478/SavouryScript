import React, { useEffect, useState } from 'react'
import service from './appwrite/conf';
import { svgIconClasses } from '@mui/material';


const Cartview = ({id,documentId}) => {

    const[detail,getDetail] = useState()

    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`


    console.log(id);
    console.log(documentId);
    
    
const mealDetails = async() => {


    const values = await fetch(url)

    const data = await values.json()

    console.log(data.meals[0]);

    getDetail(data.meals[0])

}



console.log(detail);


const remove = async() => {

     await service.deletePost(documentId)

 window.location.reload()    
}


useEffect(()=>{

 mealDetails()   
},[])


  return detail?(
   <>

   {console.log(detail)}
   <div className=' border rounded-lg m-4  mb-4 '>
<div className=''>
    <img src={detail.strMealThumb} alt="" className='object-contain' />
</div>
<div className='   '>
    <div className=' text-center  font-new text-xl  '>
        {detail.strMeal}
    </div>

    <div className='flex justify-between mt-10 items-center  font-Play '>
        <div>
        AREA: {detail.strArea}
        </div>
  <div>
  CATEGORY : {detail.strCategory}
  </div>
    
    </div>

</div>
<div className=' flex  justify-center items-center '>
    <button className='font-new flex p-2 m-3 border rounded-md border-red-400 duration-500  hover:bg-red-400 hover:text-white text-red-400 text-2xl  text-center' onClick={remove}>remove</button>
</div>
   </div>
   </>
  ):
<div>
    Cart is Empty!
</div>
}

export default Cartview