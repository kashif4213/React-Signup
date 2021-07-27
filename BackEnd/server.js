const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const fs = require("fs");
var cors = require('cors')
const url = require('url');
app.use(cors()) 
let arr=[];





app.get('/Items', (req, res) => {
  fs.readFile("ItemsData.json", (error, fileContents) => {
    if (error) return;
    console.log("Items Send ");
  
    arr = JSON.parse(fileContents);
    
    res.send(arr);
    
  });


});
app.get('/ItemsFilter1/:id', (req, res) => {
  fs.readFile("ItemsData.json", (error, fileContents) => {
    if (error) return;
    console.log("Items Send ");
  
    arr = JSON.parse(fileContents);
    
 
 
  var items1 =[];
  
 arr.map(item=>
  {
    if (String(req.params.id) == (item.level) || String(req.params.id) == "one" || String(req.params.id) =="two" || String(req.params.id) == "three")
    {
      if (String(req.params.id) == "one" || String(req.params.id) =="two" || String(req.params.id) == "three")
      {
var months= item.duration[0];
console.log(months);
if (String(req.params.id) == "one")
{
  if (months == 1)
  {
    console.log("item pushed")
      items1.push(item); 

  }
}
if (String(req.params.id) == "two")
{
  if (months > 1 && months <= 3)
  {
    console.log("item pushed")
      items1.push(item); 

  }
}
if (String(req.params.id) == "three")
{
  if (months > 1)
  {
    console.log("item pushed")
      items1.push(item); 

  }
}

      }
      else
      {
       
      console.log("item pushed")
      items1.push(item); 
      }
    
    }
  })
//this.setState({items:items1})
//console.log(req.query)
// var str=String(req.query.key)
//     var str1= str.slice(1,8)
//     console.log(str);
console.log(req.params.id)
    res.send(items1);
    
  });


});




app.get('/ItemsFilter2/:id', (req, res) => {
  fs.readFile("ItemsData.json", (error, fileContents) => {
    if (error) return;
    console.log("Items Send ");
  
    arr = JSON.parse(fileContents);
    var items1 =[];
 arr.map(item=>
  {
    if (item.skills.includes(String(req.params.id)))
    {
      items1.push(item);
    }
  })
  res.send(items1);
    
  });


});




app.get('/ItemsPaginate/:id', (req, res) => {
  fs.readFile("ItemsData.json", (error, fileContents) => {
    if (error) return;
    console.log("Items Send ");
  
    arr = JSON.parse(fileContents);
    var items3=[];


arr.map(item=>
  {
    if (item.rating>(parseInt(req.params.id)*10)-10 && item.rating<(parseInt(req.params.id)*10))
    items3.push(item);
  })
  
  res.send(items3);
    
  });


});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.use(function(req, res) {
  res.send("ERROR 404 - NOT FOUND");
});
