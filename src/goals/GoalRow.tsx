import { Goal } from "../Types";

export function GoalRow(props: {goal: Goal, selectInfo: any}) {
    const x = props.goal;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '350px', color: 'black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '60px'}}>goal #{x.id}</div>
            <div style={{width: '200px'}}>{x.desc}</div>
            <button className='tinyButton' onClick={props.selectInfo}>Info</button>
        </div>
    );
}
