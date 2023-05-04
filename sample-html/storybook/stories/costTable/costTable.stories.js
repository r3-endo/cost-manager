import costTable from "./costTable.html";
import "./costTable.css";

export default {
  title: "Block/costTable",
  tags: ["autodocs"],
  args: {
    title: "costTable",
  },
  parameters: {
    docs: {
      description: {
        component: "縦書き表のブロック",
      },
    },
  },
  argTypes: {},
};

export const CostTable = () => {
  return costTable;
};
