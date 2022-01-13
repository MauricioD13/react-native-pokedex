import React from "react";
// import { View, Text } from "react-native";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PokedexStack from "../navigation/PokedexNavigation";
import AccountStack from "../navigation/AccountNavigation";
import FavoritesStack from "../navigation/FavoritesNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          title: "Cuenta",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexStack}
        options={{
          title: "Pokedex",
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          title: "Favoritos",
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
