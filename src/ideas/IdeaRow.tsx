import { Idea } from "../dao/DaoTypes";

export function IdeaRow(props: {idea: Idea, selectInfo: any, selectVote: any}) {
    const x = props.idea;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '60px'}}>idea #{x.id}</div>
            <div style={{width: '200px'}}>{x.desc}</div>
            <div style={{width: '110px'}}>{x.points} / {x.totalPoints} points</div>
            <button className='tinyButton' onClick={props.selectInfo}>Info</button>
            <button className='tinyButton' onClick={props.selectVote}>Vote</button>
        </div>
    );
}
