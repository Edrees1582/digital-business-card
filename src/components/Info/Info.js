import React from 'react';

import Name from './Name';
import Spec from './Spec';
import Website from './Website';
import Buttons from './Buttons/Buttons';

export default function About() {
    return (
        <div className='info'>
            <Name />
            <Spec />
            <Website />
            <Buttons />
        </div>
    );
}