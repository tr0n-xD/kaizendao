import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenPanel from "../components/TokenPanel";
import { useTranslation } from "react-i18next";
import { KaizenDaoContext } from "../dao/DaoContext";
import { Idea } from "../dao/DaoTypes";

export default function IdeaCreate() {
    const kaizen = useContext(KaizenDaoContext);
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [desc, setDesc] = useState<string>('');
    const [details, setDetails] = useState<string>('');

    const [page, setPage] = useState(0);

    const prevPage = async () => {
        setPage(page - 1);
    }

    const nextPage = async () => {
        setPage((page + 1) % 16);
    }

    function createIdea() {
        let newIdea : Idea = {
            id: kaizen.ideas.length + 1,
            desc: desc,
            details: details,
            author: 'You',
            goal: 1,
            status: 'FUNDING',
            points: 0,
            totalPoints: 100,
        }
        kaizen.ideas = [...kaizen.ideas, newIdea];
        navigate('/daohome', {replace: true})
    }

    return (
        <div className="App">
            <div className='flexColumn gap20'>
                <div className='flexRow'>
                    <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link></div>
                    <div>{t('welcome.name')} - {t('corp.toyota')}</div>
                </div>
                <div>
                    {t('daohome.mydao')}: {t('idea.new')}
                </div>
                {page === 0 &&
                  <div className='flexColumn gap10 bigPanel'>
                    <div>{t('ideacreate.welcome')}</div>
                    <img alt='' height='75px' src='/icon-ideas.png'/>

                    <button className="tinyButton" onClick={nextPage}>{t('common.next').toUpperCase()}</button>
                  </div>
                }
                {page === 1 &&
                  <div className='flexColumn gap15 bigPanel'>
                    <div>{t('ideacreate.description')}</div>
                    <input className='fieldInput' maxLength={50} style={{width: '250px'}} value={desc} onChange={(e) => setDesc(e.target.value)}/>

                    <div className='flexRow' style={{justifyContent: 'flex-start'}}>
                      <button className="tinyButton" onClick={prevPage}>{t('common.prev').toUpperCase()}</button>
                      <button className="tinyButton" onClick={nextPage}>{t('common.next').toUpperCase()}</button>
                    </div>
                  </div>
                }
                {page === 2 &&
                  <div className='flexColumn gap15 bigPanel'>
                    <div className='flexRow gap10'>
                        <img alt='' height='25px' src='/icon-ideas.png'/>
                        <div style={{fontWeight: 'bold'}}>{desc}</div>
                    </div>
                    <div>{t('ideacreate.details')}</div>
                    <textarea className='fieldInput' maxLength={150} style={{height: '100px', width: '350px'}} value={details} onChange={(e) => setDetails(e.target.value)}/>

                    <div className='flexRow' style={{justifyContent: 'flex-start'}}>
                      <button className="tinyButton" onClick={prevPage}>{t('common.prev').toUpperCase()}</button>
                      <button className="tinyButton" onClick={nextPage}>{t('common.next').toUpperCase()}</button>
                    </div>
                  </div>
                }
                {page === 3 &&
                  <div className='flexColumn gap15 bigPanel'>
                    <div className='flexRow gap10'>
                        <img alt='' height='25px' src='/icon-ideas.png'/>
                        <div style={{fontWeight: 'bold'}}>{desc}</div>
                    </div>

                    <div>{t('ideacreate.proposed_by')}</div>
                    <div className='flexRow gap10'>
                      <img alt='' height='25px' width='25px' src={'/avatar-tr0n.png'} style={{borderRadius: '12px'}}/>
                      <div>Tr0n</div>
                    </div>

                    <div>{t('ideacreate.solves_goal')}</div>

                    <div className='ovalPanel bg-blue flexRow gap5'>
                      <img alt='' height='25px' src='/icon-goals.png'/>
                      <select>
                        <option value={1}>Improving productivity</option>
                        <option value={2}>Reducing costs</option>
                        <option value={3}>Increasing sales</option>
                        <option value={4}>Exploring new business opportunities</option>
                      </select>
                    </div>

                    <div className='flexRow' style={{justifyContent: 'flex-start'}}>
                      <button className="tinyButton" onClick={prevPage}>{t('common.prev').toUpperCase()}</button>
                      <button className="tinyButton" onClick={nextPage}>{t('common.next').toUpperCase()}</button>
                    </div>
                  </div>
                }
                {page === 4 &&
                  <div className='flexColumn gap15 bigPanel'>
                    <div className='flexRow gap10'>
                        <img alt='' height='25px' src='/icon-ideas.png'/>
                        <div style={{fontWeight: 'bold'}}>{desc}</div>
                    </div>

                    <div>{t('ideacreate.funding_at')}</div>

                    <div className='flexRow gap10'>
                      <div>{t('ideacreate.tokens')}</div>
                      <div style={{paddingTop: '5px'}}><img alt='' height='24px' src='/token-32.png'/></div>
                      <div>100</div>
                    </div>

                    <button className='ovalButton bg-blue' style={{color: 'black'}} onClick={createIdea}>
                      <div className='flexRow gap5'>
                        <img alt='' height='25px' src='/icon-ideas.png'/>
                        <div>{t('ideacreate.create')}</div>
                      </div>
                    </button>

                    <button className="tinyButton" onClick={prevPage}>{t('common.prev').toUpperCase()}</button>
                  </div>
                }
                <Link to='/ideas'>
                    <button className='whiteButton'>{t('common.back').toUpperCase()}</button>
                </Link>
                <TokenPanel/>
            </div>
        </div>

    );
}
