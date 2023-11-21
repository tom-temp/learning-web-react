const CityReducer = (prevState={city : "北京"}, { type, payload })=> {
    let newState = {...prevState}
    console.log("@Store 进入CityReducer")
    switch (type) {
    case "changeCity":
      newState.city = payload
      return newState
    default:
      return prevState
    }
}

export default CityReducer
