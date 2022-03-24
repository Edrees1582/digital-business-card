import React from 'react';

import Picture from './Picture';
import Main from './Main';
import Socials from './Socials';

export default function App() {
    return (
        <div className='body'>
            <Picture />
            <Main />
            <Socials />
        </div>
    );
}