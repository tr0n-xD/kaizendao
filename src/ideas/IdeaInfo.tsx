import { Idea } from "../dao/DaoTypes";

export function IdeaInfo(props: {idea: Idea, selectOkay: any}) {
    const x = props.idea;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'center'}}>
            <div>idea #{x.id}</div>
            <div style={{fontWeight: 'bold'}}>{x.desc}</div>
            <div>A fuller and more detailed description of the idea goes here. The reader can understand the idea and how to implement it.</div>
            <div style={{fontStyle: 'italic'}}>proposed by: {x.author}</div>
            <div style={{fontStyle: 'italic'}}>accomplishes goal: #1 (Reduce costs)</div>
            <div>{x.points} / {x.totalPoints} tokens</div>
            <div style={{fontWeight: 'bold'}}>STATUS: {x.status}</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
