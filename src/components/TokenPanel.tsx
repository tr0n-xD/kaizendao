import React from "react";

export default function TokenPanel() {
    return (
        <div className='flexRow gap10' style={{fontSize: '20px'}}>
            <div>Your tokens: </div>
            <div style={{paddingTop: '5px'}}><img alt='' height='24px' src='/token-32.png'/></div>
            <div>25</div>
        </div>
    )
}