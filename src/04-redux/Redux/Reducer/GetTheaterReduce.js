const GetTheaterReducer = (prevState={theatersList : []}, { type, payload })=> {
    let newState = {...prevState}
    // console.log("@Store 进入Reducer")
    // console.log("@store_getTheaterReducer", payload)
    switch (type) {

    case "getTheater":
      newState.theatersList = payload
      return newState

    default:
      return prevState
    }
}

export default GetTheaterReducer
