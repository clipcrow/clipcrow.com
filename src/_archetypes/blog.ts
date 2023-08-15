import { format } from "std/datetime/mod.ts";

export default function (arg?: string) {
  const now = new Date();
  const title = arg ? arg : format(now, "yyyy年M月d日 H時m分s秒");
  const category = "分類なし";
  return {
    path: `/blog/${format(now, "yyyy-MM-dd/HH:mm:ss")}.md`,
    content: {
      title,
      category,
      date: now,
      content: `# ${title}`,
    },
  };
}
