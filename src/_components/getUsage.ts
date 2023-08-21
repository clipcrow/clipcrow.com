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

export default function (data: UsageGroup[], step: number) {
  for (const group of data) {
    if (group.step === step) {
      return group;
    }
  }
  throw new Error(`Usageのstepで${step}は不正です`);
}
