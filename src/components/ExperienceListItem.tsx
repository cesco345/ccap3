import { Text, Image, View, StyleSheet } from "react-native";
import { Experience } from "@/types";

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
    //backgroundColor: "white",
  },
  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    marginRight: 5,
    backgroundColor: "lightgray",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});
