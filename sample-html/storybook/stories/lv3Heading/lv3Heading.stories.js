import "./lv3Heading.css";
import lv3Heading from "./lv3Heading.html";

export default {
  title: "Elements/lv3Heading",
  tags: ["autodocs"],
  args: {
    title: "lv3Heading",
  },
  parameters: {
    docs: {
      description: {
        component: "h3レベルのヘッドライン",
      },
    },
  },
  argTypes: {},
};

export const Lv3Heading = () => {
  return lv3Heading;
};
