var axios = require("axios");

function GetProjects(params)
{
    return axios({method:"GET",url:"http://localhost:3000/Items"});
}

export default GetProjects;