var axios = require("axios");

function GetProjects3(params)
{
    return axios({method:"GET",url:"http://localhost:3000/ItemsPaginate/"+params});
}

export default GetProjects3;