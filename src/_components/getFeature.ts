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
  
  export default function (data: FeatureGroup, id: number) {
    for (const feature of data.details) {
      if (feature.id === id) {
        return feature;
      }
    }
    throw new Error(`FeatureのIDで${id}は不正です`);
  }
