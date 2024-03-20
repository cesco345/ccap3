import { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import users from "../../assets/data/users.json";
//import UserListItem from '@/components/UserListItem';
import { useNavigation } from "expo-router";
import UserProfile from "./users/[id]";
import UserListItem from "@/components/UserListItem";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search users",
        onChangeText: setSearch,
        onBlur: () => {
          console.warn("Searching");
        },
      },
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </View>
  );
}
