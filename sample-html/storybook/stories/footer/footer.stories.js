import footer from "./footer.html";
import "./footer.css";

export default {
  title: "Components/Footer",
  tags: ["autodocs"],
  args: {
    title: "Footer",
  },
  parameters: {
    docs: {
      description: {
        component: "フッターのコンポーネント",
      },
    },
  },
  argTypes: {},
};

export const Footer = () => {
  return footer;
};
