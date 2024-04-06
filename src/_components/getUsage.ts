
import type { UsageGroup } from "@/Type.ts";

export default function (data: UsageGroup[], step: number) {
  for (const group of data) {
    if (group.step === step) {
      return group;
    }
  }
  throw new Error(`Usageのstepで${step}は不正です`);
}
