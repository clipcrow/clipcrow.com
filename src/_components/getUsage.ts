export interface Usage {
    title: string;
    image: string;
    target: string;
}

export interface UsageGroup {
    id: number;
    title: string;
    text: string;
    feature: number[];
    details: Usage[];
}

export default function (data: UsageGroup[], id: number) {
    for (const group of data) {
        if (group.id === id) {
            return group;
        }
    }
    throw new Error(`UsageのIDで${id}は不正です`);
}
