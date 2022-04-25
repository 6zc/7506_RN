import React, { useState } from "react";
import { BottomMenu, Item } from "react-native-bottom-menu";

const BottomMenuWrapper = props => {
  const [isActive, setActive] = useState("forecast");
  return (
    <BottomMenu>
      <Item
        size={30}
        name="location"
        text="Now"
        type="EvilIcons"
        isActive={isActive == "home" ? true : false}
        onPress={() => setActive("home")}
      />
      <Item
        size={30}
        type="AntDesign"
        text="Forecast"
        name="cloud"
        isActive={isActive == "forecast" ? true : false}
        onPress={() => setActive("forecast")}
      />
      
    </BottomMenu>
  );
};

export default BottomMenuWrapper;