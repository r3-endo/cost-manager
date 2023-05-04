import marginBottom from "./marginBottom.html";
import "./marginBottom.css";

export default {
  title: "Helper/marginBottom",
  tags: ["autodocs"],
  args: {
    title: "hp_mb",
  },
  parameters: {
    docs: {
      description: {
        component: "空白のヘルパークラス",
      },
    },
  },
  argTypes: {},
};

export const MarginBottom = () => {
  return marginBottom;
};
