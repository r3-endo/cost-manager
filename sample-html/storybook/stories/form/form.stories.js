import "./form.css";
import form from "./form.html";

export default {
  title: "Block/form",
  tags: ["autodocs"],
  args: {
    title: "form",
  },
  parameters: {
    docs: {
      description: {
        component: "入力フォーム",
      },
    },
  },
  argTypes: {},
};

export const Form = () => {
  return form;
};
