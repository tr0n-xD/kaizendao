import { Person } from "../dao/DaoTypes";
import React from "react";

export function PersonInfo(props: {person: Person, selectOkay: any}) {
    const x = props.person;
    return (
        <div className='flexColumn justifyStart gap10 bg-yellow' style={{width: '500px', color: 'black', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{fontWeight: 'bold'}}>Name: {x.name}</div>
            <div>Position: {x.position}</div>
            <div>Company: {x.company}</div>
            <img alt='' height='75px' src={x.avatar} style={{borderRadius: '38px'}}/>
            <div>Wallet key: {x.walletKey}</div>
            <div className='flexRow gap5'>
                <div>DAO tokens</div>
                <div style={{padding: '2px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points}</div>
            </div>
            <button className='tinyButton' onClick={props.selectOkay}>Okay</button>
        </div>
    );
}
