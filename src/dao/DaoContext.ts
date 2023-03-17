import { createContext } from "react";
import { Dao, Goal, Idea, Person, User } from "./DaoTypes";

const people : Person[] = [
    {walletKey: 'nmcn4', name: 'Tr0n', avatar: 'avatar-tr0n.png', position: 'Lead developer', company: 'Restack.AI', country: 'AU', points: 25},
    {walletKey: 'ik5x4', name: 'Kenji', avatar: 'avatar-kenji.png', position: 'Researcher', company: 'Toyota Motor Corporation', country: 'JP', points: 10},
    {walletKey: '1fdba', name: 'Alex', avatar: 'avatar-alex.png', position: 'C.E.O.', company: 'Restack.AI', country: 'US', points: 25},
    {walletKey: 'k7ty3', name: 'Tori', avatar: 'avatar-tori.png', position: 'Engineer', company: 'Toyota Motor Corporation',country: 'JP', points: 10},
];

const goals : Goal[] = [
    {id: 1, desc: 'Improving productivity'},
    {id: 2, desc: 'Reducing costs'},
    {id: 3, desc: 'Increasing sales'},
    {id: 4, desc: 'Exploring new business opportunities'},
];

const ideas : Idea[] = [
    {id: 1, desc: 'Improve material quality', details: 'This task is about improving material quality in the production processes', author: 'Kenji', points: 25, totalPoints: 100, status: 'FUNDING'},
    {id: 2, desc: 'Change Battery Supplier', details: 'Changing the battery supplier will increase realiability of the production', author: 'Tr0n', points: 5, totalPoints: 100, status: 'FUNDING'},
    {id: 3, desc: 'Implement Training Program', details: 'A training program will increase the quality of work from our workforce', author: 'Alex', points: 0, totalPoints: 100, status: 'FUNDING'},
]

const testUser: User =
    {
        name: 'TestUser',
        tokens: 200,
    };

export const KaizenDaoContext = createContext<Dao>(
    {
        people: people,
        goals: goals,
        ideas: ideas,
        user: testUser,
    }
);
