import selectBox from "./selectBox.html";
import "./selectBox.css";

export default {
  title: "Elements/selectBox",
  tags: ["autodocs"],
  args: {
    title: "selectBox",
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

export const SelectBox = () => {
  return selectBox;
};
