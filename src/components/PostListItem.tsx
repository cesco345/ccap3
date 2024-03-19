import { Post } from "@/types";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};

type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

function FooterButton({ text, icon }: FooterButtonProp) {
  return (
    <View style={{ flexDirection: "row" }}>
      <FontAwesome name={icon} size={16} color="red" />
      <Text style={{ marginLeft: 5, color: "blue", fontWeight: "500" }}>
        {text}
      </Text>
    </View>
  );
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        <Link href={`/users/${post.author.id}`} asChild>
          <Pressable style={styles.header}>
            <Image
              source={{ uri: post.author.image }}
              style={styles.userImage}
            />

            <View>
              <Text style={styles.userName}>{post.author.name}</Text>

              <Text>{post.author.position}</Text>
            </View>
          </Pressable>
        </Link>

        <Text style={styles.content}>{post.content}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}

        <View style={styles.footer}>
          <FooterButton text="Likes" icon="thumbs-o-up" />
          <FooterButton text="Comments" icon="comment-o" />
          <FooterButton text="Share" icon="share" />
        </View>
        <View style={{ flexDirection: "row" }}></View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },
  content: {
    margin: 10,
    marginTop: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  position: {
    color: "#000",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 15,
  },

  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: "white",
  },
});
