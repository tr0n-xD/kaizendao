import { Idea } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function IdeaVote(props: {idea: Idea, selectOkay: any}) {
    const {t} = useTranslation();
    const x = props.idea;
    return (
        <div className='flexColumn gap10 bigPanel'>
            <div>{t('ideavote.title')}{x.id}</div>
            <div style={{fontWeight: 'bold'}}>{x.desc}</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <div className='flexRow gap5'>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points} / {x.totalPoints} {t('ideavote.tokens')}</div>
            </div>
            <div>{t('ideavote.amount_to_spend')}</div>
            <input className='fieldInput'></input>
            <button className='tinyButton' onClick={props.selectOkay}>Vote</button>
        </div>
    );
}
