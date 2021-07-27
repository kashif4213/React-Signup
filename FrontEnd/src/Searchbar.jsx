import React, { Component } from 'react'

import './Searchbar.css';
function Searchbar(props)
{
    return <div>
        
            <h1 className="Pcatalog">Program Catalog</h1>
            <div className="searchbar1">
            <input className="searchbar" placeholder="Search"  ></input>
            <img className="search" src="https://www.udacity.com/images/search.svg"/>
          
            </div>
            
    </div>
}

export default Searchbar;