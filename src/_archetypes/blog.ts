import { format } from "std/datetime/mod.ts";

export default function (arg?: string) {
  const now = new Date();
  const title = arg ? arg : format(now, "yyyy年M月d日 H時m分s秒");
  const category = "おしらせ";
  return {
    path: `/blog/${format(now, "yyyy-MM-dd/HH:mm:ss")}.md`,
    content: {
      title,
      category,
      color: "Y",
      image: "LOGO",
      date: now,
      lead: "",
      content: "# TODO: \r以下、記事をMarkdownで書く",
    },
  };
}
