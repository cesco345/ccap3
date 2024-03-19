import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import userJson from "../../../assets/data/user.json";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function UserProfile() {
  const [user, setUser] = useState(userJson);
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Header */}

      {/* About */}

      {/* Experience */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "white",
    marginBottom: 5,
  },
  backImage: {
    width: "100%",
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "white",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },

  // Button
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  section: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});
