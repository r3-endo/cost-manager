import header from "./header.html";
import "./header.css";

export default {
  title: "Components/Header",
  tags: ["autodocs"],
  args: {
    title: "Header",
  },
  parameters: {
    docs: {
      description: {
        component: "ヘッダーのコンポーネント",
      },
    },
  },
  argTypes: {},
};

export const Header = () => {
  return header;
};
