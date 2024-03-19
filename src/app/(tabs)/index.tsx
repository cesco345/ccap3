import { FlatList, StyleSheet } from "react-native";
import PostListItem from "@/components/PostListItem";
import { Text, View } from "@/components/Themed";
import posts from "../../../assets/data/posts.json";

const firstPost = posts[2];

export default function HomeFeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
