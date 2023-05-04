import beforeIconBtn from "./beforeIconBtn.html";
import "./beforeIconBtn.css";

export default {
  title: "Elements/beforeIconBtn",
  tags: ["autodocs"],
  args: {
    title: "beforeIconBtn",
  },
  parameters: {
    docs: {
      description: {
        component: "アイコン付きボタン",
      },
    },
  },
  argTypes: {},
};

export const BeforeIconBtn = () => {
  return beforeIconBtn;
};
