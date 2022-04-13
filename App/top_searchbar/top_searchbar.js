import React, { useState } from "react";
import SearchBar from 'react-native-searchbar'

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];




const TopSearchBar = props => {
  const [curStation, setCurStation] = useState("MidWest")
  const _handleResults = (results) => {
    setCurStation({ results });
  }
  return (
    <SearchBar
      // ref={(ref) => this.searchBar = ref}
      data={items}
      placeholder={curStation}
      heightAdjust={10}
      hideBack={true}
      hideX={true}
      showOnLoad={true}
      focusOnLayout={false}
      handleResults={_handleResults}
      placeholderTextColor={"gray"}
    />
  )
}

export default TopSearchBar