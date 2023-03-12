import React from "react";
import { Link } from "react-router-dom";
import TokenPanel from "../components/TokenPanel";
import { useTranslation } from "react-i18next";

export default function IdeaCreate() {
    const {t} = useTranslation();
    // const x: Idea = {author: "", desc: "", details: "", id: 0, points: 0, status: "", totalPoints: 0};
    return (
        <div className="App">
            <div className='flexColumn gap20'>
                <div className='flexRow'>
                    <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link>
                    </div>
                    <div>{t('welcome.name')} - {t('corp.toyota')}</div>
                </div>
                <div>
                    Engineering DAO: New Idea
                </div>
                <div className='flexColumn justifyStart gap10' style={{width: '500px', color: 'black', backgroundColor: 'mediumspringgreen', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'center'}}>
                    <div>Create a new idea</div>
                    <img alt='' height='75px' src='/icon-ideas.png'/>
                    <button className='whiteButton'>Next</button>
                </div>
                <Link to='/ideas'><button className='whiteButton'>BACK</button></Link>
                <TokenPanel />
            </div>
        </div>

    );
}
