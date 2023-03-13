import { Idea } from "../dao/DaoTypes";
import React from "react";

export function IdeaVote(props: {idea: Idea, selectOkay: any}) {
    const x = props.idea;
    return (
        <div className='flexColumn gap10 bigPanel'>
            <div>vote for idea #{x.id}</div>
            <div style={{fontWeight: 'bold'}}>{x.desc}</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <div className='flexRow gap5'>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points} / {x.totalPoints} tokens</div>
            </div>
            <div>DAO tokens to spend on this idea:</div>
            <input className='fieldInput'></input>
            <button className='tinyButton' onClick={props.selectOkay}>Vote</button>
        </div>
    );
}
