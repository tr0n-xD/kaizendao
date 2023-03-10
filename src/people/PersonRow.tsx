import { Person } from "../dao/DaoTypes";
import React from "react";

export function PersonRow(props: {person: Person, selectPerson: any}) {
    const p = props.person;
    return (
        <div className='flexRow justifyStart gap5 bg-yellow' style={{width: '250px', color: 'black', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '200px', fontWeight: 'bold', textAlign: 'center'}}>{p.name}</div>
            <div style={{padding: '2px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
            <div style={{width: '100px'}}>{p.points}</div>
            <button className='tinyButton' onClick={props.selectPerson}>Info</button>
        </div>
    );
}
