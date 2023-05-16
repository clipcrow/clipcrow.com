import { format } from "https://deno.land/std@0.187.0/datetime/mod.ts";

export default function (arg?: string) {
  const now = new Date();
  const title = arg ? arg : format(now, "yyyy年M月d日 H時m分s秒");
  return {
    path: `/blog/${format(now, "yyyy-MM-dd/HH:mm:ss")}.md`,
    content: {
      title,
      date: now,
      content: `# ${title}`,
    },
  };
}
