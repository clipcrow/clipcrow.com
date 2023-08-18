export interface Feature {
  id: number;
  title: string;
  body: string;
  badge: number[];
  usage?: number;
}

export interface FeatureGroup {
  section: string;
  text: string;
  image: string;
  details: Feature[];
}

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
