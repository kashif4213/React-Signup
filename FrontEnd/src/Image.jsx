import React, { Component } from 'react'
import './Image.css'

function Image(props)
{
 return   <img  className="img1" src={props.path}   />
}

export default Image;