import "./calendar.css";
import calendar from "./calendar.html";

export default {
  title: "Block/calendar",
  tags: ["autodocs"],
  args: {
    title: "calendar",
  },
  parameters: {
    docs: {
      description: {
        component: "カレンダーブロック",
      },
    },
  },
  argTypes: {},
};

export const Calendar = () => {
  return calendar;
};
