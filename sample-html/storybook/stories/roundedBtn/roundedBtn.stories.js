import roundedBtn from "./roundedBtn.html";
import "./roundedBtn.css";

export default {
  title: "Elements/roundedBtn",
  tags: ["autodocs"],
  args: {
    title: "roundedBtn",
  },
  parameters: {
    docs: {
      description: {
        component: "角丸ボタン",
      },
    },
  },
  argTypes: {},
};

export const RoundedBtn = () => {
  return roundedBtn;
};
