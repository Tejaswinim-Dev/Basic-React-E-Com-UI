import { useState } from "react"
import './Categoryitems.css'
import toyImage from '../../../../../assets/toy.png'
import bikeImage from '../../../../../assets/bike.png'



export function Categoryitems(){
    let[categories]=useState([
        { name: 'Grocery', image: 'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' },
    { name: 'Mobiles', image: 'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' },
    { name: 'Fashion', image: 'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100' },
    { name: 'Electronics', image: 'https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100' },
    { name: 'Home & Furniture', image: 'https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100' },
    { name: 'Appliances', image: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100' },
    { name: 'Travel', image: 'https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100' },
    { name: 'Beauty, Toys & more', image: toyImage },
    { name: 'Two Wheelers', image:bikeImage },
    ])

    return(
        <div className="categories">
           {categories.map((category,index)=>(
                <div className="category" key={index}>
                     <img src={category.image} alt="" />
                     <a href={category.name}>{category.name}</a>
                </div>

           ) )
           }
        </div>
    )
}