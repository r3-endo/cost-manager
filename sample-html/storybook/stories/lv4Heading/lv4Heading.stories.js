import "./lv4Heading.css";
import lv4Heading from "./lv4Heading.html";

export default {
  title: "Elements/lv4Heading",
  tags: ["autodocs"],
  args: {
    title: "lv4Heading",
  },
  parameters: {
    docs: {
      description: {
        component: "h4レベルのヘッドライン",
      },
    },
  },
  argTypes: {},
};

export const Lv4Heading = () => {
  return lv4Heading;
};
