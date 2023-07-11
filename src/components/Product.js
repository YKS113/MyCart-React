import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";


export default function Product(curElem){
    const {id,name,image,price,category,shipping}= curElem;

    // const {id, name, company, price, description, category, stock, stars, reviews,image}= curElem;
    return <>
            <NavLink to={`/singleproduct/${id}`}>

            <div className="card">
                <figure>
                    <img src={image} alt="featuredimg" />
                    <div className="caption">{category}</div>
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="product-data-real-price"><FormatPrice price={price}/></p>
                    <p className="product-data-price">
                    MRP: <del><FormatPrice price={price*1.2}/></del>
                    </p>
                    <p>Free Shipping : {shipping ? 'Available': "Not Available"} </p>
                    
                    </div>
                    
                </div>
            </div>
            </NavLink>
    
    
    </>
        
    
    

};

