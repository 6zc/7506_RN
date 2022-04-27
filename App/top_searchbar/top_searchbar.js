import React, {useState} from 'react';
import SearchBar from 'react-native-searchbar';

const TopSearchBar = props => {
  // const [curStation, setCurStation] = useState("MidWest")
  const curStation = props.curStation;
  const stationList = props.stationList;
  const setCurStation = props.setCurStation;
  const [tempResult, setTempResult] = useState(curStation);
  const _handleResults = results => {
    if (results.length) {
      setTempResult(results[0].place);
    }
  };
  const _handleSubmit = () => {
    setCurStation(tempResult);
  };
  return (
    <SearchBar
      data={stationList}
      placeholder={tempResult}
      heightAdjust={10}
      hideBack={true}
      hideX={true}
      showOnLoad={true}
      focusOnLayout={false}
      handleResults={_handleResults}
      placeholderTextColor={'gray'}
      onSubmitEditing={_handleSubmit}
      autoCorrect={false}
    />
  );
};

export default TopSearchBar;
