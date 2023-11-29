import axios from "axios";

function getFilmsAction(url){
    return axios({
        url:url,
        method:"get",
        header:{
            "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
            "X-Host": "mall.film-ticket.cinema.list",
            "X-Requested-With": "XMLHttpRequest",
        }
    }).then(res=>{
        // console.log(res.data)
        return {type:"getFims", payload:res.data.films}
    })
}

export {getFilmsAction}
