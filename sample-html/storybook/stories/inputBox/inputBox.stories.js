import inputBox from "./inputBox.html";
import "./inputBox.css";

export default {
  title: "Elements/inputBox",
  tags: ["autodocs"],
  args: {
    title: "inputBox",
  },
  parameters: {
    docs: {
      description: {
        component: "入力欄",
      },
    },
  },
  argTypes: {},
};

export const InputBox = () => {
  return inputBox;
};
