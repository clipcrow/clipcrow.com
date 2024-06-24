import type { FeatureGroup } from "@/Type.ts";

export default function (data: FeatureGroup[], id: number) {
  for (const feature of data) {
    for (const detail of feature.details) {
      if (detail.id === id) {
        return detail;
      }
    }
  }
  throw new Error(`FeatureのIDで${id}は不正です`);
}
