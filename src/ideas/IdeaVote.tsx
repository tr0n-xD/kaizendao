import { Idea } from "../dao/DaoTypes";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { KaizenDaoContext } from "../dao/DaoContext";
import { useNavigate } from "react-router-dom";

export function IdeaVote(props: {idea: Idea, selectOkay: any}) {
    const kaizen = useContext(KaizenDaoContext);
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [points, setPoints] = useState(props.idea.points);
    const [entry, setEntry] = useState('');
    const [voted, setVoted] = useState(false);
    const idea = props.idea;

    function doVote() {
        let amount = +entry;
        if (amount > 0 && amount <= 100) {
            if (idea.points + amount > 100) {
                amount = 100 - idea.points;
            }
            if (kaizen.user.tokens >= amount) {
                kaizen.user.tokens -= amount;
                console.log(kaizen.user.tokens);
                idea.points += amount;
                if (idea.points >= 100) {
                    idea.status = 'FUNDED';
                }
                setPoints(idea.points);
                setEntry('');
                setVoted(true);
            }
        }
    }

    return (
        <div className='flexColumn gap10 bigPanel'>
            <div>{t('ideavote.title')}{idea.id}</div>
            <div style={{fontWeight: 'bold'}}>{idea.desc}</div>
            <img alt='' height='75px' src='/icon-ideas.png'/>
            <div className='flexRow gap5'>
                <div style={{padding: '3px 5px 0px 5px'}}><img alt='' height='20px' src='/token-32.png'/></div>
                <div>{points} / {idea.totalPoints} {t('ideavote.tokens')}</div>
            </div>
            { voted ?
                <div className='flexColumn gap10'>
                    <div>You voted on the idea!</div>
                    { idea.points >= 100 ?
                        <div className='flexColumn gap5' style={{fontWeight: 'bold'}}>
                            <div>
                                This idea is FUNDED and now goes into a waiting period.
                            </div>
                            <div>
                                Top management will review the idea - if they do not VETO the idea
                                within 72 hours, it becomes ACTIVE and will be implemented :)
                            </div>
                        </div>
                    :
                        <div>The idea now has {idea.points} tokens</div>
                    }
                    <button className='tinyButton' onClick={() => navigate('/daohome', {replace: true})}>{t('common.okay')}</button>
                </div>
                :
                <div className='flexColumn gap10'>
                    <div>{t('ideavote.amount_to_spend')}</div>
                    <input className='fieldInput' onChange={e => setEntry(e.target.value)} value={entry}></input>
                    <div className='flexRow'>
                        <button className='tinyButton' onClick={props.selectOkay}>{t('common.back')}</button>
                        <button className='tinyButton' onClick={doVote}>{t('common.vote')}</button>
                    </div>
                </div>
            }
        </div>
    );
}
