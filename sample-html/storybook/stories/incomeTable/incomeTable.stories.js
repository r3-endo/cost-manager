import incomeTable from "./incomeTable.html";
import "./incomeTable.css";

export default {
  title: "Block/incomeTable",
  tags: ["autodocs"],
  args: {
    title: "incomeTable",
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

export const IncomeTable = () => {
  return incomeTable;
};
