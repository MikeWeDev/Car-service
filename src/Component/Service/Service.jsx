import { useState } from 'react'
import './Service.css'
import data from './data'
import { MdElectricBolt } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { SiAutomattic } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
function Service() {
  const [filter,setFilter]=useState("");
   const [clicked,setClicked]=useState(1)
   
   const handleClick= (x)=>{
    setClicked(x)
   }
  return (
      <main>
        <article>
        <section className="section featured-car" id="featured-car">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">TRAINDING CARS</h2>

           
           <div className='filtering'>
                <span onClick={()=>{setFilter(""); handleClick(1)}} className={clicked === 1 ? "active" :""}>All</span>
                  <span onClick={()=>{setFilter("USED"); handleClick(2)}} className={clicked === 2 ? "active" : ""}>USED</span>
                  <span onClick={()=>{setFilter("LATEST"); handleClick(3)}} className={clicked === 3 ? "active" : ""}>LATEST</span>
           </div>
          </div>
          <ul className="featured-car-list" >

          {data.filter((item)=>{
           
                 if (filter === ""){
                       return item
                    }
                else if(filter === "USED"){
                  return item.vehicle === "USED"
                  }
                  else if(filter === "LATEST"){
                    return item.vehicle === "LATEST"
                  }
              
          
          }).map((item,index)=>(
            
            <li  key={index}>
              <div className="featured-car-card">

                <figure className="card-banner">
                  <img src={item.img} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300"
                    className="w-100"/>
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">{item.title}</a>
                    </h3>

                    <data className="year" value="2021">2021</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                       <p> <IoPeopleSharp /></p>
                      <span className="card-item-text">{item.sites} People</span>
                    </li>

                    <li className="card-list-item">
                     <p><MdElectricBolt /></p> 
                      <span className="card-item-text">{item.designe}</span>
                    </li>

                    <li className="card-list-item">
                      <p><IoIosSpeedometer /></p> 
                      <span className="card-item-text">{item.km}km / {item.liter}-lit</span>
                    </li>

                    <li className="card-list-item">
                    <p> <SiAutomattic /></p>
                   <span className="card-item-text">{item.drived}</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price">
                      <strong>${item.price}</strong> / month
                    </p>
                    <button className="btn">Call now</button>

                  </div>

                </div>

              </div>
            </li>

        
            
       
          ))}
                    </ul>

                </div>   

          </section>

      
    
        </article>
      </main>
    
 
  )
}

export default Service
