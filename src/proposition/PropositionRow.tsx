import { Proposition } from "../Types";

export function PropositionRow(props: {proposition: Proposition, selectInfo: any, selectVote: any}) {
    const p = props.proposition;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '50px'}}>id {p.id}#</div>
            <div style={{width: '200px'}}>{p.desc}</div>
            <div style={{width: '110px'}}>{p.points} / {p.totalPoints} points</div>
            <button className='tinyButton' onClick={props.selectInfo}>Info</button>
            <button className='tinyButton' onClick={props.selectVote}>Vote</button>
        </div>
    );
}
