import { Person } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function PersonInfo(props: {person: Person, selectOkay: any}) {
    const {t} = useTranslation();
    const x = props.person;
    return (
        <div className='flexColumn justifyStart gap10 bg-yellow' style={{width: '500px', color: 'black', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{fontWeight: 'bold'}}>{t('person.name')} {x.name}</div>
            <div>{t('person.position')} {x.position}</div>
            <div>{t('person.company')} {x.company}</div>
            <img alt='' height='75px' src={x.avatar} style={{borderRadius: '38px'}}/>
            <div>{t('person.wallet')} {x.walletKey}</div>
            <div className='flexRow gap5'>
                <div>{t('person.tokens')}</div>
                <div style={{padding: '2px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points}</div>
            </div>
            <button className='tinyButton' onClick={props.selectOkay}>{t('common.okay')}</button>
        </div>
    );
}
