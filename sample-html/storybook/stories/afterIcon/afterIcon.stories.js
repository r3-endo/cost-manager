import afterIcon from "./afterIcon.html";
import "./afterIcon.css";

export default {
  title: "Elements/afterIcon",
  tags: ["autodocs"],
  args: {
    title: "afterIcon",
  },
  parameters: {
    docs: {
      description: {
        component: "リンク付きアイコン",
      },
    },
  },
  argTypes: {},
};

export const AfterIcon = () => {
  return afterIcon;
};
