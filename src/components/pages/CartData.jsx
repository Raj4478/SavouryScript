import React, { useEffect,useState } from 'react'
import service from '../appwrite/conf'
import authService from '../appwrite/auth'
import Cartview from '../Cartview'


function CartData() {


const[mealId,setMealId] = useState();

const meals = async() => {

    console.log("running");
    
    const userDeatail = await authService.getCurrentUser()

    
    
    const userId = userDeatail.$id;
 
    
    const data = await service.getPosts(userId)
    setMealId(data.documents)

}

console.log(typeof(mealId));

useEffect(()=>{

    meals()
},[])
  return  mealId? (
    <>
{ !(mealId.length<1) ?
    <div className='grid grid-cols-2'>
    {mealId.map((meals)=>{


 return <Cartview key={meals.meal_Id} documentId={meals.$id} id={meals.meal_Id} />

   })}
    </div>:
    <div className='flex justify-center m-20 text-2xl font-new'>
    Cart is Empty
  </div>

}
    </>
  ):<div className='m-64 flex justify-center items-center font-new text-2xl'>
    Please Login to see Your Cart
  </div>
}

export default CartData