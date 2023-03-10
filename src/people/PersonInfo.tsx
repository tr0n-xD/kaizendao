import { Person } from "../dao/DaoTypes";

export function PersonInfo(props: {person: Person, selectOkay: any}) {
    const x = props.person;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: '#fbf82e', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div>Wallet key: {x.walletKey}</div>
            <div>Name: {x.name}</div>
            <div>Points: {x.points}</div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
