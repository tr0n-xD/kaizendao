import { Idea } from "../Types";

export function IdeaInfo(props: {idea: Idea, selectOkay: any}) {
    const x = props.idea;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div>Proposition: id {x.id}#</div>
            <div>{x.desc}</div>
            <div>{x.points} / {x.totalPoints} points</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
