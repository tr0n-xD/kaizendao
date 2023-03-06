
export function PropositionRow(props: {p: any}) {
    return (
        <div className='flexRow justifyStart gap5' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '50px'}}>id {props.p.id}#</div>
            <div style={{width: '200px'}}>{props.p.desc}</div>
            <div style={{width: '110px'}}>{props.p.points} / {props.p.totalPoints} points</div>
            <button className='tinyButton'>Info</button>
            <button className='tinyButton'>Vote</button>
        </div>
    );
}
