const BottomBarReducer = (prevState={showBottomBar : true}, { type, payload })=> {
    let newState = {...prevState}
    // console.log("@Store 进入Reducer")
    switch (type) {

    case "hideBottomBar":
      newState.showBottomBar = false
      return newState
    case "showBottomBar":
      newState.showBottomBar = true
      return newState

    default:
      return prevState
    }
}

export default BottomBarReducer
