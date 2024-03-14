import { Post } from "@/types";
import { Text } from "react-native";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return <Text>{post.content}</Text>;
}
