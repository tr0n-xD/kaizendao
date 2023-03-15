import { Person } from "../dao/DaoTypes";
import React from "react";
import { useTranslation } from "react-i18next";

export function PersonProfile(props: {person: Person}) {
    const {t} = useTranslation();
    const x = props.person;

    function getCompanyImage(company: string) {
        return company === 'Restack.AI' ? 'restackcoin-100.png' : 'toyota-logo-50.png';
    }

    return (
        <div className='flexColumn justifyStart gap10 bg-yellow' style={{width: '300px', color: 'black', borderRadius: '10px', padding: '15px 10px 15px 10px', fontSize: '15px', textAlign: 'left'}}>
            <div style={{fontWeight: 'bold'}}>{t('person.name')} {x.name}</div>
            <div>{t('person.position')} {x.position}</div>
            <div>{t('person.company')} {x.company}</div>
            <div className='flexRow'>
                <img alt='' height='50px' src={getCompanyImage(x.company)} style={{borderRadius: '25px'}}/>
                <img alt='' height='50px' src={x.avatar} style={{borderRadius: '25px'}}/>
            </div>
        </div>
    );
}
