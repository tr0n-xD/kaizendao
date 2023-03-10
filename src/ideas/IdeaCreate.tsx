import React from "react";

export default function IdeaCreate() {
    // const x: Idea = {author: "", desc: "", details: "", id: 0, points: 0, status: "", totalPoints: 0};
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'center'}}>
            <div>Create an idea</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <button className='tinyButton'>Okay</button>
        </div>
    );
}
