export interface Person {
    walletKey: string,
    name: string,
    points: number,
}

export interface Idea {
    id: number,
    desc: string,
    points: number,
    totalPoints: number,
}

export interface Goal {
    id: number,
    desc: string,
}
