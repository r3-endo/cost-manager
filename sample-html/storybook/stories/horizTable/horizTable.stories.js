import horizTable from "./horizTable.html";
import "./horizTable.css";

export default {
  title: "Block/horizTable",
  tags: ["autodocs"],
  args: {
    title: "horizTable",
  },
  parameters: {
    docs: {
      description: {
        component: "横書き表のブロック",
      },
    },
  },
  argTypes: {},
};

export const HorizTable = () => {
  return horizTable;
};
