const GetFilmsReducer = (prevState={filmsList : []}, { type, payload })=> {
    let newState = {...prevState}
    // console.log("@Store 进入Reducer")
    // console.log("@store_getTheaterReducer", payload)
    switch (type) {

    case "getFims":
      // console.log("@store_getTheaterReducer", payload)
      newState.filmsList = payload
      return newState

    default:
      return prevState
    }
}

export default GetFilmsReducer
