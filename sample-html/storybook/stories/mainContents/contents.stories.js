import contents from "./contents.html";
import "./contents.css";
import "../vertPosts/vertPosts.css";
import "../lv1Heading/lv1Heading.css";
import "../lv2Heading/lv2Heading.css";
import "../lv3Heading/lv3Heading.css";
import "../lv4Heading/lv4Heading.css";
import "../afterIcon/afterIcon.css";
import "../horizTable/horizTable.css";

export default {
  title: "Components/MainContents",
  tags: ["autodocs"],
  args: {
    title: "MainContents",
  },
  parameters: {
    docs: {
      description: {
        component: "メインコンテンツのコンポーネント",
      },
    },
  },
  argTypes: {},
};

export const Contents = () => {
  return contents;
};
