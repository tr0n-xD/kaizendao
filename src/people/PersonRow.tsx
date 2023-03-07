import { Person } from "../Types";

export function PersonRow(props: {person: Person, selectPerson: any}) {
    const p = props.person;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '250px', color: 'black', backgroundColor: '#ffe50a', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '200px', fontWeight: 'bold', textAlign: 'center'}}>{p.name}</div>
            <div style={{width: '200px'}}>{p.points} points</div>
            <button className='tinyButton' onClick={props.selectPerson}>Info</button>
        </div>
    );
}
