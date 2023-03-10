import { Goal } from "../dao/DaoTypes";

export function GoalInfo(props: {goal: Goal, selectOkay: any}) {
    const x = props.goal;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div>Goal: #{x.id}</div>
            <div>{x.desc}</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
