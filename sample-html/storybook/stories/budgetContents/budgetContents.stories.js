import budgetContents from "./budgetContents.html";
import "./budgetContents.css";

export default {
  title: "Components/budgetbudgetContents",
  tags: ["autodocs"],
  args: {
    title: "budgetbudgetContents",
  },
  parameters: {
    docs: {
      description: {
        component: "家計コンテンツのコンポーネント",
      },
    },
  },
  argTypes: {},
};

export const BudgetContents = () => {
  return budgetContents;
};
