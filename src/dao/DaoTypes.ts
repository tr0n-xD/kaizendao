export interface Person {
    walletKey: string,
    name: string,
    avatar: string,
    position: string,
    company: string,
    country: string,
    points: number,
}

export interface Idea {
    id: number,
    desc: string,
    details: string,
    author: string,
    goal: number,
    points: number,
    totalPoints: number,
    status: string,
}

export interface Goal {
    id: number,
    desc: string,
}

export interface User {
    name: string,
    tokens: number,
}

export interface Dao {
    people: Person[],
    goals: Goal[],
    ideas: Idea[],
    user: User,
}