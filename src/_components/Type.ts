export interface Usage {
    title: string;
    image: string;
    target: string;
}
  
export interface UsageGroup {
    step: number;
    title: string;
    text: string;
    feature: number[];
    details: Usage[];
}
  
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

export interface Event {
    year: string;
    text: string;
    link?: string;
}
  
export interface EWData extends Lume.Data {
    usages: UsageGroup[];
    features: FeatureGroup[];
    careers: Event[];
    information: Event[];
 }
  