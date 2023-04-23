import "./lv2Heading.css";
import lv2Heading from "./lv2Heading.html";

export default {
  title: "Elements/lv2Heading",
  tags: ["autodocs"],
  args: {
    title: "lv2Heading",
  },
  parameters: {
    docs: {
      description: {
        component: "h2レベルのヘッドライン",
      },
    },
  },
  argTypes: {},
};

export const Lv2Heading = () => {
  return lv2Heading;
};
