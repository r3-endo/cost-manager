import "./formModal.css";
import formModal from "./formModal.html";

export default {
  title: "Components/formModal",
  tags: ["autodocs"],
  args: {
    title: "formModal",
  },
  parameters: {
    docs: {
      description: {
        component: "入力フォームのモーダル",
      },
    },
  },
  argTypes: {},
};

export const FormModal = () => {
  return formModal;
};
