import React, { useState } from "react";
import { BottomMenu, Item } from "react-native-bottom-menu";

const BottomMenuWrapper = props => {
  const [isActive, setActive] = useState("home");
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
        isActive={isActive == "messages" ? true : false}
        onPress={() => setActive("messages")}
      />
      
    </BottomMenu>
  );
};

export default BottomMenuWrapper;