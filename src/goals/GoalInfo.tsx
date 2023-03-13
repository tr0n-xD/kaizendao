import { Goal } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function GoalInfo(props: {goal: Goal, selectOkay: any}) {
    const {t} = useTranslation();
    const x = props.goal;
    return (
        <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div>{t('goal.goal')} #{x.id}</div>
            <div>{x.desc}</div>
            <img alt='' height='75px' src='/icon-goals.png'/>
            <button className='tinyButton' onClick={props.selectOkay}>{t('common.okay')}</button>
        </div>
    );
}
