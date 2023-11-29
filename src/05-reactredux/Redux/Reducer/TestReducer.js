const TestReducer = (prevState={test : 0}, { type, payload })=> {
    let newState = {...prevState}
    // console.log("@Store 进入Reducer")
    switch (type) {

    case "test":
      newState.test = newState.test+1
      return newState

    default:
      return prevState
    }
}

export default TestReducer
