import React, { Component } from 'react'
import CourseDomain from './CourseDomain'
import './Courses.css'


function Courses(props)
{
    return <div className="Courses">

   {CourseDomain.map((Course)=>
   <div>
<a className="courseName" href="">{Course.name}</a>
       
       <ul>
         
               {
                   Course.courses.map((subcourse)=>
                  <a className="subCourse" href="">{subcourse}</a> 
                   )
               }
          
       </ul>
   </div>
   )}  
    </div>
}
export default Courses;