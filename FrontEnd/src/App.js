import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Filter from './Filter';
import Courses from './Courses';
import Items from './Items';
import CourseDomain from './CourseDomain'
import ItemInfo from './ItemInfo'
import UdacityLogo from './UdacityLogo';
import LastTable from './LastTable';
import LastTableData from './LastTableData';
import LastTableData1 from './LastTableData1';
import img_footer  from './images/img_footer.PNG';
import Skills from './Skills'
import React, {useState, useEffect} from 'react';
import './Filter.css';
import PageButton from './PageButton';
import { PaginationItem } from 'reactstrap';
import RestApi from './RestApi';
import GetProjects from './RestApi';
import GetProjects1 from './RestApi1';
import GetProjects2 from './RestApi2';
import GetProjects3 from './RestApi3';
var i=0;
var buttons= [1,2,3,4,5,6,7,8,9,10]
//var items=ItemInfo;
const lessThan1='<1 Month'


class App extends React.Component

{
   
  constructor(props) {
    super(props);
    this.state = {value: 'coconut',items:[],curentPage:1};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.selectP1=this.selectP1.bind(this);
    this.selectP2=this.selectP2.bind(this);
    this.Paginate=this.Paginate.bind(this);
  
  }
  
handleChange(event) {
  if (event.target.value > 0 && event.target.value<11)
 {
  this.setState({curentPage: event.target.value});
 }
 else
 {
  this.setState({value: event.target.value});
 }
  
 
  
}


handleChange1(event) {
  this.setState({currentPage: event.target.value});
  console.log("this is the current Page");
  console.log(this.state.curentPage);
  
}


selectP1(event)
{
  
this.fetchProjects1();
}


selectP2(event)
{
  this.fetchProjects2();
  

}
Paginate(event)
{
  this.fetchProjects3();

}

render()
{
  return  <div className="App">
  <Navbar />
<Searchbar/>
<Filter />
<table>
<tr>
  <td className="outerFilter">
  <select className="filter1" value={this.state.value} onChange={this.handleChange} onClick={this.selectP1}>
  <option value="Select Program Details">Select Program Details</option>
<option value="Beginner">Beginner</option>
<option value="Intermediate">Intermediate</option>
<option value="Advanced">Advanced</option>
<option value="one">{lessThan1}</option>
<option value="two">1 - 3 Months</option>
<option value="three">3+ Months</option>
</select>
  </td>
</tr>
   
<tr>
  <td className="outerFilter">
  <select className="filter1" value={this.state.value} onChange={this.handleChange} onClick={this.selectP2}>

<option value="Industry Skills">Industry Skills</option>
{Skills.map(skill=>
<option value={skill}>{skill}</option>
)}

</select>
  </td>
</tr>
</table>

<div className="p1">
<Courses/>
<table className="itemsTable">
  <tr>
    <td>
    {this.state.items.map(item=>

<Items
school={item.school}
courseName={item.courseName}
bio = {item.bio}
level={item.level}
duration={item.duration}
rating={item.rating}
reviews={item.reviews}
skills= {item.skills}
preReq={item.preReq}
/>

)}

    </td>
  </tr>
  <tr >
  <td className="Pagediv">
  <div className="outerFilter">
  <select className="filter1" value={this.state.curentPage} onChange={this.handleChange} onClick={this.Paginate}>

<option value="Select Page Number">Select Page Number</option>
{buttons.map(btn=>
<option value={btn}>{btn}</option>
)}

</select>
  </div>
  
<h3 onChange={this.handleChange}> Current Page Number : {this.state.curentPage}</h3>
  </td>
  
  </tr>
</table>


</div>
<div className="p2">
<UdacityLogo/>
<div className="firstHalf">
{LastTableData.map(data=>

<LastTable
main={data.main}
sub={data.sub}
i={i++}

/>


)}
</div>
<div className="secondHalf">
{LastTableData1.map(data=>

<LastTable
main={data.main}
sub={data.sub}
i={i++}

/>


)}
</div>
<hr/>
<div className="footer">
<p className="legal"> 2011–2021 Udacity, Inc.

Legal & Privacy
Site Map
</p>
<img className="social" src={img_footer} ></img>
</div>

<div className="outerend">
<p className="end">"Nanodegree" is a registered trademark of Udacity. © 2011–2021 Udacity, Inc.</p>
<p className="end1">Udacity is not an accredited university and we don't confer traditional degrees. Udacity Nanodegree programs represent collaborations with our industry partners who help us develop our content and who hire many of our program graduates.</p>
</div>

</div>

</div>



}

componentDidMount()
  {
    console.log("Projects Display mounted");
    this.fetchProjects();

  }
  fetchProjects()
  {
GetProjects().then((response)=>
{
  this.setState({items:response.data});
})
return [];
  }

  fetchProjects1()
  {
GetProjects1(this.state.value).then((response)=>
{
  this.setState({items:response.data});
})
return [];
  }
  fetchProjects2()
  {
GetProjects2(this.state.value).then((response)=>
{
  this.setState({items:response.data});
})
return [];
  }

  fetchProjects3()
  {
GetProjects3(this.state.curentPage).then((response)=>
{
  this.setState({items:response.data});
})
return [];
  }


}



export default App;
