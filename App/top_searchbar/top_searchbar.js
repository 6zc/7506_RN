import React, { useState } from "react";
import SearchBar from 'react-native-searchbar'

const TopSearchBar = props => {
  // const [curStation, setCurStation] = useState("MidWest")
  const [tempResult, setTempResult] = useState("MidWest")
  const stationList = props.stationList;
  const setCurStation = props.setCurStation;
  const _handleResults = (results) => {
    if(results.length){
      setTempResult(results[0].name);
    }
  }
  const _handleSubmit = ()=>{
    setCurStation(tempResult)
  }
  return (
    <SearchBar
      data={stationList}
      placeholder={'MidWest'}
      heightAdjust={10}
      hideBack={true}
      hideX={true}
      showOnLoad={true}
      focusOnLayout={false}
      handleResults={_handleResults}
      placeholderTextColor={"gray"}
      onSubmitEditing={_handleSubmit}
    />
  )
}

export default TopSearchBar