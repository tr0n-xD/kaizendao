import { Idea } from "../dao/DaoTypes";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { KaizenDaoContext } from "../dao/DaoContext";

export function IdeaInfo(props: {idea: Idea, selectOkay: any}) {
    const kaizen = useContext(KaizenDaoContext);
    const {t} = useTranslation();
    const x = props.idea;
    return (
        <div className='flexColumn gap10 bigPanel'>
            <div>{t('idea.idea')}{x.id}</div>
            <div style={{fontWeight: 'bold'}}>{x.desc}</div>
            <div>{t('idea.details')}</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <div style={{fontStyle: 'italic'}}>{t('idea.proposed_by')} {x.author}</div>
            <div style={{fontStyle: 'italic'}}>{t('idea.solves_goal')} #{x.goal} ({kaizen.goals[x.goal-1].desc})</div>
            <div className='flexRow gap5'>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{x.points} / {x.totalPoints} tokens</div>
            </div>
            <div style={{fontWeight: 'bold'}}>
                {t('idea.status')} {x.status}
            {x.status === 'FUNDED' &&
                    ' - waiting period 72 hours'
            }
            </div>
            <button className='tinyButton' onClick={props.selectOkay}>{t('common.okay')}</button>
        </div>
    );
}
