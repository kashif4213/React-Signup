import React, { Component } from 'react'
import './LastTable.css'



function LastTable(props)
{

return <div className = "LastTable">

     <p className="main">
        {props.main}
    </p>

    
    <ul >
    {
        props.sub.map(sub1 =>
        
            <li className="sub">
                <a className="sub1">
                    {sub1}
                </a>
            </li>
       
        )
    }
</ul>
</div>
}
export default LastTable;