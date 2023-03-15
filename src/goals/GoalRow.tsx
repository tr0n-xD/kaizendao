import { Goal } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function GoalRow(props: {goal: Goal, selectInfo: any}) {
    const {t} = useTranslation();
    const x = props.goal;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '420px', color: 'black', backgroundColor: 'lightblue', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '60px'}}>goal #{x.id}</div>
            <img alt='' height='25px' src='icon-goals.png'/>
            <div style={{width: '275px'}}>{x.desc}</div>
            <button className='tinyButton' onClick={props.selectInfo}>{t('common.info')}</button>
        </div>
    );
}
