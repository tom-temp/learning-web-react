const GetFilmsReducer = (prevState={filmsList : [], hasMoreFilms:true}, { type, payload })=> {
    let newState = {...prevState}
    // console.log("@Store 进入Reducer")
    // console.log("@store_getTheaterReducer", payload)
    switch (type) {

    case "getFims":
      // console.log("@store_getTheaterReducer", payload)
      newState.filmsList = payload
      return newState

    case "addFims":
      // console.log("@store_getTheaterReducer", payload)
      newState.filmsList = [...newState.filmsList,  ...payload]
      return newState
    case "noMoreFims":
      // console.log("@store_getTheaterReducer", payload)
      newState.hasMoreFilms = false
      return newState

    default:
      return prevState
    }
}

export default GetFilmsReducer
