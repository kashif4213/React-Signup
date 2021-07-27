import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Filter.css';
import FilterButton from './FilterButton';


var arr = [ 'Select Program Details','Industry Skill']


function drop1()
{
    document.getElementById("myDropdown").classList.toggle("show");
}
function Filter(props)
{
    return <div className="filter">
    <table>
        <tr>
        <td >
        <p className="filterby">FILTER BY</p>
        </td>
        </tr>
      
        
    </table>
    

    </div>
}

export default Filter;