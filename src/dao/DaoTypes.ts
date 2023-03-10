export interface Person {
    walletKey: string,
    name: string,
    points: number,
}

export interface Idea {
    id: number,
    desc: string,
    details: string,
    author: string,
    points: number,
    totalPoints: number,
    status: string,
}

export interface Goal {
    id: number,
    desc: string,
}
