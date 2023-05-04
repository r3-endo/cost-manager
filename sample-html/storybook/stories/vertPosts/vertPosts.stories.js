import "./vertPosts.css";
import vertPosts from "./vertPosts.html";

export default {
  title: "Block/vertPosts",
  tags: ["autodocs"],
  args: {
    title: "vertPosts",
  },
  parameters: {
    docs: {
      description: {
        component: "投稿ブロック",
      },
    },
  },
  argTypes: {},
};

export const VertPosts = () => {
  return vertPosts;
};
