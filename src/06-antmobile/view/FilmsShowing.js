import React, { useRef, useState} from 'react'
import { connect } from 'react-redux'
import { addFilmsAction } from "../Redux/Action/GetFilmsAction";
import { Image, List, Ellipsis, InfiniteScroll } from 'antd-mobile'


function FilmsShowing(props) {

  const count = useRef(1) // 由于修改ref的值不会重新渲染
  const [hasMore, setHasMore] = useState(true)

  const handleCangePage = (filmId)=>{
    // console.log(filmId)
    // window.location.href="#/detail/"+filmId
    props.history.push(`/detail/${filmId}`)
  }

  async function loadMore() {
    setHasMore(false)

    console.log("到底了,此时count为：", count.current)

    if (count.current >3){
      await props.addFilmsAction("");
    } else {
      await props.addFilmsAction("./films.js");
    }

    count.current++

    if (props.hasMoreFilms===false){
      console.log("hasMoreFilms=false")
      setHasMore(false)
    }else{
      console.log("hasMoreFilms=true")
      setHasMore(true)
    }

  }

  return (
    <div>
      {console.log("是否还有列表", hasMore)}
      <List style={{"--border-inner":"0px", backgroundColor:"rgb(0,0,0,0)"}}>
      {props.filmsList.map(item => (

          <List.Item style={{paddingBottom:"7px", paddingTop:"7px", borderTop:"1px soild black"}}
            key={count.current.toString()+item.filmId}
            onClick={()=>handleCangePage(item.filmId)}
            prefix={ <Image src={item.poster} height={93} width={62} fit='cover'/> }
            arrow=""
            description={<div>
              {item.grade
              ?
              <div>观众评分: <span style={{color:"orange", fontSize:"var(--adm-font-size-6)", paddingTop:"10px"}}>{item.grade}</span>
              </div>
              :
              <div style={{visibility:"hidden"}}>观众评分:</div>
              }

              <div>主演: <Ellipsis  style={{display:"contents"}} direction='end' content={item.actors.map((item)=>item.name).join(", ")}/>
              </div>

              <div>{item.nation} | {item.runtime}分钟</div>
            </div>}
          >
            <div>
            {item.name}  {item.item.name!=="2D"
            ?
            <span style={{backgroundColor:"orange", fontSize:"var(--adm-font-size-5)", width:"24px", display: 'inline-block', borderRadius:"5px", color:"white" ,textAlign:"center"}}>   {item.item.name} </span>
            :
            <span style={{backgroundColor:"gray", fontSize:"var(--adm-font-size-5)", width:"24px", display: 'inline-block', borderRadius:"5px", color:"white" ,textAlign:"center"}}>   {item.item.name} </span>
            }
            </div>
          </List.Item>
        ))}
    </List>
    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    <div style={{height:"50px"}}></div>
    </div>
  )
}
export default connect(
    (state)=>{return{
      filmsList:state.GetFilmsReducer.filmsList,
      hasMoreFilms:state.GetFilmsReducer.hasMoreFilms,
    }},
    {addFilmsAction})(FilmsShowing)
