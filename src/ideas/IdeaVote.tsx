import { Idea } from "../Types";

export function IdeaVote(props: {idea: Idea, selectOkay: any}) {
    const p = props.idea;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div>Proposition: id {p.id}#</div>
            <div>{p.desc}</div>
            <div>{p.points} / {p.totalPoints} points</div>
            <div>Would you like to vote on this proposal?</div>
            <div>(enter points here)</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}