import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { KaizenDaoContext } from "../dao/DaoContext";

export default function TokenPanel() {
    const kaizen = useContext(KaizenDaoContext);
    const {t} = useTranslation();

    const user = kaizen.user;

    return (
        <div className='flexRow gap10' style={{fontSize: '20px'}}>
            <div>{t('common.yourtokens')}</div>
            <div style={{paddingTop: '5px'}}><img alt='' height='24px' src='/token-32.png'/></div>
            <div>{user.tokens}</div>
        </div>
    )
}