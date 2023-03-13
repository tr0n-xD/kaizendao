import React from "react";
import { useTranslation } from "react-i18next";

export default function TokenPanel() {
    const {t} = useTranslation();

    return (
        <div className='flexRow gap10' style={{fontSize: '20px'}}>
            <div>{t('common.yourtokens')}</div>
            <div style={{paddingTop: '5px'}}><img alt='' height='24px' src='/token-32.png'/></div>
            <div>25</div>
        </div>
    )
}