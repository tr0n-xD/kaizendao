import { Idea } from "../dao/DaoTypes";
import React from "react";

export function IdeaInfo(props: {idea: Idea, selectOkay: any}) {
    const x = props.idea;
    return (
        <div className='flexColumn gap10 bigPanel'>
            <div>idea #{x.id}</div>
            <div style={{fontWeight: 'bold'}}>{x.desc}</div>
            <div>A fuller and more detailed description of the idea goes here. The reader can understand the idea and how to implement it.</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <div style={{fontStyle: 'italic'}}>proposed by: {x.author}</div>
            <div style={{fontStyle: 'italic'}}>solves goal: #1 (Reduce costs)</div>
            <div className='flexRow gap5'>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points} / {x.totalPoints} tokens</div>
            </div>
            <div style={{fontWeight: 'bold'}}>STATUS: {x.status}</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
