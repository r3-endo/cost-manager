import navigation from "./navigation.html";
import "./navigation.css";

export default {
  title: "Block/navigation",
  tags: ["autodocs"],
  args: {
    title: "navigation",
  },
  parameters: {
    docs: {
      description: {
        component: "ナビゲーションのコンポーネント",
      },
    },
  },
  argTypes: {},
};

export const Navigation = () => {
  return navigation;
};
