import "./lv1Heading.css";
import lv1Heading from "./lv1Heading.html";

export default {
  title: "Elements/lv1Heading",
  tags: ["autodocs"],
  args: {
    title: "lv1Heading",
  },
  parameters: {
    docs: {
      description: {
        component: "h1レベルのヘッドライン",
      },
    },
  },
  argTypes: {},
};

export const Lv1Heading = () => {
  return lv1Heading;
};
