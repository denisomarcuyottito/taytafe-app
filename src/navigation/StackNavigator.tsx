import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Tabs } from "./TabNavigator";
import { RestaurantScreen, OrderDeliveryScreen } from "../screens";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"App"}>
        <Stack.Screen name="App" component={Tabs} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
      </Stack.Navigator>
    </>
  );
};

export { StackNavigator };
