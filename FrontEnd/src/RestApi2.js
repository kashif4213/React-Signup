var axios = require("axios");

function GetProjects2(params)
{
    return axios({method:"GET",url:"http://localhost:3000/ItemsFilter2/"+params});
}

export default GetProjects2;