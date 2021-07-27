import React, { Component } from 'react'
import Item from './Item'
import Image from './Image'
import Button1 from './Button1'
import Button2 from './Button2'
import './Items.css'

function Items(props)
{
    return <div className="Items">
    <div className= "Item">
    <div className="leftside">
       
       <Image
           path="https://static.toiimg.com/photo/72975551.cms"
           />
           <Button1
               navitem1="Program Details"
           />
            <Button2
               navitem1="Download Syllabus"
               
           />
           <div>
           <hr/>
               <h4 className="Colab">
                   In Collaboration With:
               </h4>
               <p className="cloabName">
                   Insight
               </p>
    
           </div>
    
       </div>
       <div className="rightSide">
    <h3 className="school">
        {props.school}
    </h3>
    <h2 className="courseName">
        {props.courseName}
    </h2>
    <p className="bio">
        {props.bio}
    </p>
    <div className="middle">
     
       <h6>
       <img className = "level" src="https://www.udacity.com/images/advanced.svg"></img>
            {props.level}
        </h6>
        <h6>
        <img className="clock" src="https://www.udacity.com/images/analog-clock-icon.svg"></img>
            {props.duration}
        </h6>
        
      

        <h6>
        Course Number : {props.rating}
        </h6>
    <h6 className="reviews">
    ⭐⭐⭐⭐⭐ {props.reviews}
    </h6>
      
        
    </div>
    <h4 className="skillCovered">
            SKILLS COVERED
        </h4>
       
            <p className= "skills">{props.skills}</p>
        
        
    
       
        <h4 className="skillCovered">
            PREREQUISITES
        </h4>
        <p className="skills">
            {props.preReq}
        </p>
    

       </div>
       
    
   </div>
   
    </div>
}

export default Items;