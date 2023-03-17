import { Idea } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function IdeaRow(props: {idea: Idea, selectInfo: any, selectVote: any}) {
    const {t} = useTranslation();
    const x = props.idea;
    return (
        <div className='flexRow justifyStart gap5' style={{width: '650px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '5px 10px 5px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{width: '60px'}}>idea #{x.id}</div>
            <div style={{width: '200px'}}>{x.desc}</div>
            <div className='flexRow gap5' style={{width: '110px'}}>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points} / {x.totalPoints}</div>
            </div>
            {x.status === 'FUNDING' &&
              <div style={{width: '120px', fontWeight: 'bold', textAlign: 'center'}}>{(x.points / x.totalPoints * 100).toFixed(1)}%</div>
            }
            {x.status !== 'FUNDING' &&
              <div style={{width: '120px', fontWeight: 'bold', textAlign: 'center'}}>{x.status}</div>
            }
            <button className='tinyButton' onClick={props.selectInfo}>{t('common.info')}</button>
            {x.status === 'FUNDING' && <button className='tinyButton' onClick={props.selectVote}>{t('common.vote')}</button>}
        </div>
    );
}
