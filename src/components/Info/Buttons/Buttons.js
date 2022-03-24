import React from 'react';

import Email from './Email';
import LinkedIn from './LinkedIn';

export default function Buttons() {
    return (
        <div className='buttons'>
            <Email />
            <LinkedIn />
        </div>
    );
}