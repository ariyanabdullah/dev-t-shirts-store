import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../TShirt/Tshirt';
import './Home.css'

const Home = () => {
     
    const allShirts=useLoaderData()
    
    const [cart,setCart]=useState([])
// handle add to cart button
    const handleCart=(tshirt)=>{

        const existCart=cart.find(ts=>ts._id==tshirt._id)

        if(existCart){
            alert('You can not add one product again..')
        }
        else{
            const newCart=[...cart,tshirt]
            setCart(newCart) 
            alert('Your order successfully added')
        }
  
       
    }


 
    // handle delete button

    const handleDelete=(shirt)=>{
       const restCart=cart.filter(c=>c._id!==shirt._id)
       setCart(restCart)
    }




 
    return (
        <div className='home-container mt-15 '>
         <div className="shirt-container  grid grid-cols-3 gap-12">
            {
                allShirts.map(s=><Tshirt key={s.index} handleCart={handleCart} shirts={s}> </Tshirt>)
            }
         </div>
         <div className="cart-container">
            <Cart handleDelete={handleDelete} cart={cart}> </Cart>
         </div>
            
        </div>
    );
};

export default Home;