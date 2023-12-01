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

function addFilmsAction(url){
    return axios({
        url:url,
        method:"get",
        header:{
            "X-Client-Info": {"a":"3000","ch":"1002","v":"5.2.1","e":"16877669628293311265636353","bc":"110100"},
            "X-Host": "mall.film-ticket.cinema.list",
            "X-Requested-With": "XMLHttpRequest",
        }
    }).then(res=>{
        console.log(res, typeof(res.data))

        if (typeof(res.data) !== "object"){
            console.log("@GetFilmsAction 没有电影啦")
            return {type:"noMoreFims"}
        }
        if ( res.data.films.length === 0){
            console.log("@GetFilmsAction 没有电影啦")
            return {type:"noMoreFims"}
        }
        return {type:"addFims", payload:res.data.films}
    })
}

export {getFilmsAction, addFilmsAction}
